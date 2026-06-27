import Image from "next/image";

const experience = [
  {
    company: "Studio Baagh",
    companyUrl: "https://www.linkedin.com/company/studio-baagh/posts/?feedView=all",
    initials: "SB",
    role: "Associate Product Designer",
    dates: "Dec 2024 — May 2026",
    bullets: [
      <>Joined as part of the early team, working directly with the founder to set up the studio's design practice and client delivery process.</>,
      <>Led end-to-end product design for <a href="https://www.bharatsure.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-black hover:underline">Bharatsure</a>, an insurtech platform, as the in-house designer representing Studio Baagh. Embedded with the client team daily, working across the enterprise design system, feature development, and a full dashboard revamp for their products.</>,
      <>Took ownership of the web experience redesign for <a href="https://skaya.club/" target="_blank" rel="noopener noreferrer" className="font-semibold text-black hover:underline">Skaya</a>, a creator-led travel platform. Work focused on how experiences are discovered, how hosts and journeys are presented, and ensuring every touchpoint communicated the platform's core promise.</>,
      <>Provided support on product design work across other client engagements, contributing to research, client discussions, iterations, wireframing, and design execution.</>,
      <>Communication design work across multiple briefs for global IT companies, translating complex business content into clear, structured visual formats.</>,
    ],
  },
  {
    company: "MyBenefits360 by Thynksight Technologies",
    companyUrl: "https://www.linkedin.com/company/mybenefits360/",
    initials: "MB",
    role: "User Experience and Interface Designer",
    dates: "Jun 2023 — Apr 2024",
    bullets: [
      "Established the foundational design system and library for MyBenefits360's platform and app, ensuring consistency and scalability across the company's products and for various clients.",
      "Spearheaded a comprehensive revamp of the app, implementing interactive and visually enriched elements. Customized the platform to accommodate clients' diverse needs and plans, enhancing user engagement and experience.",
      "Provided key technical insights and direction for a client project, overseeing internal discussions, development, and coordinating project plans.",
    ],
  },
  {
    company: "Microbiome Research Pvt Ltd",
    companyUrl: "https://www.linkedin.com/company/microbiome-research-pvt-ltd/posts/?feedView=all",
    initials: "MR",
    role: "Junior User Interface Designer",
    dates: "Jun 2022 — Apr 2023",
    bullets: [
      "Collaborated with the team at Microbiome Research, contributing as a designer to enhance the website's user interface and experience.",
      "Worked on conceptualization and design of customer reports, ensuring clear and comprehensive representation of complex microbiome-related insights in a user-friendly format.",
      "Designed health-kit packaging, combining functional and aesthetic elements to enhance the user experience and reinforce the brand's commitment to health and innovation.",
    ],
  },
];

export default function About() {
  return (
    <main>
      {/* ── Part 1: Hero ──────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 pb-16">
        <Image
          src="/hero-work.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <h1
          className="relative z-10 text-7xl font-semibold text-white"
          style={{ lineHeight: 1.05 }}
        >
          Everything about Parth
        </h1>
      </section>

      {/* ── Floating bio card ─────────────────────────────────────────────────── */}
      <div className="max-w-[640px] mx-auto px-6 relative z-10 mb-32" style={{ marginTop: "calc(-50vh + 50px)" }}>
        <div className="bg-white rounded-2xl px-12 py-12">
          <p className="text-[#272A30] leading-relaxed">
            I grew up paying close attention to the things I used. Not just whether they worked, but why some felt obvious and others felt like a fight. I had no word for it then. I was studying mathematics.
          </p>

          <p className="text-[#272A30] leading-relaxed mt-4">
            Mathematics teaches you to find structure in complexity. Design, I realised, does the same thing for human behaviour. Curiosity pushed me further. I pursued a postgraduate in Design and Innovation, and found my inclination sitting firmly on the digital side: research, strategy, and the experience layer.
          </p>

          <p className="text-[#272A30] leading-relaxed mt-4">
            Four years in, I've worked across healthtech, insurtech, and travel tech. Different domains, the same underlying problem: making complex systems feel simple for the people using them.
          </p>

          {/* Divider with emoji */}
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-[#E6E7EA]" />
            <span className="text-base">🫶</span>
            <div className="flex-1 h-px bg-[#E6E7EA]" />
          </div>

          <p className="text-[#272A30] leading-relaxed">
            I'm from Mumbai, where I live with my family and my dog. When I'm not designing I'm usually doing something that demands the same kind of focus: martial arts, endurance cycling, half marathons. The mountains help with the rest. I read about astrophysics when I need to remember how small the problems are. And I enjoy visiting art museums and exhibitions, spending time interpreting art.
          </p>
        </div>
      </div>

      {/* ── Part 2: Experience + contact card ────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-12">
          <h2 className="text-[56px] font-semibold text-black text-center mb-20" style={{ lineHeight: 1.1 }}>
            So far, What next?
          </h2>
          <div className="flex gap-16 items-start">
            {/* Left: experience timeline */}
            <div className="w-[60%] flex flex-col gap-12">
              <h3 className="text-[32px] font-semibold text-black text-left" style={{ lineHeight: 1.1 }}>Experience</h3>
              {experience.map((entry) => (
                <div key={entry.company} className="flex gap-4 items-start">
                  {/* Company logo */}
                  <div className="w-10 h-10 rounded-full bg-[#F0F0F0] overflow-hidden shrink-0 mt-0.5">
                    <Image
                      src={`/${entry.initials}.jpeg`}
                      alt={entry.company}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <a
                      href={entry.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-black no-underline hover:underline"
                    >
                      {entry.company}
                    </a>
                    <p className="text-[#4E545F] mt-0.5">{entry.role}</p>
                    <p className="text-sm text-[#9DA3AF] mt-0.5">{entry.dates}</p>
                    <ul className="mt-2 flex flex-col gap-3 list-disc list-outside pl-4">
                      {entry.bullets.map((b, i) => (
                        <li key={i} className="text-sm text-[#4E545F]">{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: sticky contact card */}
            <div className="w-[40%] sticky top-32 flex justify-end">
              <div className="rounded-2xl border border-[#E6E7EA] p-6 bg-white text-center w-full max-w-[280px]">
                {/* Circular photo */}
                <Image
                  src="/parth-bw.jpg"
                  alt="Parth Zinzuvadia"
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover object-top mx-auto block"
                />

                <p className="font-semibold text-black mt-4">Parth Zinzuvadia</p>
                <p className="text-sm text-[#4E545F] mt-0.5">UX Designer and Researcher</p>

                <a
                  href="mailto:parthzinzuvadia28@gmail.com"
                  className="block text-sm text-[#4E545F] no-underline hover:underline mt-3"
                >
                  parthzinzuvadia28@gmail.com
                </a>

                <a
                  href="https://drive.google.com/file/d/1Yp8z-L6vbADPaVaicJjfDy2Yqx5wEZrA/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-[#272A30] rounded-full py-2.5 text-center text-sm font-medium text-black no-underline mt-4 hover:bg-[#F9FAFA] transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
