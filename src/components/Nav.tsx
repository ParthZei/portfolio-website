import Image from "next/image";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-[1200px] mx-auto px-12 py-4 grid grid-cols-3 items-center">
        {/* Left: logo */}
        <div>
          <a href="/" className="inline-block">
            <Image
              src="/parth-logo.png"
              alt="Parth Zinzuvadia"
              width={120}
              height={40}
              className="h-16 w-auto object-contain"
            />
          </a>
        </div>

        {/* Center: nav links */}
        <div className="flex justify-center gap-8">
          <a href="/#work" className="font-normal text-[#4E545F] no-underline hover:underline">
            Work
          </a>
          <a href="/about" className="font-normal text-[#4E545F] no-underline hover:underline">
            About
          </a>
          <a
            href="https://drive.google.com/file/d/1Yp8z-L6vbADPaVaicJjfDy2Yqx5wEZrA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-[#4E545F] no-underline hover:underline"
          >
            Resume
          </a>
        </div>

        {/* Right: LinkedIn icon */}
        <div className="flex justify-end">
          <a
            href="https://www.linkedin.com/in/parth-zinzuvadia28/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4E545F] hover:text-black transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
