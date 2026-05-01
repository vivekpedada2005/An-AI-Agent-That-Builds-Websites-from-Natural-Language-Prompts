import { type SiteBlueprint, type SiteSection, type SubNiche, type LayoutSystem } from './types';
import { detectIndustry, detectSubNiche, selectLayout, selectPalette, selectTypography } from './promptAnalyzer';
import { generateCopy } from './copyEngine';
import { NICHE_PROFILES } from './nicheProfiles';

// Fallback profile if subNiche isn't in NICHE_PROFILES yet
const getProfile = (subNiche: SubNiche) => {
  return NICHE_PROFILES[subNiche] || NICHE_PROFILES.generic;
};

// Generates an array of sections based on the niche profile and layout system
const generatePageSections = (subNiche: SubNiche, layout: LayoutSystem, seed: number): SiteSection[] => {
  const profile = getProfile(subNiche);
  const sections: SiteSection[] = [];

  // 1. Add Navbar
  sections.push({ id: 'nav_1', type: profile.preferredNav, props: {} });

  // 2. Add Hero
  let heroType = profile.preferredHero;
  // Layout overrides
  if (layout === 'split-hero') heroType = 'HeroSplit';
  if (layout === 'bento-grid') heroType = 'HeroBento';
  if (layout === 'center-bold') heroType = 'HeroCenter';
  if (layout === 'dashboard-hero') heroType = 'HeroDashboard';
  
  sections.push({ id: 'hero_1', type: heroType, props: {} });

  // 3. Add Middle Sections (shuffle/select based on seed)
  const availableSections = [...profile.sectionOrder];
  
  // Make sure we have at least 3 middle sections
  if (availableSections.length === 0) {
    availableSections.push('FeaturesGrid', 'TestimonialsGrid', 'PricingCards');
  }

  // Pick 3-4 sections deterministically based on seed
  const numMiddle = 3 + (seed % 2); // 3 or 4 sections
  for (let i = 0; i < numMiddle; i++) {
    const sIndex = (seed + i) % availableSections.length;
    sections.push({ id: `mid_${i}`, type: availableSections[sIndex], props: {} });
  }

  // 4. Add Footer
  sections.push({ id: 'footer_1', type: profile.preferredFooter, props: {} });

  return sections;
};

export const generateBlueprint = async (prompt: string, themeMode: 'light' | 'dark', seed: number): Promise<SiteBlueprint> => {
  const industry = detectIndustry(prompt);
  const subNiche = detectSubNiche(prompt, industry);
  const profile = getProfile(subNiche);
  
  const layout = selectLayout(industry, seed, subNiche);
  let colors = selectPalette(subNiche, seed);
  const typography = selectTypography(subNiche);
  const copy = await generateCopy(prompt, subNiche);

  // Apply dark mode overrides if needed
  if (themeMode === 'dark') {
    colors = {
      ...colors,
      bg: '#000000',
      surface: '#0a0a0a',
      text: '#ffffff',
      muted: '#a1a1aa',
      border: '#27272a'
    };
  }

  const sections = generatePageSections(subNiche, layout, seed);

  return {
    industry,
    subNiche,
    nicheProfile: profile,
    layout,
    colors,
    typography,
    copy,
    pages: [
      {
        path: '/',
        title: 'Home',
        sections
      }
    ],
    darkMode: themeMode === 'dark'
  };
};
