import { Code2, Layers, ShieldCheck, LineChart } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Product Engineering',
    desc: 'Modern web and mobile apps built with robust architectures and clean code.',
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    desc: 'Elegant, accessible interfaces with motion and micro‑interactions.',
  },
  {
    icon: ShieldCheck,
    title: 'Cloud & DevOps',
    desc: 'Automated CI/CD, observability, and secure cloud-native infrastructure.',
  },
  {
    icon: LineChart,
    title: 'Data & AI',
    desc: 'Insights and intelligent features powered by analytics and ML.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#050607] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Services</h2>
            <p className="mt-2 max-w-2xl text-white/60">
              A focused suite to take your product from 0→1 and beyond.
            </p>
          </div>
          <a href="#service-detail" className="hidden rounded-md border border-emerald-500/40 px-4 py-2 text-sm text-emerald-300 hover:border-emerald-400 md:inline-block">Explore details</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition hover:border-emerald-400/40">
              <div className="mb-4 inline-flex rounded-lg bg-emerald-500/15 p-3 text-emerald-400 ring-1 ring-emerald-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <a href="#service-detail" className="mt-4 inline-block text-sm font-medium text-emerald-300 hover:text-emerald-200">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
