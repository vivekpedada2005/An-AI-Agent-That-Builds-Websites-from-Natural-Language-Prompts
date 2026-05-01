import { type IndustryType, type SubNiche, type LayoutSystem, type SiteColor, type SiteTypography } from './types';

export const detectIndustry = (prompt: string): IndustryType => {
  const p = prompt.toLowerCase();
  if (p.match(/bookstore|book store|book shop|bookshop|\bbooks?\b|novel|fiction|non.fiction|literature|isbn|paperback|hardcover|ebook|\breading/)) return 'bookstore';
  if (p.match(/hospital|clinic|medical|healthcare|health care|\bdoctor\b|\bdentist\b|pharma|therapy|patient|emergency room|urgent care|nursing|surgeon/)) return 'hospital';
  if (p.match(/portfolio|my work|my projects|\bresume\b|\bcv\b|\bfreelance\b|photographer|illustrator|graphic design|creative studio|personal brand/)) return 'portfolio';
  if (p.match(/real estate|property|realty|realtor|\bhouse\b|\bhomes?\b|\bapartment\b|\bvilla\b|\bplot\b|rent a flat|property listing/)) return 'real_estate';
  if (p.match(/restaurant|bistro|eatery|dining|\bcafe\b|coffee shop|food truck|bakery|\bmenu\b|\bchef\b|\bpizza\b|\bsushi\b|\bburger\b|\bcook\b|\bdine\b/)) return 'restaurant';
  if (p.match(/fintech|\bfinance\b|banking|\bpayment\b|\binvest\b|cryptocurrency|\bwallet\b|\bloan\b|\bfund\b|\btrade\b|stock market|wealth management/)) return 'fintech';
  if (p.match(/\bsaas\b|\bsoftware\b|productivity tool|b2b platform|dashboard app|workflow|project management tool|collaboration/)) return 'saas';
  if (p.match(/ecommerce|e-commerce|online store|online shop|clothing store|clothes store|\bcart\b|\bshop\b|\bstore\b|\bretail\b|product catalog|\bsell\b online|amazon|flipkart/)) return 'ecommerce';
  if (p.match(/\btravel\b|\btour\b|\bhotel\b|\btrip\b|\bvacation\b|tourism|resort|holiday|adventure|destination|cruise|airbnb/)) return 'travel';
  if (p.match(/\bschool\b|\buniversity\b|education|e-learning|online course|\btutor\b|\bacademy\b|college|institute|training|coaching/)) return 'education';
  if (p.match(/\bgym\b|fitness|workout|\btrainer\b|\byoga\b|crossfit|wellness|athletic|boxing|pilates|sports club/)) return 'fitness';
  if (p.match(/\blaw\b|\blawyer\b|legal|attorney|\bfirm\b|counsel|advocate|litigation|court/)) return 'law';
  if (p.match(/marketing agency|creative agency|design agency|digital agency|branding agency|advertising|ad agency/)) return 'agency';
  if (p.match(/\bblog\b|\bnews\b|magazine|newsletter|editorial|online journal|media site/)) return 'blog';
  if (p.match(/startup|\blaunch\b|\bmvp\b|venture|accelerator|incubator|seed stage/)) return 'startup';
  if (p.match(/\bngo\b|nonprofit|charity|foundation|\bdonate\b|social impact|volunteer/)) return 'ngo';
  if (p.match(/\bsalon\b|\bspa\b|\bbeauty\b|\bbarber\b|\bnail\b|\bmakeup\b|\bhair\b|skincare|grooming/)) return 'salon';
  if (p.match(/\bevent\b|\bwedding\b|\bparty\b|conference|festival|concert|exhibition|meetup|summit/)) return 'event';
  if (p.match(/\bfashion\b|\bclothing\b|\bclothes\b|\bdress\b|\bdresses\b|\bapparel\b|\bluxury\b|couture|streetwear|\boutfit\b|\bgarment\b|\bshirt\b|\bjeans\b|\bwear\b|\bwardrobe\b/)) return 'fashion';
  if (p.match(/corporate|enterprise|conglomerate|corporation|business group|holding company/)) return 'corporate';
  return 'generic';
};

export const detectSubNiche = (prompt: string, industry: IndustryType): SubNiche => {
  const p = prompt.toLowerCase();
  
  if (industry === 'ecommerce' || industry === 'fashion') {
    if (p.match(/beauty|cosmetics|skincare|makeup|lip/)) return 'beauty_store';
    if (p.match(/sneaker|shoes|kicks|footwear/)) return 'sneaker_store';
    if (p.match(/gadget|tech|electronics|computer|phone/)) return 'gadget_store';
    if (p.match(/perfume|fragrance|cologne/)) return 'perfume_store';
    if (p.match(/furniture|decor|home/)) return 'furniture_store';
    if (p.match(/grocery|food|supermarket/)) return 'grocery_store';
    if (p.match(/jewelry|necklace|ring|watch/)) return 'jewelry_store';
    if (p.match(/pet|dog|cat|animal/)) return 'pet_store';
    if (p.match(/toy|kids/)) return 'toy_store';
    if (p.match(/organic|vegan|natural/)) return 'organic_store';
    if (p.match(/luxury|designer|couture/)) return 'fashion_luxury';
    if (p.match(/streetwear|skate|hype/)) return 'fashion_streetwear';
    if (p.match(/minimal/)) return 'fashion_minimal';
  }

  if (industry === 'restaurant') {
    if (p.match(/fine dining|luxury|elegant/)) return 'restaurant_fine';
    if (p.match(/cafe|coffee|tea/)) return 'cafe_coffee';
    if (p.match(/bakery|pastry|cake/)) return 'bakery';
    if (p.match(/delivery|fast food|takeaway/)) return 'food_delivery';
    if (p.match(/bar|lounge|club/)) return 'bar_lounge';
    return 'restaurant_casual';
  }

  if (industry === 'hospital') {
    if (p.match(/dental|dentist|teeth/)) return 'dental_clinic';
    if (p.match(/mental|therapy|psych/)) return 'mental_health';
    if (p.match(/pharmacy|drugs|medicine/)) return 'pharmacy';
    return 'hospital_general';
  }

  if (industry === 'fitness') {
    if (p.match(/yoga|pilates/)) return 'yoga_studio';
    return 'gym_fitness';
  }

  if (industry === 'salon') {
    if (p.match(/spa|massage|wellness/)) return 'spa_wellness';
    if (p.match(/barber|fade|shave/)) return 'barber_shop';
    return 'salon_beauty';
  }

  if (industry === 'saas') {
    if (p.match(/ai|artificial intelligence/)) return 'ai_saas';
    if (p.match(/productivity|task|manage/)) return 'productivity_saas';
    if (p.match(/dev|api|code|developer/)) return 'dev_tools';
    if (p.match(/analytics|data|dashboard/)) return 'analytics_dashboard';
    return 'saas_generic';
  }

  if (industry === 'fintech') {
    if (p.match(/crypto|bitcoin|web3/)) return 'crypto_platform';
    return 'fintech_app';
  }

  if (industry === 'portfolio') {
    if (p.match(/photo|camera|lens/)) return 'photographer';
    if (p.match(/ui|ux|interface|web/)) return 'ui_designer';
    if (p.match(/illustrat|art|draw/)) return 'illustrator';
    if (p.match(/writ|author|copy/)) return 'writer_author';
    if (p.match(/music|band|audio/)) return 'musician';
    if (p.match(/video|film|youtube/)) return 'video_creator';
  }

  if (industry === 'real_estate') {
    if (p.match(/luxury|mansion|estate/)) return 'real_estate_luxury';
    return 'real_estate_rental';
  }

  if (industry === 'law') return 'law_firm';
  if (industry === 'agency') {
    if (p.match(/marketing|seo|ads/)) return 'marketing_agency';
    if (p.match(/design|brand/)) return 'design_agency';
  }
  if (industry === 'education') {
    if (p.match(/online|academy|course/)) return 'online_academy';
    if (p.match(/coach|mentor/)) return 'coaching_mentor';
  }

  if (industry === 'travel') {
    if (p.match(/adventure|hike|trek/)) return 'travel_adventure';
    if (p.match(/luxury|resort/)) return 'travel_luxury';
    if (p.match(/hotel/)) return 'hotel_booking';
  }

  if (industry === 'blog') {
    if (p.match(/tech|gadget|software/)) return 'blog_tech';
    if (p.match(/life|style|fashion/)) return 'blog_lifestyle';
    return 'news_magazine';
  }

  if (industry === 'event') {
    if (p.match(/wedding|marriage/)) return 'wedding_planner';
    return 'event_corporate';
  }

  if (p.match(/landing page/)) return 'landing_page';
  if (industry === 'startup') return 'startup_launch';
  if (industry === 'corporate') return 'corporate_enterprise';
  if (industry === 'ngo') return 'ngo_charity';

  // Advanced Clones
  if (p.match(/netflix/)) return 'netflix_clone';
  if (p.match(/chatgpt/)) return 'chatgpt_clone';
  if (p.match(/apple/)) return 'apple_style';
  if (p.match(/cyberpunk/)) return 'cyberpunk';
  if (p.match(/airbnb/)) return 'airbnb_clone';
  if (p.match(/amazon/)) return 'amazon_clone';
  if (p.match(/tesla/)) return 'tesla_style';

  return 'generic';
};

// ── LAYOUT SELECTION ─────────────────────────────────────────────────────────
const industryLayoutMap: Record<IndustryType, LayoutSystem[]> = {
  fintech:     ['split-hero', 'bento-grid', 'dashboard-hero'],
  saas:        ['dashboard-hero', 'split-hero', 'bento-grid'],
  ecommerce:   ['storefront', 'asymmetric'],
  restaurant:  ['immersive', 'magazine'],
  hospital:    ['enterprise', 'split-hero'],
  portfolio:   ['personal', 'center-bold', 'asymmetric'],
  real_estate: ['split-hero', 'enterprise'],
  travel:      ['immersive', 'magazine'],
  education:   ['center-bold', 'enterprise'],
  fitness:     ['center-bold', 'asymmetric'],
  law:         ['enterprise', 'split-hero'],
  agency:      ['asymmetric', 'bento-grid', 'center-bold'],
  blog:        ['magazine', 'center-bold'],
  startup:     ['bento-grid', 'split-hero', 'center-bold'],
  corporate:   ['enterprise', 'split-hero'],
  ngo:         ['center-bold', 'immersive'],
  salon:       ['personal', 'immersive'],
  event:       ['immersive', 'center-bold'],
  fashion:     ['storefront', 'asymmetric'],
  bookstore:   ['storefront', 'magazine', 'center-bold'],
  generic:     ['split-hero', 'center-bold', 'bento-grid'],
};

export const selectLayout = (industry: IndustryType, seed: number, subNiche?: SubNiche): LayoutSystem => {
  if (subNiche === 'netflix_clone') return 'netflix-layout';
  if (subNiche === 'chatgpt_clone') return 'chatgpt-layout';
  if (subNiche === 'apple_style') return 'apple-layout';
  if (subNiche === 'cyberpunk') return 'cyberpunk-layout';
  if (subNiche === 'airbnb_clone') return 'airbnb-layout';
  if (subNiche === 'amazon_clone') return 'amazon-layout';
  if (subNiche === 'tesla_style') return 'tesla-layout';

  const options = industryLayoutMap[industry];
  return options[seed % options.length];
};

// ── COLOR PALETTES ────────────────────────────────────────────────────────────
const palettes: Record<SubNiche, SiteColor[]> = {
  // Ecommerce
  beauty_store: [{ primary: '#be185d', secondary: '#9d174d', accent: '#f9a8d4', bg: '#fff0f6', surface: '#ffffff', text: '#4a044e', muted: '#9d174d', border: '#fce7f3' }],
  sneaker_store: [{ primary: '#111827', secondary: '#f97316', accent: '#fb923c', bg: '#ffffff', surface: '#f9fafb', text: '#111827', muted: '#6b7280', border: '#e5e7eb' }],
  gadget_store: [{ primary: '#111827', secondary: '#06b6d4', accent: '#38bdf8', bg: '#0f172a', surface: 'rgba(15,23,42,0.8)', text: '#f8fafc', muted: '#94a3b8', border: 'rgba(255,255,255,0.1)' }],
  perfume_store: [{ primary: '#92400e', secondary: '#78350f', accent: '#fbbf24', bg: '#fdf8f0', surface: '#ffffff', text: '#1c1917', muted: '#78716c', border: '#e7e5e4' }],
  furniture_store: [{ primary: '#3f3f46', secondary: '#27272a', accent: '#a1a1aa', bg: '#fafafa', surface: '#ffffff', text: '#18181b', muted: '#71717a', border: '#e4e4e7' }],
  grocery_store: [{ primary: '#16a34a', secondary: '#15803d', accent: '#4ade80', bg: '#f0fdf4', surface: '#ffffff', text: '#14532d', muted: '#22c55e', border: '#dcfce7' }],
  jewelry_store: [{ primary: '#0f172a', secondary: '#1e293b', accent: '#eab308', bg: '#ffffff', surface: '#f8fafc', text: '#0f172a', muted: '#64748b', border: '#e2e8f0' }],
  pet_store: [{ primary: '#f97316', secondary: '#ea580c', accent: '#fdba74', bg: '#fff7ed', surface: '#ffffff', text: '#431407', muted: '#fb923c', border: '#ffedd5' }],
  toy_store: [{ primary: '#0ea5e9', secondary: '#0284c7', accent: '#7dd3fc', bg: '#f0f9ff', surface: '#ffffff', text: '#0c4a6e', muted: '#38bdf8', border: '#e0f2fe' }],
  electronics_store: [{ primary: '#2563eb', secondary: '#1d4ed8', accent: '#60a5fa', bg: '#eff6ff', surface: '#ffffff', text: '#1e3a8a', muted: '#3b82f6', border: '#dbeafe' }],
  organic_store: [{ primary: '#65a30d', secondary: '#4d7c0f', accent: '#a3e635', bg: '#f7fee7', surface: '#ffffff', text: '#3f6212', muted: '#84cc16', border: '#ecfccb' }],
  fashion_luxury: [{ primary: '#000000', secondary: '#111111', accent: '#e5e5e5', bg: '#ffffff', surface: '#fafafa', text: '#000000', muted: '#737373', border: '#e5e5e5' }],
  fashion_streetwear: [{ primary: '#ef4444', secondary: '#dc2626', accent: '#fca5a5', bg: '#171717', surface: '#262626', text: '#ffffff', muted: '#a3a3a3', border: '#404040' }],
  fashion_minimal: [{ primary: '#525252', secondary: '#404040', accent: '#d4d4d4', bg: '#fafafa', surface: '#ffffff', text: '#171717', muted: '#a3a3a3', border: '#e5e5e5' }],

  // Food & Hospitality
  restaurant_fine: [{ primary: '#18181b', secondary: '#09090b', accent: '#d4af37', bg: '#000000', surface: '#111111', text: '#ffffff', muted: '#a1a1aa', border: '#27272a' }],
  restaurant_casual: [{ primary: '#ef4444', secondary: '#dc2626', accent: '#fca5a5', bg: '#fef2f2', surface: '#ffffff', text: '#7f1d1d', muted: '#f87171', border: '#fee2e2' }],
  cafe_coffee: [{ primary: '#78350f', secondary: '#451a03', accent: '#d97706', bg: '#fffbeb', surface: '#ffffff', text: '#451a03', muted: '#b45309', border: '#fef3c7' }],
  bakery: [{ primary: '#d97706', secondary: '#b45309', accent: '#fcd34d', bg: '#fffbeb', surface: '#ffffff', text: '#78350f', muted: '#fbbf24', border: '#fef3c7' }],
  food_delivery: [{ primary: '#f97316', secondary: '#ea580c', accent: '#fdba74', bg: '#ffffff', surface: '#fff7ed', text: '#111827', muted: '#f97316', border: '#ffedd5' }],
  hotel_booking: [{ primary: '#0369a1', secondary: '#075985', accent: '#38bdf8', bg: '#f0f9ff', surface: '#ffffff', text: '#0c4a6e', muted: '#0ea5e9', border: '#e0f2fe' }],
  bar_lounge: [{ primary: '#8b5cf6', secondary: '#7c3aed', accent: '#c4b5fd', bg: '#0f172a', surface: '#1e293b', text: '#f8fafc', muted: '#a78bfa', border: '#334155' }],

  // Health & Wellness
  hospital_general: [{ primary: '#0284c7', secondary: '#0369a1', accent: '#7dd3fc', bg: '#f0f9ff', surface: '#ffffff', text: '#0c4a6e', muted: '#38bdf8', border: '#e0f2fe' }],
  dental_clinic: [{ primary: '#0ea5e9', secondary: '#0284c7', accent: '#7dd3fc', bg: '#ffffff', surface: '#f0f9ff', text: '#0f172a', muted: '#38bdf8', border: '#e0f2fe' }],
  mental_health: [{ primary: '#14b8a6', secondary: '#0f766e', accent: '#5eead4', bg: '#f0fdfa', surface: '#ffffff', text: '#134e4a', muted: '#2dd4bf', border: '#ccfbf1' }],
  pharmacy: [{ primary: '#10b981', secondary: '#059669', accent: '#6ee7b7', bg: '#ecfdf5', surface: '#ffffff', text: '#064e3b', muted: '#34d399', border: '#d1fae5' }],
  gym_fitness: [{ primary: '#eab308', secondary: '#ca8a04', accent: '#fef08a', bg: '#111827', surface: '#1f2937', text: '#ffffff', muted: '#9ca3af', border: '#374151' }],
  yoga_studio: [{ primary: '#84cc16', secondary: '#65a30d', accent: '#d9f99d', bg: '#f7fee7', surface: '#ffffff', text: '#3f6212', muted: '#a3e635', border: '#ecfccb' }],
  spa_wellness: [{ primary: '#d946ef', secondary: '#c026d3', accent: '#f0abfc', bg: '#fdf4ff', surface: '#ffffff', text: '#701a75', muted: '#e879f9', border: '#fae8ff' }],
  salon_beauty: [{ primary: '#ec4899', secondary: '#db2777', accent: '#fbcfe8', bg: '#fdf2f8', surface: '#ffffff', text: '#831843', muted: '#f472b6', border: '#fce7f3' }],
  barber_shop: [{ primary: '#1f2937', secondary: '#111827', accent: '#ef4444', bg: '#ffffff', surface: '#f3f4f6', text: '#111827', muted: '#6b7280', border: '#e5e7eb' }],

  // Tech & SaaS
  ai_saas: [{ primary: '#8b5cf6', secondary: '#7c3aed', accent: '#c4b5fd', bg: '#030014', surface: '#0f172a', text: '#f8fafc', muted: '#a78bfa', border: '#1e293b' }],
  productivity_saas: [{ primary: '#3b82f6', secondary: '#2563eb', accent: '#93c5fd', bg: '#ffffff', surface: '#f8fafc', text: '#0f172a', muted: '#64748b', border: '#e2e8f0' }],
  dev_tools: [{ primary: '#10b981', secondary: '#059669', accent: '#6ee7b7', bg: '#0f172a', surface: '#1e293b', text: '#f8fafc', muted: '#94a3b8', border: '#334155' }],
  crypto_platform: [{ primary: '#f59e0b', secondary: '#d97706', accent: '#fcd34d', bg: '#111827', surface: '#1f2937', text: '#ffffff', muted: '#9ca3af', border: '#374151' }],
  fintech_app: [{ primary: '#6366f1', secondary: '#4f46e5', accent: '#a5b4fc', bg: '#ffffff', surface: '#f1f5f9', text: '#0f172a', muted: '#64748b', border: '#e2e8f0' }],
  analytics_dashboard: [{ primary: '#0ea5e9', secondary: '#0284c7', accent: '#7dd3fc', bg: '#ffffff', surface: '#f8fafc', text: '#0f172a', muted: '#64748b', border: '#e2e8f0' }],

  // Creative
  photographer: [{ primary: '#171717', secondary: '#0a0a0a', accent: '#d4d4d4', bg: '#ffffff', surface: '#fafafa', text: '#171717', muted: '#737373', border: '#e5e5e5' }],
  ui_designer: [{ primary: '#f43f5e', secondary: '#e11d48', accent: '#fda4af', bg: '#0f172a', surface: '#1e293b', text: '#f8fafc', muted: '#94a3b8', border: '#334155' }],
  illustrator: [{ primary: '#f59e0b', secondary: '#d97706', accent: '#fcd34d', bg: '#fffbeb', surface: '#ffffff', text: '#78350f', muted: '#fbbf24', border: '#fef3c7' }],
  writer_author: [{ primary: '#334155', secondary: '#1e293b', accent: '#cbd5e1', bg: '#f8fafc', surface: '#ffffff', text: '#0f172a', muted: '#64748b', border: '#e2e8f0' }],
  musician: [{ primary: '#8b5cf6', secondary: '#7c3aed', accent: '#c4b5fd', bg: '#000000', surface: '#111827', text: '#ffffff', muted: '#9ca3af', border: '#1f2937' }],
  video_creator: [{ primary: '#ef4444', secondary: '#dc2626', accent: '#fca5a5', bg: '#000000', surface: '#171717', text: '#ffffff', muted: '#a3a3a3', border: '#262626' }],

  // Professional
  law_firm: [{ primary: '#1e3a8a', secondary: '#1e40af', accent: '#bfdbfe', bg: '#ffffff', surface: '#eff6ff', text: '#1e3a8a', muted: '#3b82f6', border: '#dbeafe' }],
  accounting_firm: [{ primary: '#0f766e', secondary: '#115e59', accent: '#99f6e4', bg: '#ffffff', surface: '#f0fdfa', text: '#134e4a', muted: '#14b8a6', border: '#ccfbf1' }],
  consulting: [{ primary: '#334155', secondary: '#1e293b', accent: '#cbd5e1', bg: '#ffffff', surface: '#f8fafc', text: '#0f172a', muted: '#64748b', border: '#e2e8f0' }],
  marketing_agency: [{ primary: '#f97316', secondary: '#ea580c', accent: '#fdba74', bg: '#ffffff', surface: '#fff7ed', text: '#111827', muted: '#f97316', border: '#ffedd5' }],
  design_agency: [{ primary: '#18181b', secondary: '#09090b', accent: '#d4d4d8', bg: '#ffffff', surface: '#fafafa', text: '#18181b', muted: '#71717a', border: '#e4e4e7' }],
  real_estate_luxury: [{ primary: '#171717', secondary: '#0a0a0a', accent: '#d4af37', bg: '#ffffff', surface: '#fafafa', text: '#171717', muted: '#737373', border: '#e5e5e5' }],
  real_estate_rental: [{ primary: '#2563eb', secondary: '#1d4ed8', accent: '#93c5fd', bg: '#ffffff', surface: '#eff6ff', text: '#1e3a8a', muted: '#3b82f6', border: '#dbeafe' }],

  // Ed & Community
  online_academy: [{ primary: '#4f46e5', secondary: '#4338ca', accent: '#a5b4fc', bg: '#ffffff', surface: '#eef2ff', text: '#312e81', muted: '#6366f1', border: '#e0e7ff' }],
  coaching_mentor: [{ primary: '#0d9488', secondary: '#0f766e', accent: '#5eead4', bg: '#f0fdfa', surface: '#ffffff', text: '#134e4a', muted: '#2dd4bf', border: '#ccfbf1' }],
  ngo_charity: [{ primary: '#16a34a', secondary: '#15803d', accent: '#86efac', bg: '#f0fdf4', surface: '#ffffff', text: '#14532d', muted: '#22c55e', border: '#dcfce7' }],
  church_community: [{ primary: '#6366f1', secondary: '#4f46e5', accent: '#a5b4fc', bg: '#fafafa', surface: '#ffffff', text: '#312e81', muted: '#818cf8', border: '#e0e7ff' }],

  // Entertainment
  gaming_site: [{ primary: '#8b5cf6', secondary: '#7c3aed', accent: '#c4b5fd', bg: '#09090b', surface: '#18181b', text: '#fafafa', muted: '#a1a1aa', border: '#27272a' }],
  streaming_platform: [{ primary: '#ef4444', secondary: '#dc2626', accent: '#fca5a5', bg: '#000000', surface: '#171717', text: '#ffffff', muted: '#a3a3a3', border: '#262626' }],
  podcast_site: [{ primary: '#f43f5e', secondary: '#e11d48', accent: '#fda4af', bg: '#fff1f2', surface: '#ffffff', text: '#881337', muted: '#fb7185', border: '#ffe4e6' }],
  travel_adventure: [{ primary: '#059669', secondary: '#047857', accent: '#6ee7b7', bg: '#ecfdf5', surface: '#ffffff', text: '#064e3b', muted: '#34d399', border: '#d1fae5' }],
  travel_luxury: [{ primary: '#0f172a', secondary: '#020617', accent: '#d4af37', bg: '#ffffff', surface: '#f8fafc', text: '#0f172a', muted: '#64748b', border: '#e2e8f0' }],
  wedding_planner: [{ primary: '#be185d', secondary: '#9d174d', accent: '#fbcfe8', bg: '#fdf2f8', surface: '#ffffff', text: '#831843', muted: '#f472b6', border: '#fce7f3' }],
  event_corporate: [{ primary: '#2563eb', secondary: '#1d4ed8', accent: '#93c5fd', bg: '#ffffff', surface: '#eff6ff', text: '#1e3a8a', muted: '#3b82f6', border: '#dbeafe' }],

  // Generic/Other
  startup_launch: [{ primary: '#8b5cf6', secondary: '#7c3aed', accent: '#c4b5fd', bg: '#ffffff', surface: '#f5f3ff', text: '#4c1d95', muted: '#8b5cf6', border: '#ede9fe' }],
  corporate_enterprise: [{ primary: '#1e293b', secondary: '#0f172a', accent: '#94a3b8', bg: '#f8fafc', surface: '#ffffff', text: '#0f172a', muted: '#64748b', border: '#e2e8f0' }],
  blog_tech: [{ primary: '#3b82f6', secondary: '#2563eb', accent: '#93c5fd', bg: '#ffffff', surface: '#f8fafc', text: '#0f172a', muted: '#64748b', border: '#e2e8f0' }],
  blog_lifestyle: [{ primary: '#d946ef', secondary: '#c026d3', accent: '#f0abfc', bg: '#fdf4ff', surface: '#ffffff', text: '#701a75', muted: '#e879f9', border: '#fae8ff' }],
  news_magazine: [{ primary: '#000000', secondary: '#111111', accent: '#e5e5e5', bg: '#ffffff', surface: '#fafafa', text: '#000000', muted: '#737373', border: '#e5e5e5' }],
  landing_page: [{ primary: '#f97316', secondary: '#ea580c', accent: '#fdba74', bg: '#ffffff', surface: '#fff7ed', text: '#111827', muted: '#f97316', border: '#ffedd5' }],
  saas_generic: [{ primary: '#6366f1', secondary: '#8b5cf6', accent: '#a78bfa', bg: '#030014', surface: 'rgba(99,102,241,0.07)', text: '#f8fafc', muted: '#94a3b8', border: 'rgba(99,102,241,0.18)' }],
  generic: [{ primary: '#3b82f6', secondary: '#2563eb', accent: '#93c5fd', bg: '#ffffff', surface: '#f8fafc', text: '#0f172a', muted: '#64748b', border: '#e2e8f0' }],

  // Advanced Clones
  netflix_clone: [{ primary: '#E50914', secondary: '#B81D24', accent: '#FFFFFF', bg: '#000000', surface: '#141414', text: '#FFFFFF', muted: '#808080', border: '#222222' }],
  chatgpt_clone: [{ primary: '#10A37F', secondary: '#00A67E', accent: '#202123', bg: '#343541', surface: '#444654', text: '#ECECF1', muted: '#8E8EA0', border: '#565869' }],
  apple_style: [{ primary: '#0071E3', secondary: '#0077ED', accent: '#1D1D1F', bg: '#F5F5F7', surface: '#FFFFFF', text: '#1D1D1F', muted: '#86868B', border: '#D2D2D7' }],
  cyberpunk: [{ primary: '#00FF41', secondary: '#FF003C', accent: '#00E6F6', bg: '#050A0E', surface: '#091823', text: '#FCEE0A', muted: '#00FF41', border: '#FF003C' }],
  airbnb_clone: [{ primary: '#FF385C', secondary: '#D90B38', accent: '#222222', bg: '#FFFFFF', surface: '#F7F7F7', text: '#222222', muted: '#717171', border: '#DDDDDD' }],
  amazon_clone: [{ primary: '#FF9900', secondary: '#146EB4', accent: '#232F3E', bg: '#FFFFFF', surface: '#F3F3F3', text: '#0F1111', muted: '#565959', border: '#D5D9D9' }],
  tesla_style: [{ primary: '#E82127', secondary: '#CC0000', accent: '#FFFFFF', bg: '#111111', surface: '#222222', text: '#FFFFFF', muted: '#888888', border: '#333333' }],
} as Record<SubNiche, SiteColor[]>; // Cast to allow partial definition while expanding

const fallbackPalette: SiteColor = { primary: '#6366f1', secondary: '#8b5cf6', accent: '#a78bfa', bg: '#030014', surface: 'rgba(99,102,241,0.07)', text: '#f8fafc', muted: '#94a3b8', border: 'rgba(99,102,241,0.18)' };

export const selectPalette = (subNiche: SubNiche, seed: number): SiteColor => {
  const options = palettes[subNiche] || [fallbackPalette];
  return options[seed % options.length];
};

const typographyOptions: SiteTypography[] = [
  { heading: 'Inter', body: 'Inter', headingClass: 'font-extrabold tracking-tight' },
  { heading: 'Playfair Display', body: 'Inter', headingClass: 'font-bold tracking-normal' },
  { heading: 'Syne', body: 'DM Sans', headingClass: 'font-black tracking-tighter' },
  { heading: 'Bebas Neue', body: 'Inter', headingClass: 'font-normal tracking-wide uppercase' }, // For Netflix
  { heading: 'Space Mono', body: 'Courier New', headingClass: 'font-bold tracking-tight' }, // For Cyberpunk
];

export const selectTypography = (subNiche: SubNiche): SiteTypography => {
  if (subNiche === 'netflix_clone') return typographyOptions[3];
  if (subNiche === 'cyberpunk') return typographyOptions[4];
  if (subNiche.includes('luxury') || subNiche.includes('perfume') || subNiche.includes('fine')) return typographyOptions[1];
  if (subNiche.includes('fashion') || subNiche.includes('creative')) return typographyOptions[2];
  return typographyOptions[0];
};
