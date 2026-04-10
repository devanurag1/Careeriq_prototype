'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { ROUTES } from '@/constants/routes';

const FAQS = [
  { q: 'Can I cancel anytime?', a: 'Yes. No lock-in, no cancellation fees. Cancel from your profile settings any time and you keep access until the end of your billing period.' },
  { q: 'How is this different from ChatGPT?', a: "ChatGPT gives generic answers. CareerIQ knows YOUR profile — your role, your gaps, your goals, your roadmap — so every answer is specific to you. It's the difference between Googling and having a personal advisor." },
  { q: 'Is there a student discount?', a: 'Yes. Students with a valid .edu or college email get 40% off Pro. Reach out to us at support@careeriq.in.' },
  { q: 'What does the free plan actually include?', a: "Free forever gives you a real career diagnostic, your top 5 skill gaps, a 2-week roadmap preview, and 3 AI coach messages per day. It's enough to know what you're missing — then Pro fills the gap." },
];

export function PricingPage() {
  const router = useRouter();
  const goAuth = () => router.push(ROUTES.AUTH);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: 'var(--bg)' }}>
      <TopNav />

      {/* Hero */}
      <div className="text-center py-16 px-12" style={{ paddingBottom: 40 }}>
        <h1 className="font-display font-extrabold mb-3" style={{ fontSize: 48, letterSpacing: '-2px' }}>Simple, honest pricing</h1>
        <p style={{ fontSize: 18, color: 'var(--text2)', fontWeight: 300 }}>Start free. No credit card. Upgrade only when CareerIQ has proven its value to you.</p>
      </div>

      {/* Plans */}
      <div className="px-12 pb-10">
        <div className="grid gap-5 max-w-4xl mx-auto" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {/* Free */}
          <div className="pcard">
            <h3 className="font-display font-bold text-lg mb-1">Free</h3>
            <div className="font-display font-extrabold" style={{ fontSize: 36, letterSpacing: '-1px', margin: '12px 0 4px' }}>₹0 <span className="text-sm font-normal" style={{ color: 'var(--text3)' }}>/ forever</span></div>
            <p className="text-sm mb-5" style={{ color: 'var(--text2)' }}>Get oriented. Taste the value.</p>
            <ul className="list-none mb-6">
              {[
                { ok: true, text: 'Career diagnostic (1 session)' },
                { ok: true, text: 'Top 5 skill gaps (overview only)' },
                { ok: true, text: '3 AI coach messages/day' },
                { ok: true, text: '2-week roadmap preview' },
                { ok: true, text: '1 resume scan (score only)' },
                { ok: true, text: 'Weekly market digest' },
                { ok: false, text: 'Full 12-week roadmap' },
                { ok: false, text: 'Career switch planner' },
                { ok: false, text: 'Progress tracking' },
                { ok: false, text: 'Resume rewrite' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-2 text-xs py-1.5 border-b" style={{ color: item.ok ? 'var(--text2)' : 'var(--text3)', borderColor: 'var(--border)' }}>
                  <span style={{ color: item.ok ? 'var(--teal)' : undefined, fontWeight: 700, flexShrink: 0 }}>{item.ok ? '✓' : '🔒'}</span>
                  {item.text}
                </li>
              ))}
            </ul>
            <button className="btn btn-outline w-full justify-center" onClick={goAuth}>Get started free</button>
          </div>

          {/* Pro */}
          <div className="pcard featured">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-display font-bold text-xs text-white px-3 py-1 rounded-full" style={{ background: 'var(--purple)', whiteSpace: 'nowrap' }}>Most popular</div>
            <h3 className="font-display font-bold text-lg mb-1">Pro</h3>
            <div className="font-display font-extrabold" style={{ fontSize: 36, letterSpacing: '-1px', margin: '12px 0 4px' }}>₹499 <span className="text-sm font-normal" style={{ color: 'var(--text3)' }}>/ month</span></div>
            <p className="text-sm mb-5" style={{ color: 'var(--text2)' }}>For the serious career mover. Full AI access.</p>
            <ul className="list-none mb-6">
              {[
                'Unlimited AI career coach',
                'Full personalized 12-week roadmap',
                'Complete skill gap radar (all gaps)',
                'Resume rewrite + optimization (3/mo)',
                'Real-time job market intelligence',
                'Career switch planner (3 target roles)',
                'Weekly progress + streak tracker',
                'Job description analyzer',
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs py-1.5 border-b" style={{ color: 'var(--text2)', borderColor: 'var(--border)' }}>
                  <span style={{ color: 'var(--teal)', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                </li>
              ))}
              {['LinkedIn profile optimizer', 'Mock interview AI'].map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs py-1.5 border-b" style={{ color: 'var(--text3)', borderColor: 'var(--border)' }}>
                  <span style={{ flexShrink: 0 }}>🔒</span>{f}
                </li>
              ))}
            </ul>
            <button className="btn btn-primary w-full justify-center" onClick={goAuth}>Start Pro — ₹499/mo</button>
          </div>

          {/* Pro Max */}
          <div className="pcard">
            <h3 className="font-display font-bold text-lg mb-1">Pro Max</h3>
            <div className="font-display font-extrabold" style={{ fontSize: 36, letterSpacing: '-1px', margin: '12px 0 4px' }}>₹999 <span className="text-sm font-normal" style={{ color: 'var(--text3)' }}>/ month</span></div>
            <p className="text-sm mb-5" style={{ color: 'var(--text2)' }}>Every advantage, completely unlocked.</p>
            <ul className="list-none mb-6">
              {[
                'Everything in Pro', 'Unlimited resume rewrites', 'LinkedIn profile full rewrite',
                'Mock interview AI (role-specific)', 'Salary benchmark intelligence', 'Priority AI responses',
                'Monthly 45-min AI strategy session', 'Exportable career reports (PDF)',
                'Early access to new features', 'B2B team management dashboard',
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs py-1.5 border-b" style={{ color: 'var(--text2)', borderColor: 'var(--border)' }}>
                  <span style={{ color: 'var(--teal)', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <button className="btn btn-ghost w-full justify-center" onClick={goAuth}>Go Pro Max</button>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-2xl mx-auto px-12 py-16">
        <h2 className="font-display font-extrabold mb-7" style={{ fontSize: 28, letterSpacing: '-1px' }}>Frequently asked questions</h2>
        {FAQS.map((faq, i) => (
          <div key={faq.q} className="border-b py-5" style={{ borderColor: 'var(--border)' }}>
            <div
              className="flex justify-between items-center cursor-pointer font-display font-semibold text-base"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              {faq.q}
              <span style={{ color: 'var(--purple)', fontSize: 20, lineHeight: 1 }}>{openFaq === i ? '−' : '+'}</span>
            </div>
            {openFaq === i && (
              <p className="mt-2.5 text-sm leading-7" style={{ color: 'var(--text2)' }}>{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
