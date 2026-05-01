import { describe, it, expect } from 'vitest';
import { detectIndustry } from '../../engine/promptAnalyzer';

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
