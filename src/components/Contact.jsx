import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      // In a real app, post to your backend endpoint
      // await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, { method: 'POST', body: JSON.stringify(payload) })
      await new Promise((r) => setTimeout(r, 600));
      setStatus('sent');
      e.currentTarget.reset();
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative bg-[#050607] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let's build something great</h2>
            <p className="mt-3 max-w-xl text-white/70">
              Tell us about your project and goals. We'll get back to you within one business day.
            </p>
            <div className="mt-6 space-y-3 text-white/80">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-400" /> hello@neonforge.dev</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-400" /> +1 (555) 010-2025</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-400" /> Remote • Worldwide</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-white/80">Name</label>
                <input name="name" required className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none ring-emerald-500/40 focus:ring" placeholder="Jane Doe" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-white/80">Email</label>
                <input type="email" name="email" required className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none ring-emerald-500/40 focus:ring" placeholder="jane@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-white/80">Subject</label>
                <input name="subject" className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none ring-emerald-500/40 focus:ring" placeholder="Project inquiry" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-white/80">Message</label>
                <textarea name="message" rows="5" required className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none ring-emerald-500/40 focus:ring" placeholder="Share details about timeline, scope, and goals..." />
              </div>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <button type="submit" className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-400">Send message</button>
              {status === 'sent' && <span className="text-sm text-emerald-300">Message sent. We'll reply shortly.</span>}
              {status === 'error' && <span className="text-sm text-red-300">Something went wrong. Try again.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
