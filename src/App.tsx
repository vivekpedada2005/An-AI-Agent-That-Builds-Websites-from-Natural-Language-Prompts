import './index.css';
import { useForgeStore } from './store/useForgeStore';
import { Hero } from './components/landing/Hero';
import { Dashboard } from './components/dashboard/Dashboard';

const TOOL_NAME = 'Prompt to Website';

const LandingNav = () => (
  <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid #e2e8f0', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, #4f46e5, #0ea5e9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>✨</div>
      <span style={{ fontWeight: 900, fontSize: 18, color: '#111827', letterSpacing: '-0.5px' }}>{TOOL_NAME}</span>
    </div>
    <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
      {['Features', 'Industries', 'Examples'].map(l => (
        <span key={l} style={{ color: '#6b7280', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>{l}</span>
      ))}
      <button style={{ background: 'linear-gradient(135deg, #4f46e5, #0ea5e9)', border: 'none', color: '#fff', borderRadius: 50, padding: '9px 22px', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
        Try Free →
      </button>
    </div>
  </nav>
);

const LandingFeatures = () => (
  <section style={{ padding: '96px 24px', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <h2 style={{ fontSize: 40, fontWeight: 900, color: '#111827', marginBottom: 12, letterSpacing: '-1px' }}>
          Why {TOOL_NAME}?
        </h2>
        <p style={{ color: '#6b7280', fontSize: 18 }}>Not just another template generator.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
        {[
          { icon: '🎯', title: '50+ Micro-Niches Detected', desc: 'Luxury beauty, sneaker drops, fine dining, tech gadgets — intelligently identified from your prompt.' },
          { icon: '🎨', title: 'Niche Design DNA', desc: 'Dynamic palettes, typography, and sections specifically tailored to match the EXACT niche.' },
          { icon: '✍️', title: 'Real Copywriting Engine', desc: 'Industry-specific headlines, CTAs, and taglines. Never lorem ipsum. Never generic placeholder text.' },
          { icon: '🔗', title: 'Every Button Works', desc: 'All nav links, CTAs, and internal buttons navigate to real pages with unique content.' },
          { icon: '💾', title: 'Export & Publish', desc: 'Download your full project or publish to a live URL with one click.' },
          { icon: '⚡', title: 'Instant Generation', desc: 'Your website is ready in under 2 seconds. No API calls, no waiting, no hallucinations.' },
        ].map(f => (
          <div key={f.title} style={{ padding: 32, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
            <h3 style={{ fontSize: 17, fontWeight: 800, color: '#111827', marginBottom: 10 }}>{f.title}</h3>
            <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LandingFooter = () => (
  <footer style={{ background: '#111827', padding: '48px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
    <div>
      <div style={{ fontWeight: 900, fontSize: 17, color: '#fff', marginBottom: 6 }}>{TOOL_NAME}</div>
      <div style={{ color: '#6b7280', fontSize: 13 }}>Generate beautiful websites from a single sentence.</div>
    </div>
    <div style={{ color: '#4b5563', fontSize: 13 }}>© {new Date().getFullYear()} {TOOL_NAME}. All rights reserved.</div>
  </footer>
);

function App() {
  const { appState } = useForgeStore();
  if (appState === 'generator') return <Dashboard />;
  return (
    <div style={{ background: '#ffffff', color: '#111827', minHeight: '100vh' }}>
      <LandingNav />
      <div style={{ paddingTop: 64 }}>
        <Hero />
        <LandingFeatures />
        <LandingFooter />
      </div>
    </div>
  );
}

export default App;
