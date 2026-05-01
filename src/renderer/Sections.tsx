import { type SiteBlueprint } from '../engine/types';

export const StatsBar = ({ bp, props }: { bp: SiteBlueprint, props: Record<string, unknown> }) => {
  const stats: string[] = (props.stats as string[]) || ['10M+ Users', '99.9% Uptime', '150+ Countries', '4.9★ Rating'];
  return (
    <section style={{ background: bp.colors.surface, borderTop: `1px solid ${bp.colors.border}`, borderBottom: `1px solid ${bp.colors.border}`, padding: '28px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 24 }}>
        {stats.map(s => (
          <div key={s} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 26, fontWeight: 900, color: bp.colors.text }}>{s.split(' ')[0]}</div>
            <div style={{ fontSize: 13, color: bp.colors.muted }}>{s.split(' ').slice(1).join(' ')}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const TrustLogos = ({ bp }: { bp: SiteBlueprint }) => (
  <section style={{ padding: '40px 24px', borderBottom: `1px solid ${bp.colors.border}` }}>
    <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
      <p style={{ fontSize: 13, color: bp.colors.muted, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 28 }}>Trusted by teams at</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
        {['Stripe', 'Notion', 'Figma', 'Linear', 'Vercel', 'GitHub'].map(name => (
          <span key={name} style={{ fontSize: 18, fontWeight: 800, color: bp.colors.muted, letterSpacing: '-0.5px', opacity: 0.6 }}>{name}</span>
        ))}
      </div>
    </div>
  </section>
);

export const FeaturesGrid = ({ bp, props }: { bp: SiteBlueprint, props: Record<string, unknown> }) => {
  const title = (props.title as string) || 'Powerful Features Built for Scale';
  const items = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized for speed with sub-100ms response times and global edge delivery.' },
    { icon: '🔒', title: 'Enterprise Security', desc: 'SOC2 compliant with end-to-end encryption and advanced access controls.' },
    { icon: '📊', title: 'Real-time Analytics', desc: 'Track every metric that matters with beautiful, actionable dashboards.' },
    { icon: '🔗', title: '200+ Integrations', desc: 'Connect seamlessly with your existing tools and workflows.' },
    { icon: '🤖', title: 'AI-Powered', desc: 'Intelligent automation that learns and adapts to your team\'s needs.' },
    { icon: '🌍', title: 'Global Scale', desc: 'Deployed across 40+ regions for reliability wherever you operate.' },
  ];
  return (
    <section style={{ padding: '100px 24px', background: bp.colors.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 44, fontWeight: 900, color: bp.colors.text, textAlign: 'center', marginBottom: 16, letterSpacing: '-1px' }}>{title}</h2>
        <p style={{ textAlign: 'center', color: bp.colors.muted, fontSize: 18, marginBottom: 64 }}>Everything you need, nothing you don't.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {items.map(item => (
            <div key={item.title} style={{ padding: 32, background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 20 }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{item.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: bp.colors.text, marginBottom: 10 }}>{item.title}</h3>
              <p style={{ color: bp.colors.muted, fontSize: 15, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FeaturesAlternating = ({ bp, props }: { bp: SiteBlueprint, props: Record<string, unknown> }) => {
  const title = (props.title as string) || 'Built for Modern Teams';
  const items = [
    { icon: '🎯', title: 'Precision Tools', desc: 'Fine-grained controls give you exactly the right level of detail for every task. No more, no less.' },
    { icon: '🔄', title: 'Seamless Workflows', desc: 'Automate repetitive tasks and focus on what actually creates value for your business.' },
    { icon: '📈', title: 'Growth at Scale', desc: 'Built to handle millions of operations without breaking a sweat, from day one to IPO.' },
  ];
  return (
    <section style={{ padding: '100px 24px', background: bp.colors.bg }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <h2 style={{ fontSize: 44, fontWeight: 900, color: bp.colors.text, textAlign: 'center', marginBottom: 72, letterSpacing: '-1px' }}>{title}</h2>
        {items.map((item, i) => (
          <div key={item.title} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginBottom: 80, direction: i % 2 ? 'rtl' : 'ltr' }}>
            <div style={{ direction: 'ltr' }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>{item.icon}</div>
              <h3 style={{ fontSize: 32, fontWeight: 900, color: bp.colors.text, marginBottom: 16 }}>{item.title}</h3>
              <p style={{ color: bp.colors.muted, fontSize: 17, lineHeight: 1.7 }}>{item.desc}</p>
            </div>
            <div style={{ direction: 'ltr', background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 20, minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', color: bp.colors.muted, fontSize: 14 }}>Feature Visual</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const FeaturesBento = ({ bp }: { bp: SiteBlueprint }) => (
  <section style={{ padding: '100px 24px', background: bp.colors.bg }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <h2 style={{ fontSize: 44, fontWeight: 900, color: bp.colors.text, textAlign: 'center', marginBottom: 16, letterSpacing: '-1px' }}>One platform. Infinite possibilities.</h2>
      <p style={{ textAlign: 'center', color: bp.colors.muted, fontSize: 18, marginBottom: 56 }}>Everything you need to build, ship, and scale.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gridTemplateRows: 'auto auto', gap: 16 }}>
        <div style={{ background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 20, padding: 40, gridRow: '1 / 3' }}>
          <div style={{ fontSize: 40, marginBottom: 20 }}>🚀</div>
          <h3 style={{ fontSize: 28, fontWeight: 900, color: bp.colors.text, marginBottom: 12 }}>Deploy in Seconds</h3>
          <p style={{ color: bp.colors.muted, fontSize: 16, lineHeight: 1.6 }}>One command to push your changes live. Zero-downtime deployments with automatic rollback if something goes wrong.</p>
        </div>
        {[{ icon: '📡', title: 'Real-time Sync', desc: 'Data synced across all devices instantly.' }, { icon: '🔐', title: 'Zero Trust Security', desc: 'Every request verified, every time.' }].map(item => (
          <div key={item.title} style={{ background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 20, padding: 28 }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: bp.colors.text, marginBottom: 8 }}>{item.title}</h3>
            <p style={{ color: bp.colors.muted, fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FeaturesCompact = ({ bp, props }: { bp: SiteBlueprint, props: Record<string, unknown> }) => {
  const title = (props.title as string) || 'Core Skills';
  const skills = ['UI/UX Design', 'React & TypeScript', 'Figma', 'Design Systems', 'User Research', 'Motion Design', 'Tailwind CSS', 'Node.js'];
  return (
    <section style={{ padding: '80px 24px', background: bp.colors.surface, borderTop: `1px solid ${bp.colors.border}` }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: 40, fontWeight: 900, color: bp.colors.text, marginBottom: 40 }}>{title}</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {skills.map(s => (
            <span key={s} style={{ background: bp.colors.bg, border: `1px solid ${bp.colors.border}`, borderRadius: 50, padding: '10px 22px', fontSize: 14, fontWeight: 600, color: bp.colors.text }}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export const IntegrationGrid = ({ bp }: { bp: SiteBlueprint }) => (
  <section style={{ padding: '80px 24px', background: bp.colors.surface, borderTop: `1px solid ${bp.colors.border}`, borderBottom: `1px solid ${bp.colors.border}` }}>
    <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: 38, fontWeight: 900, color: bp.colors.text, marginBottom: 12 }}>Works with your entire stack</h2>
      <p style={{ color: bp.colors.muted, marginBottom: 48, fontSize: 17 }}>200+ native integrations, plus custom webhooks for anything else.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
        {['Slack', 'GitHub', 'Jira', 'Figma', 'Notion', 'Stripe', 'AWS', 'Google', 'HubSpot', 'Zapier'].map(name => (
          <div key={name} style={{ background: bp.colors.bg, border: `1px solid ${bp.colors.border}`, borderRadius: 16, padding: '20px 12px', textAlign: 'center' }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>⚙️</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: bp.colors.text }}>{name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
