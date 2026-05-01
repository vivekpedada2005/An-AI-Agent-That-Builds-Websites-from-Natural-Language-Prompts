// =============================================================================
// CORE TYPES FOR PROMPTFORGE AI — NICHE-AWARE GENERATION ENGINE
// =============================================================================

// ── INDUSTRY (broad category) ────────────────────────────────────────────────
export type IndustryType =
  | 'fintech' | 'saas' | 'ecommerce' | 'restaurant' | 'hospital'
  | 'portfolio' | 'real_estate' | 'travel' | 'education' | 'fitness'
  | 'law' | 'agency' | 'blog' | 'startup' | 'corporate' | 'ngo'
  | 'salon' | 'event' | 'fashion' | 'bookstore' | 'generic';

// ── SUB-NICHE (specific, unique type — the key to uniqueness) ────────────────
export type SubNiche =
  // Ecommerce sub-niches
  | 'beauty_store' | 'sneaker_store' | 'gadget_store' | 'perfume_store'
  | 'furniture_store' | 'grocery_store' | 'jewelry_store' | 'pet_store'
  | 'toy_store' | 'electronics_store' | 'organic_store' | 'fashion_luxury'
  | 'fashion_streetwear' | 'fashion_minimal'
  // Food & hospitality
  | 'restaurant_fine' | 'restaurant_casual' | 'cafe_coffee' | 'bakery'
  | 'food_delivery' | 'hotel_booking' | 'bar_lounge'
  // Health & wellness
  | 'hospital_general' | 'dental_clinic' | 'mental_health' | 'pharmacy'
  | 'gym_fitness' | 'yoga_studio' | 'spa_wellness' | 'salon_beauty'
  | 'barber_shop'
  // Tech & SaaS
  | 'ai_saas' | 'productivity_saas' | 'dev_tools' | 'crypto_platform'
  | 'fintech_app' | 'analytics_dashboard'
  // Creative & portfolio
  | 'photographer' | 'ui_designer' | 'illustrator' | 'writer_author'
  | 'musician' | 'video_creator'
  // Professional services
  | 'law_firm' | 'accounting_firm' | 'consulting' | 'marketing_agency'
  | 'design_agency' | 'real_estate_luxury' | 'real_estate_rental'
  // Education & community
  | 'online_academy' | 'coaching_mentor' | 'ngo_charity' | 'church_community'
  // Entertainment & lifestyle
  | 'gaming_site' | 'streaming_platform' | 'podcast_site' | 'travel_adventure'
  | 'travel_luxury' | 'wedding_planner' | 'event_corporate'
  // Other specific
  | 'startup_launch' | 'corporate_enterprise' | 'blog_tech' | 'blog_lifestyle'
  | 'news_magazine' | 'landing_page' | 'saas_generic'
  // Advanced Clones / Stress Tests
  | 'netflix_clone' | 'chatgpt_clone' | 'apple_style' | 'cyberpunk'
  | 'airbnb_clone' | 'amazon_clone' | 'tesla_style'
  | 'generic';

// ── LAYOUT SYSTEM ────────────────────────────────────────────────────────────
export type LayoutSystem =
  | 'split-hero'       // SaaS, fintech, B2B
  | 'center-bold'      // Portfolio, creative, agency
  | 'bento-grid'       // Tech startup, AI tools
  | 'magazine'         // Blog, news, media
  | 'storefront'       // Ecommerce, fashion, Nike-style
  | 'enterprise'       // Hospital, law, corporate
  | 'personal'         // Freelancer, creator, portfolio
  | 'immersive'        // Travel, luxury, hospitality
  | 'dashboard-hero'   // SaaS dashboard mockup
  | 'asymmetric'       // Design studio, creative
  | 'cinematic'        // Luxury, perfume, high fashion
  | 'editorial'        // Blog, magazine, bookstore
  | 'minimal-zen'      // Furniture, scandinavian, organic
  | 'athletic'         // Sports, fitness, sneakers
  | 'warm-cozy'        // Cafe, bakery, bookstore, community
  // Advanced Clones
  | 'netflix-layout' | 'chatgpt-layout' | 'apple-layout' | 'cyberpunk-layout'
  | 'airbnb-layout' | 'amazon-layout' | 'tesla-layout';

// ── SECTION TYPES ────────────────────────────────────────────────────────────
export type SectionType =
  // Navbars
  | 'NavbarTransparent' | 'NavbarDark' | 'NavbarMinimal' | 'NavbarEcommerce'
  | 'NavbarEnterprise' | 'NavbarCreator' | 'NavbarFloating'
  | 'NavbarLuxury' | 'NavbarSporty' | 'NavbarWarm' | 'NavbarGlass'
  // Heroes
  | 'HeroSplit' | 'HeroCenter' | 'HeroDashboard' | 'HeroProduct'
  | 'HeroPersonal' | 'HeroEditorial' | 'HeroEmergency' | 'HeroImmersive'
  | 'HeroStats' | 'HeroBento' | 'HeroBookstore'
  | 'HeroStorefront' | 'HeroAthletic' | 'HeroTech' | 'HeroLuxury'
  | 'HeroWarm' | 'HeroMinimalZen'
  | 'HeroNetflix' | 'HeroChatGPT' | 'HeroApple' | 'HeroCyberpunk'
  | 'HeroAirbnb' | 'HeroAmazon' | 'HeroTesla'
  // Features
  | 'FeaturesGrid' | 'FeaturesAlternating' | 'FeaturesBento' | 'FeaturesCompact'
  // Pricing
  | 'PricingCards' | 'PricingTable' | 'PricingSimple'
  // Testimonials
  | 'TestimonialsSlider' | 'TestimonialsGrid' | 'TestimonialsQuote'
  // Products (niche-aware)
  | 'ProductGrid' | 'ProductFeatured' | 'ProductCollections'
  // Books
  | 'BookGrid' | 'BookFeatured' | 'BookCategories' | 'BookNewArrivals'
  // Team
  | 'TeamCards' | 'TeamMinimal'
  // Contact
  | 'ContactForm' | 'ContactSplit' | 'ContactMap'
  // Menus
  | 'MenuCards' | 'MenuGrid'
  // Medical
  | 'DoctorCards' | 'DepartmentGrid'
  // Generic sections
  | 'StatsBar' | 'TrustLogos' | 'IntegrationGrid'
  | 'GalleryGrid' | 'GalleryMasonry'
  | 'BlogGrid' | 'BlogFeatured'
  | 'TimelineSection'
  | 'FAQAccordion'
  | 'CTABanner' | 'CTACenter'
  // Niche-specific sections
  | 'BeautyRoutine' | 'IngredientSpotlight' | 'ShadeSelector'
  | 'SneakerDrops' | 'SizeSelector'
  | 'SpecsComparison' | 'FlashDeals' | 'CategoryChips'
  | 'FragranceNotes' | 'GiftingSection'
  | 'RoomScenes' | 'FurnitureCollections'
  | 'DeliveryBanner' | 'FreshCategories'
  | 'ClassSchedule' | 'MembershipTiers'
  | 'AppointmentBooker'
  | 'CaseResults' | 'PracticeAreas'
  | 'CourseCards' | 'InstructorSpotlight'
  | 'PropertyCards' | 'PropertySearch'
  | 'DestinationCards' | 'TripBuilder'
  // Advanced Clone Sections
  | 'NetflixSliders' | 'ChatGPTLayout' | 'AirbnbSearch' | 'AmazonGrid' | 'TeslaSections'
  // Footers
  | 'FooterFull' | 'FooterMinimal' | 'FooterEcommerce' | 'FooterLuxury';

// ── DESIGN DNA ───────────────────────────────────────────────────────────────
export type CardStyle = 'rounded' | 'sharp' | 'glass' | 'minimal' | 'bold' | 'editorial' | 'luxury';
export type CTAStyle = 'pill' | 'sharp' | 'gradient' | 'outlined' | 'icon' | 'minimal';
export type AnimationLevel = 'none' | 'subtle' | 'moderate' | 'bold' | 'cinematic';

export interface DesignDNA {
  cardStyle: CardStyle;
  ctaStyle: CTAStyle;
  borderRadius: number;        // 0 = sharp, 8 = moderate, 16 = rounded, 50 = pill
  spacingScale: number;        // 0.8 = compact, 1.0 = normal, 1.2 = spacious
  animationLevel: AnimationLevel;
  sectionGap: number;          // px between sections
  heroHeight: string;          // '85vh', '100vh', '70vh'
  contentMaxWidth: number;     // 1100, 1200, 1400
  imageStyle: 'emoji' | 'gradient' | 'pattern' | 'geometric';
}

// ── NICHE PROFILE ────────────────────────────────────────────────────────────
export interface NicheProfile {
  subNiche: SubNiche;
  displayName: string;         // Human-readable name
  contentVoice: 'luxury' | 'casual' | 'professional' | 'energetic' | 'warm' | 'clinical' | 'bold' | 'minimal' | 'editorial' | 'playful';
  designDNA: DesignDNA;
  emojiSet: string[];          // Primary emojis for this niche
  productLabel: string;        // "Products", "Items", "Listings", "Books", etc.
  preferredHero: SectionType;
  preferredNav: SectionType;
  preferredFooter: SectionType;
  sectionOrder: SectionType[]; // Preferred order of middle sections
}

// ── COLOR & TYPOGRAPHY ───────────────────────────────────────────────────────
export interface SiteColor {
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
}

export interface SiteTypography {
  heading: string;
  body: string;
  headingClass: string;
}

// ── COPY ─────────────────────────────────────────────────────────────────────
export interface SiteCopy {
  brandName: string;
  tagline: string;
  heroHeadline: string;
  heroSub: string;
  heroCTA: string;
  heroSecondaryCTA: string;
  navLinks: { label: string; href: string }[];
  footerTagline: string;
}

// ── SITE STRUCTURE ───────────────────────────────────────────────────────────
export interface SiteSection {
  id: string;
  type: SectionType;
  props: Record<string, unknown>;
}

export interface SitePage {
  path: string;
  title: string;
  sections: SiteSection[];
}

// ── SITE BLUEPRINT (the master output) ───────────────────────────────────────
export interface SiteBlueprint {
  industry: IndustryType;
  subNiche: SubNiche;
  nicheProfile: NicheProfile;
  layout: LayoutSystem;
  colors: SiteColor;
  typography: SiteTypography;
  copy: SiteCopy;
  pages: SitePage[];
  darkMode: boolean;
}
