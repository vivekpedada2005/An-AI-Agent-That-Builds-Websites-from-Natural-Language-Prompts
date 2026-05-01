import { type SiteBlueprint } from '../engine/types';

// Navbar Components
const NavbarTransparent = ({ bp, onNav, cur }: { bp: SiteBlueprint, onNav: (p: string) => void, cur: string }) => (
  <nav style={{ background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(20px)', borderBottom: `1px solid ${bp.colors.border}`, position: 'sticky', top: 0, zIndex: 50 }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
      <span style={{ fontSize: 22, fontWeight: 800, color: bp.colors.primary, letterSpacing: '-0.5px' }}>{bp.copy.brandName}</span>
      <div style={{ display: 'flex', gap: 32 }}>
        {bp.copy.navLinks.map(l => (
          <button key={l.href} onClick={() => onNav(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: cur === l.href ? bp.colors.primary : bp.colors.muted, fontWeight: 500, fontSize: 15 }}>{l.label}</button>
        ))}
      </div>
      <button style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 50, padding: '10px 22px', fontWeight: 700, cursor: 'pointer', fontSize: 14 }}>{bp.copy.heroCTA}</button>
    </div>
  </nav>
);

const NavbarDark = ({ bp, onNav, cur }: { bp: SiteBlueprint, onNav: (p: string) => void, cur: string }) => (
  <nav style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'sticky', top: 0, zIndex: 50 }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
      <span style={{ fontSize: 20, fontWeight: 900, color: '#fff', letterSpacing: '-1px' }}>{bp.copy.brandName}</span>
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {bp.copy.navLinks.map(l => (
          <button key={l.href} onClick={() => onNav(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: cur === l.href ? '#fff' : '#888', fontWeight: 500, fontSize: 14 }}>{l.label}</button>
        ))}
        <button style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 700, cursor: 'pointer', fontSize: 13 }}>{bp.copy.heroCTA}</button>
      </div>
    </div>
  </nav>
);

const NavbarMinimal = ({ bp, onNav, cur }: { bp: SiteBlueprint, onNav: (p: string) => void, cur: string }) => (
  <nav style={{ background: bp.colors.bg, borderBottom: `1px solid ${bp.colors.border}`, position: 'sticky', top: 0, zIndex: 50 }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
      <span style={{ fontSize: 18, fontWeight: 700, color: bp.colors.text, letterSpacing: '-0.3px' }}>{bp.copy.brandName}</span>
      <div style={{ display: 'flex', gap: 36 }}>
        {bp.copy.navLinks.map(l => (
          <button key={l.href} onClick={() => onNav(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: cur === l.href ? bp.colors.primary : bp.colors.muted, fontWeight: 500, fontSize: 14, borderBottom: cur === l.href ? `2px solid ${bp.colors.primary}` : '2px solid transparent', paddingBottom: 2 }}>{l.label}</button>
        ))}
      </div>
      <button style={{ background: 'transparent', color: bp.colors.primary, border: `2px solid ${bp.colors.primary}`, borderRadius: 50, padding: '8px 20px', fontWeight: 700, cursor: 'pointer', fontSize: 13 }}>Contact</button>
    </div>
  </nav>
);

const NavbarEcommerce = ({ bp, onNav }: { bp: SiteBlueprint, onNav: (p: string) => void }) => (
  <nav style={{ background: bp.colors.bg, borderBottom: `1px solid ${bp.colors.border}`, position: 'sticky', top: 0, zIndex: 50 }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
      <span style={{ fontSize: 24, fontWeight: 900, color: bp.colors.text, letterSpacing: '-1px' }}>{bp.copy.brandName}</span>
      <div style={{ display: 'flex', gap: 32 }}>
        {bp.copy.navLinks.map(l => (
          <button key={l.href} onClick={() => onNav(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: bp.colors.text, fontWeight: 600, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{l.label}</button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        <button style={{ background: 'none', border: `1px solid ${bp.colors.border}`, borderRadius: 8, padding: '8px 16px', color: bp.colors.text, cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>🛒 Cart (0)</button>
      </div>
    </div>
  </nav>
);

const NavbarEnterprise = ({ bp, onNav, cur }: { bp: SiteBlueprint, onNav: (p: string) => void, cur: string }) => (
  <nav style={{ background: bp.colors.bg, borderBottom: `3px solid ${bp.colors.primary}`, position: 'sticky', top: 0, zIndex: 50 }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 36, height: 36, background: bp.colors.primary, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#fff', fontWeight: 900, fontSize: 16 }}>+</span>
        </div>
        <span style={{ fontSize: 18, fontWeight: 800, color: bp.colors.text }}>{bp.copy.brandName}</span>
      </div>
      <div style={{ display: 'flex', gap: 32 }}>
        {bp.copy.navLinks.map(l => (
          <button key={l.href} onClick={() => onNav(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: cur === l.href ? bp.colors.primary : bp.colors.muted, fontWeight: 600, fontSize: 14 }}>{l.label}</button>
        ))}
      </div>
      <button style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 6, padding: '10px 24px', fontWeight: 700, cursor: 'pointer', fontSize: 14 }}>{bp.copy.heroCTA}</button>
    </div>
  </nav>
);

const NavbarCreator = ({ bp, onNav }: { bp: SiteBlueprint, onNav: (p: string) => void }) => (
  <nav style={{ position: 'fixed', top: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 100, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 50, padding: '10px 28px', display: 'flex', alignItems: 'center', gap: 32 }}>
    <span style={{ fontSize: 16, fontWeight: 800, color: bp.colors.text }}>{bp.copy.brandName}</span>
    {bp.copy.navLinks.map(l => (
      <button key={l.href} onClick={() => onNav(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: bp.colors.muted, fontWeight: 500, fontSize: 14 }}>{l.label}</button>
    ))}
  </nav>
);

const NavbarFloating = ({ bp, onNav }: { bp: SiteBlueprint, onNav: (p: string) => void }) => (
  <nav style={{ position: 'fixed', top: 20, right: 32, zIndex: 100, background: bp.colors.surface, backdropFilter: 'blur(16px)', border: `1px solid ${bp.colors.border}`, borderRadius: 16, padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 24 }}>
    {bp.copy.navLinks.map(l => (
      <button key={l.href} onClick={() => onNav(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: bp.colors.muted, fontWeight: 600, fontSize: 13 }}>{l.label}</button>
    ))}
    <button style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontWeight: 700, cursor: 'pointer', fontSize: 13 }}>Hire Me</button>
  </nav>
);

// ── NEW NICHE AWARE VARIANTS ──────────────────────────────────────────────────

const NavbarLuxury = ({ bp, onNav }: { bp: SiteBlueprint, onNav: (p: string) => void }) => (
  <nav style={{ background: bp.colors.bg, position: 'sticky', top: 0, zIndex: 50, padding: '24px 0', borderBottom: `1px solid ${bp.colors.border}` }}>
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', gap: 40 }}>
        {bp.copy.navLinks.slice(0, 2).map(l => (
          <button key={l.href} onClick={() => onNav(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: bp.colors.text, fontWeight: 400, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{l.label}</button>
        ))}
      </div>
      <span style={{ fontSize: 28, fontWeight: 400, color: bp.colors.text, letterSpacing: '0.15em', fontFamily: 'serif', textTransform: 'uppercase' }}>{bp.copy.brandName}</span>
      <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
        {bp.copy.navLinks.slice(2).map(l => (
          <button key={l.href} onClick={() => onNav(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: bp.colors.text, fontWeight: 400, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{l.label}</button>
        ))}
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: bp.colors.text, fontSize: 18 }}>🛍️</button>
      </div>
    </div>
  </nav>
);

const NavbarSporty = ({ bp, onNav }: { bp: SiteBlueprint, onNav: (p: string) => void }) => (
  <nav style={{ background: bp.colors.bg, position: 'sticky', top: 0, zIndex: 50, borderBottom: `2px solid ${bp.colors.text}` }}>
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
      <span style={{ fontSize: 32, fontWeight: 900, color: bp.colors.text, fontStyle: 'italic', textTransform: 'uppercase', letterSpacing: '-1px' }}>{bp.copy.brandName}</span>
      <div style={{ display: 'flex', gap: 32 }}>
        {bp.copy.navLinks.map(l => (
          <button key={l.href} onClick={() => onNav(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: bp.colors.text, fontWeight: 800, fontSize: 16, textTransform: 'uppercase' }}>{l.label}</button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        <button style={{ background: bp.colors.text, color: bp.colors.bg, border: 'none', borderRadius: 4, padding: '10px 24px', fontWeight: 800, cursor: 'pointer', fontSize: 14, textTransform: 'uppercase' }}>SHOP</button>
      </div>
    </div>
  </nav>
);

const NavbarWarm = ({ bp, onNav }: { bp: SiteBlueprint, onNav: (p: string) => void }) => (
  <nav style={{ background: bp.colors.bg, position: 'sticky', top: 0, zIndex: 50 }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 24 }}>{bp.nicheProfile.emojiSet[0]}</span>
        <span style={{ fontSize: 22, fontWeight: 800, color: bp.colors.text, letterSpacing: '-0.5px' }}>{bp.copy.brandName}</span>
      </div>
      <div style={{ display: 'flex', gap: 32, background: bp.colors.surface, padding: '8px 32px', borderRadius: 50 }}>
        {bp.copy.navLinks.map(l => (
          <button key={l.href} onClick={() => onNav(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: bp.colors.text, fontWeight: 600, fontSize: 15 }}>{l.label}</button>
        ))}
      </div>
      <button style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 50, padding: '10px 24px', fontWeight: 700, cursor: 'pointer', fontSize: 14 }}>{bp.copy.heroCTA}</button>
    </div>
  </nav>
);

const NavbarGlass = ({ bp, onNav }: { bp: SiteBlueprint, onNav: (p: string) => void }) => (
  <nav style={{ position: 'fixed', top: 16, left: 16, right: 16, zIndex: 100 }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 24, padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}>
      <span style={{ fontSize: 20, fontWeight: 800, color: bp.colors.text, letterSpacing: '-0.5px' }}>{bp.copy.brandName}</span>
      <div style={{ display: 'flex', gap: 24 }}>
        {bp.copy.navLinks.map(l => (
          <button key={l.href} onClick={() => onNav(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: bp.colors.muted, fontWeight: 500, fontSize: 14, transition: 'color 0.2s' }}>{l.label}</button>
        ))}
      </div>
      <button style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 12, padding: '8px 20px', fontWeight: 600, cursor: 'pointer', fontSize: 13, backgroundClip: 'padding-box' }}>{bp.copy.heroCTA}</button>
    </div>
  </nav>
);

export { 
  NavbarTransparent, NavbarDark, NavbarMinimal, NavbarEcommerce, NavbarEnterprise, NavbarCreator, NavbarFloating,
  NavbarLuxury, NavbarSporty, NavbarWarm, NavbarGlass
};
