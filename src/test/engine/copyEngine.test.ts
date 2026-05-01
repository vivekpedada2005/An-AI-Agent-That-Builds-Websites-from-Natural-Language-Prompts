import { describe, it, expect, vi } from 'vitest';
import { generateCopy } from '../../engine/copyEngine';

vi.mock('@google/genai', () => {
  const mockGenerateContent = vi.fn().mockResolvedValue({
    text: JSON.stringify({
      brandName: "AI Brand",
      tagline: "AI Tagline",
      heroHeadline: "AI Headline",
      heroSub: "AI Sub",
      heroCTA: "AI CTA",
      heroSecondaryCTA: "AI CTA 2",
      footerTagline: "AI Footer",
      navLinks: [{ label: "Home", href: "/" }]
    })
  });
  class MockGoogleGenAI {
    models = { generateContent: mockGenerateContent };
  }
  return {
    GoogleGenAI: MockGoogleGenAI,
    Type: { OBJECT: 'object', STRING: 'string', ARRAY: 'array' }
  };
});

describe('copyEngine', () => {
  it('returns generic copy if no API key is provided', async () => {
    // Save original env
    const originalEnv = import.meta.env.VITE_GEMINI_API_KEY;
    import.meta.env.VITE_GEMINI_API_KEY = '';
    
    const copy = await generateCopy('build a hospital website', 'hospital_general');
    expect(copy.brandName).toBe('CarePlus'); // Fallback from copyMap
    
    // Restore
    import.meta.env.VITE_GEMINI_API_KEY = originalEnv;
  });

  it('uses AI to generate copy when API key is valid', async () => {
    // Force a valid key
    const originalEnv = import.meta.env.VITE_GEMINI_API_KEY;
    import.meta.env.VITE_GEMINI_API_KEY = 'valid_key';
    
    const copy = await generateCopy('named "SuperCorp"', 'saas_generic');
    expect(copy.brandName).toBe('SuperCorp'); // Name extracted from prompt overrides AI output
    expect(copy.heroHeadline).toBe('AI Headline'); // From mock
    
    // Restore
    import.meta.env.VITE_GEMINI_API_KEY = originalEnv;
  });
});
