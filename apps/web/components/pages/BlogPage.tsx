'use client';

import { TopNav } from '@/components/layout/TopNav';

const POSTS = [
  { emoji: '🤖', bg: '#EEEDFE', tag: 'AI & careers', title: 'Which tech jobs are most at risk from AI in 2025?', desc: 'We analyzed 50,000 job postings to find out which roles are shrinking and which are growing.', meta: '5 min read · March 2025' },
  { emoji: '📊', bg: '#E1F5EE', tag: 'Skill strategy', title: 'The 10 skills every software engineer needs to learn in 2025', desc: 'From prompt engineering to system design — a data-backed priority list for developers.', meta: '8 min read · February 2025' },
  { emoji: '💼', bg: '#FEF3C7', tag: 'Career switch', title: 'From engineer to product manager: a complete transition guide', desc: 'Real steps, real timeline, and the exact skill gaps you need to close before applying.', meta: '12 min read · January 2025' },
  { emoji: '📈', bg: '#FEE2E2', tag: 'Market intel', title: "India's tech hiring trends: what companies want in 2025", desc: 'Data from 30,000+ job listings across Bangalore, Mumbai, and Hyderabad.', meta: '6 min read · January 2025' },
  { emoji: '🎯', bg: '#D1FAE5', tag: 'Learning', title: 'How to build a learning routine when you have zero free time', desc: 'The 30-minutes-a-day system that 4,000 CareerIQ users swear by.', meta: '4 min read · December 2024' },
  { emoji: '📄', bg: '#E6F1FB', tag: 'Resume', title: "Why your resume isn't getting callbacks — and how to fix it", desc: 'The 7 most common resume mistakes we see, and exactly how to fix each one.', meta: '7 min read · December 2024' },
];

export function BlogPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <TopNav />

      <div className="text-center py-16 px-12" style={{ paddingBottom: 40 }}>
        <h1 className="font-display font-extrabold mb-3" style={{ fontSize: 48, letterSpacing: '-2px' }}>Resources &amp; insights</h1>
        <p style={{ fontSize: 18, color: 'var(--text2)', fontWeight: 300 }}>Career strategy for the age of AI disruption.</p>
      </div>

      <div className="px-12 pb-20">
        <div className="grid gap-5 max-w-5xl mx-auto" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {POSTS.map((post) => (
            <div key={post.title} className="blog-card">
              <div className="flex items-center justify-center text-4xl" style={{ height: 160, background: post.bg }}>{post.emoji}</div>
              <div className="p-4">
                <div className="font-display font-semibold mb-2 uppercase tracking-wide" style={{ fontSize: 11, color: 'var(--purple)' }}>{post.tag}</div>
                <h3 className="font-display font-bold mb-2" style={{ fontSize: 16, lineHeight: 1.35 }}>{post.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text2)', lineHeight: 1.55 }}>{post.desc}</p>
                <div className="mt-3 text-xs" style={{ color: 'var(--text3)' }}>{post.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
