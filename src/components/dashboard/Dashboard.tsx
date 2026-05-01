import { useState } from 'react';
import { ArrowLeft, Monitor, Tablet, Smartphone, Download, Copy, Globe, Check, Code, Eye, Trash2, RefreshCw } from 'lucide-react';
import { useForgeStore } from '../../store/useForgeStore';
import { SiteRenderer } from '../../renderer/SiteRenderer';
import { exportProject } from '../../utils/export';
import { simulatePublish } from '../../utils/publish';
import { generateBlueprint } from '../../engine/blueprintGenerator';

export const Dashboard = () => {
  const {
    projects, activeProjectId, setAppState, setActiveProject,
    deviceView, setDeviceView, activeTab, setActiveTab,
    themeMode, setThemeMode, updateProjectBlueprint, deleteProject,
    isGenerating, setIsGenerating
  } = useForgeStore();

  const [copied, setCopied] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [editPrompt, setEditPrompt] = useState('');
  const [sidebarTab, setSidebarTab] = useState<'current' | 'history'>('current');

  // Always pick active project; fall back to most recent
  const project = projects.find(p => p.id === activeProjectId) ?? projects[0];
  const bp = project?.blueprint;

  const getPreviewWidth = () => {
    if (deviceView === 'mobile') return 390;
    if (deviceView === 'tablet') return 768;
    return undefined;
  };

  const handleRegenerate = async () => {
    if (!project || isGenerating) return;

    if (!import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY === 'your_gemini_api_key_here') {
      alert("WARNING: You haven't added a Google Gemini API Key to your .env file! The AI cannot generate relevant copy, so it will fall back to the generic 'Build Something Amazing' text. Please add your API key to .env for AI generation.");
    }

    setIsGenerating(true);
    try {
      const seed = Math.floor(Math.random() * 999);
      const src = editPrompt.trim() || project.prompt;
      const newBp = await generateBlueprint(src, themeMode, seed);
      updateProjectBlueprint(project.id, newBp);
    } catch (e: any) {
      console.error(e);
      alert(`Generation Failed: ${e.message || 'Unknown error'}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify({ industry: bp?.industry, layout: bp?.layout, pages: bp?.pages.map(p => p.path) }, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExport = () => { if (bp) exportProject(bp); };

  const handlePublish = async () => {
    setPublishing(true);
    const url = await simulatePublish();
    setPublishing(false);
    alert(`🚀 Published!\n\nLive URL: ${url}\n\n(Demo — in production this would deploy to a real host)`);
  };

  // LOADING STATE
  if (isGenerating) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', flexDirection: 'column', gap: 24 }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'spin 2s linear infinite', fontSize: 36 }}>✨</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#111827', fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Building Your Website</div>
          <div style={{ color: '#6b7280', fontSize: 15 }}>Analyzing prompt • Selecting layout • Generating content...</div>
        </div>
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // NO PROJECT YET
  if (!bp) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', flexDirection: 'column', gap: 20 }}>
        <div style={{ fontSize: 48 }}>🎨</div>
        <div style={{ color: '#111827', fontSize: 20, fontWeight: 700 }}>No website generated yet</div>
        <button onClick={() => setAppState('landing')} style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', color: '#fff', border: 'none', borderRadius: 12, padding: '12px 28px', fontWeight: 700, cursor: 'pointer', fontSize: 15 }}>← Go Generate One</button>
      </div>
    );
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: '#ffffff', color: '#111827', overflow: 'hidden', fontFamily: 'system-ui, sans-serif' }}>
      {/* ── TOOLBAR ──────────────────────────────────────────────────────────── */}
      <div style={{ height: 58, borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', flexShrink: 0, gap: 12 }}>
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <button onClick={() => setAppState('landing')} style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', color: '#374151', cursor: 'pointer', padding: '6px 12px', borderRadius: 8, fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
            <ArrowLeft size={14} /> New
          </button>
          <div style={{ height: 20, width: 1, background: 'rgba(255,255,255,0.08)' }} />
          {/* Preview/Code tabs */}
          <div style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: 8, display: 'flex', overflow: 'hidden' }}>
            {(['preview', 'code'] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{ background: activeTab === tab ? '#4f46e5' : 'none', border: 'none', color: activeTab === tab ? '#fff' : '#6b7280', cursor: 'pointer', padding: '6px 16px', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6, textTransform: 'capitalize' }}>
                {tab === 'preview' ? <Eye size={13} /> : <Code size={13} />} {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Center — Site info */}
        <div style={{ textAlign: 'center', flexShrink: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: '#111827' }}>{bp.copy.brandName}</div>
          <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 1 }}>
            {bp.industry.replace('_', ' ')} • {bp.layout} • {bp.pages.length} pages
          </div>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          {activeTab === 'preview' && (
            <div style={{ display: 'flex', gap: 4, marginRight: 4 }}>
              {([['desktop', Monitor], ['tablet', Tablet], ['mobile', Smartphone]] as const).map(([d, Icon]) => (
                <button key={d} onClick={() => setDeviceView(d)} style={{ background: deviceView === d ? '#ede9fe' : 'none', border: deviceView === d ? '1px solid #a5b4fc' : '1px solid transparent', color: deviceView === d ? '#4f46e5' : '#9ca3af', cursor: 'pointer', padding: '6px 8px', borderRadius: 8 }}>
                  <Icon size={15} />
                </button>
              ))}
            </div>
          )}
          <button onClick={handleCopy} style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', color: '#374151', cursor: 'pointer', padding: '6px 12px', borderRadius: 8, fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
            {copied ? <Check size={13} color="#22c55e" /> : <Copy size={13} />} {copied ? 'Copied' : 'Copy'}
          </button>
          <button onClick={handleExport} style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', color: '#374151', cursor: 'pointer', padding: '6px 12px', borderRadius: 8, fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Download size={13} /> Export
          </button>
          <button onClick={handlePublish} disabled={publishing} style={{ background: 'linear-gradient(135deg, #4f46e5, #0ea5e9)', border: 'none', color: '#fff', cursor: 'pointer', padding: '6px 18px', borderRadius: 8, fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Globe size={13} /> {publishing ? 'Publishing...' : 'Publish'}
          </button>
        </div>
      </div>

      {/* ── BODY ─────────────────────────────────────────────────────────────── */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* ── SIDEBAR ──────────────────────────────────────────────────────── */}
        <div style={{ width: 272, borderRight: '1px solid #e2e8f0', background: '#f8fafc', padding: 16, overflowY: 'auto', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Sidebar tabs */}
          <div style={{ display: 'flex', background: '#e2e8f0', borderRadius: 8, padding: 3 }}>
            {(['current', 'history'] as const).map(t => (
              <button key={t} onClick={() => setSidebarTab(t)} style={{ flex: 1, background: sidebarTab === t ? '#fff' : 'none', border: 'none', color: sidebarTab === t ? '#4f46e5' : '#6b7280', borderRadius: 6, padding: '6px 8px', fontSize: 12, fontWeight: 700, cursor: 'pointer', textTransform: 'capitalize' }}>{t}</button>
            ))}
          </div>

          {sidebarTab === 'current' ? (
            <>
              {/* Prompt editor */}
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Prompt</div>
                <textarea
                  defaultValue={project.prompt}
                  onChange={e => setEditPrompt(e.target.value)}
                  rows={3}
                  style={{ width: '100%', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, color: '#111827', fontSize: 13, padding: '10px 12px', resize: 'none', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }}
                />
                <button onClick={handleRegenerate} disabled={isGenerating} style={{ width: '100%', marginTop: 8, background: isGenerating ? '#e5e7eb' : '#ede9fe', border: `1px solid ${isGenerating ? '#d1d5db' : '#c4b5fd'}`, color: isGenerating ? '#9ca3af' : '#4f46e5', borderRadius: 8, padding: '9px', fontSize: 13, fontWeight: 700, cursor: isGenerating ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <RefreshCw size={13} style={{ animation: isGenerating ? 'spin 1s linear infinite' : 'none' }} /> {isGenerating ? 'Generating...' : 'Regenerate'}
                </button>
              </div>

              {/* Theme */}
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Theme Mode</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  {(['dark', 'light'] as const).map(t => (
                    <button key={t} onClick={() => setThemeMode(t)} style={{ flex: 1, padding: '8px', background: themeMode === t ? '#4f46e5' : '#fff', border: `1px solid ${themeMode === t ? '#4f46e5' : '#e2e8f0'}`, color: themeMode === t ? '#fff' : '#6b7280', borderRadius: 8, cursor: 'pointer', fontWeight: 700, fontSize: 12, textTransform: 'capitalize' }}>{t}</button>
                  ))}
                </div>
              </div>

              {/* Site metadata */}
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 14 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Site Details</div>
                {[
                  ['Industry', bp.industry.replace('_', ' ')],
                  ['Layout', bp.layout],
                  ['Pages', String(bp.pages.length)],
                  ['Primary', bp.colors.primary],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 12 }}>
                    <span style={{ color: '#9ca3af' }}>{k}</span>
                    <span style={{ color: '#4f46e5', fontWeight: 700, fontFamily: k === 'Primary' ? 'monospace' : 'inherit' }}>{v}</span>
                  </div>
                ))}
              </div>

              {/* Pages list */}
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Pages</div>
                {bp.pages.map(pg => (
                  <div key={pg.path} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', fontSize: 13, color: '#374151', borderRadius: 6, marginBottom: 3, background: '#f8fafc', border: '1px solid #e2e8f0', fontWeight: 500 }}>
                    <span>{pg.title}</span>
                    <span style={{ fontSize: 11, color: '#9ca3af' }}>{pg.sections.length} sections</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* History tab */
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Generated Sites ({projects.length})</div>
              {projects.length === 0 && <div style={{ color: '#9ca3af', fontSize: 13, textAlign: 'center', padding: 24 }}>No history yet</div>}
              {projects.map(p => (
                <div key={p.id} onClick={() => setActiveProject(p.id)} style={{ padding: '10px 12px', background: p.id === activeProjectId ? '#ede9fe' : '#fff', border: `1px solid ${p.id === activeProjectId ? '#a5b4fc' : '#e2e8f0'}`, borderRadius: 10, marginBottom: 8, cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ fontWeight: 700, color: p.id === activeProjectId ? '#4f46e5' : '#111827', fontSize: 13, marginBottom: 4 }}>{p.name}</div>
                    <button onClick={e => { e.stopPropagation(); deleteProject(p.id); }} style={{ background: 'none', border: 'none', color: '#444', cursor: 'pointer', padding: 2 }}>
                      <Trash2 size={12} />
                    </button>
                  </div>
                  <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 4 }}>{p.blueprint.industry.replace('_',' ')} • {p.blueprint.layout}</div>
                  <div style={{ fontSize: 11, color: '#9ca3af', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.prompt}</div>
                </div>
              ))}
              {projects.length > 0 && (
                <button onClick={() => { if (window.confirm('Clear all history?')) useForgeStore.getState().clearAllProjects(); }} style={{ width: '100%', marginTop: 8, background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.2)', color: '#f87171', borderRadius: 8, padding: '8px', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                  Clear All History
                </button>
              )}
            </div>
          )}
        </div>

        {/* ── PREVIEW / CODE AREA ────────────────────────────────────────── */}
        <div style={{ flex: 1, background: '#f1f5f9', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {activeTab === 'preview' ? (
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', overflow: 'auto', padding: deviceView === 'desktop' ? '0' : '24px' }}>
              <div style={{
                width: getPreviewWidth() || '100%',
                maxWidth: '100%',
                height: deviceView === 'desktop' ? '100%' : undefined,
                background: bp.colors.bg,
                borderRadius: deviceView === 'desktop' ? 0 : 12,
                border: deviceView === 'desktop' ? 'none' : '1px solid rgba(255,255,255,0.08)',
                overflow: deviceView === 'desktop' ? 'auto' : 'hidden',
                boxShadow: deviceView === 'desktop' ? 'none' : '0 25px 80px rgba(0,0,0,0.5)',
              }}>
                {/* Browser chrome for non-desktop */}
                {deviceView !== 'desktop' && (
                  <div style={{ background: '#111', padding: '8px 14px', display: 'flex', gap: 6, alignItems: 'center' }}>
                    {['#ff5f56', '#febc2e', '#27c840'].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
                    <div style={{ flex: 1, background: '#1a1a1a', borderRadius: 4, padding: '3px 10px', fontSize: 11, color: '#666', fontFamily: 'monospace', marginLeft: 6 }}>{bp.copy.brandName.toLowerCase().replace(/\s/g, '')}.preview</div>
                  </div>
                )}
                <div style={{ overflow: deviceView === 'desktop' ? undefined : 'auto', height: deviceView === 'desktop' ? '100%' : undefined }}>
                  <SiteRenderer blueprint={bp} />
                </div>
              </div>
            </div>
          ) : (
            <div style={{ flex: 1, background: '#0d1117', overflow: 'auto', fontFamily: 'monospace' }}>
              <div style={{ padding: '12px 20px', borderBottom: '1px solid #21262d', fontSize: 12, color: '#8b949e', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Code size={13} /> blueprint.json — {project.prompt}
              </div>
              <pre style={{ padding: 24, fontSize: 13, color: '#c9d1d9', lineHeight: 1.7, margin: 0, overflow: 'auto' }}>
                {JSON.stringify({
                  industry: bp.industry,
                  layout: bp.layout,
                  brandName: bp.copy.brandName,
                  tagline: bp.copy.tagline,
                  colors: bp.colors,
                  pages: bp.pages.map(p => ({
                    path: p.path,
                    title: p.title,
                    sections: p.sections.map(s => s.type),
                  })),
                }, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
