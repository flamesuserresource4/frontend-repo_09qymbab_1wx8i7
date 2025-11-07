const works = [
  {
    title: 'Fintech Dashboard',
    tag: 'Web App',
    img: 'https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'IoT Device Control',
    tag: 'Embedded + Cloud',
    img: 'https://images.unsplash.com/photo-1544198365-3b3572d284f8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Neon Brand Site',
    tag: 'Marketing',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="portfolio" className="relative bg-[#060809] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Portfolio</h2>
            <p className="mt-2 max-w-2xl text-white/60">Selected projects that blend performance with polished aesthetics.</p>
          </div>
          <a href="#contact" className="hidden rounded-md border border-white/10 px-4 py-2 text-sm text-white/80 hover:border-emerald-400 md:inline-block">Work with us</a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {works.map((w) => (
            <article key={w.title} className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
              <div className="aspect-video overflow-hidden">
                <img src={w.img} alt={w.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-1 p-5">
                <p className="text-xs uppercase tracking-wider text-emerald-300/80">{w.tag}</p>
                <h3 className="text-lg font-semibold text-white">{w.title}</h3>
                <a href="#portfolio" className="inline-block text-sm text-emerald-300 hover:text-emerald-200">Case study →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
