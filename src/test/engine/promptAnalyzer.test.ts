import { describe, it, expect } from 'vitest';
import { detectIndustry, detectSubNiche, selectLayout, selectPalette, selectTypography } from '../../engine/promptAnalyzer';

describe('detectIndustry()', () => {

  // ── Core Industries ─────────────────────────────────────────────────────
  it('detects hospital from "create a hospital website"', () => {
    expect(detectIndustry('create a hospital website')).toBe('hospital');
  });

  it('detects hospital from "healthcare clinic"', () => {
    expect(detectIndustry('build a healthcare clinic site')).toBe('hospital');
  });

  it('detects bookstore from "build a bookstore website"', () => {
    expect(detectIndustry('build a bookstore website with listings')).toBe('bookstore');
  });

  it('detects portfolio from "create a designer portfolio"', () => {
    expect(detectIndustry('create a designer portfolio website')).toBe('portfolio');
  });

  it('detects restaurant from "luxury restaurant with menu"', () => {
    expect(detectIndustry('build a luxury restaurant website with menu')).toBe('restaurant');
  });

  // ── Fashion / Clothing ───────────────────────────────────────────────────
  it('detects fashion from "men clothes and dresses"', () => {
    expect(detectIndustry('build a website for men clothes and dresses')).toBe('fashion');
  });

  it('detects fashion from "women wear"', () => {
    expect(detectIndustry('create a women wear fashion site')).toBe('fashion');
  });

  it('detects fashion from "clothing brand"', () => {
    // "clothing" alone (no "store") → fashion
    expect(detectIndustry('build a clothing brand website')).toBe('fashion');
  });

  it('detects fashion from "shirt and jeans"', () => {
    expect(detectIndustry('a website for shirts and jeans')).toBe('fashion');
  });

  // ── Ecommerce ────────────────────────────────────────────────────────────
  it('detects ecommerce from "online store"', () => {
    expect(detectIndustry('build an online store')).toBe('ecommerce');
  });

  it('detects ecommerce from "shopping cart"', () => {
    expect(detectIndustry('build a shop with cart')).toBe('ecommerce');
  });

  // ── SaaS / Fintech ───────────────────────────────────────────────────────
  it('detects saas from "SaaS productivity platform"', () => {
    expect(detectIndustry('build a SaaS productivity platform')).toBe('saas');
  });

  it('detects fintech from "payment processing app"', () => {
    expect(detectIndustry('payment processing app for businesses')).toBe('fintech');
  });

  // ── Education / Fitness ──────────────────────────────────────────────────
  it('detects education from "online courses"', () => {
    expect(detectIndustry('create an online courses learning platform')).toBe('education');
  });

  it('detects fitness from "gym website"', () => {
    expect(detectIndustry('build a gym and fitness center website')).toBe('fitness');
  });

  // ── Regression: "create" must NOT trigger restaurant ────────────────────
  it('does NOT detect restaurant when prompt is "create a hospital"', () => {
    expect(detectIndustry('create a hospital website')).not.toBe('restaurant');
  });

  it('does NOT detect restaurant when prompt is "create a portfolio"', () => {
    expect(detectIndustry('create a portfolio website')).not.toBe('restaurant');
  });

  it('does NOT return generic for well-known industries', () => {
    const prompts = [
      ['hospital website', 'hospital'],
      ['restaurant menu', 'restaurant'],
      ['law firm attorneys', 'law'],
      ['travel destinations', 'travel'],
      ['real estate listings', 'real_estate'],
    ] as const;
    prompts.forEach(([prompt, expected]) => {
      expect(detectIndustry(prompt)).toBe(expected);
    });
  });
});

describe('detectSubNiche()', () => {
  it('detects correct sub niches based on keywords', () => {
    expect(detectSubNiche('a tech blog', 'blog')).toBe('blog_tech');
    expect(detectSubNiche('lifestyle blog', 'blog')).toBe('blog_lifestyle');
    expect(detectSubNiche('general news', 'blog')).toBe('news_magazine');
    
    expect(detectSubNiche('wedding event planner', 'event')).toBe('wedding_planner');
    expect(detectSubNiche('corporate conference', 'event')).toBe('event_corporate');
    
    expect(detectSubNiche('landing page', 'generic')).toBe('landing_page');
    expect(detectSubNiche('some startup', 'startup')).toBe('startup_launch');
    expect(detectSubNiche('big corporate', 'corporate')).toBe('corporate_enterprise');
    expect(detectSubNiche('charity ngo', 'ngo')).toBe('ngo_charity');
    
    expect(detectSubNiche('netflix clone', 'generic')).toBe('netflix_clone');
    expect(detectSubNiche('chatgpt clone', 'generic')).toBe('chatgpt_clone');
    expect(detectSubNiche('apple style', 'generic')).toBe('apple_style');
    expect(detectSubNiche('cyberpunk', 'generic')).toBe('cyberpunk');
    expect(detectSubNiche('airbnb clone', 'generic')).toBe('airbnb_clone');
    expect(detectSubNiche('amazon clone', 'generic')).toBe('amazon_clone');
    expect(detectSubNiche('tesla style', 'generic')).toBe('tesla_style');
    
    // fallbacks
    expect(detectSubNiche('something else', 'generic')).toBe('generic');
  });
});

describe('Selection Helpers', () => {
  it('selectLayout returns correct layout', () => {
    expect(selectLayout('generic', 0, 'netflix_clone')).toBe('netflix-layout');
    expect(selectLayout('fintech', 0)).toBe('split-hero');
  });
  
  it('selectPalette returns correct palette', () => {
    expect(selectPalette('chatgpt_clone', 0).bg).toBe('#343541');
    expect(selectPalette('unknown_niche' as any, 0).primary).toBe('#6366f1'); // fallback
  });
  
  it('selectTypography returns correct typography', () => {
    expect(selectTypography('netflix_clone').heading).toBe('Bebas Neue');
    expect(selectTypography('cyberpunk').heading).toBe('Space Mono');
    expect(selectTypography('fashion_luxury').heading).toBe('Playfair Display');
    expect(selectTypography('creative_agency').heading).toBe('Syne');
    expect(selectTypography('generic').heading).toBe('Inter');
  });
});
