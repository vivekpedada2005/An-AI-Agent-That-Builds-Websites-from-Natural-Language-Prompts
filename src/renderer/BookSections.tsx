import { type SiteBlueprint } from '../engine/types';

const BOOKS = [
  { title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help', price: '₹499', emoji: '📗', rating: '4.9' },
  { title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction', price: '₹349', emoji: '📘', rating: '4.8' },
  { title: 'Sapiens', author: 'Yuval Noah Harari', genre: 'Non-Fiction', price: '₹599', emoji: '📙', rating: '4.9' },
  { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', genre: 'Finance', price: '₹399', emoji: '📒', rating: '4.7' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', price: '₹299', emoji: '📕', rating: '4.8' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', price: '₹279', emoji: '📔', rating: '4.6' },
  { title: 'Ikigai', author: 'Héctor García', genre: 'Self-Help', price: '₹449', emoji: '📗', rating: '4.7' },
  { title: '1984', author: 'George Orwell', genre: 'Dystopia', price: '₹329', emoji: '📘', rating: '4.9' },
  { title: 'Think and Grow Rich', author: 'Napoleon Hill', genre: 'Finance', price: '₹379', emoji: '📙', rating: '4.8' },
  { title: 'Harry Potter & the Philosopher\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy', price: '₹549', emoji: '📕', rating: '5.0' },
  { title: 'The Psychology of Money', author: 'Morgan Housel', genre: 'Finance', price: '₹499', emoji: '📒', rating: '4.9' },
  { title: 'The Midnight Library', author: 'Matt Haig', genre: 'Fiction', price: '₹419', emoji: '📔', rating: '4.7' },
];

const CATEGORIES = [
  { name: 'Fiction', emoji: '📖', count: '2,400+ books' },
  { name: 'Non-Fiction', emoji: '🔬', count: '1,800+ books' },
  { name: 'Self-Help', emoji: '🧠', count: '950+ books' },
  { name: 'Finance', emoji: '💰', count: '620+ books' },
  { name: 'Children\'s', emoji: '🌟', count: '1,100+ books' },
  { name: 'Fantasy', emoji: '🐉', count: '880+ books' },
  { name: 'Academic', emoji: '🎓', count: '1,400+ books' },
  { name: 'Comics & Manga', emoji: '🎨', count: '540+ books' },
];

// ── HERO BOOKSTORE ────────────────────────────────────────────────────────────
export const HeroBookstore = ({ bp, onNav }: { bp: SiteBlueprint; onNav?: (p: string) => void }) => (
  <section style={{ background: bp.colors.bg, minHeight: '88vh', display: 'flex', alignItems: 'center', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, background: `radial-gradient(circle, ${bp.colors.primary}30 0%, transparent 70%)`, pointerEvents: 'none' }} />
    <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', width: '100%' }}>
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${bp.colors.primary}20`, border: `1px solid ${bp.colors.primary}40`, borderRadius: 50, padding: '6px 16px', fontSize: 13, fontWeight: 700, color: bp.colors.primary, marginBottom: 28 }}>
          📚 10,000+ Books In Stock
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.05, color: bp.colors.text, marginBottom: 20, letterSpacing: '-1.5px' }}>{bp.copy.heroHeadline}</h1>
        <p style={{ fontSize: 18, color: bp.colors.muted, lineHeight: 1.7, marginBottom: 40, maxWidth: 500 }}>{bp.copy.heroSub}</p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <button onClick={() => onNav?.('/books')} style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 50, padding: '14px 32px', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>{bp.copy.heroCTA}</button>
          <button onClick={() => onNav?.('/new-arrivals')} style={{ background: 'transparent', color: bp.colors.text, border: `2px solid ${bp.colors.border}`, borderRadius: 50, padding: '14px 32px', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>{bp.copy.heroSecondaryCTA}</button>
        </div>
        <div style={{ display: 'flex', gap: 32, marginTop: 40 }}>
          {[['📦', 'Free Delivery', '₹499+'], ['🔄', 'Easy Returns', '7 Days'], ['✅', 'Authentic', '100% Genuine']].map(([em, t, v]) => (
            <div key={t} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, marginBottom: 4 }}>{em}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: bp.colors.text }}>{t}</div>
              <div style={{ fontSize: 11, color: bp.colors.primary }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {BOOKS.slice(0, 4).map(book => (
          <div key={book.title} style={{ background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 16, padding: 20, cursor: 'pointer' }} onClick={() => onNav?.('/books')}>
            <div style={{ fontSize: 48, marginBottom: 12, textAlign: 'center' }}>{book.emoji}</div>
            <div style={{ fontWeight: 800, color: bp.colors.text, fontSize: 13, marginBottom: 4, lineHeight: 1.3 }}>{book.title}</div>
            <div style={{ color: bp.colors.muted, fontSize: 11, marginBottom: 8 }}>{book.author}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 900, color: bp.colors.primary, fontSize: 15 }}>{book.price}</span>
              <span style={{ fontSize: 11, color: '#f59e0b' }}>★ {book.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── BOOK CATEGORIES ───────────────────────────────────────────────────────────
export const BookCategories = ({ bp, props, onNav }: { bp: SiteBlueprint; props: Record<string, unknown>; onNav?: (p: string) => void }) => {
  const expanded = props.expanded as boolean;
  return (
    <section style={{ padding: '80px 24px', background: bp.colors.surface, borderTop: `1px solid ${bp.colors.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
          <div>
            <h2 style={{ fontSize: 40, fontWeight: 900, color: bp.colors.text, letterSpacing: '-1px', marginBottom: 8 }}>Shop by Category</h2>
            <p style={{ color: bp.colors.muted, fontSize: 16 }}>Find exactly what you're looking for</p>
          </div>
          {!expanded && <button onClick={() => onNav?.('/categories')} style={{ background: 'transparent', border: `2px solid ${bp.colors.border}`, color: bp.colors.text, borderRadius: 50, padding: '10px 24px', fontWeight: 700, cursor: 'pointer', fontSize: 14 }}>View All →</button>}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {CATEGORIES.map(cat => (
            <div key={cat.name} onClick={() => onNav?.('/books')} style={{ padding: 28, background: bp.colors.bg, border: `1px solid ${bp.colors.border}`, borderRadius: 20, cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s' }}>
              <div style={{ fontSize: 44, marginBottom: 14 }}>{cat.emoji}</div>
              <div style={{ fontWeight: 800, color: bp.colors.text, fontSize: 17, marginBottom: 6 }}>{cat.name}</div>
              <div style={{ color: bp.colors.primary, fontSize: 13, fontWeight: 600 }}>{cat.count}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── BOOK FEATURED ────────────────────────────────────────────────────────────
export const BookFeatured = ({ bp, props, onNav }: { bp: SiteBlueprint; props: Record<string, unknown>; onNav?: (p: string) => void }) => {
  const title = (props.title as string) || 'Featured Books';
  const featured = BOOKS[0];
  return (
    <section style={{ padding: '100px 24px', background: bp.colors.bg }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: bp.colors.text, letterSpacing: '-1px' }}>{title}</h2>
          <button onClick={() => onNav?.('/books')} style={{ background: 'transparent', border: `2px solid ${bp.colors.border}`, color: bp.colors.text, borderRadius: 50, padding: '10px 24px', fontWeight: 700, cursor: 'pointer', fontSize: 14 }}>View All Books →</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 24 }}>
          {/* Main featured */}
          <div onClick={() => onNav?.('/books')} style={{ background: `linear-gradient(135deg, ${bp.colors.primary}20, ${bp.colors.secondary}10)`, border: `1px solid ${bp.colors.border}`, borderRadius: 24, padding: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ fontSize: 100 }}>{featured.emoji}</div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: bp.colors.primary, marginBottom: 12 }}>⭐ Editor's Pick</div>
              <h3 style={{ fontSize: 26, fontWeight: 900, color: bp.colors.text, marginBottom: 8, lineHeight: 1.2 }}>{featured.title}</h3>
              <p style={{ color: bp.colors.muted, fontSize: 15, marginBottom: 16 }}>by {featured.author} • {featured.genre}</p>
              <div style={{ fontSize: 28, fontWeight: 900, color: bp.colors.primary, marginBottom: 20 }}>{featured.price}</div>
              <button onClick={e => { e.stopPropagation(); onNav?.('/books'); }} style={{ background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 50, padding: '12px 28px', fontWeight: 700, cursor: 'pointer', fontSize: 14 }}>Add to Cart</button>
            </div>
          </div>
          {BOOKS.slice(1, 3).map(book => (
            <div key={book.title} onClick={() => onNav?.('/books')} style={{ background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 24, padding: 28, cursor: 'pointer' }}>
              <div style={{ fontSize: 60, textAlign: 'center', marginBottom: 20 }}>{book.emoji}</div>
              <div style={{ fontSize: 12, color: bp.colors.primary, fontWeight: 700, textTransform: 'uppercase', marginBottom: 8 }}>{book.genre}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: bp.colors.text, marginBottom: 6, lineHeight: 1.3 }}>{book.title}</h3>
              <p style={{ color: bp.colors.muted, fontSize: 13, marginBottom: 16 }}>by {book.author}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 22, fontWeight: 900, color: bp.colors.primary }}>{book.price}</span>
                <span style={{ color: '#f59e0b', fontSize: 13 }}>★ {book.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── BOOK GRID ────────────────────────────────────────────────────────────────
export const BookGrid = ({ bp, props }: { bp: SiteBlueprint; props: Record<string, unknown>; onNav?: (p: string) => void }) => {
  const title = (props.title as string) || 'All Books';
  return (
    <section style={{ padding: '80px 24px', background: bp.colors.bg }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: bp.colors.text, letterSpacing: '-1px' }}>{title}</h2>
          <div style={{ display: 'flex', gap: 8 }}>
            {['All', 'Fiction', 'Non-Fiction', 'Self-Help', 'Finance'].map(f => (
              <button key={f} style={{ background: f === 'All' ? bp.colors.primary : bp.colors.surface, color: f === 'All' ? '#fff' : bp.colors.muted, border: `1px solid ${bp.colors.border}`, borderRadius: 50, padding: '7px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>{f}</button>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {BOOKS.map(book => (
            <div key={book.title} style={{ background: bp.colors.surface, border: `1px solid ${bp.colors.border}`, borderRadius: 20, overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ height: 180, background: `linear-gradient(135deg, ${bp.colors.primary}15, ${bp.colors.secondary}10)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72 }}>{book.emoji}</div>
              <div style={{ padding: 20 }}>
                <div style={{ fontSize: 11, color: bp.colors.primary, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>{book.genre}</div>
                <h3 style={{ fontWeight: 800, color: bp.colors.text, fontSize: 15, marginBottom: 4, lineHeight: 1.3 }}>{book.title}</h3>
                <p style={{ color: bp.colors.muted, fontSize: 13, marginBottom: 12 }}>by {book.author}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ fontWeight: 900, color: bp.colors.primary, fontSize: 18 }}>{book.price}</span>
                  <span style={{ fontSize: 12, color: '#f59e0b' }}>★ {book.rating}</span>
                </div>
                <button style={{ width: '100%', background: bp.colors.primary, color: '#fff', border: 'none', borderRadius: 10, padding: '10px', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── BOOK NEW ARRIVALS ─────────────────────────────────────────────────────────
export const BookNewArrivals = ({ bp, props, onNav }: { bp: SiteBlueprint; props: Record<string, unknown>; onNav?: (p: string) => void }) => {
  const expanded = props.expanded as boolean;
  const books = expanded ? BOOKS : BOOKS.slice(6, 10);
  return (
    <section style={{ padding: '80px 24px', background: bp.colors.surface, borderTop: `1px solid ${bp.colors.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
          <div>
            <h2 style={{ fontSize: 40, fontWeight: 900, color: bp.colors.text, letterSpacing: '-1px', marginBottom: 6 }}>New Arrivals</h2>
            <p style={{ color: bp.colors.muted, fontSize: 16 }}>Fresh titles added this week</p>
          </div>
          {!expanded && <button onClick={() => onNav?.('/new-arrivals')} style={{ background: 'transparent', border: `2px solid ${bp.colors.border}`, color: bp.colors.text, borderRadius: 50, padding: '10px 24px', fontWeight: 700, cursor: 'pointer', fontSize: 14 }}>All New Arrivals →</button>}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {books.map(book => (
            <div key={book.title} style={{ display: 'flex', gap: 16, padding: 20, background: bp.colors.bg, border: `1px solid ${bp.colors.border}`, borderRadius: 16, cursor: 'pointer' }} onClick={() => onNav?.('/books')}>
              <div style={{ fontSize: 40, flexShrink: 0 }}>{book.emoji}</div>
              <div>
                <div style={{ fontWeight: 700, color: bp.colors.text, fontSize: 14, lineHeight: 1.3, marginBottom: 4 }}>{book.title}</div>
                <div style={{ color: bp.colors.muted, fontSize: 12, marginBottom: 8 }}>{book.author}</div>
                <div style={{ fontWeight: 900, color: bp.colors.primary, fontSize: 15 }}>{book.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
