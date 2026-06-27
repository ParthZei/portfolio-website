import Image from "next/image";

const projects = [
  {
    name: "Bharatsure",
    dates: "Dec 2024 – Feb 2026",
    location: "Mumbai, India",
    domain: "Insuretech",
    thumbnail: "/bs-thumbnail.png",
    href: "/bharatsure",
  },
  {
    name: "Inverse",
    dates: "2024",
    location: "Personal Project",
    domain: "Financial services",
    thumbnail: "/inverse-thumbnail.png",
    href: "/inverse",
  },
];

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center">
        <div className="max-w-[1200px] mx-auto px-12 py-32 flex flex-col items-center">
          <h1 className="text-6xl font-semibold tracking-tight text-black max-w-2xl text-center" style={{ lineHeight: 1.1 }}>
            Designed to make sense.
          </h1>
          <p className="mt-8 text-lg text-[#4E545F] max-w-md leading-relaxed text-center">
            Turning complex, trust-sensitive products into experiences people actually want to use.
          </p>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="pb-32">
        <div className="max-w-[1200px] mx-auto px-12">
          <p className="text-xs uppercase tracking-wide text-[#9DA3AF] mb-10">Selected Work</p>

          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="group block py-12 border-t border-[#E5E5E5] no-underline"
            >
              <div className="flex gap-12 items-start">
                {/* Left: metadata */}
                <div className="w-[28%] flex flex-col gap-4 pt-1">
                  <h2 className="text-2xl font-semibold text-black group-hover:underline">
                    {p.name}
                  </h2>
                  <div className="flex flex-col gap-1.5 text-sm text-[#4E545F]">
                    <span>{p.dates}</span>
                    <span>{p.location}</span>
                    <span>{p.domain}</span>
                  </div>
                </div>

                {/* Right: thumbnail */}
                <div className="flex-1">
                  <div className="w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.thumbnail}
                      alt={p.name}
                      width={900}
                      height={563}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}

          <div className="border-t border-[#E5E5E5]" />
        </div>
      </section>
    </main>
  );
}
