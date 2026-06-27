"use client";

export default function MobileBlock() {
  return (
    <>
      <style>{`
        @keyframes drift-a {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(60px, -80px) scale(1.15); }
          66%  { transform: translate(-40px, 60px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes drift-b {
          0%   { transform: translate(0, 0) scale(1); }
          40%  { transform: translate(-70px, 50px) scale(1.1); }
          80%  { transform: translate(50px, -60px) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes drift-c {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(40px, 70px) scale(1.2); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .blob-a { animation: drift-a 18s ease-in-out infinite; }
        .blob-b { animation: drift-b 24s ease-in-out infinite; }
        .blob-c { animation: drift-c 20s ease-in-out infinite; }
      `}</style>

      <div className="md:hidden fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: "#0a0a0f" }}>
        {/* Aurora blobs */}
        <div className="blob-a absolute w-[340px] h-[340px] rounded-full top-[-80px] left-[-60px]" style={{ background: "radial-gradient(circle, rgba(88,86,214,0.20) 0%, transparent 70%)" }} />
        <div className="blob-b absolute w-[400px] h-[400px] rounded-full bottom-[-100px] right-[-80px]" style={{ background: "radial-gradient(circle, rgba(56,148,161,0.15) 0%, transparent 70%)" }} />
        <div className="blob-c absolute w-[280px] h-[280px] rounded-full top-[40%] left-[30%]" style={{ background: "radial-gradient(circle, rgba(75,0,130,0.10) 0%, transparent 70%)" }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-8">
          <p className="text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Best experienced on desktop.
          </p>
          <p className="text-sm text-white mt-4 max-w-[280px]" style={{ opacity: 0.7, fontFamily: "var(--font-dm-sans)" }}>
            This portfolio contains detailed research, systems thinking, and case studies built to be read, not skimmed. Grab a laptop for the full picture.
          </p>
        </div>
      </div>
    </>
  );
}
