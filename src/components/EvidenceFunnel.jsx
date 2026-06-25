'use client'

import { useEffect, useRef } from 'react'

const LAYERS = [
  {
    num: '01',
    title: 'Market Research',
    summary: "India's $3.2B wealth management market · 10.5% CAGR · 2 core business cases · 4 problem areas",
    accent: '#2D7A6A',
    bar: '#7BBFB0',
  },
  {
    num: '02',
    title: 'Secondary Research',
    summary: 'Demographic study · 4 competitors benchmarked (Wint Wealth, Dezerv, Grip, ET Money) · Mental model derivation',
    accent: '#2B5F8A',
    bar: '#7AAFD4',
  },
  {
    num: '03',
    title: 'User Interviews',
    summary: '7 interviews · 80 participants across surveys · EMEX × QIA tagging · 7 user stories',
    accent: '#8A6B1A',
    bar: '#D4A832',
  },
  {
    num: '04',
    title: 'Sentiment Analysis',
    summary: '54 user problems identified · Motivations, frustrations, and neutralities mapped per user',
    accent: '#8A5A1A',
    bar: '#D4922A',
  },
  {
    num: '05',
    title: 'Mental Model Analysis',
    summary: '44 solutions recommended · 82 features derived · 18 trackable metrics defined',
    accent: '#3D3D99',
    bar: '#7B7FD4',
  },
  {
    num: '06',
    title: 'Criticality Scoring',
    summary: '6-axis scoring framework · C2 cluster · Feature prioritisation validated',
    accent: '#8A2B5F',
    bar: '#D47AAF',
  },
  {
    num: '07',
    title: 'Card Sorting',
    summary: 'User-validated information architecture · Navigation sequence confirmed',
    accent: '#6B2D9A',
    bar: '#B07BD4',
  },
]

const OUTPUTS = [
  'Investment Strategy Builder',
  'AI Investment Suggestion + GPT',
  'Budgeting & Expense Tracker',
]

// Proportional width steps — same 7-unit ratio, applied in px after measurement
const LAYER_WIDTHS = LAYERS.map((_, i) => 100 - i * 7) // [100, 93, 86, 79, 72, 65, 58]
const NARROWEST = LAYER_WIDTHS[LAYER_WIDTHS.length - 1] // 58

const STAGGER_MS = 80
const LAYER_ANIM_MS = 420
const OUTPUT_DELAY_MS = (LAYERS.length - 1) * STAGGER_MS + LAYER_ANIM_MS + STAGGER_MS

export default function EvidenceFunnel() {
  const containerRef = useRef(null)
  const firedRef = useRef(false)
  const layerRefs = useRef([])

  useEffect(() => {
    // ── Step 1: measure layer 07's natural fit-content width ─────────────────
    // Direct DOM mutation so React never resets the computed maxWidth on re-render
    const lastEl = layerRefs.current[LAYERS.length - 1]
    if (lastEl) {
      lastEl.style.maxWidth = 'none'
      lastEl.style.width = 'max-content'
      void lastEl.getBoundingClientRect() // force layout
      const baseW = lastEl.getBoundingClientRect().width
      lastEl.style.width = ''
      lastEl.style.maxWidth = ''

      layerRefs.current.forEach((el, i) => {
        if (el) el.style.maxWidth = `${Math.ceil(baseW * LAYER_WIDTHS[i] / NARROWEST)}px`
      })
    }

    // ── Step 2: scroll-triggered animation ───────────────────────────────────
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || firedRef.current) return
        firedRef.current = true
        el.classList.add('ef-animate')
        observer.disconnect()
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef}>
      <style>{`
        .ef-layer {
          opacity: 0;
          transform: translateY(8px);
        }
        .ef-animate .ef-layer {
          animation: ef-in ${LAYER_ANIM_MS}ms ease-out forwards;
        }
        .ef-outputs {
          opacity: 0;
          transform: scale(0.95);
        }
        .ef-animate .ef-outputs {
          animation: ef-scale ${LAYER_ANIM_MS}ms ease-out ${OUTPUT_DELAY_MS}ms forwards;
        }
        @keyframes ef-in {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ef-scale {
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Seven funnel layers — widths computed in JS from layer 07's fit-content size */}
      <div className="flex flex-col items-center gap-1.5">
        {LAYERS.map((layer, i) => (
          <div
            key={layer.num}
            ref={el => { layerRefs.current[i] = el }}
            className="ef-layer flex items-center gap-4 px-5 py-3.5 rounded-sm border w-full"
            style={{
              animationDelay: `${i * STAGGER_MS}ms`,
              borderColor: layer.bar,
            }}
          >
            <span
              className="text-xs font-bold tabular-nums flex-shrink-0 leading-none"
              style={{ color: layer.accent }}
            >
              {layer.num}
            </span>
            <span className="text-sm font-semibold text-[#272A30] flex-shrink-0 leading-none">
              {layer.title}
            </span>
            <span className="text-xs text-[#4E545F] ml-1 truncate hidden sm:block leading-none">
              {layer.summary}
            </span>
          </div>
        ))}
      </div>

      {/* Three output boxes */}
      <div className="ef-outputs mt-10 flex flex-col sm:flex-row gap-3">
        {OUTPUTS.map((output) => (
          <div
            key={output}
            className="flex-1 border border-[#5856D6] rounded-sm px-5 py-4 text-sm font-semibold text-[#272A30] text-center"
          >
            {output}
          </div>
        ))}
      </div>

      {/* Caption */}
      <p className="mt-4 text-center text-xs text-[#9DA3AF] tracking-wide">
        18 processes · 80 users · 54 problems · 82 features · 3 core product solutions
      </p>
    </div>
  )
}
