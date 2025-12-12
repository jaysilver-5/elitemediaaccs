// app/page.tsx

const PROCESS_STEPS = [
  {
    label: "01",
    title: "Discover & Diagnose",
    body: "We audit your brand, funnels and current campaigns to understand where attention, traffic and revenue are leaking.",
  },
  {
    label: "02",
    title: "Strategy & Positioning",
    body: "We craft your offer, messaging and channel mix so your brand speaks clearly to the right audience — not everyone.",
  },
  {
    label: "03",
    title: "Launch & Create",
    body: "Our team plans content, builds campaigns, and ships creative that feels on-brand while still optimized for performance.",
  },
  {
    label: "04",
    title: "Optimize & Scale",
    body: "Weekly iterations, dashboards and experiments — we double-down on what converts and cut what doesn’t.",
  },
];

const SERVICES = [
  {
    title: "Content Studio",
    body: "Scripts, carousels, short-form video ideas, captions and brand storylines that actually get watched and shared.",
    tag: "Content Creation",
  },
  {
    title: "Paid Media & Growth",
    body: "Meta, TikTok, Google and platform-native ads tuned for performance — from cold awareness to warm retargeting.",
    tag: "Performance",
  },
  {
    title: "Social & Community",
    body: "Profile revamps, content calendars, community management and DM flows that turn followers into customers.",
    tag: "Social",
  },
  {
    title: "Funnels & Automation",
    body: "Landing pages, email/SMS flows and CRM automations that capture leads and move them to checkout.",
    tag: "Funnels",
  },
  {
    title: "Brand & Positioning",
    body: "Visual direction, brand voice and offer architecture so you stop sounding like every other business in your niche.",
    tag: "Brand",
  },
  {
    title: "Analytics & Reporting",
    body: "Clear dashboards and monthly breakdowns that show what’s working, what isn’t, and where to invest next.",
    tag: "Analytics",
  },
];

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-slate-950">
        <div className="pointer-events-none absolute inset-x-[-200px] top-[-200px] h-[480px] bg-[radial-gradient(circle_at_top,_#3b82f6_0,_transparent_55%)] opacity-60" />
        <div className="pointer-events-none absolute inset-x-[-200px] bottom-[-260px] h-[420px] bg-[radial-gradient(circle_at_bottom,_#22c55e_0,_transparent_55%)] opacity-40" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-400 text-xs font-bold text-white shadow-lg shadow-blue-500/30">
              EM
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight text-white">
                EliteMediaAccs
              </span>
              <span className="text-[11px] text-slate-400">
                Full-scale digital marketing studio
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#process" className="hover:text-white">
              Process
            </a>
            <a href="#results" className="hover:text-white">
              Results
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contact"
              className="rounded-full border border-slate-600/70 px-4 py-1.5 text-[11px] font-semibold text-slate-100 hover:border-blue-400 hover:text-white"
            >
              Download overview
            </a>
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 px-4 py-1.5 text-[11px] font-semibold text-white shadow-md shadow-blue-500/40 hover:from-blue-400 hover:to-emerald-300"
            >
              Book a strategy call
            </a>
          </div>
        </div>
      </header>

      <main className="text-slate-50">
        {/* HERO */}
        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.6)_0,_rgba(15,23,42,0.95)_55%)]" />

          <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-20 pt-14 md:flex-row md:items-center md:pt-20">
            {/* LEFT */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-200 backdrop-blur">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-emerald-400 text-[9px] text-white">
                  ●
                </span>
                <span>Done-for-you growth systems, not just posts.</span>
              </div>

              <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Full-scale marketing,
                <span className="block bg-gradient-to-r from-blue-400 to-emerald-300 bg-clip-text text-transparent">
                  built to reach the right people.
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                We provide full-scale marketing solutions, from content creation
                to brand publicity, so your business can attract, convert and
                retain the right audience — not just chase vanity numbers.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-500/40 hover:from-blue-400 hover:to-emerald-300"
                >
                  <span>Schedule a free discovery call</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M13 5l7 7-7 7"
                    />
                  </svg>
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-blue-400 hover:text-white"
                >
                  View services
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-[11px] text-slate-400">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Average 3× return on ad spend (ROAS)</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <span>Campaigns managed across 6+ industries</span>
                </div>
              </div>
            </div>

            {/* RIGHT: LIVE DASHBOARD CARD */}
            <div className="flex-1">
              <div className="relative mx-auto max-w-md rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-blue-900/40 backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-medium text-slate-400">
                      This quarter’s performance snapshot
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      +214% growth
                    </p>
                    <p className="text-[11px] text-slate-400">
                      vs last quarter across paid + organic.
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                    Live client view
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-[11px]">
                  <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-3">
                    <p className="text-slate-400">Ad spend managed</p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      ₦18.4M
                    </p>
                    <p className="mt-1 text-[10px] text-slate-500">
                      Across Meta, TikTok, and Google.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-blue-600/80 to-emerald-400/90 p-3 text-white">
                    <p className="text-xs text-white/80">Pipeline generated</p>
                    <p className="mt-1 text-lg font-semibold">₦63.2M</p>
                    <p className="mt-1 text-[10px] text-white/75">
                      Qualified leads & closed revenue.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-3">
                    <p className="text-slate-400">Content shipped</p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      120+ assets
                    </p>
                    <p className="mt-1 text-[10px] text-slate-500">
                      Reels, carousels, email flows & more.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-3">
                    <p className="text-slate-400">Cost per lead</p>
                    <p className="mt-1 text-lg font-semibold text-emerald-300">
                      −41%
                    </p>
                    <p className="mt-1 text-[10px] text-slate-500">
                      After 90 days of optimization.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                  <div>
                    <p className="text-[11px] font-semibold text-slate-200">
                      “They feel like an in-house marketing team.”
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Beauty brand • From inconsistent sales to steady online
                      demand.
                    </p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-emerald-400 opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="border-t border-white/10 bg-slate-950/70">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 px-4 py-6 text-[11px] text-slate-400">
            <span className="uppercase tracking-[0.18em] text-slate-500">
              Brands & industries we work with
            </span>
            <div className="flex flex-wrap items-center gap-5 text-[12px] font-medium text-slate-300/80">
              <span>Beauty & Skincare</span>
              <span>Restaurants & QSR</span>
              <span>Tech & SaaS</span>
              <span>Education</span>
              <span>Personal Brands</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="border-t border-white/5 bg-slate-950/80"
        >
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
              <div className="max-w-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-300">
                  Services
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  Everything you need from “no marketing system” to
                  predictable growth.
                </h2>
                <p className="mt-3 text-sm text-slate-300">
                  You can plug us into one specific channel, or let us own the
                  full ecosystem — from content ideas, to ads, to the landing
                  page that closes the sale.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                  <li>• Clear scope and timelines for every engagement.</li>
                  <li>• Weekly check-ins and shared dashboards.</li>
                  <li>• Flexible retainers that grow with your results.</li>
                </ul>
              </div>

              <div className="grid flex-1 gap-4 sm:grid-cols-2">
                {SERVICES.map((service) => (
                  <div
                    key={service.title}
                    className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-sm shadow-slate-950/40 backdrop-blur transition hover:border-blue-400/60 hover:shadow-blue-900/40"
                  >
                    <div>
                      <span className="inline-flex rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-blue-300">
                        {service.tag}
                      </span>
                      <p className="mt-3 text-sm font-semibold text-white">
                        {service.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        {service.body}
                      </p>
                    </div>
                    <button className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold text-blue-300 group-hover:text-emerald-300">
                      Add to strategy
                      <span>↗</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          id="process"
          className="border-t border-white/5 bg-slate-950/90"
        >
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
                  Process
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  A simple, transparent way of working together.
                </h2>
                <p className="mt-3 max-w-xl text-sm text-slate-300">
                  No random posts. No “let’s just boost it”. Every engagement
                  follows a clear roadmap, shared with you from day one.
                </p>
              </div>
              <p className="max-w-sm text-xs text-slate-400">
                Most clients start to feel the difference in the first 30–45
                days as messaging tightens and campaigns start to compound.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.label}
                  className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur"
                >
                  <span className="text-[11px] font-semibold text-slate-500">
                    {step.label}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {step.title}
                  </p>
                  <p className="mt-2 text-xs text-slate-300">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section
          id="results"
          className="border-t border-white/5 bg-slate-950/80"
        >
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-300">
                  Results
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  Real outcomes, not just impressions.
                </h2>
                <p className="mt-3 max-w-xl text-sm text-slate-300">
                  Here’s what happens when strategy, creative and media work
                  together instead of in silos.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="text-xs text-slate-400">E-commerce brand</p>
                <p className="mt-2 text-2xl font-semibold text-emerald-300">
                  +172%
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Revenue increase after rebuilding ad funnels and landing
                  pages.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="text-xs text-slate-400">Local restaurant</p>
                <p className="mt-2 text-2xl font-semibold text-emerald-300">
                  3.5×
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Increase in weekly orders with content + geo-targeted ads.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="text-xs text-slate-400">Education startup</p>
                <p className="mt-2 text-2xl font-semibold text-emerald-300">
                  −48%
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Drop in cost per lead after tightening messaging and offer.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="text-xs text-slate-400">Personal brand</p>
                <p className="mt-2 text-2xl font-semibold text-emerald-300">
                  6×
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Growth in inbound DMs & consulting requests in 90 days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="border-t border-white/5 bg-slate-950/90"
        >
          <div className="mx-auto max-w-4xl px-4 py-16">
            <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">
              Frequently asked questions.
            </h2>
            <p className="mt-3 text-center text-sm text-slate-300">
              A few quick answers before we jump on a call.
            </p>

            <div className="mt-8 space-y-5 text-sm">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="font-semibold text-white">
                  Who is EliteMediaAccs a good fit for?
                </p>
                <p className="mt-2 text-slate-300 text-xs sm:text-sm">
                  We work best with businesses that have a proven offer or
                  product, but lack the time, clarity or team to market it
                  properly — from local service brands to SaaS and online
                  education.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="font-semibold text-white">
                  Do you only handle social media?
                </p>
                <p className="mt-2 text-slate-300 text-xs sm:text-sm">
                  No. Social is one piece. We connect it with paid ads, landing
                  pages, email/SMS, and tracking so every channel supports the
                  same strategy instead of working in isolation.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="font-semibold text-white">
                  How do your engagements usually start?
                </p>
                <p className="mt-2 text-slate-300 text-xs sm:text-sm">
                  We start with a discovery call, followed by a written game
                  plan summarizing your current state, opportunities and a
                  suggested engagement model. If it makes sense for both sides,
                  we move to onboarding.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="font-semibold text-white">
                  Do you offer one-off projects or only retainers?
                </p>
                <p className="mt-2 text-slate-300 text-xs sm:text-sm">
                  We do both. Many clients start with a focused project — like a
                  launch campaign or funnel build — and then extend into a
                  retainer once results are clear.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT / CTA */}
        <section
          id="contact"
          className="border-t border-white/5 bg-slate-950/95"
        >
          <div className="mx-auto max-w-4xl px-4 py-16">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-blue-900/40 backdrop-blur sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-300">
                Let’s talk
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                Tell us about your brand. We’ll send a simple game plan.
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Share a bit about what you sell, where you are now and where you
                want to be in the next 3–6 months. We’ll reply with a short
                Loom/video or written breakdown — no spam, no pressure.
              </p>

              <form className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-[11px] font-semibold text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-blue-400"
                    placeholder="Your name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-[11px] font-semibold text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-blue-400"
                    placeholder="name@company.com"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-[11px] font-semibold text-slate-300">
                    Business / Brand
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-blue-400"
                    placeholder="What do you sell?"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-[11px] font-semibold text-slate-300">
                    Monthly marketing budget (approx.)
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-blue-400"
                    placeholder="e.g. ₦300k – ₦1.5m"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-[11px] font-semibold text-slate-300">
                    What would make this engagement a win?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-blue-400"
                    placeholder="Tell us about your current situation, goals, and timelines."
                  />
                </div>
                <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-500/40 hover:from-blue-400 hover:to-emerald-300"
                  >
                    Send message
                  </button>
                  <p className="text-[11px] text-slate-400">
                    Prefer email or WhatsApp? You can also reach us via{" "}
                    <span className="font-semibold text-blue-300">
                      hello@elitemediaaccs.com
                    </span>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-[11px] text-slate-400 md:flex-row">
          <p>© {year} EliteMediaAccs. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="hover:text-slate-100">
              Terms
            </a>
            <a href="#" className="hover:text-slate-100">
              Privacy
            </a>
            <a href="#services" className="hover:text-slate-100">
              Services
            </a>
            <a href="#contact" className="hover:text-slate-100">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
