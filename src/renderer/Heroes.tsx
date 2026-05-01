import { type SiteBlueprint } from '../engine/types';

type NavProp = { onNav?: (p: string) => void };

// ── HERO SPLIT ─────────────────────────────────────────────────────────────
export const HeroSplit = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: bp.colors.bg, minHeight: '92vh', display: 'flex', alignItems: 'center', padding: '80px 24px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', width: '100%' }}>
      <div>
        <div style={{ display: 'inline-block', background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 50, padding: '6px 16px', fontSize: 12, fontWeight: 700, color: bp.colors.primary, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24 }}>{bp.industry.replace('_', ' ').toUpperCase()} PLATFORM</div>
        <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.05, color: bp.colors.text, marginBottom: 24, letterSpacing: '-1.5px' }}>{bp.copy.heroHeadline}</h1>
        <p style={{ fontSize: 18, color: bp.colors.muted, lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>{bp.copy.heroSub}</p>
        <div style={{ display: 'flex', gap: 16 }}>
          <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 50, padding: '14px 32px', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>{bp.copy.heroCTA}</button>
          <button onClick={() => onNav?.(bp.copy.navLinks[1]?.href || '/')} style={{ background: 'transparent', color: bp.colors.text, border: `1px solid ${bp.colors.border}`, borderRadius: 50, padding: '14px 32px', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>{bp.copy.heroSecondaryCTA}</button>
        </div>
      </div>
      <div style={{ background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 24, minHeight: 420, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', color: bp.colors.muted }}>
          <div style={{ width: 80, height: 80, background: bp.colors.primary, borderRadius: 20, margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36 }}>⚡</div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Live Preview</div>
        </div>
        <div style={{ position: 'absolute', top: 24, right: 24, background: bp.colors.primary, borderRadius: 12, padding: '8px 14px', fontSize: 12, color: '#fff', fontWeight: 700 }}>LIVE ●</div>
      </div>
    </div>
  </section>
);

// ── HERO CENTER ─────────────────────────────────────────────────────────────
export const HeroCenter = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: bp.colors.bg, minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: '20%', left: '30%', width: 400, height: 400, background: bp.colors.primary, borderRadius: '50%', filter: 'blur(120px)', opacity: 0.15, pointerEvents: 'none' }} />
    <div style={{ maxWidth: 860, position: 'relative' }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: bp.colors.primary, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 24 }}>{bp.copy.tagline}</div>
      <h1 style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.0, color: bp.colors.text, marginBottom: 28, letterSpacing: '-2px' }}>{bp.copy.heroHeadline}</h1>
      <p style={{ fontSize: 20, color: bp.colors.muted, lineHeight: 1.6, marginBottom: 48, maxWidth: 620, margin: '0 auto 48px' }}>{bp.copy.heroSub}</p>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 50, padding: '16px 40px', fontWeight: 800, fontSize: 17, cursor: 'pointer' }}>{bp.copy.heroCTA}</button>
        <button onClick={() => onNav?.(bp.copy.navLinks[1]?.href || '/')} style={{ background: 'transparent', color: bp.colors.muted, border: `1px solid ${bp.colors.border}`, borderRadius: 50, padding: '16px 40px', fontWeight: 600, fontSize: 17, cursor: 'pointer' }}>{bp.copy.heroSecondaryCTA}</button>
      </div>
    </div>
  </section>
);

// ── HERO DASHBOARD ──────────────────────────────────────────────────────────
export const HeroDashboard = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: bp.colors.bg, padding: '80px 24px 0' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: bp.colors.primary, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 20 }}>✦ Now in Public Beta</div>
      <h1 style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.05, color: bp.colors.text, marginBottom: 24, letterSpacing: '-2px' }}>{bp.copy.heroHeadline}</h1>
      <p style={{ fontSize: 19, color: bp.colors.muted, marginBottom: 40, maxWidth: 580, margin: '0 auto 40px' }}>{bp.copy.heroSub}</p>
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 60 }}>
        <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 10, padding: '14px 32px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>{bp.copy.heroCTA}</button>
        <button onClick={() => onNav?.(bp.copy.navLinks[1]?.href || '/')} style={{ background: bp.colors.surface, color: bp.colors.text, border: `1px solid ${bp.colors.border}`, borderRadius: 10, padding: '14px 32px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>{bp.copy.heroSecondaryCTA}</button>
      </div>
      <div style={{ background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: '20px 20px 0 0', padding: 24, minHeight: 280, display: 'grid', gridTemplateColumns: '240px 1fr', gap: 16, alignItems: 'start' }}>
        <div style={{ background: bp.colors.bg, borderRadius: 12, padding: 16, border: `1px solid ${bp.colors.border}` }}>
          {['Dashboard', 'Analytics', 'Reports', 'Settings'].map(t => (
            <div key={t} style={{ padding: '10px 14px', borderRadius: 8, marginBottom: 4, background: t === 'Dashboard' ? bp.colors.primary + '22' : 'transparent', color: t === 'Dashboard' ? bp.colors.primary : bp.colors.muted, fontWeight: 600, fontSize: 14 }}>{t}</div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          {[['Revenue', '$48,200', '↑ 12%'], ['Users', '8,430', '↑ 24%'], ['Conversion', '3.8%', '↑ 0.4%']].map(([l, v, d]) => (
            <div key={l} style={{ background: bp.colors.bg, border: `1px solid ${bp.colors.border}`, borderRadius: 12, padding: 16 }}>
              <div style={{ fontSize: 12, color: bp.colors.muted, marginBottom: 8 }}>{l}</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: bp.colors.text, marginBottom: 4 }}>{v}</div>
              <div style={{ fontSize: 12, color: '#22c55e', fontWeight: 700 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ── HERO PRODUCT ─────────────────────────────────────────────────────────────
export const HeroProduct = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: bp.colors.bg, minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
    <div style={{ width: '100%', maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '85vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '60px 60px' }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: bp.colors.muted, marginBottom: 20 }}>New Season</div>
          <h1 style={{ fontSize: 68, fontWeight: 900, lineHeight: 1.0, color: bp.colors.text, marginBottom: 28, letterSpacing: '-2px' }}>{bp.copy.heroHeadline}</h1>
          <p style={{ fontSize: 17, color: bp.colors.muted, marginBottom: 40, lineHeight: 1.6 }}>{bp.copy.heroSub}</p>
          <div style={{ display: 'flex', gap: 16 }}>
            <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: bp.colors.text, color: bp.colors.bg, border: 'none', borderRadius: 4, padding: '16px 36px', fontWeight: 800, fontSize: 15, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{bp.copy.heroCTA}</button>
            <button onClick={() => onNav?.(bp.copy.navLinks[1]?.href || '/')} style={{ background: 'transparent', color: bp.colors.text, border: `2px solid ${bp.colors.text}`, borderRadius: 4, padding: '16px 36px', fontWeight: 700, fontSize: 15, cursor: 'pointer', textTransform: 'uppercase' }}>{bp.copy.heroSecondaryCTA}</button>
          </div>
        </div>
      </div>
      <div style={{ background: `linear-gradient(135deg, ${bp.colors.surface}, ${bp.colors.bg})`, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 500 }}>
        <div style={{ textAlign: 'center', color: bp.colors.muted }}>
          <div style={{ fontSize: 100, marginBottom: 16 }}>{bp.nicheProfile?.emojiSet[0] || '✨'}</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: bp.colors.text }}>{bp.copy.brandName} Signature</div>
        </div>
      </div>
    </div>
  </section>
);

// ── HERO PERSONAL ────────────────────────────────────────────────────────────
export const HeroPersonal = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: bp.colors.bg, minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 24px 80px' }}>
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <div style={{ width: 80, height: 80, borderRadius: '50%', background: `linear-gradient(135deg, ${bp.colors.primary}, ${bp.colors.secondary})`, marginBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>{bp.nicheProfile?.emojiSet[0] || '🎨'}</div>
      <p style={{ fontSize: 18, color: bp.colors.primary, fontWeight: 700, marginBottom: 16 }}>👋 Hi, I'm {bp.copy.brandName}</p>
      <h1 style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.05, color: bp.colors.text, marginBottom: 24, letterSpacing: '-2px' }}>{bp.copy.heroHeadline}</h1>
      <p style={{ fontSize: 20, color: bp.colors.muted, lineHeight: 1.7, marginBottom: 48, maxWidth: 600 }}>{bp.copy.heroSub}</p>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 12, padding: '14px 32px', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>{bp.copy.heroCTA}</button>
        <button onClick={() => onNav?.(bp.copy.navLinks[bp.copy.navLinks.length - 1]?.href || '/')} style={{ background: 'transparent', color: bp.colors.text, border: `1px solid ${bp.colors.border}`, borderRadius: 12, padding: '14px 32px', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>{bp.copy.heroSecondaryCTA}</button>
      </div>
    </div>
  </section>
);

// ── HERO EMERGENCY ────────────────────────────────────────────────────────────
export const HeroEmergency = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: bp.colors.bg }}>
    <div style={{ background: '#dc2626', padding: '12px 24px', textAlign: 'center' }}>
      <span style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>🚨 24/7 Emergency Line: <strong>+1-800-MEDCARE</strong> — Always Available</span>
    </div>
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
      <div>
        <div style={{ display: 'inline-block', background: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: 50, padding: '6px 16px', fontSize: 12, fontWeight: 700, color: '#16a34a', marginBottom: 24 }}>✓ Accredited Professional</div>
        <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, color: bp.colors.text, marginBottom: 20, letterSpacing: '-1px' }}>{bp.copy.heroHeadline}</h1>
        <p style={{ fontSize: 18, color: bp.colors.muted, lineHeight: 1.7, marginBottom: 40 }}>{bp.copy.heroSub}</p>
        <div style={{ display: 'flex', gap: 14 }}>
          <button onClick={() => onNav?.('/appointments')} style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 8, padding: '14px 28px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>{bp.copy.heroCTA}</button>
          <button onClick={() => onNav?.('/contact')} style={{ background: 'transparent', color: bp.colors.primary, border: `2px solid ${bp.colors.primary}`, borderRadius: 8, padding: '14px 28px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>{bp.copy.heroSecondaryCTA}</button>
        </div>
      </div>
      <div style={{ background: bp.colors.surface, borderRadius: 20, padding: 32, border: `1px solid ${bp.colors.border}` }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: bp.colors.text, marginBottom: 20 }}>Quick Appointment</h3>
        {['Full Name', 'Phone Number', 'Service'].map(f => (
          <input key={f} placeholder={f} style={{ display: 'block', width: '100%', marginBottom: 12, padding: '12px 16px', borderRadius: 8, border: `1px solid ${bp.colors.border}`, background: bp.colors.bg, color: bp.colors.text, fontSize: 14, boxSizing: 'border-box' }} />
        ))}
        <button onClick={() => onNav?.('/appointments')} style={{ width: '100%', background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 8, padding: '14px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>Book Now</button>
      </div>
    </div>
  </section>
);

// ── HERO IMMERSIVE ────────────────────────────────────────────────────────────
export const HeroImmersive = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: `linear-gradient(180deg, ${bp.colors.bg} 0%, #000 100%)`, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at center, ${bp.colors.primary}33 0%, transparent 70%)`, pointerEvents: 'none' }} />
    <div style={{ maxWidth: 820, position: 'relative' }}>
      <div style={{ fontSize: 80, marginBottom: 24 }}>{bp.nicheProfile?.emojiSet[0] || '🌟'}</div>
      <h1 style={{ fontSize: 70, fontWeight: 900, lineHeight: 1.0, color: '#fff', marginBottom: 28, letterSpacing: '-2px' }}>{bp.copy.heroHeadline}</h1>
      <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)', marginBottom: 48, lineHeight: 1.6 }}>{bp.copy.heroSub}</p>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
        <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 50, padding: '16px 40px', fontWeight: 800, fontSize: 17, cursor: 'pointer' }}>{bp.copy.heroCTA}</button>
        <button onClick={() => onNav?.(bp.copy.navLinks[1]?.href || '/')} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 50, padding: '16px 40px', fontWeight: 600, fontSize: 17, cursor: 'pointer' }}>{bp.copy.heroSecondaryCTA}</button>
      </div>
    </div>
  </section>
);

// ── HERO EDITORIAL ────────────────────────────────────────────────────────────
export const HeroEditorial = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: bp.colors.bg, padding: '80px 24px 60px', borderBottom: `1px solid ${bp.colors.border}` }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: bp.colors.primary, marginBottom: 32 }}>FEATURED STORY</div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 60 }}>
        <div>
          <h1 style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.1, color: bp.colors.text, marginBottom: 24, letterSpacing: '-1px' }}>{bp.copy.heroHeadline}</h1>
          <p style={{ fontSize: 18, color: bp.colors.muted, lineHeight: 1.7, marginBottom: 32 }}>{bp.copy.heroSub}</p>
          <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: bp.colors.text, color: bp.colors.bg, border: 'none', padding: '12px 28px', fontWeight: 700, fontSize: 14, cursor: 'pointer', borderRadius: 4 }}>{bp.copy.heroCTA} →</button>
        </div>
        <div>
          <div style={{ background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 12, padding: 24 }}>
            <div style={{ fontSize: 12, color: bp.colors.muted, marginBottom: 16, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Latest Posts</div>
            {['AI is reshaping how we work', 'The future of remote collaboration', 'Building products that last'].map(t => (
              <div key={t} onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ padding: '12px 0', borderBottom: `1px solid ${bp.colors.border}`, fontSize: 14, fontWeight: 600, color: bp.colors.text, cursor: 'pointer' }}>{t} →</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ── HERO BENTO ────────────────────────────────────────────────────────────────
export const HeroBento = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: bp.colors.bg, padding: '80px 24px 60px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <h1 style={{ fontSize: 60, fontWeight: 900, lineHeight: 1.05, color: bp.colors.text, letterSpacing: '-2px', marginBottom: 20 }}>{bp.copy.heroHeadline}</h1>
        <p style={{ fontSize: 18, color: bp.colors.muted, maxWidth: 560, margin: '0 auto 36px' }}>{bp.copy.heroSub}</p>
        <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 12, padding: '14px 36px', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>{bp.copy.heroCTA}</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '200px 200px', gap: 16 }}>
        <div style={{ gridRow: '1 / 3', background: `linear-gradient(135deg, ${bp.colors.primary}22, ${bp.colors.secondary}22)`, border: `1px solid ${bp.colors.border}`, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', color: bp.colors.muted, fontSize: 14 }}>Main Feature Visual</div>
        </div>
        {['⚡ 10x Faster', '🔒 Secure', '📊 Analytics', '🤝 Integrations'].map(label => (
          <div key={label} style={{ background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, color: bp.colors.text }}>{label}</div>
        ))}
      </div>
    </div>
  </section>
);


// ── NEW NICHE AWARE HEROES ────────────────────────────────────────────────────

export const HeroStorefront = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: bp.colors.bg, padding: '40px 24px' }}>
    <div style={{ maxWidth: 1400, margin: '0 auto', background: bp.colors.surface, borderRadius: 24, minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: bp.colors.primary, borderRadius: '50%', filter: 'blur(100px)', opacity: 0.2 }} />
      <div style={{ textAlign: 'center', zIndex: 1, padding: 40 }}>
        <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: bp.colors.primary, marginBottom: 24 }}>New Collection</div>
        <h1 style={{ fontSize: 72, fontWeight: 300, fontFamily: 'serif', color: bp.colors.text, marginBottom: 24, letterSpacing: '-1px' }}>{bp.copy.heroHeadline}</h1>
        <p style={{ fontSize: 18, color: bp.colors.muted, maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.6 }}>{bp.copy.heroSub}</p>
        <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: bp.colors.text, color: bp.colors.bg, border: 'none', padding: '16px 48px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', borderRadius: 4 }}>{bp.copy.heroCTA}</button>
      </div>
    </div>
  </section>
);

export const HeroAthletic = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: bp.colors.bg, minHeight: '90vh', display: 'flex', alignItems: 'center', padding: '60px 24px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
      <h1 style={{ fontSize: '8vw', fontWeight: 900, textTransform: 'uppercase', fontStyle: 'italic', lineHeight: 0.9, color: bp.colors.text, margin: 0, letterSpacing: '-2px' }}>
        {bp.copy.heroHeadline}
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, alignItems: 'end' }}>
        <div>
          <p style={{ fontSize: 18, color: bp.colors.muted, marginBottom: 32, fontWeight: 500 }}>{bp.copy.heroSub}</p>
          <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: bp.colors.primary, color: '#fff', border: 'none', padding: '16px 40px', fontSize: 18, fontWeight: 900, textTransform: 'uppercase', fontStyle: 'italic', cursor: 'pointer', clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}>
            {bp.copy.heroCTA}
          </button>
        </div>
        <div style={{ height: 400, background: bp.colors.surface, border: `2px solid ${bp.colors.text}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 120 }}>
          {bp.nicheProfile?.emojiSet[0] || '🔥'}
        </div>
      </div>
    </div>
  </section>
);

export const HeroTech = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: '#0f172a', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
    {/* Grid background */}
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5 }} />
    <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'inline-block', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)', borderRadius: 50, padding: '8px 16px', color: '#38bdf8', fontSize: 13, fontWeight: 600, marginBottom: 32 }}>
        ✨ Powered by Next-Gen Technology
      </div>
      <h1 style={{ fontSize: 72, fontWeight: 800, color: '#f8fafc', letterSpacing: '-2px', marginBottom: 24, lineHeight: 1.1 }}>{bp.copy.heroHeadline}</h1>
      <p style={{ fontSize: 20, color: '#94a3b8', maxWidth: 600, margin: '0 auto 48px', lineHeight: 1.6 }}>{bp.copy.heroSub}</p>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
        <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: '#38bdf8', color: '#0f172a', border: 'none', borderRadius: 8, padding: '14px 32px', fontWeight: 700, fontSize: 16, cursor: 'pointer', boxShadow: '0 0 20px rgba(56,189,248,0.4)' }}>{bp.copy.heroCTA}</button>
      </div>
    </div>
  </section>
);

export const HeroLuxury = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: bp.colors.bg, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', position: 'relative' }}>
    <div style={{ position: 'absolute', inset: 24, border: `1px solid ${bp.colors.border}`, pointerEvents: 'none' }} />
    <div style={{ maxWidth: 800, textAlign: 'center' }}>
      <h1 style={{ fontSize: 80, fontWeight: 400, fontFamily: 'serif', color: bp.colors.text, marginBottom: 32, lineHeight: 1.1 }}>{bp.copy.heroHeadline}</h1>
      <p style={{ fontSize: 16, color: bp.colors.muted, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 48 }}>{bp.copy.heroSub}</p>
      <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: 'transparent', color: bp.colors.text, border: `1px solid ${bp.colors.text}`, padding: '16px 40px', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}>{bp.copy.heroCTA}</button>
    </div>
  </section>
);

export const HeroWarm = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: bp.colors.surface, minHeight: '85vh', display: 'flex', alignItems: 'center', padding: '80px 24px' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
      <div>
        <h1 style={{ fontSize: 64, fontWeight: 800, color: bp.colors.text, marginBottom: 24, lineHeight: 1.1, letterSpacing: '-1px' }}>{bp.copy.heroHeadline}</h1>
        <p style={{ fontSize: 20, color: bp.colors.muted, marginBottom: 40, lineHeight: 1.6 }}>{bp.copy.heroSub}</p>
        <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 50, padding: '16px 36px', fontSize: 16, fontWeight: 700, cursor: 'pointer', boxShadow: `0 8px 24px ${bp.colors.primary}40` }}>{bp.copy.heroCTA}</button>
      </div>
      <div style={{ height: 500, background: bp.colors.bg, borderRadius: 40, border: `8px solid ${bp.colors.primary}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 120 }}>
        {bp.nicheProfile?.emojiSet[0] || '☕'}
      </div>
    </div>
  </section>
);

export const HeroMinimalZen = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: bp.colors.bg, padding: '120px 24px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ maxWidth: 700 }}>
        <h1 style={{ fontSize: 56, fontWeight: 300, color: bp.colors.text, marginBottom: 32, lineHeight: 1.2 }}>{bp.copy.heroHeadline}</h1>
        <p style={{ fontSize: 18, color: bp.colors.muted, marginBottom: 48, lineHeight: 1.8, fontWeight: 300 }}>{bp.copy.heroSub}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24, height: 400 }}>
        <div style={{ background: bp.colors.surface, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 60 }}>
          {bp.nicheProfile?.emojiSet[0] || '🛋️'}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ flex: 1, background: bp.colors.surface, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40 }}>{bp.nicheProfile?.emojiSet[1] || '✨'}</div>
          <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: bp.colors.text, color: bp.colors.bg, border: 'none', borderRadius: 16, padding: '24px', fontSize: 16, fontWeight: 500, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{bp.copy.heroCTA}</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  </section>
);

// ── ADVANCED CLONES ─────────────────────────────────────────────────────────

export const HeroNetflix = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: `linear-gradient(to top, #141414, transparent 50%), linear-gradient(to right, #000 0%, transparent 60%), url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '85vh', display: 'flex', alignItems: 'flex-end', padding: '100px 48px' }}>
    <div style={{ maxWidth: 800, position: 'relative', zIndex: 10 }}>
      <h1 style={{ fontSize: '6vw', fontWeight: 900, color: '#fff', textTransform: 'uppercase', lineHeight: 1, letterSpacing: '2px', marginBottom: 24, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>{bp.copy.heroHeadline}</h1>
      <p style={{ fontSize: 24, color: '#fff', fontWeight: 500, marginBottom: 32, textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>{bp.copy.heroSub}</p>
      <div style={{ display: 'flex', gap: 16 }}>
        <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: '#fff', color: '#000', border: 'none', borderRadius: 4, padding: '12px 32px', fontSize: 18, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>▶ Play</button>
        <button onClick={() => onNav?.(bp.copy.navLinks[1]?.href || '/')} style={{ background: 'rgba(109, 109, 110, 0.7)', color: '#fff', border: 'none', borderRadius: 4, padding: '12px 32px', fontSize: 18, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>ⓘ More Info</button>
      </div>
    </div>
  </section>
);

export const HeroChatGPT = ({ bp }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: bp.colors.bg, minHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
    <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
      <span style={{ fontSize: 32 }}>{bp.nicheProfile?.emojiSet[0] || '🤖'}</span>
    </div>
    <h1 style={{ fontSize: 36, fontWeight: 600, color: bp.colors.text, marginBottom: 40, textAlign: 'center' }}>How can I help you today?</h1>
    <div style={{ width: '100%', maxWidth: 768, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 40 }}>
      {['Plan a trip', 'Write a script', 'Summarize an article', 'Debug this code'].map((text, i) => (
        <div key={i} style={{ padding: 16, background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 12, color: bp.colors.text, fontSize: 14, cursor: 'pointer' }}>
          {text}
        </div>
      ))}
    </div>
    <div style={{ width: '100%', maxWidth: 768, position: 'relative' }}>
      <input type="text" placeholder="Message ChatGPT..." style={{ width: '100%', padding: '16px 48px 16px 24px', background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 24, color: bp.colors.text, fontSize: 16, outline: 'none', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }} />
      <button style={{ position: 'absolute', right: 12, top: 12, background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>↑</button>
    </div>
  </section>
);

export const HeroApple = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '100px 24px 0', overflow: 'hidden' }}>
    <div style={{ textAlign: 'center', zIndex: 10 }}>
      <h1 style={{ fontSize: 72, fontWeight: 600, color: '#f5f5f7', letterSpacing: '-0.02em', marginBottom: 12 }}>{bp.copy.heroHeadline}</h1>
      <p style={{ fontSize: 28, color: '#86868b', fontWeight: 400, marginBottom: 24 }}>{bp.copy.heroSub}</p>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
        <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: '#0071e3', color: '#fff', border: 'none', borderRadius: 20, padding: '12px 24px', fontSize: 17, fontWeight: 400, cursor: 'pointer' }}>Buy</button>
        <button onClick={() => onNav?.(bp.copy.navLinks[1]?.href || '/')} style={{ background: 'transparent', color: '#2997ff', border: 'none', fontSize: 17, fontWeight: 400, cursor: 'pointer' }}>Learn more {'>'}</button>
      </div>
    </div>
    <div style={{ marginTop: 'auto', width: '100%', maxWidth: 1000, height: 400, background: 'linear-gradient(to top, #1d1d1f, #000)', borderTopLeftRadius: 100, borderTopRightRadius: 100, position: 'relative' }}>
      <div style={{ position: 'absolute', top: -50, left: '50%', transform: 'translateX(-50%)', fontSize: 180 }}>{bp.nicheProfile?.emojiSet[0] || '📱'}</div>
    </div>
  </section>
);

export const HeroCyberpunk = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: bp.colors.bg, minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px', position: 'relative', overflow: 'hidden', borderBottom: `2px solid ${bp.colors.primary}` }}>
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 255, 65, 0.05) 50%)', backgroundSize: '100% 4px', pointerEvents: 'none' }} />
    <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'inline-block', background: bp.colors.text, color: bp.colors.bg, padding: '4px 12px', fontSize: 14, fontWeight: 900, marginBottom: 24, textTransform: 'uppercase' }}>SYSTEM ONLINE</div>
      <h1 style={{ fontSize: '8vw', fontWeight: 900, color: bp.colors.primary, textTransform: 'uppercase', lineHeight: 0.9, marginBottom: 24, textShadow: `4px 4px 0px ${bp.colors.secondary}` }}>{bp.copy.heroHeadline}</h1>
      <p style={{ fontSize: 24, color: '#fff', maxWidth: 600, marginBottom: 48, fontFamily: 'monospace' }}>{'>'} {bp.copy.heroSub}_</p>
      <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: 'transparent', color: bp.colors.primary, border: `2px solid ${bp.colors.primary}`, padding: '20px 48px', fontSize: 20, fontWeight: 900, textTransform: 'uppercase', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
        <span style={{ position: 'relative', zIndex: 2 }}>{bp.copy.heroCTA}</span>
        <div style={{ position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%', background: bp.colors.primary, opacity: 0.2, transition: '0.3s' }} />
      </button>
    </div>
  </section>
);

export const HeroAirbnb = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ padding: '24px 24px 80px', background: '#fff' }}>
    <div style={{ background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '70vh', borderRadius: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <h1 style={{ fontSize: 56, fontWeight: 700, color: '#fff', marginBottom: 40, textAlign: 'center' }}>{bp.copy.heroHeadline}</h1>
      
      {/* Search Bar */}
      <div style={{ background: '#fff', borderRadius: 50, display: 'flex', alignItems: 'center', padding: '10px 10px 10px 32px', boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', paddingRight: 24, borderRight: '1px solid #ddd' }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#222' }}>Where</span>
          <input type="text" placeholder="Search destinations" style={{ border: 'none', outline: 'none', fontSize: 14, background: 'transparent' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '0 24px', borderRight: '1px solid #ddd' }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#222' }}>Check in</span>
          <span style={{ fontSize: 14, color: '#717171' }}>Add dates</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '0 24px' }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#222' }}>Who</span>
          <span style={{ fontSize: 14, color: '#717171' }}>Add guests</span>
        </div>
        <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: '#ff385c', color: '#fff', border: 'none', borderRadius: 50, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          🔍
        </button>
      </div>
    </div>
  </section>
);

export const HeroAmazon = ({ bp }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ background: '#eaeded', paddingBottom: 40 }}>
    <div style={{ background: '#232f3e', padding: '10px 20px', display: 'flex', gap: 16, color: '#fff', fontSize: 14 }}>
      <span>☰ All</span>
      <span>Today's Deals</span>
      <span>Customer Service</span>
      <span>Registry</span>
      <span>Gift Cards</span>
      <span>Sell</span>
    </div>
    <div style={{ height: 300, background: 'linear-gradient(to bottom, rgba(0,0,0,0) 50%, #eaeded 100%), url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'top' }} />
    <div style={{ maxWidth: 1500, margin: '-120px auto 0', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, padding: '0 20px', position: 'relative', zIndex: 10 }}>
      {[1,2,3,4].map(i => (
        <div key={i} style={{ background: '#fff', padding: 20, height: 400 }}>
          <h2 style={{ fontSize: 21, fontWeight: 700, color: '#0f1111', marginBottom: 10 }}>Deal of the Day</h2>
          <div style={{ height: 280, background: '#f7f7f7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 60 }}>{bp.nicheProfile?.emojiSet[i] || '📦'}</div>
          <button style={{ background: 'transparent', border: 'none', color: '#007185', fontSize: 13, marginTop: 16, cursor: 'pointer' }}>See more</button>
        </div>
      ))}
    </div>
  </section>
);

export const HeroTesla = ({ bp, onNav }: { bp: SiteBlueprint } & NavProp) => (
  <section style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '100px 24px 60px' }}>
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -1 }} />
    <div style={{ textAlign: 'center', color: '#171a20' }}>
      <h1 style={{ fontSize: 40, fontWeight: 600, letterSpacing: '0.05em', marginBottom: 8 }}>{bp.copy.heroHeadline}</h1>
      <p style={{ fontSize: 14, fontWeight: 500 }}>{bp.copy.heroSub}</p>
    </div>
    <div style={{ display: 'flex', gap: 24, flexDirection: 'row' }}>
      <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: '#f4f4f4', color: '#393c41', border: 'none', borderRadius: 4, width: 264, height: 40, fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>Order Now</button>
      <button onClick={() => onNav?.(bp.copy.navLinks[1]?.href || '/')} style={{ background: 'rgba(23, 26, 32, 0.8)', color: '#fff', border: 'none', borderRadius: 4, width: 264, height: 40, fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>Demo Drive</button>
    </div>
  </section>
);
