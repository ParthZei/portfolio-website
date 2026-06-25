'use client'

import Image from 'next/image'
import EvidenceFunnel from '@/components/EvidenceFunnel'
import ProblemCards from '@/components/ProblemCards'

/* ── Shared primitives ─────────────────────────────────────────────────────── */

function SectionLabel({ children }) {
  return (
    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-5">
      {children}
    </p>
  )
}

function Placeholder({ label, className = '' }) {
  return (
    <div
      className={`bg-secondary flex items-center justify-center text-xs uppercase tracking-wide text-muted-foreground ${className}`}
    >
      {label}
    </div>
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

const WHY_CARDS = [
  {
    title: 'Emotional Connection',
    body: 'Money in India is deeply personal. Cultural values and emotional attachment to money drive conservative investing, not ignorance.',
    closing: 'The problem worth designing around.',
    accent: '#3894A1',
  },
  {
    title: 'Industry Growth',
    body: '10.5% CAGR through 2026. A market growing fast enough to shape how millions of first-time investors are onboarded to financial markets.',
    closing: 'A 5-year window to get the design right.',
    accent: '#3894A1',
  },
  {
    title: 'No User-Centric Products',
    body: 'Existing platforms serve HNIs and institutional investors. Women, first-time investors, and the emerging middle class are structurally underserved.',
    closing: 'A gap large enough to build a product into.',
    accent: '#5856D6',
  },
  {
    title: 'Business Opportunity',
    body: 'INR 5.5 trillion market by 2030. The McKinsey Institute estimates India could lose $770B in GDP by 2025 without better financial inclusion.',
    closing: 'Design at scale has economic consequence.',
    accent: '#5856D6',
  },
]

const STATS = [
  { num: '80',  label: 'Users participated',  sub: 'Across surveys & interviews'  },
  { num: '18',  label: 'Processes executed',  sub: 'Across 3 research phases'     },
  { num: '54',  label: 'User problems',       sub: 'Identified & documented'      },
  { num: '82',  label: 'Features derived',    sub: 'From research evidence'       },
  { num: '44',  label: 'Solutions mapped',    sub: 'To user problems'             },
  { num: '18',  label: 'Metrics defined',     sub: 'To measure design impact'     },
  { num: '7',   label: 'User interviews',     sub: 'Conducted in-depth'           },
  { num: '3',   label: 'Core features',       sub: 'Designed end-to-end'          },
]

/* ── Section "Design System" content (placed after the Design feature sections) ── */
/* Sequence: marquee → Golden Ratio Proportion → Gestalt Principles → UX Laws,
   image left / content stacked right. */

const MARQUEE_TAGS = [
  "Gestalt Principle", "UX Laws", "Golden Ratio", "Fibonacci", "Proximity",
  "Similarity", "Continuity", "Closure", "Hick's Law", "Fitts' Law",
  "Miller's Law", "Jakob's Law", "Figure-ground",
]

const DS_GOLDEN_RATIO_POINTS = [
  ['Header Field', "the golden ratio is applied to the spacing and size of the header area, where the profile picture, notification bell, and calendar icon are aligned so the user's focus naturally falls on the central header text. This enhances recognition and quick access."],
  ['Balance Display', "the total balance, income, and spendings sections are perfectly aligned within the golden spiral, which naturally guides the user's eye movement from the bank logo and balance to the detailed breakdown of income and spending: the most critical information is seen first."],
  ['Action Buttons (Manage Account, Schedule Payments, Auto Payments)', "these are placed in a sequence following the golden spiral, so the user's attention transitions smoothly from one action to the next, while each button still stands out."],
  ['Spending Activity & Recent Transactions', "placed at the bottom, following the golden ratio, where the eye naturally lands last, closing the user's mental model loop with a summary of the most recent activity."],
]

const GESTALT_PARAGRAPHS = [
  ['Proximity', 'the design leverages the principle of proximity in the grouping of the income and spending data within the same visual block. This association helps users quickly relate the data points, promoting faster cognitive processing and understanding.'],
  ['Similarity', 'the visual consistency of icons, buttons, and labels across the interface supports the principle of similarity. All action buttons share the same design language, which helps users intuitively recognize that these elements serve similar functions.'],
  ['Continuity', "the flow of information from the balance at the top to the recent transactions at the bottom employs the principle of continuation. The golden ratio spiral aids in this continuation, guiding the user's eye in a smooth, uninterrupted flow from one element to the next."],
  ['Closure', 'the circular graphs for income and spending invoke the principle of closure, allowing users to mentally complete the shapes and quickly comprehend the information presented, reinforcing the financial overview as a whole.'],
]

const UX_LAW_PARAGRAPHS = [
  ["Fitts's Law", 'clickable elements such as Manage Account & Cards, Schedule Payments, and Auto Payments are adequately sized and placed within easy reach, reducing the time and effort required to interact with them, crucial on mobile, where touch targets must be large enough to minimize errors.'],
  ["Hick's Law", 'by providing three primary actions: Manage Account, Schedule Payments, Auto Payments, the design minimizes decision time. The simplicity of choices reduces cognitive load, enabling quicker navigation and a smoother experience.'],
  ["Miller's Law", 'the design adheres to Miller’s Law by chunking information into manageable sections. The breakdown of recent transactions into a list of three items aligns with the cognitive limit of processing around 7±2 items at a time.'],
]

const INSIGHTS = [
  {
    num: '01',
    title: 'Distrust of advisors, not markets',
    evidence:
      'Users across all groups expressed scepticism toward financial advisors: their fee structures, conflicts of interest, and reactive rather than proactive guidance. 7 of 7 interviewees referenced informal advice channels (friends, social media, YouTube) as their primary information source.',
    soWhat:
      'The product needed to feel like an independent, transparent ally, not an advisor with a hidden commission. AI-driven recommendations needed to show their reasoning, not just their output.',
  },
  {
    num: '02',
    title: 'Information overload is a bigger barrier than information scarcity',
    evidence:
      'Users were not lacking financial information: they were drowning in it. The rise of financial influencers and social media had created analysis paralysis. The EMEX tagging consistently surfaced this as a Feel/Adoption problem: users felt overwhelmed before they even started.',
    soWhat:
      'Simplification was a core design value, not a cosmetic one. Every screen, feature, and data display had to earn its complexity. The Advanced Data Filtering and Simplified Information Display features exist because of this insight specifically.',
  },
  {
    num: '03',
    title: 'Conservative behaviour is contextual, not permanent',
    evidence:
      "Users who appeared conservative in their investment choices were not ideologically opposed to growth-oriented investing. Their conservatism was contextual: shaped by family responsibilities, past losses, lack of a trusted framework, and the absence of a safe starting point.",
    soWhat:
      'The product needed graduated onramps, not a binary choice between safe and aggressive. Phased strategies, flexible SIP options, and risk-adjusted recommendations all exist to serve this insight.',
  },
  {
    num: '04',
    title: 'Loss management is emotionally, not analytically, difficult',
    evidence:
      'Multiple users described difficulty recovering from or learning from investment losses, not because they lacked data, but because losses triggered emotional responses (loss chasing, panic selling, avoidance) that overrode analytical thinking. The sentiment tags #EmotionalMoneyAttachment and #LossCopingDifficulties were among the most densely occurring in the analysis.',
    soWhat:
      'The Emotional Resilience Training Module and Personalized Recovery Plan are not soft features: they are direct responses to a measurable behavioural pattern that the research surfaced repeatedly across user groups.',
  },
  {
    num: '05',
    title: 'Portfolio management is a habit problem, not a knowledge problem',
    evidence:
      "The set-and-forget investment pattern appeared across every user group regardless of experience level. Deepak, the most experienced investor (sentiment score +8), still only reviewed his portfolio every few years. Archit's buy-and-forget approach was the norm, not the exception.",
    soWhat:
      "Passive monitoring and alert-driven nudges were not optional features: they were structural requirements. The Automated Portfolio Review, Portfolio Optimisation Alerts, and Real-Time Portfolio Monitoring features exist because passive engagement is the default human behaviour and the design had to work with it, not against it.",
  },
]

const USERS = [
  {
    name: 'Cautious Navigator',
    demo: 'Working professional · Male · 35–40 · Urban India · ₹41,667 to ₹2,08,333 per month',
    tags: [
      'Conservative Investments',
      'Distrust in Markets',
      'Emotional Money Attachment',
      'Moderate Risk Tolerance',
      'Sustainable Growth',
      'Learning From Losses',
    ],
    about:
      'A middle-aged professional navigating wealth management in India. Conservative by instinct, influenced by cultural values and limited financial literacy. Interested in ESG and high-tech investments but held back by market complexity and limited expertise. Striving for a balance between short and long-term gains, learning from losses.',
    quote:
      '“One of the major difficulties is understanding what my portfolio comprises of and ensuring it has sustainable growth potential.”',
    problem:
      'I find it challenging to form a clear investment strategy due to my risk aversion and limited experience in financial markets.',
    accent: '#3894A1',
  },
  {
    name: 'Passive Investor',
    demo: 'Corporate · Male · 25–30 · Urban India · ₹41,667 to ₹2,08,333 per month',
    tags: [
      'Passive Investment',
      'Financial Inactivity',
      'Guided Decisions',
      'Low Return Dissatisfaction',
      'Mutual Fund Misunderstanding',
      'Determined to Overcome',
    ],
    about:
      'Standing at the crossroads of financial independence. Financial world managed largely by family, a complex web of fixed deposits, PPFs, and insurance. Passively involved despite awareness, intimidated by technical analysis. Prefers mutual funds but grapples with low returns. Determined to overcome financial illiteracy and take control.',
    quote:
      '“Starting out in investing is overwhelming due to the abundance of information. It’s challenging to find reliable sources and learn from scratch.”',
    problem:
      'I find it overwhelming to analyze past performance and predict future gains on investments, suggesting a need for simpler analytical tools or advice.',
    accent: '#5856D6',
  },
]

const FINDINGS = [
  {
    num: '01',
    finding:
      'Users cannot form a clear investment strategy due to risk aversion and lack of a structured framework.',
    tags: ['QIA: Attitude', 'EMEX: Say', 'Adoption'],
    feature: 'Investment Strategy Builder Tool',
    why:
      "An AI-driven, phased personalised plan built around the user's risk profile, goals, and investment horizon, removing the strategy-formation burden from the user.",
  },
  {
    num: '02',
    finding:
      'Users prefer higher returns but distrust both advisors and the quality of market information they encounter online.',
    tags: ['QIA: Behaviour', 'EMEX: Feel', 'Adoption'],
    feature: 'AI Investment Suggestion + GPT Module',
    why:
      'A recommendation engine that shows its reasoning, covers ESG and alternative assets, and allows users to interrogate the rationale, acting as a transparent, queryable advisor.',
  },
  {
    num: '03',
    finding:
      'Users lack clarity on how their expenses connect to their investment capacity, leading to impulsive spending and inconsistent saving.',
    tags: ['QIA: Habit', 'EMEX: Do', 'Engagement'],
    feature: 'Budgeting and Expense Tracking Tool',
    why:
      'Automatic transaction import, categorisation, and budget goal tracking, creating a visible link between daily spending decisions and long-term investment progress.',
  },
  {
    num: '04',
    finding:
      'The buy-and-forget habit is universal across user groups, leaving portfolios unadjusted despite changing market conditions.',
    tags: ['QIA: Habit', 'EMEX: Do', 'Engagement'],
    feature: 'Real-Time Portfolio Monitoring + Optimisation Alerts',
    why:
      'Passive monitoring and proactive alerts that surface optimisation opportunities without requiring the user to actively check, working with the default behaviour rather than demanding its replacement.',
  },
  {
    num: '05',
    finding:
      'Loss management triggers emotional responses that override analytical thinking, creating recovery paralysis and loss-chasing behaviour.',
    tags: ['QIA: Behaviour', 'EMEX: Feel', 'Adoption'],
    feature: 'Personalized Recovery Plan + Emotional Resilience Module',
    why:
      'A structured recovery framework and emotional resilience training content, addressing the psychological dimension of financial loss, not just the analytical one.',
  },
]

/* ── Page ──────────────────────────────────────────────────────────────────── */

export default function InversePage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] max-w-5xl">
            Inverse-A full-spectrum UX case study. From research to design, built for India&apos;s wealth management space
          </h1>
        </div>
      </section>

      {/* ── INTRO STRIP ───────────────────────────────────────────────────── */}
      <section className="py-10">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16 flex flex-col md:flex-row md:items-start gap-6 md:gap-20">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-wide text-muted-foreground shrink-0 pt-0.5">
            <span>Wealth Management</span>
            <span>India</span>
            <span>UX Research</span>
            <span>UX Design</span>
            <span>Personal Project</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-[620px] leading-relaxed">
            Closing the distance between how Indians feel about money and how financial
            markets actually work.
          </p>
        </div>
      </section>

      {/* Full-bleed hero image */}
      <CaseStudyImage
        src="/inverse/images/Hero Image.png"
        alt="Hero Image"
        className="w-full"
      />

      {/* ── ABOUT THE PROJECT ─────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <SectionLabel>About the Project</SectionLabel>
          <p className="text-base text-muted-foreground max-w-[680px] leading-relaxed">
            Inverse is an independent research and design initiative exploring why most
            Indians stay on the sidelines of wealth management. It started as a question,
            not a brief: what would it take for someone who&apos;s never invested to trust
            a product enough to start.
          </p>
        </div>
      </section>

      {/* ── EVIDENCE FUNNEL (Section 02) ──────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-5">
            From Market to Product
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-14 max-w-3xl">
            Every design decision has a chain of evidence behind it.
          </h2>
          <EvidenceFunnel />
        </div>
      </section>

      {/* ── PROJECT SCALE (Section 03) ───────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <SectionLabel>Highlight &amp; Impact</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-6">
            {STATS.map(({ num, label, sub }) => (
              <div key={`${num}-${label}`}>
                <p
                  className="text-7xl md:text-8xl font-semibold tracking-tight leading-none"
                  style={{ color: 'lab(.658503% 0 0)' }}
                >
                  {num}
                </p>
                <p className="text-sm text-[#4E545F] mt-5 leading-snug">{label}</p>
                <p className="text-xs text-[#9DA3AF] mt-1 leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY THIS PROJECT (Section 04) ────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <SectionLabel>Why I Chose This Project</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-14 max-w-3xl">
            India&apos;s wealth management sector was growing. Its users were not benefiting.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_CARDS.map((card) => (
              <div key={card.title} className="group border border-border">
                <div
                  className="h-1 group-hover:h-1.5 transition-all duration-200"
                  style={{ backgroundColor: card.accent }}
                />
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {card.body}
                  </p>
                  <p className="text-sm italic" style={{ color: card.accent }}>
                    {card.closing}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT I'M SOLVING (Section 05) ───────────────────────────────── */}

      {/* Zone 1: eyebrow + headline on light background */}
      <section className="pt-24 pb-14">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <SectionLabel>The Problem Space</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">
            Four interconnected problems that no existing product addresses together.
          </h2>
        </div>
      </section>

      {/* Zone 2: 4 problem cards */}
      <div className="pb-14">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <ProblemCards />
        </div>
      </div>

      {/* Zone 3: connecting statement back on light background */}
      <section className="pt-16 pb-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <p className="text-base font-semibold text-foreground mb-3">
            These four problems don&apos;t exist in isolation.
          </p>
          <p className="text-sm text-[#4E545F] max-w-[680px] leading-relaxed">
            Distrust keeps people out. Illiteracy keeps them stuck. Conservative defaults keep them underperforming.
            And without planning tools, even motivated investors fail to close the gap between intention and action.
            Inverse was designed to address all four, not as separate features, but as a single coherent experience.
          </p>
        </div>
      </section>

      {/* ── THE RESEARCH JOURNEY (Section 06) ───────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">

          <SectionLabel>The Research Journey</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 max-w-3xl">
            Eighteen processes. Four phases. One question answered properly.
          </h2>
          <p className="text-sm text-muted-foreground max-w-[680px] leading-relaxed mb-14">
            Every decision in this project moved through three stages: affirmed by a source, informed by
            synthesis, confirmed by the people it was actually for. Nothing shipped on assumption alone.
            Market research asked whether the industry&apos;s growth was actually reaching the people it
            claims to serve. Secondary research shaped demographic profiles that were only trusted once
            users confirmed them. Primary research turned those profiles into seven real conversations,
            each one closer to why people actually hesitate. Analysis resolved fifty-four problems into
            a handful of honest decisions.
          </p>

          {/* Research document image — contained within content margins */}
          <CaseStudyImage
            src="/inverse/images/Research Document.png"
            alt="Research Document"
            className="w-full"
          />
          <p className="text-xs text-[#9DA3AF] mt-3 leading-relaxed">
            The complete Inverse research document, ten frames, one continuous line of inquiry from market to product.
          </p>

        </div>
      </section>

      {/* ── 5 INSIGHTS THAT SHAPED THE DESIGN (Section 07) ─────────────── */}

      {/* Section header */}
      <section className="pt-24 pb-14">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
          <SectionLabel>Insights That Shaped The Design</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">
            From 54 identified user problems, the research synthesis condensed into 5 primary insights.
            Each one directly drove a design direction.
          </h2>
        </div>
      </section>

      {/* Five alternating-stripe insight cards */}
      {INSIGHTS.map((insight, i) => (
        <div key={insight.num} className={i % 2 !== 0 ? 'bg-[#F7F8FA]' : ''}>
          <div className="max-w-[1320px] mx-auto px-6 lg:px-16 py-14 md:py-16">
            <div className="flex items-start gap-8 md:gap-14 max-w-[900px]">

              {/* Ghost number */}
              <span
                className="text-6xl md:text-7xl font-semibold leading-none tracking-tight flex-shrink-0 select-none mt-0.5"
                style={{ color: '#D4D6DB' }}
              >
                {insight.num}
              </span>

              {/* Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5 text-foreground">
                  {insight.title}
                </h3>
                <p className="text-sm text-[#4E545F] leading-relaxed mb-5 max-w-[580px]">
                  {insight.evidence}
                </p>
                <p
                  className="text-sm italic leading-relaxed max-w-[580px]"
                  style={{ color: '#F95A37' }}
                >
                  {insight.soWhat}
                </p>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Trailing space after last insight stripe */}
      <div className="pb-16" />

      {/* ── THREE USERS WHO GUIDED EVERYTHING (Section 08) ──────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">

          <SectionLabel>Research Personas</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-14 max-w-3xl">
            Real users, not archetypes. Their constraints shaped every feature decision.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USERS.map((user) => (
              <div key={user.name} className="group border border-border flex flex-col">

                {/* Top accent bar */}
                <div
                  className="h-1 group-hover:h-1.5 transition-all duration-200"
                  style={{ backgroundColor: user.accent }}
                />

                {/* Card content */}
                <div className="flex flex-col gap-5 p-7 md:p-9 flex-1">

                  {/* Persona name */}
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    {user.name}
                  </h3>

                  {/* Demographic strip */}
                  <p className="text-xs text-[#9DA3AF] leading-relaxed">
                    {user.demo}
                  </p>

                  {/* Tag row */}
                  <div className="flex flex-wrap gap-2">
                    {user.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 border border-border text-[#6E757F] rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[#F0F1F4]" />

                  {/* About paragraph */}
                  <p className="text-sm text-[#4E545F] leading-relaxed">
                    {user.about}
                  </p>

                  {/* Pull quote with accent left border */}
                  <div
                    className="border-l-2 pl-4"
                    style={{ borderColor: user.accent }}
                  >
                    <p className="text-sm italic text-foreground leading-relaxed">
                      {user.quote}
                    </p>
                  </div>

                  {/* Problem statement */}
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#9DA3AF] mb-2">
                      Their problem
                    </p>
                    <p className="text-sm text-[#4E545F] leading-relaxed">
                      {user.problem}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FROM RESEARCH TO DESIGN (Section 09) ────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">

          <SectionLabel>From Research to Design</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 max-w-3xl">
            Every major feature has a direct lineage to a user problem.
          </h2>
          <p className="text-sm text-muted-foreground max-w-[640px] leading-relaxed mb-16">
            The cards below show the most critical connections: research finding on one side,
            design response on the other.
          </p>

          <div className="flex flex-col gap-3">
            {FINDINGS.map((item) => (
              <div
                key={item.num}
                className="grid grid-cols-1 md:grid-cols-[1fr_48px_1fr] items-stretch gap-1 md:gap-0"
              >
                {/* Left — Research finding */}
                <div className="border border-[#E2E4E8] p-6 md:p-8">
                  <p className="text-xs font-medium uppercase tracking-wide text-[#6E757F] mb-4">
                    Finding {item.num}
                  </p>
                  <p className="text-sm text-[#272A30] leading-relaxed mb-5">
                    {item.finding}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wide px-2 py-0.5 border border-[#D5D7DC] text-[#6E757F] rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow connector — desktop only */}
                <div className="hidden md:flex items-center justify-center">
                  <span className="text-[#C8CAD0] text-base select-none">→</span>
                </div>

                {/* Right — Design response */}
                <div className="bg-[#EBF7F5] p-6 md:p-8">
                  <p className="text-xs font-medium uppercase tracking-wide text-[#3894A1] mb-4">
                    Design Response
                  </p>
                  <p className="text-base font-semibold text-[#272A30] leading-snug mb-3">
                    {item.feature}
                  </p>
                  <p className="text-sm text-[#4E545F] leading-relaxed">
                    {item.why}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── DESIGN — FEATURE 01: INVESTMENT STRATEGY BUILDER (Section 10) ─ */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">

          <SectionLabel>Design</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-14">
            Investment Strategy Builder
          </h2>

          {/* Full-width hero */}
          <CaseStudyImage
            src="/inverse/images/Investment Strategy Builder - Hero.png"
            alt="Investment Strategy Builder: Hero"
            className="w-full"
          />

          {/* ── Section A — Assessment: text left / image right ───────────── */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Assessment
              </h3>
              <p className="text-sm text-[#4E545F] leading-relaxed">
                Users are guided through an interactive assessment covering risk
                tolerance, financial goals, and investment horizon.
              </p>
            </div>

            {/* Image */}
            <CaseStudyImage
              src="/inverse/images/Investment Strategy Builder - Assessment.png"
              alt="Assessment"
              className="w-full"
            />

          </div>

          {/* ── Section B — Suggested Plan: image left / text right ───────── */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Image */}
            <CaseStudyImage
              src="/inverse/images/Investment Strategy Builder - Suggested Plan.png"
              alt="Suggested Plan"
              className="w-full"
            />

            {/* Text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Suggested Plan
              </h3>
              <p className="text-sm text-[#4E545F] leading-relaxed">
                A personalised investment plan segmented into phases, each tailored
                to the user's assessment, behaviour, and market conditions.
              </p>
            </div>

          </div>

          {/* ── Section C — Plan Summary: text left / image right ─────────── */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Plan Summary
              </h3>
              <p className="text-sm text-[#4E545F] leading-relaxed">
                Summarises the active strategy, tracks progress across phases, and
                surfaces actionable insights based on current market trends.
              </p>
            </div>

            {/* Image */}
            <CaseStudyImage
              src="/inverse/images/Investment Strategy Builder - Plan Summary.png"
              alt="Plan Summary"
              className="w-full"
            />

          </div>

        </div>
      </section>

      {/* ── DESIGN — FEATURE 02: AI INVESTMENT SUGGESTION TOOL (Section 10b) */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">

          <SectionLabel>Design</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-14">
            AI Investment Suggestion Tool
          </h2>

          {/* Full-width hero */}
          <CaseStudyImage
            src="/inverse/images/AI Investment Suggestion Tool - Fund.png"
            alt="AI Investment Suggestion Tool: Hero"
            className="w-full"
          />

          {/* ── Section A — Fund Suggestions: text left / image right ─────── */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Fund Suggestions
              </h3>
              <p className="text-sm text-[#4E545F] leading-relaxed">
                AI-curated recommendations surfaced with full transparency: fund
                rationale, risk parameters, and alignment with the user's goals
                visible at a glance.
              </p>
            </div>

            {/* Image */}
            <CaseStudyImage
              src="/inverse/images/AI Investment Suggestion Tool - Fund Recomendation.png"
              alt="Fund Suggestions"
              className="w-full"
            />

          </div>

          {/* ── Section B — Investment GPT: image left / text right ────────── */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Image */}
            <CaseStudyImage
              src="/inverse/images/AI Investment Suggestion Tool - Investment GPT.png"
              alt="Investment GPT"
              className="w-full"
            />

            {/* Text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Investment GPT
              </h3>
              <p className="text-sm text-[#4E545F] leading-relaxed">
                A conversational layer that lets users interrogate recommendations,
                request alternatives, and explore scenarios, redirecting
                information-seeking from social media to a validated,
                personalised source.
              </p>
            </div>

          </div>

          {/* ── Section C — Fund Overview: text left / image right ────────── */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Fund Overview
              </h3>
              <p className="text-sm text-[#4E545F] leading-relaxed">
                Predicted growth rates, expense ratios, risk profile, and sector
                breakdown: every data point a user would otherwise search for
                independently, surfaced inline.
              </p>
            </div>

            {/* Image */}
            <CaseStudyImage
              src="/inverse/images/AI Investment Suggestion Tool - Fund Overview.png"
              alt="Fund Overview"
              className="w-full"
            />

          </div>

        </div>
      </section>

      {/* ── DESIGN — FEATURE 03: BUDGETING AND EXPENSE TRACKING (Section 10c) */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">

          <SectionLabel>Design</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-14">
            Budgeting and Expense Tracking
          </h2>

          {/* Full-width hero */}
          <CaseStudyImage
            src="/inverse/images/Budgeting and Expense Tracking - Hero.png"
            alt="Budgeting and Expense Tracking: Hero"
            className="w-full"
          />

          {/* ── Section A — Spending Insights: text left / image right ────── */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Spending Insights
              </h3>
              <p className="text-sm text-[#4E545F] leading-relaxed">
                Automatic transaction import and categorisation removes the
                friction of manual entry that causes most users to abandon
                expense tracking within days of starting.
              </p>
            </div>

            {/* Image */}
            <CaseStudyImage
              src="/inverse/images/Budgeting and Expense Tracking - Spending Insights.png"
              alt="Spending Insights"
              className="w-full"
            />

          </div>

          {/* ── Section B — Spending Analytics: image left / text right ───── */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Image */}
            <CaseStudyImage
              src="/inverse/images/Budgeting and Expense Tracking - Spending Analytics.png"
              alt="Spending Analytics"
              className="w-full"
            />

            {/* Text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Spending Analytics
              </h3>
              <p className="text-sm text-[#4E545F] leading-relaxed">
                Weekly, monthly, and yearly cash flow views surface where
                money is actually going, with AI-driven suggestions that
                translate spending patterns into investable capital.
              </p>
            </div>

          </div>

          {/* ── Section C — Budget Overview: text left / image right ──────── */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Budget Overview
              </h3>
              <p className="text-sm text-[#4E545F] leading-relaxed">
                Categories, remaining budget, and days remaining are laid
                out so the most critical number, what's left to spend,
                occupies the primary visual position.
              </p>
            </div>

            {/* Image */}
            <CaseStudyImage
              src="/inverse/images/Budgeting and Expense Tracking - Budget Overview.png"
              alt="Budget Overview"
              className="w-full"
            />

          </div>

        </div>
      </section>

      {/* ── DESIGN SYSTEM ─────────────────────────────────────────────────── */}
      {/* Marquee tag strip, then hero image left / Golden Ratio + Gestalt +
          UX Laws stacked right — each principle a heading with separate paragraphs. */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">

          <SectionLabel>Design Principle</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-14 max-w-3xl">
            Every principle behind the interface, named.
          </h2>

          {/* Marquee tag strip */}
          <div className="border-y border-border py-4 mb-20 overflow-hidden">
            <div className="ds-marquee-track flex gap-8 whitespace-nowrap w-max">
              {[...MARQUEE_TAGS, ...MARQUEE_TAGS].map((tag, i) => (
                <span
                  key={`${tag}-${i}`}
                  className="text-xs uppercase tracking-wide text-muted-foreground flex items-center gap-8"
                >
                  {tag}
                  <span className="text-[#D4D6DB]">•</span>
                </span>
              ))}
            </div>
            <style>{`
              .ds-marquee-track {
                animation: ds-marquee 32s linear infinite;
              }
              @keyframes ds-marquee {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
            `}</style>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 md:items-stretch">

            {/* Hero image — left */}
            <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full md:sticky md:top-24">
              <Image
                src="/inverse/images/App Screen — Golden Ratio Spiral Overlay.png"
                alt="App Screen: Golden Ratio Spiral Overlay"
                fill
                sizes="50vw"
                style={{ objectFit: 'contain', objectPosition: 'center 60%' }}
              />
            </div>

            {/* Golden Ratio, Gestalt Principles, UX Laws — stacked, right */}
            <div className="flex flex-col gap-16">

              {/* Golden Ratio Proportion */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
                  Golden Ratio Proportion
                </h3>
                <p className="text-sm text-[#4E545F] leading-relaxed mb-4">
                  The golden ratio is evident in the layout&apos;s design, enhancing the
                  user&apos;s visual experience by providing natural and aesthetically pleasing
                  proportions. Here&apos;s how it contributes:
                </p>
                <div className="flex flex-col gap-4">
                  {DS_GOLDEN_RATIO_POINTS.map(([title, body]) => (
                    <p key={title} className="text-sm text-[#4E545F] leading-relaxed">
                      <span className="font-semibold text-foreground">{title}: </span>{body}
                    </p>
                  ))}
                </div>
              </div>

              {/* Gestalt Principles */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
                  Gestalt Principles
                </h3>
                <p className="text-sm text-[#4E545F] leading-relaxed mb-4">
                  Gestalt principles are effectively utilized to enhance the design&apos;s usability
                  and the user&apos;s cognitive adoption of the interface.
                </p>
                <div className="flex flex-col gap-4">
                  {GESTALT_PARAGRAPHS.map(([title, body]) => (
                    <p key={title} className="text-sm text-[#4E545F] leading-relaxed">
                      <span className="font-semibold text-foreground">{title}: </span>{body}
                    </p>
                  ))}
                </div>
              </div>

              {/* UX Laws */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
                  UX Laws
                </h3>
                <p className="text-sm text-[#4E545F] leading-relaxed mb-4">
                  Several UX laws are reflected in the design, ensuring that it aligns with user
                  cognition and behavior.
                </p>
                <div className="flex flex-col gap-4">
                  {UX_LAW_PARAGRAPHS.map(([title, body]) => (
                    <p key={title} className="text-sm text-[#4E545F] leading-relaxed">
                      <span className="font-semibold text-foreground">{title}: </span>{body}
                    </p>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Inverse Image 1 — full-bleed dark background */}
      <div className="mt-48" style={{ backgroundColor: '#191B1F' }}>
        <CaseStudyImage
          src="/inverse/images/Inverse Image 1.png"
          alt="Inverse Image 1"
          className="w-full"
        />
      </div>

      {/* Inverse Image 2 — directly beneath Image 1, no gap */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-16">
        <CaseStudyImage
          src="/inverse/images/Inverse Image 2.png"
          alt="Inverse Image 2"
          className="w-full"
        />
      </div>

      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-16">

          {/* Sum Up */}
          <div className="mt-16 max-w-[680px]">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
              Sum Up
            </h3>
            <p className="text-sm text-[#4E545F] leading-relaxed mb-4">
              Beginning with thorough research, personas are created to understand
              millennial&apos;s digital habits and financial needs. This informs a
              mobile-first design approach, focusing on simplicity, personalisation, and
              real-time interactions. Wireframing and prototyping visualise the app&apos;s
              layout and flow, which are iteratively tested for usability.
            </p>
            <p className="text-sm text-[#4E545F] leading-relaxed">
              The app design emphasizes easy navigation, security, gamification, and
              accessibility, while aligning with modern design trends.
            </p>
          </div>

        </div>
      </section>

      {/* Full-bleed closing image */}
      <CaseStudyImage
        src="/inverse/images/Inverse Image 3.png"
        alt="Inverse Image 3"
        className="w-full"
      />

    </main>
  )
}
