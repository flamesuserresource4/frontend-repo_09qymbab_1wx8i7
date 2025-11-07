import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden bg-[#070a0a]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.25),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-28 sm:px-6 lg:px-8">
        <span className="rounded-full border border-emerald-400/30 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-emerald-300">Futuristic Software House</span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          We craft clean, high‑performance apps with a neon edge
        </h1>
        <p className="max-w-2xl text-base text-white/70 sm:text-lg">
          From concept to cloud, our team ships secure, scalable products. Bring your idea to life with delightful UX and reliable engineering.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#contact" className="pointer-events-auto rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">Start a Project</a>
          <a href="#portfolio" className="pointer-events-auto rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:border-emerald-400 hover:text-white">See our work</a>
        </div>
      </div>
    </section>
  );
}
