'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { NavArrowLeft, NavArrowRight } from 'iconoir-react'
import SpiralDiagram from '@/components/SpiralDiagram'

/* ── Shared primitives ─────────────────────────────────────────────────────── */

function SectionLabel({ children }) {
  return (
    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-5">
      {children}
    </p>
  )
}

function CaseStudyImage({ src, alt, className = '' }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      className={className}
    />
  )
}

/* ── Page ──────────────────────────────────────────────────────────────────── */

const CARDS = 4

export default function BharatsurePage() {
  const carouselContainerRef = useRef(null)
  const trackRef = useRef(null)
  const [cardW, setCardW] = useState(null)
  const cardWRef = useRef(null)
  const indexRef = useRef(0)
  const lockRef = useRef(false)

  useEffect(() => {
    const el = carouselContainerRef.current
    if (!el) return
    const ob = new ResizeObserver(() => {
      const w = Math.round((el.offsetWidth - 16) * 2 / 3)
      cardWRef.current = w
      setCardW(w)
      if (trackRef.current) {
        trackRef.current.style.transition = 'none'
        trackRef.current.style.transform = `translateX(-${indexRef.current * (w + 16)}px)`
        void trackRef.current.getBoundingClientRect()
        trackRef.current.style.transition = ''
      }
    })
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  function snap(index) {
    const track = trackRef.current
    const w = cardWRef.current
    if (!track || w === null) return
    track.style.transition = 'none'
    void track.getBoundingClientRect()
    track.style.transform = `translateX(-${index * (w + 16)}px)`
    void track.getBoundingClientRect()
    track.style.transition = ''
  }

  function slide(index) {
    const track = trackRef.current
    const w = cardWRef.current
    if (!track || w === null) return
    track.style.transform = `translateX(-${index * (w + 16)}px)`
  }

  function goBlock(dir) {
    if (lockRef.current || cardWRef.current === null) return
    lockRef.current = true

    if (dir > 0) {
      const next = indexRef.current + 1
      indexRef.current = next
      slide(next)
      setTimeout(() => {
        if (next === CARDS) {
          indexRef.current = 0
          snap(0)
        }
        lockRef.current = false
      }, 520)
    } else {
      if (indexRef.current === 0) {
        snap(CARDS)
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            indexRef.current = CARDS - 1
            slide(CARDS - 1)
            setTimeout(() => { lockRef.current = false }, 520)
          })
        })
      } else {
        indexRef.current -= 1
        slide(indexRef.current)
        setTimeout(() => { lockRef.current = false }, 520)
      }
    }
  }

  return (
    <main className="bg-background text-foreground overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] max-w-5xl">
            Bharatsure: Product Design for a Full-Stack Insurance Platform
          </h1>
        </div>
      </section>

      {/* ── INTRO STRIP ───────────────────────────────────────────────────── */}
      <section className="py-10">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16 flex flex-col md:flex-row md:items-start gap-6 md:gap-20">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-wide text-muted-foreground shrink-0 pt-0.5">
            <span>Industry: Insurance-tech</span>
            <span>Role: Product Designer</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-[620px] leading-relaxed">
            Designing an insurance distribution platform for brokers, covering workflows
            and dashboards through to a scalable design system, as an embedded product designer.
          </p>
        </div>
      </section>

      {/* Full-bleed hero image */}
      <CaseStudyImage
        src="/bharatsure/images/Hero Image.png"
        alt="Hero Image"
      />

      {/* ── ABOUT THE CLIENT ──────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <SectionLabel>About the Client</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
            Bharatsure
          </h2>
          <p className="text-base text-muted-foreground max-w-[680px] leading-relaxed">
            Bharatsure is an insurance infrastructure platform built for brokers across
            India. It gives them the technology and tools to manage, distribute, and
            operate insurance products efficiently, removing the operational complexity,
            redundancy and friction.
          </p>
        </div>
      </section>

      {/* ── MY ROLE ───────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <SectionLabel>My Role</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 max-w-3xl">
            Embedded, Involved and Always in the Loop
          </h2>
          <p className="text-base text-muted-foreground max-w-[680px] leading-relaxed mb-12">
            Working with Studio Baagh, I was embedded full-time within Bharatsure's
            product team for over a year. What began as an initial scoping phase grew
            into a long-term partnership, where I collaborated daily with their product
            managers and developers, working across every stage as the team and product
            scaled.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-wide text-muted-foreground">
            <span>Capacity: Embedded Designer</span>
            <span>Collaboration: Product, Dev and QA</span>
            <span>Engagement: Sprint-based, ongoing</span>
          </div>
          <div className="mt-16">
            <SpiralDiagram />
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHT & IMPACT ────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <SectionLabel>Highlight &amp; Impact</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-6">
            {[
              {
                num: '5',
                desc: 'Platforms catering to users across insurance providers, brokers, company HRs and employees',
              },
              {
                num: '15+',
                desc: 'Product modules designed to be replicated across the product',
              },
              {
                num: '300+',
                desc: 'Components and variants built and scaled across web and mobile',
              },
            ].map(({ num, desc }) => (
              <div key={num}>
                <p className="text-7xl md:text-8xl font-semibold tracking-tight leading-none">
                  {num}
                </p>
                <p className="text-sm text-muted-foreground mt-5 max-w-[260px] leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHALLENGES ────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <SectionLabel>Challenges</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
            {[
              {
                title: 'Disconnected Experience',
                body: 'No unified interaction model. UX inconsistencies across mobile and web.',
              },
              {
                title: 'No Scalable Design System',
                body: 'No shared component library. Repeated efforts and inconsistent visuals.',
              },
              {
                title: 'Inefficient Collaboration',
                body: 'No standard handoff process. Limited documentation led to misalignment.',
              },
            ].map(({ title, body }) => (
              <div key={title}>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLVING THROUGH DESIGN ────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16 mb-14">
          <SectionLabel>Solving Through Design</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] max-w-4xl mb-8">
            From the first PM brief to the final interface, every decision was grounded
            in understanding how people actually work within insurance.
          </h2>
          <p className="text-base text-muted-foreground max-w-[680px] leading-relaxed">
            Here is how that thinking translated into the product.
          </p>
        </div>
        <CaseStudyImage
          src="/bharatsure/images/Solving Through Design -- Process Visual.png"
          alt="Solving Through Design -- Process Visual"
        />
      </section>

      {/* ── HOW IT CAME TOGETHER ──────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">

          {/* Row 1: text left, image right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
                How It Came Together
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every feature had its own starting point. Some began with a detailed PRD,
                others with a quick alignment call, and a few with just a rough idea that
                needed shape. What stayed consistent was the back and forth: working closely
                with Bharatsure's PMs to understand the business logic, ask the right
                questions and map out the experience before any design work began.
              </p>
            </div>
            <CaseStudyImage src="/bharatsure/images/PRD Snapshot.png" alt="PRD Snapshot" />
          </div>

          {/* Row 2: full-width within container */}
          <CaseStudyImage src="/bharatsure/images/Workflow Documentation.png" alt="Workflow Documentation" />

        </div>
      </section>

      {/* ── THE WORK ──────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
                The Work
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Across three distinct platforms, the focus remained the same: making complex
                systems feel simple, structured and easy to move through.
              </p>
            </div>
            <CaseStudyImage src="/bharatsure/images/The Work.png" alt="The Work" />
          </div>
        </div>
      </section>

      {/* ── DESIGNED FOR CLARITY ──────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16 mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 max-w-2xl">
            Designed for Clarity
          </h2>
          <p className="text-base text-muted-foreground max-w-[680px] leading-relaxed">
            Every screen organized around what the user needs to do next, not just what
            the system needs to show.
          </p>
        </div>

        {/* 2 × 4 uniform grid */}
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {[
              { n: 1, cap: 'Organized around the actions a broker needs to take, not just the data the system holds.' },
              { n: 2, cap: 'Context stays visible while edits happen, with no navigation away and no lost orientation.' },
              { n: 3, cap: 'Financials structured from summary to detail, so the right number is always one glance away.' },
              { n: 4, cap: 'A guided flow that keeps brokers oriented at every step, from start to submission.' },
              { n: 5, cap: "Field-level controls that let brokers configure templates without touching anything they shouldn't." },
              { n: 6, cap: 'Policy details, formatted and ready, previewed before they reach the member.' },
              { n: 7, cap: "Multiple insurers in one view, with a clear recommendation so the decision doesn't stall." },
              { n: 8, cap: "Health inputs assessed in real time, so brokers know what's viable before the quote goes out." },
            ].map(({ n, cap }) => (
              <div key={n}>
                <CaseStudyImage
                  src={`/bharatsure/images/Broker Platform, Image ${n}.png`}
                  alt={`Broker Platform, Image ${n}`}
                />
                <p className="text-sm text-muted-foreground mt-3">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESIGNED FOR EVERY ROLE ───────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16 mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 max-w-2xl">
            Designed for Every Role
          </h2>
          <p className="text-base text-muted-foreground max-w-[680px] leading-relaxed">
            Two distinct users, two distinct experiences, each designed around what the
            role actually needs to see and do.
          </p>
        </div>

        {/* 2 × 2 grid */}
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {[
              { n: 1, cap: 'Key numbers and member actions surfaced upfront, so HR can manage on the go without digging.' },
              { n: 2, cap: 'Claims, nominees and account details, each in its own space with nothing competing for attention.' },
              { n: 3, cap: 'The full benefits experience in a white-labeled app: policies, requests and health perks, all in one place.' },
              { n: 4, cap: 'The platform extended beyond insurance, branded and configured for how each partner wants to sell.' },
            ].map(({ n, cap }) => (
              <div key={n}>
                <CaseStudyImage
                  src={`/bharatsure/images/Employee App, Image ${n}.png`}
                  alt={`Employee App, Image ${n}`}
                />
                <p className="text-sm text-muted-foreground mt-3">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE DESIGN SYSTEM ──────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16 mb-14">
          <SectionLabel>Enterprise Design System</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 max-w-2xl">
            Built to disappear into every product it powers.
          </h2>
          <p className="text-base text-muted-foreground max-w-[680px] leading-relaxed">
            With the product being white-labeled across multiple partners, I worked within
            a neutral visual language, balancing muted tones with modular components,
            adaptable grids and flexible layouts to ensure easy adaptability across use
            cases. This system accelerated design-developer collaboration and
            future-proofed the platform for scalable growth.
          </p>
        </div>
        {/* Full-bleed */}
        <CaseStudyImage
          src="/bharatsure/images/Design System, Component Library Overview.png"
          alt="Design System, Component Library Overview"
        />
      </section>

      {/* ── BUILDING BLOCKS ───────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

            {/* Left: heading */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Building Blocks Behind a Cohesive &amp; Evolving Product Experience
              </h2>
            </div>

            {/* Right: carousel + arrows below */}
            <div>
              <div ref={carouselContainerRef} className="overflow-hidden">
                <div
                  ref={trackRef}
                  className="flex gap-4 transition-transform duration-500 ease-in-out"
                >
                  {Array.from({ length: CARDS * 2 }, (_, i) => {
                    const n = (i % CARDS) + 1
                    return (
                      <div
                        key={i}
                        className="relative shrink-0 aspect-square overflow-hidden"
                        style={{ width: cardW ?? 300 }}
                      >
                        <Image
                          src={`/bharatsure/images/Building Block ${n}.png`}
                          alt={`Building Block ${n}`}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => goBlock(-1)}
                  aria-label="Previous"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-muted transition-colors"
                >
                  <NavArrowLeft width={18} height={18} />
                </button>
                <button
                  onClick={() => goBlock(1)}
                  aria-label="Next"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-muted transition-colors"
                >
                  <NavArrowRight width={18} height={18} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WEB EXPERIENCE ────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16 mb-14">
          <SectionLabel>Web Experience</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 max-w-2xl">
            A Website That Leads With the Product
          </h2>
          <p className="text-base text-muted-foreground max-w-[680px] leading-relaxed">
            Healthysure is Bharatsure's own broker-facing product, built on the same
            infrastructure they provide to other brokers. The website redesign focused on
            making that depth visible: real UI in context, a clear breakdown of offerings,
            and trust metrics that do the talking.
          </p>
        </div>
        {/* Full-bleed */}
        <CaseStudyImage
          src="/bharatsure/images/Healthysure Website, Full Page Screenshot.png"
          alt="Healthysure Website, Full Page Screenshot"
        />

        {/* Two-row image grid */}
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16 mt-6 flex flex-col gap-6">
          {/* Row 1: 60/40 — left anchors height, right fills */}
          <div className="grid grid-cols-[3fr_2fr] gap-6">
            <CaseStudyImage src="/bharatsure/images/Healthysure Features Section.png" alt="Healthysure Features Section" />
            <CaseStudyImage src="/bharatsure/images/Healthysure Mobile Add-ons.png" alt="Healthysure Mobile Add-ons" />
          </div>
          {/* Row 2: 40/60 — left anchors height, right fills */}
          <div className="grid grid-cols-[2fr_3fr] gap-6">
            <CaseStudyImage src="/bharatsure/images/Healthysure Product Categories.png" alt="Healthysure Product Categories" />
            <CaseStudyImage src="/bharatsure/images/Healthysure Website Mockup.png" alt="Healthysure Website Mockup" />
          </div>
        </div>
      </section>

    </main>
  )
}
