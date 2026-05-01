import { useState, useEffect } from 'react';
import { Wand2, ArrowRight, Sparkles } from 'lucide-react';
import { useForgeStore } from '../../store/useForgeStore';
import { generateBlueprint } from '../../engine/blueprintGenerator';
import { detectIndustry } from '../../engine/promptAnalyzer';

const EXAMPLES = [
  { label: 'Sneakers', prompt: 'Build a hype sneaker drops and streetwear store' },
  { label: 'Beauty', prompt: 'Create a luxury organic skincare and cosmetics shop' },
  { label: 'Gadgets', prompt: 'Build a tech gadget and electronics store' },
  { label: 'Fine Dining', prompt: 'Create a luxury fine dining restaurant website' },
  { label: 'Bookstore', prompt: 'Build a bookstore website with book listings' },
  { label: 'AI SaaS', prompt: 'Build an AI productivity SaaS platform website' },
  { label: 'Emergency', prompt: 'Create a 24/7 emergency hospital and healthcare clinic' },
  { label: 'Minimal Fashion', prompt: 'Build a minimal aesthetic fashion store' },
];

export const Hero = () => {
  const [prompt, setPrompt] = useState('');
  const [phIdx, setPhIdx] = useState(0);
  const [detectedLabel, setDetectedLabel] = useState('');
  const { createProject, setAppState, isGenerating, setIsGenerating, themeMode } = useForgeStore();

  useEffect(() => {
    const t = setInterval(() => setPhIdx(i => (i + 1) % EXAMPLES.length), 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!prompt.trim()) { setDetectedLabel(''); return; }
    const industry = detectIndustry(prompt);
    const label = industry.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase());
    setDetectedLabel(industry === 'generic' ? '' : label);
  }, [prompt]);

  const handleGenerate = async () => {
    const trimmed = prompt.trim();
    if (!trimmed || isGenerating) return;

    if (!import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY === 'your_gemini_api_key_here') {
      alert("WARNING: You haven't added a Google Gemini API Key to your .env file! The AI cannot generate relevant copy, so it will fall back to the generic 'Build Something Amazing' text. Please add your API key to .env for AI generation.");
    }

    setIsGenerating(true);
    try {
      const seed = Math.floor(Math.random() * 999);
      const bp = await generateBlueprint(trimmed, themeMode, seed);
      createProject(trimmed, bp);
      setAppState('generator');
    } catch (e: any) {
      console.error(e);
      alert(`Generation Failed: ${e.message || 'Unknown error'}`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section style={{ minHeight: '92vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle gradient blobs */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: 600, height: 500, background: 'radial-gradient(ellipse, rgba(79,70,229,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(14,165,233,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ textAlign: 'center', maxWidth: 860, position: 'relative', zIndex: 1 }}>

        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#f0f0fe', border: '1px solid #c7d2fe', borderRadius: 50, padding: '6px 18px', fontSize: 13, fontWeight: 700, color: '#4f46e5', marginBottom: 32 }}>
          <Sparkles size={14} />
          50+ Micro-Niches • Custom Design DNA • Unique Every Time
        </div>

        {/* Headline */}
        <h1 style={{ fontSize: 68, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-3px', marginBottom: 24, color: '#111827' }}>
          Describe it.<br />
          <span style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #0ea5e9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline-block' }}>
            We build it.
          </span>
        </h1>

        {/* Sub */}
        <p style={{ fontSize: 18, color: '#6b7280', marginBottom: 48, lineHeight: 1.7, maxWidth: 580, margin: '0 auto 48px' }}>
          Sneaker stores, luxury beauty, tech gadgets, fine dining — describe any website and get a fully unique, highly tailored multi-page site.
        </p>

        {/* Input Box */}
        <div style={{ position: 'relative', maxWidth: 780, margin: '0 auto 24px', background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 20, padding: 6, display: 'flex', gap: 8, boxShadow: '0 4px 24px rgba(79,70,229,0.08), 0 1px 4px rgba(0,0,0,0.06)' }}>
          <textarea
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleGenerate(); } }}
            placeholder={EXAMPLES[phIdx].prompt}
            rows={2}
            style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#111827', fontSize: 16, padding: '14px 18px', fontFamily: 'inherit', resize: 'none', lineHeight: 1.5 }}
          />
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            style={{ background: 'linear-gradient(135deg, #4f46e5, #0ea5e9)', color: '#fff', border: 'none', borderRadius: 14, padding: '14px 28px', fontWeight: 800, fontSize: 15, cursor: prompt.trim() && !isGenerating ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap', opacity: !prompt.trim() ? 0.5 : 1, alignSelf: 'flex-end' }}
          >
            <Wand2 size={17} />
            {isGenerating ? 'Building...' : 'Generate'}
          </button>
        </div>

        {/* Live detection badge */}
        {detectedLabel && (
          <div style={{ marginBottom: 20 }}>
            <span style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 50, padding: '5px 16px', fontSize: 13, color: '#16a34a', fontWeight: 700 }}>
              ✓ Detected: {detectedLabel}
            </span>
          </div>
        )}

        {/* Example chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
          {EXAMPLES.map(ex => (
            <button
              key={ex.label}
              onClick={() => setPrompt(ex.prompt)}
              style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 50, padding: '8px 18px', color: '#374151', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}
            >
              <ArrowRight size={11} /> {ex.label}
            </button>
          ))}
        </div>

        {/* Social proof */}
        <div style={{ marginTop: 56, display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          {[['👟', 'Sneakers'], ['✨', 'Beauty'], ['💻', 'Tech'], ['🍽️', 'Fine Dining'], ['💼', 'AI SaaS'], ['🎨', 'Portfolio']].map(([icon, label]) => (
            <div key={label as string} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, marginBottom: 4 }}>{icon}</div>
              <div style={{ fontSize: 12, color: '#9ca3af', fontWeight: 600 }}>{label as string}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
