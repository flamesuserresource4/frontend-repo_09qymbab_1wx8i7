import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="relative bg-[#070a0a] py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold sm:text-4xl">About Us</h2>
                <p className="mt-4 text-white/70">
                  We’re a tight‑knit team of designers and engineers building products that feel fast, look stunning, and scale with your business. Our process blends strategy, craft, and automation to deliver predictable outcomes.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  <li className="rounded-md border border-white/10 bg-white/[0.03] p-3 text-white/80">Performance‑first engineering</li>
                  <li className="rounded-md border border-white/10 bg-white/[0.03] p-3 text-white/80">Accessible, intuitive UX</li>
                  <li className="rounded-md border border-white/10 bg-white/[0.03] p-3 text-white/80">Automated CI/CD pipelines</li>
                  <li className="rounded-md border border-white/10 bg-white/[0.03] p-3 text-white/80">Transparent communication</li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6">
                <h3 className="text-xl font-semibold text-emerald-300">Why clients choose us</h3>
                <p className="mt-3 text-white/70">
                  We ship reliably with a senior team, modern stack, and pragmatic approach. Expect clean code, maintainable systems, and a delightful user experience throughout.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="rounded-md border border-white/10 bg-black/30 p-4"><p className="text-2xl font-semibold text-white">50+</p><p className="text-xs text-white/60">Projects</p></div>
                  <div className="rounded-md border border-white/10 bg-black/30 p-4"><p className="text-2xl font-semibold text-white">10x</p><p className="text-xs text-white/60">Faster delivery</p></div>
                  <div className="rounded-md border border-white/10 bg-black/30 p-4"><p className="text-2xl font-semibold text-white">100%</p><p className="text-xs text-white/60">Remote</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <section id="service-detail" className="relative bg-[#070a0a] py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-10 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-2xl font-semibold text-white">Engineering Playbook</h3>
                <p className="mt-2 text-white/70">Type‑safe APIs, modular architectures, automated testing, and performance budgets baked in from day one.</p>
                <ul className="mt-4 list-disc pl-5 text-white/70">
                  <li>Design systems and component libraries</li>
                  <li>Edge‑aware caching and SSR/ISR strategies</li>
                  <li>Security reviews and threat modeling</li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-2xl font-semibold text-white">Design Workflow</h3>
                <p className="mt-2 text-white/70">Research‑led, iterative, and collaborative. Prototypes early, polish always.</p>
                <ul className="mt-4 list-disc pl-5 text-white/70">
                  <li>User journeys and information architecture</li>
                  <li>High‑fidelity visuals and motion</li>
                  <li>Accessibility and usability testing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Showcase />

        <section id="blog" className="relative bg-[#060809] py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-3xl font-semibold sm:text-4xl">Blog</h2>
              <a href="#blog" className="hidden text-sm text-emerald-300 hover:text-emerald-200 md:inline-block">View all</a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[1,2,3].map((i) => (
                <article key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-wider text-emerald-300/80">Insight</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">Designing for speed and delight</h3>
                  <p className="mt-2 text-sm text-white/70">A look at how performance and perception combine to shape product experience.</p>
                  <a href="#blog" className="mt-3 inline-block text-sm text-emerald-300 hover:text-emerald-200">Read more →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
