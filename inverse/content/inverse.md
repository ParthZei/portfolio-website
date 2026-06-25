# Inverse — Case Study Content

> Single source of truth for the Inverse case study build. Claude Code should read this
> file in full before building any section. Sections marked 🔒 are final — build as written.
> Sections marked ✏️ are drafted but not yet reviewed in full — build as a first pass, expect revision.
> Sections marked ⬜ are placeholders only — do not build until content is added.

---

## Table of Contents

| # | Section | Status |
|---|---------|--------|
| 01 | Cover / Hero | 🔒 Locked |
| 02 | The Evidence Funnel | ✏️ Drafted |
| 03 | Project Scale | ✏️ Drafted |
| 04 | Why This Project | ✏️ Drafted |
| 05 | What I'm Solving | ✏️ Drafted |
| 06 | The Research Journey | ⬜ Placeholder |
| 07 | 5 Insights That Shaped the Design | ✏️ Drafted |
| 08 | Three Users Who Guided Everything | ⬜ Placeholder |
| 09 | From Research to Design | ✏️ Drafted |
| 10 | Design Philosophy & Visual System | ⬜ Placeholder |
| 11 | The Product — Feature Deep Dives | ✏️ Drafted |
| 12 | Design Principles Applied | ⬜ Placeholder |
| 13 | Reflection & Outcomes | ⬜ Placeholder |

---

## Section 01 — Cover / Hero

**Status:** 🔒 Locked

### Title
Inverse

### Meta tags row
`Wealth Management` · `India` · `UX Research` · `UX Design` · `Personal Project`

### Manifesto
> Closing the distance between how Indians feel about money and how financial markets actually work.

### Intro strip (two-column, matches Bharatsure's About/Role split)

**ABOUT THE PROJECT**
> Inverse is an independent research and design initiative exploring why most Indians stay on the sidelines of wealth management. It started as a question, not a brief: what would it take for someone who's never invested to trust a product enough to start.

**MY ROLE**
> I ran every phase solo — market research, 7 user interviews, synthesis, feature architecture, and the final UI. No handoffs. Every design decision in this case study traces back to a specific finding, not a guess.

### Sequencing
Order: **Title → Meta tags → Manifesto → About/Role intro strip.**
No full-bleed hero image precedes the title. The Evidence Funnel (Section 02) follows
directly after this section as the visual payoff to everything stated here in text.

---

## Section 02 — The Evidence Funnel

**Status:** ✏️ Drafted — content is final, presentation/animation details for Claude Code to implement

### Eyebrow
FROM MARKET TO PRODUCT

### Headline
> Every design decision has a chain of evidence behind it.

### The seven layers (top to bottom, each narrower than the last — funnel/pyramid shape)

Each layer: a number, a title, a one-line summary, a background tint, a left accent bar.
Colors below are the LOCKED palette — do not substitute.

**01 — Market Research**
Summary: India's $3.2B wealth management market · 10.5% CAGR · 2 core business cases · 4 problem areas
Background: `#D6EDE8` · Text accent: `#2D7A6A` · Bar: `#7BBFB0`

**02 — Secondary Research**
Summary: Demographic study · 4 competitors benchmarked (Wint Wealth, Dezerv, Grip, ET Money) · Mental model derivation
Background: `#D6E8F5` · Text accent: `#2B5F8A` · Bar: `#7AAFD4`

**03 — User Interviews**
Summary: 7 interviews · 80 participants across surveys · EMEX × QIA tagging · 7 user stories
Background: `#FDF3D6` · Text accent: `#8A6B1A` · Bar: `#D4A832`

**04 — Sentiment Analysis**
Summary: 54 user problems identified · Motivations, frustrations, and neutralities mapped per user
Background: `#F5EDD6` · Text accent: `#8A5A1A` · Bar: `#D4922A`

**05 — Mental Model Analysis**
Summary: 44 solutions recommended · 82 features derived · 18 trackable metrics defined
Background: `#DDE0F5` · Text accent: `#3D3D99` · Bar: `#7B7FD4`

**06 — Criticality Scoring**
Summary: 6-axis scoring framework · C2 cluster · Feature prioritisation validated
Background: `#F5D6E8` · Text accent: `#8A2B5F` · Bar: `#D47AAF`

**07 — Card Sorting**
Summary: User-validated information architecture · Navigation sequence confirmed
Background: `#E8D6F5` · Text accent: `#6B2D9A` · Bar: `#B07BD4`

### Output (appears below the funnel, after a visual "tip" point where the 7 layers converge)

Three boxes, side by side, equal width, outlined (not filled), indigo border (`#5856D6`):
1. **Investment Strategy Builder**
2. **AI Investment Suggestion + GPT**
3. **Budgeting & Expense Tracker**

### Caption (below the output boxes)
> 18 processes · 80 users · 54 problems · 82 features · 3 core product solutions

### Animation spec (for Claude Code)
- Each of the 7 layers scroll-triggers into view from `opacity: 0`, staggered ~80ms apart, in order top to bottom.
- The 3 output boxes appear last, with a slight scale-up (e.g. from `scale: 0.95` to `1`), after all 7 layers have resolved.
- No heading text should appear above this component other than the eyebrow + headline already specified — the diagram itself is the primary content of this section.
- Component should be self-contained, similar in spirit to how `SpiralDiagram.jsx` is separated out for Bharatsure. Suggested filename: `EvidenceFunnel.jsx`.
- Each layer's width should visually narrow from layer 1 (widest) to layer 7 (narrowest) to reinforce the funnel/compression metaphor — do not render them as equal-width bars.

---

## Section 03 — Project Scale

**Status:** ✏️ Drafted

### Eyebrow
HIGHLIGHT & IMPACT

### Headline
> The breadth of this project is unusual for an independent initiative.

### Stat grid (8 stats, 4-column grid on desktop, 2-column on mobile)

Row 1:
- **80** — Users participated — across surveys & interviews
- **18** — Processes executed — across 3 research phases
- **54** — User problems — identified & documented
- **82** — Features derived — from research evidence

Row 2:
- **44** — Solutions mapped — to user problems
- **18** — Metrics defined — to measure design impact
- **7** — User interviews — conducted in-depth
- **3** — Core features — designed end-to-end

### Style notes
- Each stat: large number (colored), label below in mid-gray, sub-label in light-gray.
- Suggested coloring: Row 1 numbers in teal (`#3894A1`) for stats 1–2, indigo (`#5856D6`) for stats 3–4. Row 2 numbers in orange (`#F95A37`) throughout, to visually separate the two rows.
- Numbers should animate as a count-up on scroll entry (0 → final value).
- Card style: thin outline border, no fill, generous padding — consistent with the rest of the case study's "white space over card wrappers" principle. These are the one exception where a light border is acceptable, to anchor the numbers.

---

## Section 04 — Why This Project

**Status:** ✏️ Drafted

### Eyebrow
WHY I CHOSE THIS PROJECT

### Headline
> India's wealth management sector was growing. Its users were not benefiting.

### Four reason cards (2×2 grid)

**Emotional Connection**
> Money in India is deeply personal. Cultural values and emotional attachment to money drive conservative investing — not ignorance.
Closing line: *The problem worth designing around.*
Accent: teal

**Industry Growth**
> 10.5% CAGR through 2026. A market growing fast enough to shape how millions of first-time investors are onboarded to financial markets.
Closing line: *A 5-year window to get the design right.*
Accent: teal

**No User-Centric Products**
> Existing platforms serve HNIs and institutional investors. Women, first-time investors, and the emerging middle class are structurally underserved.
Closing line: *A gap large enough to build a product into.*
Accent: indigo

**Business Opportunity**
> INR 5.5 trillion market by 2030. The McKinsey Institute estimates India could lose $770B in GDP by 2025 without better financial inclusion.
Closing line: *Design at scale has economic consequence.*
Accent: indigo

### Style notes
- 2×2 grid, each card with a 4px top accent bar in the color noted above.
- On hover: accent bar can extend or brighten slightly. Keep it subtle — no gradients.

---

## Section 05 — What I'm Solving

**Status:** ✏️ Drafted

### Eyebrow
THE PROBLEM SPACE

### Headline
> Four interconnected problems that no existing product addresses together.

### Section background
Full-width dark section, background `#272A30`. White text on dark. This is the emotional
centerpiece of the opening arc — give it real vertical space, not a cramped fit.

### Four problem cards (stacked vertically, full width, ~12px gap between)

Each card: numbered label, headline (2 lines), body copy, and a data callout box top-right.
Card background: `#1C2026`. Left accent bar 4px, colored per problem below.

**01 — Distrust in Financial Markets** (accent: `#F95A37`)
Headline: People don't distrust investing. They distrust the systems around it.
Body: Non-transparent advisory practices, conflicting social media signals, and a lack of regulatory clarity create an environment where caution feels rational — even when it limits financial growth.
Data callout: **71%** — of Indians avoid investing entirely

**02 — Deficit in Financial Literacy** (accent: `#3894A1`)
Headline: Most adults — and the majority of women — are navigating finances without the basics.
Body: Financial illiteracy is not about intelligence. It's about access — to education, to trustworthy tools, and to products designed for people who are just starting to understand their money.
Data callout: **73%** — of adults below RBI literacy standard

**03 — Stagnation in Investment Choices** (accent: `#5856D6`)
Headline: Conservative investing isn't a preference. It's a default — in the absence of anything better.
Body: 56% of Indian households park savings in bank deposits. Not because it's optimal, but because nothing else feels accessible, safe, or tailored to how they actually think about risk.
Data callout: **0.2%** — avg. real return, FD-only (2011–21)

**04 — Hindered Financial Progress** (accent: `#AF52DE`)
Headline: Long-term goals exist. The tools to act on them consistently don't.
Body: Without personalised planning, most individuals fail to align their financial strategy with their life goals. The gap between intention and action compounds over time — and is entirely preventable by design.
Data callout: **50Cr** — Indians carry a loan or credit card

### Connecting statement (below the four cards — return to white/light background here)
> These four problems don't exist in isolation. Distrust keeps people out. Illiteracy keeps them stuck. Conservative defaults keep them underperforming. And without planning tools, even motivated investors fail to close the gap between intention and action. Inverse was designed to address all four — not as separate features, but as a single coherent experience.

### Style notes
- Data callout box: top-right of each card, number in the card's accent color, label in `#9DA3AF`.
- Scroll animation: cards slide up one by one, ~100ms stagger.
- On hover: accent bar can extend full card height smoothly.
- Connecting statement sits on a light background again — the dark section is contained to the 4 problem cards only, not the whole section.

---

## Section 06 — The Research Journey

**Status:** ⬜ Placeholder — not yet drafted

This section should walk through the 3-phase research arc (Market Research → Secondary
Research → Primary Research) as a narrative timeline, emphasizing *what was learned* at
each phase rather than *what was done*. Likely a phase-by-phase horizontal or vertical
timeline component. To be drafted in conversation before this section is built.

Do not build this section yet.

---

## Section 07 — 5 Insights That Shaped the Design

**Status:** ✏️ Drafted

### Eyebrow / intro line
> From 54 identified user problems, the research synthesis condensed into 5 primary insights. Each one directly drove a design direction.

### Format
Each insight: a number, a bold claim (title), supporting evidence (1–2 sentences), and a
"So what" line in italics tying it to a specific design consequence. Full-bleed or
alternating-background cards, generous spacing — this is a section to slow down in, not
rush through.

**01 — Distrust of advisors, not markets**
Evidence: Users across all groups expressed scepticism toward financial advisors — their fee structures, conflicts of interest, and reactive rather than proactive guidance. 7 of 7 interviewees referenced informal advice channels (friends, social media, YouTube) as their primary information source.
So what: *The product needed to feel like an independent, transparent ally — not an advisor with a hidden commission. AI-driven recommendations needed to show their reasoning, not just their output.*

**02 — Information overload is a bigger barrier than information scarcity**
Evidence: Users were not lacking financial information — they were drowning in it. The rise of financial influencers and social media had created analysis paralysis. The EMEX tagging consistently surfaced this as a Feel/Adoption problem: users felt overwhelmed before they even started.
So what: *Simplification was a core design value, not a cosmetic one. Every screen, feature, and data display had to earn its complexity. The Advanced Data Filtering and Simplified Information Display features exist because of this insight specifically.*

**03 — Conservative behaviour is contextual, not permanent**
Evidence: Users who appeared conservative in their investment choices were not ideologically opposed to growth-oriented investing. Their conservatism was contextual — shaped by family responsibilities, past losses, lack of a trusted framework, and the absence of a safe starting point.
So what: *The product needed graduated onramps, not a binary choice between safe and aggressive. Phased strategies, flexible SIP options, and risk-adjusted recommendations all exist to serve this insight.*

**04 — Loss management is emotionally, not analytically, difficult**
Evidence: Multiple users described difficulty recovering from or learning from investment losses — not because they lacked data, but because losses triggered emotional responses (loss chasing, panic selling, avoidance) that overrode analytical thinking. The sentiment tags #EmotionalMoneyAttachment and #LossCopingDifficulties were among the most densely occurring in the analysis.
So what: *The Emotional Resilience Training Module and Personalized Recovery Plan are not soft features — they are direct responses to a measurable behavioural pattern that the research surfaced repeatedly across user groups.*

**05 — Portfolio management is a habit problem, not a knowledge problem**
Evidence: The set-and-forget investment pattern appeared across every user group regardless of experience level. Deepak, the most experienced investor (sentiment score +8), still only reviewed his portfolio every few years. Archit's buy-and-forget approach was the norm, not the exception.
So what: *Passive monitoring and alert-driven nudges were not optional features — they were structural requirements. The Automated Portfolio Review, Portfolio Optimisation Alerts, and Real-Time Portfolio Monitoring features exist because passive engagement is the default human behaviour and the design had to work with it, not against it.*

### Style notes
- Consider alternating background tints per card (very light tint, not full-color) to create rhythm without resorting to heavy borders.
- "So what" line should be visually distinct — italic and a slightly different color (e.g. orange `#F95A37`) — since it's the line a skimming reader should catch even if they read nothing else in the card.

---

## Section 08 — Three Users Who Guided Everything

**Status:** ⬜ Placeholder — not yet drafted

**Confirmed lineup:** Deepak, Siddhant, **Akib** (Akib replaces Avyay — Avyay had only a
passing mention with no demographic or sentiment data attached; Akib has a full profile
and ties directly into the trust theme central to Section 07's insight #01).

Each portrait should likely include: name, age band, sentiment score, a one-line
archetype description, and a defining quote or behavior pulled from the original
interview data. To be drafted in conversation — source material exists in the Primary
Research and Sentiment Analysis documents already reviewed earlier in this project.

Do not build this section yet.

---

## Section 09 — From Research to Design

**Status:** ✏️ Drafted

### Intro line
> Every major feature in Inverse has a direct lineage to a user problem. The cards below show the most critical connections — research finding on one side, design response on the other.

### Format
Split-column cards: research finding (left, light teal-tinted background) → arrow →
design response (right, light indigo-tinted background). Five cards.

**Finding 1:** Users cannot form a clear investment strategy due to risk aversion and lack of a structured framework (QIA: Attitude, EMEX: Say, Adoption).
**→ Feature:** Investment Strategy Builder Tool
**Why:** An AI-driven, phased personalised plan built around the user's risk profile, goals, and investment horizon — removing the strategy-formation burden from the user.

**Finding 2:** Users prefer higher returns but distrust both advisors and the quality of market information they encounter online (QIA: Behaviour, EMEX: Feel, Adoption).
**→ Feature:** AI Investment Suggestion + GPT Module
**Why:** A recommendation engine that shows its reasoning, covers ESG and alternative assets, and allows users to interrogate the rationale — acting as a transparent, queryable advisor.

**Finding 3:** Users lack clarity on how their expenses connect to their investment capacity, leading to impulsive spending and inconsistent saving (QIA: Habit, EMEX: Do, Engagement).
**→ Feature:** Budgeting and Expense Tracking Tool
**Why:** Automatic transaction import, categorisation, and budget goal tracking — creating a visible link between daily spending decisions and long-term investment progress.

**Finding 4:** The buy-and-forget habit is universal across user groups, leaving portfolios unadjusted despite changing market conditions (QIA: Habit, EMEX: Do, Engagement).
**→ Feature:** Real-Time Portfolio Monitoring + Optimisation Alerts
**Why:** Passive monitoring and proactive alerts that surface optimisation opportunities without requiring the user to actively check — working with the default behaviour rather than demanding its replacement.

**Finding 5:** Loss management triggers emotional responses that override analytical thinking, creating recovery paralysis and loss-chasing behaviour (QIA: Behaviour, EMEX: Feel, Adoption).
**→ Feature:** Personalized Recovery Plan + Emotional Resilience Module
**Why:** A structured recovery framework and emotional resilience training content — addressing the psychological dimension of financial loss, not just the analytical one.

### Style notes
- This section is the structural payoff of the whole case study — it's where research and design visibly connect. Give each card room to breathe; don't compress into a dense table.
- Arrow between columns should be a simple visual connector (→), not decorative.

---

## Section 10 — Design Philosophy & Visual System

**Status:** ⬜ Placeholder — not yet drafted

Should cover: the "Inverse" name as a conceptual thread, color palette with semantic
intent (teal/indigo/orange/ink/violet — values already established in earlier work and
visible in the Evidence Funnel and Section 05 palettes), typography (DM Sans, three
weights), and grid system (4-column, 16px margin, 18px gutter, 4pt spacing base). Likely
presented as labeled tiles, per the Avendus reference. To be drafted in conversation —
most of the raw material already exists from earlier design-system work and just needs
to be finalized into this section's format.

Do not build this section yet.

---

## Section 11 — The Product — Feature Deep Dives

**Status:** ✏️ Drafted

### Intro line
> Three features, each addressing a distinct dimension of the same underlying problem: planning, intelligence, and discipline.

### Feature 1 — Investment Strategy Builder Tool

**User problem:** "I find it challenging to form a clear investment strategy due to my risk aversion and limited experience in financial markets."
**Business case:** Conservative attitude towards investing limits potential returns and prevents achievement of long-term financial goals.

Body: The Investment Strategy Builder is the product's most architecturally significant feature. It replaces the blank-slate problem ("where do I even start?") with a structured, guided experience that builds a personalised plan from the user's own inputs.

The flow: onboarding overview → interactive risk and goals assessment → AI-generated phased plan → plan summary with live tracking. Each phase of the plan is calibrated to shift from growth-oriented assets in early stages toward diversified, stable assets as financial milestones are reached. The plan adapts based on user behaviour and market conditions, not just a one-time input.

Callout: *The critical design decision: the plan is phased rather than static. This addresses the research finding that users fail not at the moment of choosing a strategy, but at the moment of adapting it. By building adaptation into the structure itself, the tool removes a decision the user has historically failed to make.*

### Feature 2 — AI Investment Suggestion Tool

**User problem:** "I recognise that multimedia and social media may influence investment behaviours, and I see the importance of having tools to navigate and validate financial information online."
**Business case:** Financial illiteracy among adults and women impacts wealth development. Distrust of advisory services is a direct driver of conservative behaviour.

Body: The AI Investment Suggestion tool addresses the trust problem at its source. Rather than presenting recommendations as opaque outputs of a black box, it surfaces the reasoning: why this fund, what are the risk parameters, how does it align with the user's specific goals, what is the historical basis for the prediction.

The GPT module extends this to a conversational layer — users can interrogate recommendations, ask "why not this fund instead?", or request strategies for specific scenarios. This directly addresses the research finding that users were already seeking information from YouTube and financial influencers; the GPT module redirects that information-seeking behaviour toward a validated, personalised source.

Asset and fund overviews include: predicted annual growth rate, expense ratios, risk profile, sector diversification breakdown. Every data point that a user would previously have had to search for independently is surfaced inline.

### Feature 3 — Budgeting and Expense Tracking Tool

**User problem:** "I struggle to control impulsive buying and have difficulty managing my finances in a way that frees up consistent funds for investment."
**Business case:** Lack of financial discipline is a direct upstream constraint on investment capacity — users cannot invest what they have not saved.

Body: The budgeting tool is deliberately positioned not as a standalone personal finance product but as the foundation of the investment journey. The design makes the connection explicit: every budget category you manage better is potential investment capital.

Automatic transaction import and categorisation removes the friction of manual entry that causes users to abandon expense tracking within days of starting. AI-driven suggestions surface optimisation opportunities ("you spent 23% more on dining this month — reallocating ₹2,000 could fund an additional SIP instalment").

The Spending Analytics view (weekly/monthly/yearly cash flow) and Budget Overview (categories, remaining budget, days remaining) apply the golden ratio for hierarchy — the most critical number (remaining budget) occupies the primary visual position.

### Style notes
- This section is where actual product screens should appear (screenshots/mockups from the Figma project), once available — lead with the visual, follow with the explanation, per the case study's "show before you tell" principle.
- Each feature should visually lead with its flow or hero screen before the body copy, not the reverse.

---

## Section 12 — Design Principles Applied

**Status:** ⬜ Placeholder — not yet drafted

Should cover Golden Ratio, Gestalt principles (proximity, similarity, continuation,
closure), and UX laws (Fitts's, Hick's, Miller's) — each shown as an annotated excerpt
of an actual screen rather than as abstract text. Raw content for this exists from
earlier design-system documentation and needs to be matched to specific screens once
those are finalized. To be drafted in conversation.

Do not build this section yet.

---

## Section 13 — Reflection & Outcomes

**Status:** ⬜ Placeholder — not yet drafted

Should include: a 3-metric stat-tile row (borrowing the pattern from Balint Bogdan's
Steady case study), a "what worked" list, a "what I'd push further" list, and current
status (usability testing in progress). Raw material exists from earlier outcomes
drafting and needs to be finalized into this format. To be drafted in conversation.

Do not build this section yet.

---

## Global style reference (for Claude Code, applies across all sections)

### Color palette
- Teal (primary/trust): `#3894A1`
- Indigo (AI/strategy/intelligence): `#5856D6`
- Orange (alerts/CTAs/emotional weight): `#F95A37`
- Ink (text/structure): `#272A30`
- Violet (education/learning): `#AF52DE`
- Mid-gray (secondary text): `#4E545F`
- Light-gray (tertiary text/labels): `#9DA3AF`
- Off-white (light backgrounds): `#F9FAFA`

### Typography
DM Sans, three weights in use: Regular (body/data labels), Medium (sub-headings/emphasis), Bold (headings/CTAs/figures).

### Layout principles (carry through every section)
- Show before you tell: visuals/diagrams lead, prose follows — never the reverse.
- One idea per section: avoid combining multiple unrelated points in a single screen/section.
- White space as structure, not card wrappers, except where explicitly noted (e.g. Section 03's stat cards, which are an intentional exception).
- This is a research-led project, not a design-led one (contrast with Bharatsure) — let that show structurally. Research sections (02, 06, 07, 08) should get at least as much visual care and space as design sections (10, 11, 12).

### Reference anchors
- Primary layout/structure reference: Avendus case study (Leaf Design) — alternates research narrative with screens, uses callout stats between sections, shows design system as labeled tiles at the end.
- Secondary borrow: Balint Bogdan's Steady case study — 3-metric stat-tile row pattern, reused in Section 13.
- Code pattern reference: Bharatsure's `page.jsx` + `SpiralDiagram.jsx` separation — Inverse's Evidence Funnel should follow the same pattern (`EvidenceFunnel.jsx` as its own component file).

**SECTION 08**

# The Patterns Behind the Product

*Not just representative users. The two patterns that made the design honest.*

**USERS WHO GUIDED EVERYTHING**

## Cautious Navigator

Working professional · Male · 25-35 · Urban India · ₹41,667 to ₹2,08,333 per month

Conservative Investments · Distrust in Markets · Emotional Money Attachment · Moderate Risk Tolerance · Sustainable Growth · Learning From Losses

A young to middle-aged professional navigating wealth management in India. Conservative by instinct, influenced by cultural values and limited financial literacy. Interested in ESG and high-tech investments but held back by market complexity and limited expertise. Striving for a balance between short and long-term gains, learning from losses.

> "One of the major difficulties is understanding what my portfolio comprises of and ensuring it has sustainable growth potential."

I find it challenging to form a clear investment strategy due to my risk aversion and limited experience in financial markets.

---

## Passive Investor

Corporate · Male · 25-35 · Urban India · ₹41,667 to ₹2,08,333 per month

Passive Investment · Financial Inactivity · Guided Decisions · Low Return Dissatisfaction · Mutual Fund Misunderstanding · Determined to Overcome

Standing at the crossroads of financial independence. Financial world managed largely by family, a complex web of fixed deposits, PPFs, and insurance. Passively involved despite awareness, intimidated by technical analysis. Prefers mutual funds but grapples with low returns. Determined to overcome financial illiteracy and take control.

> "Starting out in investing is overwhelming due to the abundance of information. It's challenging to find reliable sources and learn from scratch."

I find it overwhelming to analyze past performance and predict future gains on investments, suggesting a need for simpler analytical tools or advice.

**SECTION 10**

# Three Features. Every Screen Earned.

*Each feature traces directly back to a specific user problem. The screens below show what that research produced.*

**THE DESIGN**

---

## Investment Strategy Builder

The product's most architecturally significant feature. Replaces the blank-slate problem with a structured, phased plan that adapts on the user's behalf.

[PLACEHOLDER: Hero — Strategy Builder phased plan overview screen]

[PLACEHOLDER: Screen 1 — Risk and goals assessment]
Assessment

[PLACEHOLDER: Screen 2 — AI-generated phased plan]
Suggested Plan

[PLACEHOLDER: Screen 3 — Live plan tracking and milestones]
Plan Summary

---

## AI Investment Suggestion + GPT Module

Surfaces reasoning alongside recommendations. Users can interrogate why, not just what — redirecting information-seeking behaviour toward a validated, personalised source.

[PLACEHOLDER: Hero — AI recommendation dashboard with sector breakdown]

[PLACEHOLDER: Screen 1 — Fund overview with predicted growth and risk profile]
Fund Overview

[PLACEHOLDER: Screen 2 — Asset allocation and performance comparison]
Asset Analysis

[PLACEHOLDER: Screen 3 — GPT module conversational interface]
GPT Module

---

## Budgeting and Expense Tracking

Positioned not as a standalone finance tool but as the foundation of the investment journey. Every budget category managed better is potential investment capital.

[PLACEHOLDER: Hero — Spending insights dashboard]

[PLACEHOLDER: Screen 1 — Automatic transaction import and categorisation]
Spending Insights

[PLACEHOLDER: Screen 2 — Weekly, monthly, yearly cash flow analytics]
Spending Analytics

[PLACEHOLDER: Screen 3 — Budget categories and remaining budget overview]
Budget Overview


**SECTION 10**

**THE DESIGN**

# Three Features. Every Screen Earned.

*Each feature traces directly back to a specific user problem.*

---

## Feature 01 — Investment Strategy Builder

Replaces the blank-slate problem with a structured, phased plan that adapts on the user's behalf.

HERO: [PLACEHOLDER — hero screen, portrait phone ratio 9:19, full right column width]

SCREEN 01: [PLACEHOLDER — portrait phone ratio 9:19]
Caption: Assessment

SCREEN 02: [PLACEHOLDER — portrait phone ratio 9:19]
Caption: Suggested Plan

SCREEN 03: [PLACEHOLDER — portrait phone ratio 9:19]
Caption: Plan Summary


**SECTION 06**

**DESIGN SYSTEM**

MARQUEE TAGS: Gestalt Principle · UX Laws · Golden Ratio · Fibonacci · Proximity · Similarity · Continuity · Closure · Hick's Law · Fitts' Law · Miller's Law · Jakob's Law · Figure-ground

---

### Golden Ratio Proportion

[PLACEHOLDER: App screen with golden ratio spiral overlay]

The golden ratio is evident in the layout's design, enhancing the user's visual experience by providing natural and aesthetically pleasing proportions.

**Header Field:** The golden ratio is applied to the spacing and size of the header area, where the user's profile picture, notification bell, and calendar icon are aligned in such a way that the user's focus naturally falls on the central Header Field text. This enhances recognition and quick access.

**Balance Display:** The total balance, income, and spendings sections are perfectly aligned within the golden spiral, which naturally guides the user's eye movement from the bank logo and balance to the detailed breakdown of income and spending. This hierarchy ensures that the most critical information is seen first, fostering cognitive efficiency.

**Action Buttons (Manage Account, Schedule Payments, Auto Payments):** These buttons are placed in a sequence following the golden spiral, ensuring that the user's attention smoothly transitions from one action to the next. The spacing and alignment ensure that each button stands out while maintaining a sense of harmony in the layout, promoting intuitive interaction.

**Spending Activity & Recent Transactions:** The placement of these sections at the bottom follows the golden ratio, where the eye naturally moves down the screen, ensuring that these are the last yet memorable items the user sees. This layout helps in closing the user's mental model loop by showing a summary of the most recent activities.

---

### Gestalt Principles

Gestalt principles are effectively utilized to enhance the design's usability and the user's cognitive adoption of the interface.

**Proximity:** The design leverages the principle of proximity in the grouping of the income and spending data within the same visual block. This association helps users quickly relate the data points, promoting faster cognitive processing and understanding.

**Similarity:** The visual consistency of icons, buttons, and labels across the interface supports the principle of similarity. For instance, all action buttons share the same design language, which helps users intuitively recognize that these elements serve similar functions.

**Continuity:** The flow of information from the balance at the top to the recent transactions at the bottom employs the principle of continuation. The golden ratio spiral aids in this continuation, guiding the user's eye in a smooth, uninterrupted flow from one element to the next.

**Closure:** The circular graphs for income and spending invoke the principle of closure, allowing users to mentally complete the shapes and quickly comprehend the information presented. The completeness of these circles also reinforces the financial overview being presented as a whole.

---

### UX Laws

Several UX laws are reflected in the design, ensuring that it aligns with user cognition and behavior.

**Fitts's Law:** The clickable elements such as Manage Account & Cards, Schedule Payments, and Auto Payments are adequately sized and placed within easy reach, reducing the time and effort required for the user to interact with them. This law is crucial in a mobile app where touch targets need to be large enough to minimize errors.

**Hick's Law:** By providing three primary actions (Manage Account, Schedule Payments, Auto Payments), the design minimizes the decision time for the user. The simplicity of choices reduces cognitive load, enabling quicker navigation and a smoother user experience.

**Miller's Law:** The design adheres to Miller's Law by chunking information into manageable sections. For instance, the breakdown of recent transactions into a list of three items aligns with the cognitive limit of processing around 7±2 items at a time, ensuring users can easily digest the information without feeling overwhelmed.

---

### User Cognition, Adoptions & Alignment

The integration of the golden ratio, Gestalt principles and UX laws in this design facilitates quick cognition adoption by aligning with natural human perception patterns. The harmonious proportions, clear grouping and intuitive navigation make interaction feel instinctive, reducing mental efforts and enhancing user satisfaction. This alignment ensures that users can easily adopt and align with the app's functionalities, leading to a more seamless and enjoyable experience.

By leveraging these design principles, the app not only looks aesthetically pleasing but also functions in a way that aligns with how users naturally process information, making it both beautiful and highly usable.

---

### Grid System

A grid system in a mobile application UI is a structured guide used to organize content, images, and other elements on the screen. It helps to maintain consistency, alignment, and visual coherence, providing a better user experience.

[PLACEHOLDER: Grid system diagram]

STATS: 4 Columns · Stretch Type · Auto Width · 16px Margin · 18px Gutter

**Consistency:** Using a standard spacing system ensures that your design looks cohesive and well-organised, no matter how many elements you have. Consistency in spacing helps create a unified look, which is crucial for maintaining a professional appearance.

**Visual Hierarchy:** Proper spacing helps establish a clear visual hierarchy, guiding users' attention to the most important elements. By using different spacing values strategically, you can highlight key elements and create a clear path for users to follow.

**Time-Saving Efficiency:** Once you establish a consistent spacing system, you can easily apply it across your designs, saving time in the long run. You won't have to rethink the spacing for every new project or component.

**Improved Collaboration with Developers:** When you use consistent spacing, it's easier for developers to bring your design to life without any hiccups. Clear spacing guidelines reduce miscommunication and make the development process smoother.

---

### Typography

DM Sans — Regular · Medium · Bold

---

### Colour Palette

#3894A1 — Teal Primary · Trust, navigation, interactive elements
#5856D6 — Indigo Accent · AI features, strategy tools, premium interactions
#F95A37 — Alert Orange · Calls to action, critical alerts, emotional resonance
#272A30 — Ink Dark · All primary text and structural elements
#AF52DE — Violet · Educational content and learning modules

