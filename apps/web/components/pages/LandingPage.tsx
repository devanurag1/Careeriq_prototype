'use client';

import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { ROUTES } from '@/constants/routes';

const FEATURES = [
  { icon: '🎯', bg: 'var(--purple-light)', title: 'AI career diagnostic', desc: '10-minute setup builds your complete career profile and surfaces your biggest gaps instantly.' },
  { icon: '📊', bg: 'var(--teal-light)', title: 'Skill gap radar', desc: 'See exactly which skills are holding you back vs what the market demands right now.' },
  { icon: '🗺️', bg: 'var(--amber-light)', title: 'Personalized roadmap', desc: 'Week-by-week learning plan built for your schedule, budget, and current level.' },
  { icon: '💬', bg: '#FFE4E6', title: 'AI coach chat', desc: 'Ask anything. Get answers that know YOUR profile, not generic career advice.' },
  { icon: '📄', bg: 'var(--green-light)', title: 'Resume optimizer', desc: 'Upload. AI scores, rewrites, and aligns your resume to your target role.' },
  { icon: '📈', bg: '#FEF9C3', title: 'Job market intel', desc: 'Real-time data on rising skills, shrinking roles, and top hiring companies.' },
];

const TESTIMONIALS = [
  { stars: 5, quote: '"I was spending hours on YouTube with no direction. CareerIQ gave me a 12-week plan in 5 minutes."', initials: 'PS', bg: '#534AB7', name: 'Priya S.', role: 'Software Engineer, Bengaluru' },
  { stars: 5, quote: '"The skill gap radar was a wake-up call. I didn\'t realize how much I was missing for a PM role."', initials: 'RM', bg: '#0FA98E', name: 'Rahul M.', role: 'Product Manager, Mumbai' },
  { stars: 5, quote: '"Switched from finance to data analytics using the career switch planner. Got a job in 3 months."', initials: 'AK', bg: '#F59E0B', name: 'Ananya K.', role: 'Data Analyst, Hyderabad' },
];

const PAIN_CHIPS = [
  'Fear of job loss to AI', "Don't know what to learn", 'Skill gap blindness', 'No clear action plan',
  'Wasting time on wrong courses', 'Feeling replaceable', 'Career stagnation', 'No progress tracking',
  'Resume misalignment', 'Want to switch careers', 'No market visibility', 'Comparison anxiety',
  'Lack of decision confidence', 'Over-reliance on random content',
];

export function LandingPage() {
  const router = useRouter();
  const goAuth = () => router.push(ROUTES.AUTH);
  const goPricing = () => router.push(ROUTES.PRICING);

  return (
    <div style={{ background: 'var(--bg)' }}>
      <TopNav />

      {/* ── HERO ── */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 relative overflow-hidden"
        style={{ minHeight: 'calc(100vh - 62px)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(92,79,246,.08) 0%, transparent 70%)' }}
        />
        <div className="font-display font-bold text-xs tracking-widest uppercase mb-5" style={{ color: 'var(--purple)', letterSpacing: '.15em' }}>
          AI-powered career intelligence
        </div>
        <h1 className="font-display font-extrabold mb-5 max-w-3xl" style={{ fontSize: 'clamp(36px,6vw,72px)', lineHeight: 1.05, letterSpacing: '-2px', color: 'var(--text)' }}>
          Stop guessing.<br />Start growing <span style={{ color: 'var(--purple)' }}>with AI.</span>
        </h1>
        <p className="mb-9 font-light" style={{ fontSize: 18, color: 'var(--text2)', maxWidth: 560, lineHeight: 1.7 }}>
          The AI career co-pilot that tells you exactly what skills to learn, what to ignore, and how to stay irreplaceable in an AI-first world.
        </p>
        <div className="flex gap-3 justify-center flex-wrap mb-10">
          <button className="btn btn-primary" style={{ padding: '14px 32px', fontSize: 15 }} onClick={goAuth}>
            Get started free — it's instant
          </button>
          <button className="btn btn-ghost" style={{ padding: '14px 24px', fontSize: 15 }} onClick={goPricing}>
            See pricing
          </button>
        </div>
        <div className="flex items-center gap-4 justify-center flex-wrap" style={{ fontSize: 13, color: 'var(--text3)' }}>
          <span className="flex items-center gap-1">✓ No credit card required</span>
          <span className="flex items-center gap-1">✓ 12,000+ professionals</span>
          <span className="flex items-center gap-1">✓ Results in 10 minutes</span>
        </div>
      </section>

      {/* ── PAIN SECTION ── */}
      <section className="py-20 px-12" style={{ background: 'var(--text)' }}>
        <h2 className="font-display font-extrabold text-center mb-2" style={{ fontSize: 36, color: '#fff', letterSpacing: '-1px' }}>Sound familiar?</h2>
        <p className="text-center mb-10" style={{ color: 'rgba(255,255,255,.5)', fontSize: 16 }}>These are the fears keeping professionals awake at night.</p>
        <div className="flex flex-wrap gap-2.5 justify-center max-w-3xl mx-auto">
          {PAIN_CHIPS.map((chip) => (
            <div key={chip} className="pain-chip">{chip}</div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 px-12">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold mb-3" style={{ fontSize: 40, letterSpacing: '-1.5px' }}>
            Everything you need.<br />Nothing you don't.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--text2)', fontWeight: 300 }}>Six AI-powered tools built into one career intelligence platform.</p>
        </div>
        <div className="grid gap-5 max-w-5xl mx-auto" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card" onClick={goAuth}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4" style={{ background: f.bg }}>{f.icon}</div>
              <h3 className="font-display font-bold text-base mb-2">{f.title}</h3>
              <p className="text-sm" style={{ color: 'var(--text2)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-12" style={{ background: 'var(--surface)' }}>
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold mb-3" style={{ fontSize: 40, letterSpacing: '-1.5px' }}>Trusted by professionals across India</h2>
          <p style={{ fontSize: 17, color: 'var(--text2)', fontWeight: 300 }}>Real people. Real career clarity.</p>
        </div>
        <div className="grid gap-5 max-w-5xl mx-auto" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="tcard">
              <div className="mb-3" style={{ color: 'var(--amber)', fontSize: 14, letterSpacing: 2 }}>{'★'.repeat(t.stars)}</div>
              <p className="mb-4" style={{ fontSize: 15, color: 'var(--text)', lineHeight: 1.65, fontStyle: 'italic', fontWeight: 300 }}>{t.quote}</p>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: t.bg }}>{t.initials}</div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text3)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING PREVIEW ── */}
      <section className="py-20 px-12" style={{ background: 'var(--bg)' }}>
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold mb-3" style={{ fontSize: 40, letterSpacing: '-1.5px' }}>Simple, honest pricing</h2>
          <p style={{ fontSize: 17, color: 'var(--text2)', fontWeight: 300 }}>Start free. Upgrade when you're ready.</p>
        </div>
        <div className="grid gap-5 max-w-4xl mx-auto" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {/* Free */}
          <div className="pcard">
            <h3 className="font-display font-bold text-lg mb-1">Free</h3>
            <div className="font-display font-extrabold" style={{ fontSize: 36, letterSpacing: '-1px', margin: '12px 0 4px' }}>₹0 <span className="text-sm font-normal" style={{ color: 'var(--text3)' }}>/ forever</span></div>
            <p className="text-sm mb-5" style={{ color: 'var(--text2)' }}>Get oriented. Taste the value.</p>
            <ul className="list-none mb-6 flex flex-col gap-0">
              {['Career diagnostic (1 session)', 'Top 5 skill gaps', '3 AI coach messages/day', '2-week roadmap preview'].map(f => (
                <li key={f} className="flex items-start gap-2 text-xs py-1.5 border-b" style={{ color: 'var(--text2)', borderColor: 'var(--border)' }}><span style={{ color: 'var(--teal)', fontWeight: 700 }}>✓</span>{f}</li>
              ))}
              {['Full roadmap locked', 'Resume optimizer locked'].map(f => (
                <li key={f} className="flex items-start gap-2 text-xs py-1.5 border-b" style={{ color: 'var(--text3)', borderColor: 'var(--border)' }}><span>🔒</span>{f}</li>
              ))}
            </ul>
            <button className="btn btn-outline w-full justify-center" onClick={goAuth}>Get started free</button>
          </div>
          {/* Pro */}
          <div className="pcard featured">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-display font-bold text-xs text-white px-3 py-1 rounded-full" style={{ background: 'var(--purple)', whiteSpace: 'nowrap' }}>Most popular</div>
            <h3 className="font-display font-bold text-lg mb-1">Pro</h3>
            <div className="font-display font-extrabold" style={{ fontSize: 36, letterSpacing: '-1px', margin: '12px 0 4px' }}>₹499 <span className="text-sm font-normal" style={{ color: 'var(--text3)' }}>/ month</span></div>
            <p className="text-sm mb-5" style={{ color: 'var(--text2)' }}>Full AI access. Full clarity.</p>
            <ul className="list-none mb-6 flex flex-col gap-0">
              {['Unlimited AI coach', 'Full 12-week roadmap', 'Complete skill gap radar', 'Resume rewrite (3/month)', 'Real-time job market intel', 'Career switch planner'].map(f => (
                <li key={f} className="flex items-start gap-2 text-xs py-1.5 border-b" style={{ color: 'var(--text2)', borderColor: 'var(--border)' }}><span style={{ color: 'var(--teal)', fontWeight: 700 }}>✓</span>{f}</li>
              ))}
            </ul>
            <button className="btn btn-primary w-full justify-center" onClick={goAuth}>Start Pro</button>
          </div>
          {/* Pro Max */}
          <div className="pcard">
            <h3 className="font-display font-bold text-lg mb-1">Pro Max</h3>
            <div className="font-display font-extrabold" style={{ fontSize: 36, letterSpacing: '-1px', margin: '12px 0 4px' }}>₹999 <span className="text-sm font-normal" style={{ color: 'var(--text3)' }}>/ month</span></div>
            <p className="text-sm mb-5" style={{ color: 'var(--text2)' }}>Every advantage, unlocked.</p>
            <ul className="list-none mb-6 flex flex-col gap-0">
              {['Everything in Pro', 'Unlimited resume rewrites', 'LinkedIn optimizer', 'Mock interview AI', 'Salary benchmarks', 'Exportable career reports'].map(f => (
                <li key={f} className="flex items-start gap-2 text-xs py-1.5 border-b" style={{ color: 'var(--text2)', borderColor: 'var(--border)' }}><span style={{ color: 'var(--teal)', fontWeight: 700 }}>✓</span>{f}</li>
              ))}
            </ul>
            <button className="btn btn-ghost w-full justify-center" onClick={goAuth}>Go Pro Max</button>
          </div>
        </div>
        <div className="text-center mt-5">
          <span className="text-sm cursor-pointer" style={{ color: 'var(--purple)' }} onClick={goPricing}>See full feature comparison →</span>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 px-12 text-center" style={{ background: 'var(--purple)' }}>
        <h2 className="font-display font-extrabold mb-3 text-white" style={{ fontSize: 42, letterSpacing: '-1.5px' }}>Your AI career advisor is waiting.</h2>
        <p className="mb-8" style={{ color: 'rgba(255,255,255,.7)', fontSize: 17 }}>10 minutes to build your profile. Instant clarity on what to do next.</p>
        <button className="btn btn-lg" style={{ background: '#fff', color: 'var(--purple)' }} onClick={goAuth}>
          Start for free — no credit card
        </button>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-12 grid gap-8" style={{ background: 'var(--text)', gridTemplateColumns: '2fr 1fr 1fr 1fr' }}>
        <div>
          <h4 className="font-display font-extrabold text-xl text-white mb-2.5">CareerIQ</h4>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.4)', lineHeight: 1.6 }}>Your AI-powered career co-pilot. Built for professionals navigating the age of AI disruption.</p>
        </div>
        {[
          { title: 'Product', links: ['Features', 'Pricing', 'Blog', 'For teams'] },
          { title: 'Company', links: ['About', 'Careers', 'Contact'] },
          { title: 'Legal', links: ['Privacy policy', 'Terms of use', 'Refund policy'] },
        ].map((col) => (
          <div key={col.title}>
            <h5 className="font-display font-bold mb-3.5" style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', letterSpacing: '.05em' }}>{col.title}</h5>
            {col.links.map((link) => (
              <a key={link} className="block mb-2 no-underline transition-colors" style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', cursor: 'pointer' }}>{link}</a>
            ))}
          </div>
        ))}
      </footer>
    </div>
  );
}
