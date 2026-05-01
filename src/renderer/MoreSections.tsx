import { useState } from 'react';
import { type SiteBlueprint } from '../engine/types';

type Nav = { onNav?: (p: string) => void };

export const TeamCards = ({ bp, props }: { bp: SiteBlueprint, props: Record<string, unknown> }) => {
  const title = (props.title as string) || 'Meet Our Team';
  const members = [
    { name: 'Dr. Sarah Johnson', role: 'Lead Specialist', emoji: '👩‍⚕️' },
    { name: 'Dr. Michael Chen', role: 'Senior Consultant', emoji: '👨‍⚕️' },
    { name: 'Dr. Priya Patel', role: 'Department Head', emoji: '👩‍💼' },
  ];
  return (
    <section style={{ padding: '80px 24px', background: bp.colors.bg }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <h2 style={{ fontSize: 40, fontWeight: 900, color: bp.colors.text, textAlign: 'center', marginBottom: 56 }}>{title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {members.map(m => (
            <div key={m.name} style={{ padding: 32, background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 20, textAlign: 'center' }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>{m.emoji}</div>
              <div style={{ fontWeight: 800, color: bp.colors.text, fontSize: 18, marginBottom: 6 }}>{m.name}</div>
              <div style={{ color: bp.colors.muted, fontSize: 14 }}>{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TeamMinimal = ({ bp }: { bp: SiteBlueprint }) => (
  <section style={{ padding: '80px 24px', background: bp.colors.bg }}>
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <h2 style={{ fontSize: 38, fontWeight: 900, color: bp.colors.text, marginBottom: 40 }}>The Team</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
        {['Alex R.', 'Jamie L.', 'Sam K.', 'Morgan T.'].map((n, i) => (
          <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: `linear-gradient(135deg, ${bp.colors.primary}, ${bp.colors.secondary})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800 }}>{n[0]}</div>
            <div><div style={{ fontWeight: 700, color: bp.colors.text, fontSize: 14 }}>{n}</div><div style={{ color: bp.colors.muted, fontSize: 12 }}>{['Designer','Dev','PM','Growth'][i]}</div></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const DoctorCards = ({ bp, onNav }: { bp: SiteBlueprint } & Nav) => {
  const apptHref = bp.copy.navLinks.find(l => l.href.includes('appoint'))?.href || '/contact';
  return (
    <section style={{ padding: '80px 24px', background: bp.colors.surface, borderTop: `1px solid ${bp.colors.border}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 40, fontWeight: 900, color: bp.colors.text, textAlign: 'center', marginBottom: 56 }}>Our Specialists</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {[['Dr. A. Kumar','Cardiologist','👨‍⚕️'],['Dr. S. Lee','Neurologist','👩‍⚕️'],['Dr. R. Patel','Orthopedics','👨‍⚕️'],['Dr. M. Jones','Pediatrics','👩‍⚕️']].map(([name,spec,em]) => (
            <div key={name} style={{ padding: 24, background: bp.colors.bg, border: `1px solid ${bp.colors.border}`, borderRadius: 16, textAlign: 'center' }}>
              <div style={{ fontSize: 44, marginBottom: 12 }}>{em}</div>
              <div style={{ fontWeight: 700, color: bp.colors.text, fontSize: 15, marginBottom: 4 }}>{name}</div>
              <div style={{ color: bp.colors.primary, fontSize: 13, fontWeight: 600, marginBottom: 12 }}>{spec}</div>
              <button onClick={() => onNav?.(apptHref)} style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Book Appointment</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const DepartmentGrid = ({ bp, onNav }: { bp: SiteBlueprint } & Nav) => (
  <section style={{ padding: '80px 24px', background: bp.colors.bg }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <h2 style={{ fontSize: 40, fontWeight: 900, color: bp.colors.text, textAlign: 'center', marginBottom: 56 }}>Our Departments</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
        {[['❤️','Cardiology'],['🧠','Neurology'],['🦴','Orthopedics'],['👶','Pediatrics'],['👁️','Ophthalmology'],['🦷','Dentistry'],['🫁','Pulmonology'],['🔬','Oncology']].map(([em,name]) => (
          <div key={name} onClick={() => onNav?.(bp.copy.navLinks.find(l => l.href.includes('appoint') || l.href.includes('contact'))?.href || '/contact')} style={{ padding: 24, background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 16, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
            <span style={{ fontSize: 28 }}>{em}</span>
            <span style={{ fontWeight: 700, color: bp.colors.text, fontSize: 14 }}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const MenuCards = ({ bp }: { bp: SiteBlueprint }) => (
  <section style={{ padding: '80px 24px', background: bp.colors.bg }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <h2 style={{ fontSize: 40, fontWeight: 900, color: bp.colors.text, textAlign: 'center', marginBottom: 56 }}>Signature Dishes</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
        {[['🥩','Wagyu Tenderloin','$68','Pan-seared with truffle butter and seasonal vegetables'],['🦞','Butter Poached Lobster','$72','Maine lobster with champagne bisque'],['🍝','Handmade Truffle Pasta','$42','Fresh pasta, black truffle, aged parmesan']].map(([em,name,price,desc]) => (
          <div key={name} style={{ background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ height: 140, background: `linear-gradient(135deg, ${bp.colors.primary}22, ${bp.colors.secondary}22)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 60 }}>{em}</div>
            <div style={{ padding: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <div style={{ fontWeight: 800, color: bp.colors.text, fontSize: 17 }}>{name}</div>
                <div style={{ fontWeight: 900, color: bp.colors.primary, fontSize: 18 }}>{price}</div>
              </div>
              <div style={{ color: bp.colors.muted, fontSize: 14, lineHeight: 1.6 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const MenuGrid = ({ bp }: { bp: SiteBlueprint }) => (
  <section style={{ padding: '80px 24px', background: bp.colors.bg }}>
    <div style={{ maxWidth: 1000, margin: '0 auto' }}>
      <h2 style={{ fontSize: 44, fontWeight: 900, color: bp.colors.text, textAlign: 'center', marginBottom: 64 }}>Our Full Menu</h2>
      {[['🥗 Starters', [['Burrata','$18'],['Tuna Tartare','$22'],['Soup du Jour','$14']]], ['🍖 Mains', [['Wagyu Steak','$68'],['Roast Chicken','$38'],['Sea Bass','$44']]], ['🍮 Desserts', [['Crème Brûlée','$16'],['Chocolate Fondant','$18'],['Seasonal Sorbet','$12']]]].map(([cat, items]) => (
        <div key={cat as string} style={{ marginBottom: 48 }}>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: bp.colors.primary, marginBottom: 20, borderBottom: `2px solid ${bp.colors.border}`, paddingBottom: 12 }}>{cat as string}</h3>
          {(items as [string,string][]).map(([name, price]) => (
            <div key={name} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderBottom: `1px solid ${bp.colors.border}` }}>
              <span style={{ color: bp.colors.text, fontWeight: 600, fontSize: 16 }}>{name}</span>
              <span style={{ color: bp.colors.primary, fontWeight: 700, fontSize: 16 }}>{price}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </section>
);

import { getNicheContent } from '../engine/contentDatabase';

export const ProductGrid = ({ bp }: { bp: SiteBlueprint }) => {
  const [added, setAdded] = useState<number[]>([]);
  const items = getNicheContent(bp.subNiche);

  return (
    <section style={{ padding: '80px 24px', background: bp.colors.bg }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <h2 style={{ fontSize: 40, fontWeight: 900, color: bp.colors.text, textAlign: 'center', marginBottom: 56 }}>Our Collection</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {items.map((item, i) => (
            <div key={item.id} style={{ background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 16, overflow: 'hidden' }}>
              <div style={{ height: 240, background: `linear-gradient(135deg, ${bp.colors.surface}, ${bp.colors.bg})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80, position: 'relative' }}>
                {item.emoji}
                {item.isFeatured && (
                  <div style={{ position: 'absolute', top: 16, right: 16, background: bp.colors.primary, color: '#fff', fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 20 }}>FEATURED</div>
                )}
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ color: bp.colors.primary, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>{item.category}</div>
                <div style={{ fontWeight: 700, color: bp.colors.text, fontSize: 18, marginBottom: 6 }}>{item.name}</div>
                <div style={{ color: bp.colors.muted, fontSize: 14, marginBottom: 16, lineHeight: 1.5, minHeight: 42 }}>{item.desc}</div>
                
                {item.specs && (
                  <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                    {Object.entries(item.specs).map(([k, v]) => (
                      <span key={k} style={{ background: bp.colors.bg, border: `1px solid ${bp.colors.border}`, borderRadius: 4, padding: '4px 8px', fontSize: 11, color: bp.colors.text }}>{k}: {v}</span>
                    ))}
                  </div>
                )}
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span style={{ fontWeight: 900, color: bp.colors.text, fontSize: 20 }}>{item.price || 'Free'}</span>
                  <button onClick={() => setAdded(a => a.includes(i) ? a : [...a, i])} style={{ background: added.includes(i) ? '#22c55e' : bp.colors.primary, color: '#fff', border: 'none', borderRadius: 8, padding: '10px 16px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>{added.includes(i) ? '✓ Added' : 'Add to Cart'}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProductFeatured = ({ bp, props }: { bp: SiteBlueprint, props: Record<string, unknown> }) => {
  const title = (props.title as string) || 'Featured Products';
  return (
    <section style={{ padding: '80px 24px', background: bp.colors.surface, borderTop: `1px solid ${bp.colors.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontSize: 40, fontWeight: 900, color: bp.colors.text, marginBottom: 48 }}>{title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 20 }}>
          <div style={{ background: `linear-gradient(135deg, ${bp.colors.primary}22, ${bp.colors.secondary}22)`, border: `1px solid ${bp.colors.border}`, borderRadius: 20, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: 300 }}>
            <div style={{ fontSize: 80, marginBottom: 16 }}>⭐</div>
            <div style={{ fontWeight: 900, color: bp.colors.text, fontSize: 24, marginBottom: 8 }}>Featured Item</div>
            <div style={{ fontWeight: 900, color: bp.colors.primary, fontSize: 28 }}>$249</div>
          </div>
          {[['🔥 Best Seller','$189'],['🆕 New Arrival','$139']].map(([label, price]) => (
            <div key={label} style={{ background: bp.colors.bg, border: `1px solid ${bp.colors.border}`, borderRadius: 20, padding: 28 }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>📦</div>
              <div style={{ fontWeight: 800, color: bp.colors.text, fontSize: 18, marginBottom: 4 }}>{label}</div>
              <div style={{ fontWeight: 900, color: bp.colors.primary, fontSize: 22 }}>{price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProductCollections = ({ bp, onNav }: { bp: SiteBlueprint } & Nav) => (
  <section style={{ padding: '80px 24px', background: bp.colors.bg }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <h2 style={{ fontSize: 40, fontWeight: 900, color: bp.colors.text, marginBottom: 48, textTransform: 'uppercase', letterSpacing: '-1px' }}>Shop by Category</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {[['👟','Footwear'],['👕','Apparel'],['🧢','Accessories'],['🎽','Performance']].map(([em, cat]) => (
          <div key={cat} onClick={() => onNav?.(bp.copy.navLinks[0]?.href || '/')} style={{ background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 16, padding: 32, textAlign: 'center', cursor: 'pointer' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>{em}</div>
            <div style={{ fontWeight: 800, color: bp.colors.text, fontSize: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{cat}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const GalleryGrid = ({ bp }: { bp: SiteBlueprint }) => (
  <section style={{ padding: '80px 24px', background: bp.colors.surface, borderTop: `1px solid ${bp.colors.border}` }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <h2 style={{ fontSize: 40, fontWeight: 900, color: bp.colors.text, textAlign: 'center', marginBottom: 48 }}>Gallery</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} style={{ aspectRatio: '4/3', background: `linear-gradient(${135 + i * 30}deg, ${bp.colors.primary}33, ${bp.colors.secondary}33)`, borderRadius: 16, border: `1px solid ${bp.colors.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40 }}>
            {['🌟','✨','🎨','📸','🎭','🌈'][i]}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const GalleryMasonry = ({ bp, props }: { bp: SiteBlueprint, props: Record<string, unknown> }) => {
  const title = (props.title as string) || 'Selected Work';
  return (
    <section style={{ padding: '80px 24px', background: bp.colors.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 44, fontWeight: 900, color: bp.colors.text, marginBottom: 56 }}>{title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {[{ h: 340, em: '🎨', label: 'Brand Identity — FinCorp' }, { h: 220, em: '💻', label: 'Web App — TechFlow' }, { h: 220, em: '📱', label: 'Mobile App — Stride' }, { h: 340, em: '🎭', label: 'Campaign — NovaPay' }].map(item => (
            <div key={item.label} style={{ height: item.h, background: `linear-gradient(135deg, ${bp.colors.surface}, ${bp.colors.bg})`, border: `1px solid ${bp.colors.border}`, borderRadius: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
              <div style={{ fontSize: 48 }}>{item.em}</div>
              <div style={{ fontWeight: 700, color: bp.colors.text, fontSize: 15 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ContactForm = ({ bp, props }: { bp: SiteBlueprint, props: Record<string, unknown> }) => {
  const title = (props.title as string) || 'Get In Touch';
  return (
    <section style={{ padding: '100px 24px', background: bp.colors.bg }}>
      <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 44, fontWeight: 900, color: bp.colors.text, marginBottom: 12 }}>{title}</h2>
        <p style={{ color: bp.colors.muted, fontSize: 17, marginBottom: 48 }}>We'll get back to you within 24 hours.</p>
        <div style={{ background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 24, padding: 40, textAlign: 'left' }}>
          {['Full Name', 'Email Address', 'Subject'].map(f => (
            <input key={f} placeholder={f} style={{ display: 'block', width: '100%', marginBottom: 16, padding: '14px 18px', borderRadius: 12, border: `1px solid ${bp.colors.border}`, background: bp.colors.bg, color: bp.colors.text, fontSize: 15, boxSizing: 'border-box', outline: 'none' }} />
          ))}
          <textarea placeholder="Your message..." rows={5} style={{ display: 'block', width: '100%', marginBottom: 20, padding: '14px 18px', borderRadius: 12, border: `1px solid ${bp.colors.border}`, background: bp.colors.bg, color: bp.colors.text, fontSize: 15, resize: 'vertical', boxSizing: 'border-box', outline: 'none' }} />
          <button onClick={() => { alert('Message sent! We will get back to you within 24 hours.'); }} style={{ width: '100%', background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 12, padding: '16px', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>Send Message</button>
        </div>
      </div>
    </section>
  );
};

export const ContactSplit = ({ bp }: { bp: SiteBlueprint }) => (
  <section style={{ padding: '100px 24px', background: bp.colors.bg }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
      <div>
        <h2 style={{ fontSize: 44, fontWeight: 900, color: bp.colors.text, marginBottom: 20 }}>Let's Talk</h2>
        <p style={{ color: bp.colors.muted, fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>Ready to start your project? Reach out and our team will be in touch within one business day.</p>
        {[['📧', 'hello@' + bp.copy.brandName.toLowerCase().replace(/\s/g,'') + '.com'], ['📞', '+1 (555) 000-0000'], ['📍', '123 Business Ave, San Francisco, CA']].map(([em, val]) => (
          <div key={val} style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 20 }}>
            <span style={{ fontSize: 24 }}>{em}</span>
            <span style={{ color: bp.colors.text, fontSize: 15, fontWeight: 600 }}>{val}</span>
          </div>
        ))}
      </div>
      <div style={{ background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 24, padding: 40 }}>
        {['Name', 'Email', 'Budget Range'].map(f => (
          <input key={f} placeholder={f} style={{ display: 'block', width: '100%', marginBottom: 14, padding: '13px 16px', borderRadius: 10, border: `1px solid ${bp.colors.border}`, background: bp.colors.bg, color: bp.colors.text, fontSize: 14, boxSizing: 'border-box', outline: 'none' }} />
        ))}
        <textarea placeholder="Tell us about your project..." rows={4} style={{ display: 'block', width: '100%', marginBottom: 20, padding: '13px 16px', borderRadius: 10, border: `1px solid ${bp.colors.border}`, background: bp.colors.bg, color: bp.colors.text, fontSize: 14, resize: 'vertical', boxSizing: 'border-box', outline: 'none' }} />
        <button onClick={() => { alert('Message sent! Our team will be in touch within one business day.'); }} style={{ width: '100%', background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 10, padding: '14px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>Send Message</button>
      </div>
    </div>
  </section>
);

export const TimelineSection = ({ bp }: { bp: SiteBlueprint }) => (
  <section style={{ padding: '80px 24px', background: bp.colors.bg }}>
    <div style={{ maxWidth: 700, margin: '0 auto' }}>
      <h2 style={{ fontSize: 40, fontWeight: 900, color: bp.colors.text, marginBottom: 56 }}>My Journey</h2>
      {[['2024','Senior Designer @ Vercel'],['2022','Lead Designer @ Startup Y'],['2020','Product Designer @ Agency X'],['2018','UI Designer @ Studio Z']].map(([yr, role]) => (
        <div key={yr} style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
          <div style={{ width: 60, fontWeight: 900, color: bp.colors.primary, fontSize: 15, paddingTop: 4, flexShrink: 0 }}>{yr}</div>
          <div>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: bp.colors.primary, marginBottom: 8 }} />
            <div style={{ fontWeight: 700, color: bp.colors.text, fontSize: 16 }}>{role}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const FooterFull = ({ bp, onNav }: { bp: SiteBlueprint } & Nav) => (
  <footer style={{ background: bp.colors.surface, borderTop: `1px solid ${bp.colors.border}`, padding: '60px 24px 32px' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
        <div>
          <div onClick={() => onNav?.('/')} style={{ fontSize: 22, fontWeight: 900, color: bp.colors.primary, marginBottom: 12, cursor: 'pointer' }}>{bp.copy.brandName}</div>
          <p style={{ color: bp.colors.muted, fontSize: 14, lineHeight: 1.7 }}>{bp.copy.footerTagline}</p>
        </div>
        <div>
          <div style={{ fontWeight: 700, color: bp.colors.text, marginBottom: 16, fontSize: 14 }}>Pages</div>
          {bp.copy.navLinks.map(l => <div key={l.href} onClick={() => onNav?.(l.href)} style={{ color: bp.colors.muted, fontSize: 14, marginBottom: 8, cursor: 'pointer' }}>{l.label}</div>)}
        </div>
        {[['Company', ['About Us', 'Blog', 'Careers']], ['Legal', ['Privacy Policy', 'Terms', 'Cookies']]].map(([label, links]) => (
          <div key={label as string}>
            <div style={{ fontWeight: 700, color: bp.colors.text, marginBottom: 16, fontSize: 14 }}>{label as string}</div>
            {(links as string[]).map(l => <div key={l} style={{ color: bp.colors.muted, fontSize: 14, marginBottom: 8, cursor: 'pointer' }}>{l}</div>)}
          </div>
        ))}
      </div>
      <div style={{ borderTop: `1px solid ${bp.colors.border}`, paddingTop: 24, color: bp.colors.muted, fontSize: 13, textAlign: 'center' }}>© {new Date().getFullYear()} {bp.copy.brandName}. All rights reserved.</div>
    </div>
  </footer>
);

export const FooterMinimal = ({ bp, onNav }: { bp: SiteBlueprint } & Nav) => (
  <footer style={{ background: bp.colors.bg, borderTop: `1px solid ${bp.colors.border}`, padding: '32px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div onClick={() => onNav?.('/')} style={{ fontWeight: 800, color: bp.colors.text, fontSize: 16, cursor: 'pointer' }}>{bp.copy.brandName}</div>
    <div style={{ color: bp.colors.muted, fontSize: 13 }}>© {new Date().getFullYear()} — {bp.copy.footerTagline}</div>
    <div style={{ display: 'flex', gap: 20 }}>
      {bp.copy.navLinks.slice(0,3).map(l => <span key={l.href} onClick={() => onNav?.(l.href)} style={{ color: bp.colors.muted, fontSize: 13, cursor: 'pointer' }}>{l.label}</span>)}
    </div>
  </footer>
);

export const FooterEcommerce = ({ bp, onNav }: { bp: SiteBlueprint } & Nav) => (
  <footer style={{ background: '#000', borderTop: `1px solid ${bp.colors.border}`, padding: '60px 24px 32px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 40, marginBottom: 48 }}>
        <div>
          <div onClick={() => onNav?.('/')} style={{ fontSize: 24, fontWeight: 900, color: '#fff', marginBottom: 12, letterSpacing: '-1px', cursor: 'pointer' }}>{bp.copy.brandName}</div>
          <p style={{ color: '#666', fontSize: 13 }}>{bp.copy.footerTagline}</p>
        </div>
        {[['Shop',['Men','Women','Kids','Sale']], ['Support',['FAQ','Shipping','Returns','Contact']], ['Company',['About','Careers','Press','Sustainability']]].map(([label, links]) => (
          <div key={label as string}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 16, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label as string}</div>
            {(links as string[]).map(l => <div key={l} style={{ color: '#666', fontSize: 14, marginBottom: 8 }}>{l}</div>)}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid #222', paddingTop: 24, color: '#444', fontSize: 13, textAlign: 'center' }}>© {new Date().getFullYear()} {bp.copy.brandName}.</div>
    </div>
  </footer>
);

// ── ADVANCED CLONES SECTIONS ─────────────────────────────────────────────

export const NetflixSliders = () => {
  const items = [
    { id: 1, name: 'Stranger Things', emoji: '🚲' },
    { id: 2, name: 'The Witcher', emoji: '⚔️' },
    { id: 3, name: 'Black Mirror', emoji: '📱' },
    { id: 4, name: 'Narcos', emoji: '💸' },
    { id: 5, name: 'Money Heist', emoji: '💰' },
    { id: 6, name: 'Dark', emoji: '⏳' },
  ];
  return (
    <section style={{ background: '#141414', padding: '0 48px 60px' }}>
      <h2 style={{ color: '#fff', fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Trending Now</h2>
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 20 }}>
        {items.map((item) => (
          <div key={item.id} style={{ minWidth: 280, height: 160, background: '#222', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, cursor: 'pointer', transition: '0.3s', flexShrink: 0, position: 'relative' }}>
            {item.emoji}
            <div style={{ position: 'absolute', bottom: 8, left: 16, fontSize: 16, fontWeight: 700, color: '#fff' }}>{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const ChatGPTLayout = ({ bp }: { bp: SiteBlueprint }) => (
  <section style={{ display: 'flex', minHeight: '100vh', background: bp.colors.bg, color: bp.colors.text }}>
    <div style={{ width: 260, background: '#202123', padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <button style={{ background: 'transparent', border: '1px solid #4d4d4f', color: '#fff', padding: '12px', borderRadius: 6, textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 18 }}>+</span> New chat
      </button>
      <div style={{ flex: 1, overflowY: 'auto', marginTop: 16 }}>
        <div style={{ fontSize: 12, color: '#8e8ea0', padding: '8px 12px', fontWeight: 500 }}>Today</div>
        <div style={{ padding: '12px', color: '#ececf1', fontSize: 14, cursor: 'pointer', borderRadius: 6, background: '#343541' }}>Plan a trip to Paris</div>
        <div style={{ padding: '12px', color: '#ececf1', fontSize: 14, cursor: 'pointer', borderRadius: 6 }}>Debug Python script</div>
        <div style={{ padding: '12px', color: '#ececf1', fontSize: 14, cursor: 'pointer', borderRadius: 6 }}>Write an essay</div>
      </div>
      <div style={{ borderTop: '1px solid #4d4d4f', paddingTop: 12, display: 'flex', alignItems: 'center', gap: 12, color: '#fff', cursor: 'pointer', padding: '12px 8px' }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#10a37f' }}></div>
        <span style={{ fontSize: 14 }}>User Settings</span>
      </div>
    </div>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: '40px 24px' }}>
        <div style={{ maxWidth: 768, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ display: 'flex', gap: 24 }}>
             <div style={{ width: 30, height: 30, borderRadius: 4, background: '#10a37f', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>🤖</div>
             <div style={{ fontSize: 16, lineHeight: 1.6, color: '#ececf1', paddingTop: 4 }}>
               Hello! I'm here to help you with whatever you need. You can ask me to write code, compose emails, brainstorm ideas, and more. How can I assist you today?
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const AirbnbSearch = () => (
  <section style={{ padding: '40px 24px', background: '#fff' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <h2 style={{ fontSize: 32, fontWeight: 700, color: '#222', marginBottom: 24 }}>Explore nearby</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego'].map(city => (
          <div key={city} style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}>
            <div style={{ width: 64, height: 64, borderRadius: 8, background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>📍</div>
            <div>
              <div style={{ fontWeight: 600, color: '#222', fontSize: 16 }}>{city}</div>
              <div style={{ color: '#717171', fontSize: 14 }}>2.5 hour drive</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const AmazonGrid = () => {
  const items = [
    { id: 1, name: 'Echo Dot (5th Gen)', emoji: '🔊', price: '$49.99', desc: 'Smart speaker with Alexa' },
    { id: 2, name: 'Kindle Paperwhite', emoji: '📖', price: '$139.99', desc: '8 GB, now with a 6.8" display' },
    { id: 3, name: 'Fire TV Stick 4K', emoji: '📺', price: '$49.99', desc: 'Brilliant 4K streaming quality' },
    { id: 4, name: 'Blink Video Doorbell', emoji: '🚪', price: '$49.99', desc: 'Two-way audio, HD video' }
  ];
  return (
    <section style={{ padding: '20px', background: '#eaeded' }}>
      <div style={{ maxWidth: 1500, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {items.map(item => (
          <div key={item.id} style={{ background: '#fff', padding: 20 }}>
             <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80, background: '#f7f7f7' }}>{item.emoji}</div>
             <h3 style={{ fontSize: 16, fontWeight: 500, color: '#007185', marginTop: 12, marginBottom: 4 }}>{item.name}</h3>
             <div style={{ fontSize: 14, color: '#565959', marginBottom: 8 }}>{item.desc}</div>
             <div style={{ fontSize: 24, fontWeight: 500, color: '#0f1111' }}>{item.price}</div>
             <button style={{ background: '#ffd814', border: 'none', borderRadius: 20, padding: '8px 16px', fontSize: 13, width: '100%', marginTop: 16, cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export const TeslaSections = () => (
  <section style={{ display: 'flex', flexDirection: 'column' }}>
    {['Model Y', 'Model S', 'Model X', 'Cybertruck', 'Solar Panels'].map((model, i) => (
      <div key={model} style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '100px 24px 60px', background: i % 2 === 0 ? '#111' : '#222', color: '#fff' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: '0.05em', marginBottom: 8 }}>{model}</h2>
          <p style={{ fontSize: 14, fontWeight: 500, color: '#ddd' }}>Explore Inventory</p>
        </div>
        <div style={{ display: 'flex', gap: 24, flexDirection: 'row' }}>
          <button style={{ background: '#f4f4f4', color: '#393c41', border: 'none', borderRadius: 4, width: 264, height: 40, fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>Order Now</button>
          <button style={{ background: 'rgba(23, 26, 32, 0.8)', color: '#fff', border: 'none', borderRadius: 4, width: 264, height: 40, fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>Learn More</button>
        </div>
      </div>
    ))}
  </section>
);
