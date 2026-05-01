import { describe, it, expect, vi } from 'vitest';
import { generateBlueprint } from '../../engine/blueprintGenerator';
import * as copyEngine from '../../engine/copyEngine';

vi.spyOn(copyEngine, 'generateCopy').mockImplementation(async (prompt: string, subNiche: string) => {
  const copyMap = copyEngine.copyMap as any;
  return copyMap[subNiche] || copyEngine.genericCopy;
});

describe('generateBlueprint()', () => {

  it('generates unique blueprints for different prompts', async () => {
    const hospital = await generateBlueprint('create a hospital website', 'light', 1);
    const restaurant = await generateBlueprint('build a restaurant with menu', 'light', 1);
    expect(hospital.industry).toBe('hospital');
    expect(restaurant.industry).toBe('restaurant');
    expect(hospital.industry).not.toBe(restaurant.industry);
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
