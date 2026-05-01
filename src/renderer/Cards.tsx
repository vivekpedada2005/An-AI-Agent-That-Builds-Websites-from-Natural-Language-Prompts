import { useState } from 'react';
import { type SiteBlueprint } from '../engine/types';

type Nav = { onNav?: (p: string) => void };

// ── PRICING CARDS ─────────────────────────────────────────────────────────────
export const PricingCards = ({ bp, onNav }: { bp: SiteBlueprint } & Nav) => {
  const contactHref = bp.copy.navLinks.find(l => l.label.toLowerCase().includes('contact'))?.href || '/contact';
  const primaryHref = bp.copy.navLinks[0]?.href || '/';
  const plans = [
    { name: 'Starter', price: '0', features: ['5 projects', '10GB storage', 'Basic analytics', 'Email support'], cta: 'Start Free', href: primaryHref },
    { name: 'Pro', price: '29', features: ['Unlimited projects', '100GB storage', 'Advanced analytics', 'Priority support', 'Custom domain'], cta: bp.copy.heroCTA, href: primaryHref, popular: true },
    { name: 'Enterprise', price: '99', features: ['Everything in Pro', 'Dedicated support', 'SLA guarantee', 'Custom integrations', 'Admin controls'], cta: 'Contact Sales', href: contactHref },
  ];
  return (
    <section style={{ padding: '100px 24px', background: bp.colors.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 44, fontWeight: 900, color: bp.colors.text, textAlign: 'center', marginBottom: 12, letterSpacing: '-1px' }}>Simple, transparent pricing</h2>
        <p style={{ textAlign: 'center', color: bp.colors.muted, marginBottom: 64, fontSize: 18 }}>No hidden fees. Cancel anytime.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'start' }}>
          {plans.map(plan => (
            <div key={plan.name} style={{ padding: 36, background: plan.popular ? `linear-gradient(135deg, ${bp.colors.primary}18, ${bp.colors.secondary}10)` : bp.colors.surface, border: `${plan.popular ? 2 : 1}px solid ${plan.popular ? bp.colors.primary : bp.colors.border}`, borderRadius: 24, position: 'relative' }}>
              {plan.popular && <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: bp.colors.primary, color: '#fff', borderRadius: 50, padding: '4px 16px', fontSize: 12, fontWeight: 800, whiteSpace: 'nowrap' }}>MOST POPULAR</div>}
              <div style={{ fontSize: 16, fontWeight: 700, color: bp.colors.muted, marginBottom: 8 }}>{plan.name}</div>
              <div style={{ fontSize: 52, fontWeight: 900, color: bp.colors.text, marginBottom: 4 }}>${plan.price}<span style={{ fontSize: 18, fontWeight: 500, color: bp.colors.muted }}>/mo</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 32px' }}>
                {plan.features.map(f => <li key={f} style={{ color: bp.colors.muted, fontSize: 14, marginBottom: 12, display: 'flex', gap: 10, alignItems: 'center' }}><span style={{ color: bp.colors.primary }}>✓</span>{f}</li>)}
              </ul>
              <button onClick={() => onNav?.(plan.href)} style={{ width: '100%', background: plan.popular ? bp.colors.primary : 'transparent', color: plan.popular ? '#fff' : bp.colors.text, border: `2px solid ${plan.popular ? bp.colors.primary : bp.colors.border}`, borderRadius: 12, padding: '14px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── PRICING TABLE ─────────────────────────────────────────────────────────────
export const PricingTable = ({ bp }: { bp: SiteBlueprint }) => (
  <section style={{ padding: '100px 24px', background: bp.colors.bg }}>
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <h2 style={{ fontSize: 44, fontWeight: 900, color: bp.colors.text, textAlign: 'center', marginBottom: 64 }}>Compare Plans</h2>
      <div style={{ border: `1px solid ${bp.colors.border}`, borderRadius: 20, overflow: 'hidden' }}>
        {[['Feature', 'Free', 'Pro', 'Enterprise'], ['Projects', '5', 'Unlimited', 'Unlimited'], ['Storage', '10GB', '100GB', '1TB'], ['Team Members', '1', '10', 'Unlimited'], ['API Access', '—', '✓', '✓'], ['Priority Support', '—', '✓', '✓'], ['Custom Domain', '—', '✓', '✓']].map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '16px 28px', background: i === 0 ? bp.colors.surface : i % 2 === 0 ? bp.colors.surface + '80' : 'transparent', borderBottom: `1px solid ${bp.colors.border}` }}>
            {row.map((cell, j) => <div key={j} style={{ color: i === 0 ? bp.colors.muted : j === 0 ? bp.colors.text : bp.colors.primary, fontSize: i === 0 ? 12 : 14, fontWeight: i === 0 ? 700 : j === 0 ? 600 : 500, textTransform: i === 0 ? 'uppercase' : 'none', letterSpacing: i === 0 ? '0.08em' : 'normal', textAlign: j === 0 ? 'left' : 'center' }}>{cell}</div>)}
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── TESTIMONIALS GRID ─────────────────────────────────────────────────────────
export const TestimonialsGrid = ({ bp }: { bp: SiteBlueprint }) => {
  const testimonials = [
    { name: 'Sarah Chen', role: 'CTO, Finova', text: 'This completely transformed how our team operates. We shipped 3x faster within the first month.' },
    { name: 'Marcus Williams', role: 'Product Lead, Notion', text: "The best tool we've adopted this year. Intuitive, powerful, and the support team is incredible." },
    { name: 'Priya Sharma', role: 'Founder, BuildFast', text: 'I was skeptical at first, but the results speak for themselves. Absolute game changer.' },
  ];
  return (
    <section style={{ padding: '100px 24px', background: bp.colors.surface, borderTop: `1px solid ${bp.colors.border}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 44, fontWeight: 900, color: bp.colors.text, textAlign: 'center', marginBottom: 64, letterSpacing: '-1px' }}>Loved by thousands</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {testimonials.map(t => (
            <div key={t.name} style={{ padding: 32, background: bp.colors.bg, border: `1px solid ${bp.colors.border}`, borderRadius: 20 }}>
              <div style={{ fontSize: 22, color: '#f59e0b', marginBottom: 16 }}>★★★★★</div>
              <p style={{ color: bp.colors.text, fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: `linear-gradient(135deg, ${bp.colors.primary}, ${bp.colors.secondary})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 16 }}>{t.name[0]}</div>
                <div>
                  <div style={{ fontWeight: 700, color: bp.colors.text, fontSize: 14 }}>{t.name}</div>
                  <div style={{ color: bp.colors.muted, fontSize: 13 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── TESTIMONIALS QUOTE ────────────────────────────────────────────────────────
export const TestimonialsQuote = ({ bp }: { bp: SiteBlueprint }) => (
  <section style={{ padding: '100px 24px', background: bp.colors.bg, textAlign: 'center' }}>
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <div style={{ fontSize: 80, color: bp.colors.primary, lineHeight: 1, marginBottom: 32 }}>"</div>
      <blockquote style={{ fontSize: 28, fontWeight: 700, color: bp.colors.text, lineHeight: 1.5, marginBottom: 40, fontStyle: 'italic' }}>Working with this team was the best decision we made. They delivered beyond our wildest expectations, on time and on budget.</blockquote>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: `linear-gradient(135deg, ${bp.colors.primary}, ${bp.colors.secondary})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 20 }}>J</div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontWeight: 800, color: bp.colors.text, fontSize: 16 }}>James Hooper</div>
          <div style={{ color: bp.colors.muted, fontSize: 14 }}>CEO, TechVentures Inc.</div>
        </div>
      </div>
    </div>
  </section>
);

// ── TESTIMONIALS SLIDER ───────────────────────────────────────────────────────
export const TestimonialsSlider = ({ bp }: { bp: SiteBlueprint }) => (
  <section style={{ padding: '80px 24px', background: bp.colors.bg, borderTop: `1px solid ${bp.colors.border}` }}>
    <div style={{ maxWidth: 1000, margin: '0 auto' }}>
      <h2 style={{ fontSize: 38, fontWeight: 900, color: bp.colors.text, textAlign: 'center', marginBottom: 48 }}>What our customers say</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {[{ n: 'Elena R.', r: 'Marketing Director', t: 'Increased our conversion rate by 40% in the first quarter.' }, { n: 'Tom K.', r: 'Head of Engineering', t: "The reliability is outstanding. We haven't had a single outage." }].map(t => (
          <div key={t.n} style={{ padding: 32, background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 20 }}>
            <p style={{ color: bp.colors.text, fontSize: 17, lineHeight: 1.7, marginBottom: 20 }}>"{t.t}"</p>
            <div style={{ fontWeight: 700, color: bp.colors.primary, fontSize: 15 }}>{t.n}</div>
            <div style={{ color: bp.colors.muted, fontSize: 13 }}>{t.r}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── CTA BANNER ────────────────────────────────────────────────────────────────
export const CTABanner = ({ bp, props, onNav }: { bp: SiteBlueprint, props: Record<string, unknown> } & Nav) => {
  const contactHref = bp.copy.navLinks.find(l => l.label.toLowerCase().includes('contact'))?.href || '/contact';
  const primaryHref = bp.copy.navLinks[0]?.href || '/';
  return (
    <section style={{ padding: '80px 24px', background: `linear-gradient(135deg, ${bp.colors.primary}, ${bp.colors.secondary})` }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 44, fontWeight: 900, color: '#fff', marginBottom: 16, letterSpacing: '-1px' }}>{(props.title as string) || 'Ready to Get Started?'}</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18, marginBottom: 40 }}>Join thousands of people already using {bp.copy.brandName}.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => onNav?.(primaryHref)} style={{ background: '#fff', color: bp.colors.primary, border: 'none', borderRadius: 50, padding: '16px 40px', fontWeight: 800, fontSize: 17, cursor: 'pointer' }}>{(props.cta as string) || bp.copy.heroCTA}</button>
          <button onClick={() => onNav?.(contactHref)} style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid rgba(255,255,255,0.4)', borderRadius: 50, padding: '16px 40px', fontWeight: 600, fontSize: 17, cursor: 'pointer' }}>Contact Us</button>
        </div>
      </div>
    </section>
  );
};

// ── CTA CENTER ────────────────────────────────────────────────────────────────
export const CTACenter = ({ bp, onNav }: { bp: SiteBlueprint } & Nav) => (
  <section style={{ padding: '100px 24px', background: bp.colors.surface, borderTop: `1px solid ${bp.colors.border}`, textAlign: 'center' }}>
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h2 style={{ fontSize: 48, fontWeight: 900, color: bp.colors.text, marginBottom: 20, letterSpacing: '-1px' }}>Start building today.</h2>
      <p style={{ color: bp.colors.muted, fontSize: 18, marginBottom: 40, lineHeight: 1.6 }}>No credit card required. Free to get started. Cancel anytime.</p>
      <button onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 12, padding: '16px 48px', fontWeight: 800, fontSize: 18, cursor: 'pointer' }}>{bp.copy.heroCTA}</button>
    </div>
  </section>
);

// ── FAQ ACCORDION ─────────────────────────────────────────────────────────────
export const FAQAccordion = ({ bp }: { bp: SiteBlueprint }) => {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: 'How does the free trial work?', a: 'Start for free with full access to all features for 14 days. No credit card required.' },
    { q: 'Can I change my plan later?', a: 'Absolutely. You can upgrade or downgrade at any time from your account settings.' },
    { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and wire transfer for Enterprise.' },
    { q: 'Is there a long-term contract?', a: 'No long-term contracts. All plans are month-to-month and you can cancel anytime.' },
  ];
  return (
    <section style={{ padding: '100px 24px', background: bp.colors.bg }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <h2 style={{ fontSize: 44, fontWeight: 900, color: bp.colors.text, textAlign: 'center', marginBottom: 64, letterSpacing: '-1px' }}>Frequently Asked Questions</h2>
        {faqs.map((faq, i) => (
          <div key={faq.q} style={{ borderBottom: `1px solid ${bp.colors.border}` }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', textAlign: 'left', padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 17, fontWeight: 700, color: bp.colors.text }}>{faq.q}</span>
              <span style={{ color: bp.colors.primary, fontSize: 20, fontWeight: 700 }}>{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <div style={{ color: bp.colors.muted, fontSize: 15, lineHeight: 1.7, paddingBottom: 20 }}>{faq.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};
