'use client'

import { useEffect, useRef } from 'react'

const PROBLEMS = [
  {
    num: '01',
    label: 'Distrust in Financial Markets',
    headline: "People don't distrust investing. They distrust the systems around it.",
    body: 'Non-transparent advisory practices, conflicting social media signals, and a lack of regulatory clarity create an environment where caution feels rational, even when it limits financial growth.',
    stat: '71%',
    statLabel: 'of Indians avoid investing entirely',
    accent: '#F95A37',
  },
  {
    num: '02',
    label: 'Deficit in Financial Literacy',
    headline: 'Most adults, and the majority of women, are navigating finances without the basics.',
    body: "Financial illiteracy is not about intelligence. It's about access: to education, to trustworthy tools, and to products designed for people who are just starting to understand their money.",
    stat: '73%',
    statLabel: 'of adults below RBI literacy standard',
    accent: '#3894A1',
  },
  {
    num: '03',
    label: 'Stagnation in Investment Choices',
    headline: "Conservative investing isn't a preference. It's a default, in the absence of anything better.",
    body: "56% of Indian households park savings in bank deposits. Not because it's optimal, but because nothing else feels accessible, safe, or tailored to how they actually think about risk.",
    stat: '0.2%',
    statLabel: 'avg. real return, FD-only (2011–21)',
    accent: '#5856D6',
  },
  {
    num: '04',
    label: 'Hindered Financial Progress',
    headline: "Long-term goals exist. The tools to act on them consistently don't.",
    body: 'Without personalised planning, most individuals fail to align their financial strategy with their life goals. The gap between intention and action compounds over time, and is entirely preventable by design.',
    stat: '50Cr',
    statLabel: 'Indians carry a loan or credit card',
    accent: '#AF52DE',
  },
]

const STAGGER_MS = 100
const CARD_ANIM_MS = 500

export default function ProblemCards() {
  const containerRef = useRef(null)
  const firedRef = useRef(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || firedRef.current) return
        firedRef.current = true
        el.classList.add('pc-animate')
        observer.disconnect()
      },
      { threshold: 0.05 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col gap-3">
      <style>{`
        .pc-card {
          opacity: 0;
          transform: translateY(16px);
        }
        .pc-animate .pc-card {
          animation: pc-in ${CARD_ANIM_MS}ms ease-out forwards;
        }
        @keyframes pc-in {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {PROBLEMS.map((problem, i) => (
        <div
          key={problem.num}
          className="pc-card group relative flex bg-[#F5F6F8] border border-[#E2E4E8] rounded-sm overflow-hidden"
          style={{ animationDelay: `${i * STAGGER_MS}ms` }}
        >
          {/* Left accent bar — absolute so it expands without shifting content */}
          <div
            className="absolute left-0 top-0 h-full w-1 group-hover:w-2 transition-all duration-300 z-10"
            style={{ backgroundColor: problem.accent }}
          />

          {/* Card body — left-padded to clear the accent bar */}
          <div className="flex-1 flex items-start gap-5 md:gap-8 pl-6 pr-5 py-5 md:py-6">

            {/* Left column: number row + headline + body */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <span
                  className="text-xs font-bold tracking-widest leading-none flex-shrink-0"
                  style={{ color: problem.accent }}
                >
                  {problem.num}
                </span>
                <span className="text-xs tracking-wide text-[#6E757F] uppercase leading-none">
                  {problem.label}
                </span>
              </div>

              <p className="text-base font-medium text-[#141414] leading-snug mb-3">
                {problem.headline}
              </p>

              <p className="text-xs text-[#4E545F] leading-relaxed">
                {problem.body}
              </p>
            </div>

            {/* Right column: data callout box — slightly darker than card fill */}
            <div
              className="flex-shrink-0 w-32 md:w-36 self-start border border-[#D5D7DC] rounded-sm px-3 py-3 text-center"
              style={{ backgroundColor: '#ECEDF0' }}
            >
              <p
                className="text-2xl font-semibold leading-none mb-2"
                style={{ color: problem.accent }}
              >
                {problem.stat}
              </p>
              <p className="text-[11px] text-[#6E757F] leading-snug">
                {problem.statLabel}
              </p>
            </div>

          </div>
        </div>
      ))}
    </div>
  )
}
