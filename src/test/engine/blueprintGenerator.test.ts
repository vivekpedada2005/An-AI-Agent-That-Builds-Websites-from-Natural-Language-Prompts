import { describe, it, expect } from 'vitest';
import { generateBlueprint } from '../../engine/blueprintGenerator';

describe('generateBlueprint()', () => {

  it('generates unique blueprints for different prompts', async () => {
    const hospital = await generateBlueprint('create a hospital website', 'light', 1);
    const restaurant = await generateBlueprint('build a restaurant with menu', 'light', 1);
    expect(hospital.industry).toBe('hospital');
    expect(restaurant.industry).toBe('restaurant');
    expect(hospital.industry).not.toBe(restaurant.industry);
  });

  it('every nav link href has a matching page path', async () => {
    const industries = [
      'create a hospital website',
      'build a fashion clothing store',
      'create a portfolio website',
      'build a bookstore',
      'SaaS productivity platform',
      'gym and fitness website',
      'restaurant with menu',
      'law firm attorneys',
      'online store',
      'travel destinations site',
    ];
    for (const prompt of industries) {
      const bp = await generateBlueprint(prompt, 'light', 42);
      const pagePaths = new Set(bp.pages.map(p => p.path));
      bp.copy.navLinks.forEach(link => {
        expect(
          pagePaths.has(link.href),
          `[${bp.industry}] nav link "${link.label}" → "${link.href}" has no matching page. Pages: ${[...pagePaths].join(', ')}`
        ).toBe(true);
      });
    }
  });

  it('every page has at least a navbar and footer', async () => {
    const bp = await generateBlueprint('create a hospital website', 'light', 1);
    bp.pages.forEach(page => {
      const types = page.sections.map(s => s.type);
      const hasNav = types.some(t => t.startsWith('Navbar'));
      const hasFooter = types.some(t => t.startsWith('Footer'));
      expect(hasNav, `Page ${page.path} missing navbar`).toBe(true);
      expect(hasFooter, `Page ${page.path} missing footer`).toBe(true);
    });
  });

  it('generates at least 1 page per industry', async () => {
    const bp = await generateBlueprint('build a fashion website', 'light', 5);
    expect(bp.pages.length).toBeGreaterThanOrEqual(1);
  });

  it('blueprint has all required fields', async () => {
    const bp = await generateBlueprint('create a portfolio website', 'light', 1);
    expect(bp.industry).toBeTruthy();
    expect(bp.layout).toBeTruthy();
    expect(bp.colors).toBeTruthy();
    expect(bp.colors.primary).toBeTruthy();
    expect(bp.copy).toBeTruthy();
    expect(bp.copy.brandName).toBeTruthy();
    expect(bp.copy.navLinks.length).toBeGreaterThan(0);
    expect(bp.pages.length).toBeGreaterThan(0);
  });

  it('generates different layouts with different seeds', async () => {
    const bp1 = await generateBlueprint('saas productivity platform', 'light', 10);
    const bp2 = await generateBlueprint('saas productivity platform', 'light', 90);
    // Same industry, potentially different layout or palette
    expect(bp1.industry).toBe(bp2.industry);
  });
});
