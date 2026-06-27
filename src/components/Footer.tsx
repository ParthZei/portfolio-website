export default function Footer() {
  return (
    <footer className="w-full border-t border-[#E5E5E5]">
      <div className="max-w-[1200px] mx-auto px-12 py-6 flex flex-row justify-between items-center">
        <p className="text-[13px] text-[#9DA3AF]">Designed and built with Claude Code</p>
        <div className="flex gap-6">
          <a
            href="mailto:parthzinzuvadia28@gmail.com"
            className="text-[13px] font-normal text-[#4E545F] no-underline hover:underline"
          >
            email
          </a>
          <a
            href="https://www.linkedin.com/in/parth-zinzuvadia28/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-normal text-[#4E545F] no-underline hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
