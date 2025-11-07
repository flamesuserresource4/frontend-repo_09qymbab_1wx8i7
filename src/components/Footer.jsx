export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050607] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} NeonForge — All rights reserved.</p>
          <div className="text-sm text-white/60">
            <a href="#about" className="hover:text-emerald-300">About</a>
            <span className="mx-3">•</span>
            <a href="#services" className="hover:text-emerald-300">Services</a>
            <span className="mx-3">•</span>
            <a href="#blog" className="hover:text-emerald-300">Blog</a>
            <span className="mx-3">•</span>
            <a href="#contact" className="hover:text-emerald-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
