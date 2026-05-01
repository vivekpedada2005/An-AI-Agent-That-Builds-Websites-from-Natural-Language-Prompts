import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type SiteBlueprint } from '../engine/types';

export type AppState = 'landing' | 'generator';
export type DeviceView = 'desktop' | 'tablet' | 'mobile';
export type ActiveTab = 'preview' | 'code';

export interface ForgeProject {
  id: string;
  name: string;
  prompt: string;
  blueprint: SiteBlueprint;
  createdAt: number;
}

interface ForgeStore {
  appState: AppState;
  setAppState: (s: AppState) => void;

  projects: ForgeProject[];
  activeProjectId: string | null;
  createProject: (prompt: string, blueprint: SiteBlueprint) => string;
  setActiveProject: (id: string) => void;
  deleteProject: (id: string) => void;
  duplicateProject: (id: string) => void;
  updateProjectBlueprint: (id: string, blueprint: SiteBlueprint) => void;
  clearAllProjects: () => void;

  isGenerating: boolean;
  setIsGenerating: (v: boolean) => void;

  themeMode: 'dark' | 'light';
  setThemeMode: (v: 'dark' | 'light') => void;

  deviceView: DeviceView;
  setDeviceView: (v: DeviceView) => void;

  activeTab: ActiveTab;
  setActiveTab: (v: ActiveTab) => void;
}

export const useForgeStore = create<ForgeStore>()(
  persist(
    (set, get) => ({
      appState: 'landing',
      setAppState: (s) => set({ appState: s }),

      projects: [],
      activeProjectId: null,

      createProject: (prompt, blueprint) => {
        const id = crypto.randomUUID().split('-')[0];
        const proj: ForgeProject = {
          id, prompt, blueprint, createdAt: Date.now(),
          name: blueprint.copy.brandName,
        };
        set((st) => ({ projects: [proj, ...st.projects], activeProjectId: id }));
        return id;
      },

      setActiveProject: (id) => set({ activeProjectId: id }),

      deleteProject: (id) => set((st) => {
        const remaining = st.projects.filter(p => p.id !== id);
        return {
          projects: remaining,
          activeProjectId: st.activeProjectId === id ? (remaining[0]?.id ?? null) : st.activeProjectId,
        };
      }),

      duplicateProject: (id) => {
        const proj = get().projects.find(p => p.id === id);
        if (!proj) return;
        const newId = crypto.randomUUID().split('-')[0];
        set((st) => ({
          projects: [{ ...proj, id: newId, name: proj.name + ' (Copy)', createdAt: Date.now() }, ...st.projects],
          activeProjectId: newId,
        }));
      },

      updateProjectBlueprint: (id, blueprint) => set((st) => ({
        projects: st.projects.map(p => p.id === id ? { ...p, blueprint, name: blueprint.copy.brandName } : p),
      })),

      clearAllProjects: () => set({ projects: [], activeProjectId: null, appState: 'landing' }),

      isGenerating: false,
      setIsGenerating: (v) => set({ isGenerating: v }),

      themeMode: 'dark',
      setThemeMode: (v) => set({ themeMode: v }),

      deviceView: 'desktop',
      setDeviceView: (v) => set({ deviceView: v }),

      activeTab: 'preview',
      setActiveTab: (v) => set({ activeTab: v }),
    }),
    {
      name: 'promptforge-v4-store',
      partialize: (s) => ({
        projects: s.projects,
        activeProjectId: s.activeProjectId,
        themeMode: s.themeMode,
      }),
    }
  )
);
