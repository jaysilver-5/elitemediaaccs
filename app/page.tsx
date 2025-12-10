// app/page.tsx
export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
              EM
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">
                EliteMediaAccs
              </span>
              <span className="text-[11px] text-slate-500">
                Elite social proof, instant delivery
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
            <a href="#features" className="hover:text-blue-600">
              Why Us
            </a>
            <a href="#api" className="hover:text-blue-600">
              API
            </a>
            <a href="#faq" className="hover:text-blue-600">
              FAQ
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/login"
              className="rounded-full border border-slate-200 px-4 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-500 hover:text-blue-600"
            >
              Sign in
            </a>
            <a
              href="/register"
              className="rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm shadow-blue-300 hover:bg-blue-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-[-260px] h-[520px] bg-[radial-gradient(circle_at_top,_#c7e0ff_0,_transparent_60%)] opacity-70" />

          <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-16 pt-16 text-center md:flex-row md:items-center md:gap-12 md:text-left lg:pb-20 lg:pt-20">
            {/* Left */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-700">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[9px] text-white">
                  ⚡
                </span>
                <span>Major Update • New-gen SMM panel for resellers</span>
              </div>

              <h1 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                The <span className="text-blue-600">Smartest</span> way to grow{" "}
                <span className="whitespace-nowrap">your social proof.</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                EliteMediaAccs gives you high-quality followers, views, and
                engagement for all major platforms — at prices built for serious
                resellers. Fast delivery, deep automation, and a clean dashboard
                built for scale.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600/90 px-5 py-2 text-xs font-semibold text-white shadow-sm shadow-blue-300 hover:bg-blue-700"
                >
                  <span>Get Started</span>
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
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:border-blue-500 hover:text-blue-600"
                >
                  Sign in to dashboard
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-[11px] text-slate-500">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-100 bg-white px-3 py-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>Over 5M+ orders processed</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-100 bg-white px-3 py-1">
                  <span>API-ready for your own panel</span>
                </div>
              </div>
            </div>

            {/* Right stats card */}
            <div className="mt-10 flex-1 md:mt-0">
              <div className="mx-auto max-w-md rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-lg shadow-slate-100 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-medium text-slate-500">
                      Today’s volume
                    </p>
                    <p className="mt-1 text-xl font-semibold text-slate-900">
                      $9,842
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-600">
                    +128% vs last week
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-[11px]">
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-slate-500">Completed orders</p>
                    <p className="mt-1 text-lg font-semibold">41,920</p>
                  </div>
                  <div className="rounded-2xl bg-blue-50 p-3">
                    <p className="text-slate-600">Average start time</p>
                    <p className="mt-1 text-lg font-semibold text-blue-700">
                      &lt; 30 sec
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-slate-500">Refund rate</p>
                    <p className="mt-1 text-lg font-semibold">0.7%</p>
                  </div>
                  <div className="rounded-2xl bg-slate-900 p-3 text-white">
                    <p className="text-slate-300">API uptime</p>
                    <p className="mt-1 text-lg font-semibold">99.98%</p>
                  </div>
                </div>

                <p className="mt-4 text-[11px] text-slate-400">
                  Demo stats. Connect your clients, switch on automation, and
                  let EliteMediaAccs handle the heavy lifting.
                </p>
              </div>
            </div>
          </div>

          {/* Platforms row */}
          <div className="relative mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-6 px-4 pb-6 text-slate-400">
            <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Trusted for growth on
            </span>
            <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-slate-500">
              <span>Instagram</span>
              <span>TikTok</span>
              <span>X (Twitter)</span>
              <span>YouTube</span>
              <span>Facebook</span>
              <span>Telegram</span>
            </div>
          </div>
        </section>

        {/* VALUE PILLARS */}
        <section
          id="services"
          className="border-t border-slate-100 bg-slate-50/60"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <div className="grid gap-4 text-center text-[11px] font-medium text-slate-600 sm:grid-cols-4">
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-white/80 px-4 py-3 backdrop-blur">
                <span className="text-lg">⭐</span>
                <span>High-quality services</span>
                <p className="text-[10px] text-slate-500">
                  Realistic retention, smart refill and clear descriptions.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-white/80 px-4 py-3 backdrop-blur">
                <span className="text-lg">💰</span>
                <span>Reseller-friendly pricing</span>
                <p className="text-[10px] text-slate-500">
                  Margins you can actually build a business on.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-white/80 px-4 py-3 backdrop-blur">
                <span className="text-lg">⚡</span>
                <span>Fast delivery</span>
                <p className="text-[10px] text-slate-500">
                  Optimized routes for instant or steady-drip delivery.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-white/80 px-4 py-3 backdrop-blur">
                <span className="text-lg">🕒</span>
                <span>24/7 ticket support</span>
                <p className="text-[10px] text-slate-500">
                  Human support when something needs attention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="features" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
              <div className="max-w-md">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  EliteMediaAccs puts you ahead of every other SMM panel.
                </h2>
                <p className="mt-3 text-sm text-slate-600">
                  Run a single client account or hundreds of child panels — the
                  same infrastructure powers everything. Transparent stats,
                  clean API, and service updates every day.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>• Built for agencies, resellers and solo creators.</li>
                  <li>• Clean dashboard your team understands in minutes.</li>
                  <li>• Flexible funding: cards, crypto and local payments.</li>
                </ul>
              </div>

              <div className="grid flex-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 backdrop-blur">
                  <p className="text-xs font-semibold text-blue-600">
                    Mass orders & campaigns
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    Import CSVs or use the API to fire hundreds of orders in one
                    go, grouped by client or platform.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 backdrop-blur">
                  <p className="text-xs font-semibold text-blue-600">
                    Smart dripfeed
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    Schedule gradual boosts instead of sudden spikes so growth
                    looks more organic.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 backdrop-blur">
                  <p className="text-xs font-semibold text-blue-600">
                    Auto-refill & partials
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    Automatic refills for eligible services and precise partial
                    refunds when providers under-deliver.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 backdrop-blur">
                  <p className="text-xs font-semibold text-blue-600">
                    Live status & logs
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    See each order’s start count, remains and status in
                    real-time, plus full event history.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-slate-50/80">
          <div className="mx-auto max-w-6xl px-4 py-16 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              From signup to first order in 3 simple steps.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
              No complicated onboarding. Open an account, add funds and start
              placing orders within minutes.
            </p>

            <div className="mt-10 grid gap-6 text-left sm:grid-cols-3">
              {[
                {
                  step: 1,
                  title: "Create your account",
                  desc: "Register on EliteMediaAccs, secure your account and choose your role — direct user or reseller.",
                },
                {
                  step: 2,
                  title: "Add funds",
                  desc: "Top up using your preferred payment method. Funds are applied instantly to your panel balance.",
                },
                {
                  step: 3,
                  title: "Place orders or connect API",
                  desc: "Use the web dashboard for one-off orders or integrate our API directly into your own SMM panel.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col rounded-2xl border border-slate-100 bg-white/80 p-5 backdrop-blur"
                >
                  <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    {item.step}
                  </span>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API SECTION */}
        <section id="api" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Ready-to-use API for your own panel or tools.
                </h2>
                <p className="mt-3 text-sm text-slate-600">
                  EliteMediaAccs exposes a simple, well-documented API
                  compatible with most major SMM scripts. Pull service lists,
                  create orders and check statuses programmatically.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>• JSON responses designed for speed.</li>
                  <li>• Separate keys for live and sandbox environments.</li>
                  <li>• Built-in rate limiting to keep your apps stable.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 text-xs font-mono text-slate-800 backdrop-blur">
                <pre className="whitespace-pre-wrap">
{`POST https://api.elitemediaaccs.com/v1/order
Headers:
  Authorization: Bearer <API_KEY>
  Content-Type: application/json

Body:
{
  "service_id": 1023,
  "link": "https://instagram.com/your_client",
  "quantity": 1000
}`}
                </pre>
                <p className="mt-3 text-[11px] text-slate-500">
                  Use our test mode to simulate orders before going live.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-slate-50/80">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              What our users say.
            </h2>
            <p className="mt-3 text-center text-sm text-slate-600">
              Agencies, freelancers and creators rely on EliteMediaAccs every
              day.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 text-sm backdrop-blur">
                <p className="text-slate-700">
                  “I switched my entire client base to EliteMediaAccs. Delivery
                  is predictable and the dashboard is clean — support actually
                  replies.”
                </p>
                <p className="mt-3 text-[11px] font-semibold text-slate-500">
                  Amira • Social Media Manager
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 text-sm backdrop-blur">
                <p className="text-slate-700">
                  “The API integration took less than an hour. Now my own panel
                  pulls services and places orders automatically.”
                </p>
                <p className="mt-3 text-[11px] font-semibold text-slate-500">
                  Victor • SMM Reseller
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 text-sm backdrop-blur">
                <p className="text-slate-700">
                  “Pricing is perfect for resellers. I finally have decent
                  margins even after offering my clients discounts.”
                </p>
                <p className="mt-3 text-[11px] font-semibold text-slate-500">
                  Sophia • Agency Owner
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16">
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Frequently asked questions.
            </h2>
            <p className="mt-3 text-center text-sm text-slate-600">
              Still not sure? Here are answers to the questions we hear the
              most.
            </p>

            <div className="mt-8 space-y-5 text-sm">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                <p className="font-semibold text-slate-900">
                  What is an SMM panel?
                </p>
                <p className="mt-2 text-slate-600">
                  An SMM panel is an online dashboard where you can order social
                  media services such as followers, likes, views and more. Once
                  you place an order, the system automatically routes it to our
                  providers and tracks progress for you.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                <p className="font-semibold text-slate-900">
                  Is EliteMediaAccs safe to use?
                </p>
                <p className="mt-2 text-slate-600">
                  We never ask for your account password and we constantly
                  monitor services to keep them compatible with platform limits.
                  As with any marketing tool, you should follow each platform’s
                  rules and use services responsibly.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                <p className="font-semibold text-slate-900">
                  Can I resell your services under my own brand?
                </p>
                <p className="mt-2 text-slate-600">
                  Yes. Most of our users are resellers. You can connect via API
                  and plug EliteMediaAccs directly into your own SMM panel or
                  client dashboard.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                <p className="font-semibold text-slate-900">
                  How do I start?
                </p>
                <p className="mt-2 text-slate-600">
                  Create a free account, top up your balance with the minimum
                  deposit, browse the service list and place your first test
                  order. If you need guidance, open a support ticket anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-slate-900">
          <div className="mx-auto max-w-6xl px-4 py-14 text-center text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              The SMM panel built for serious growth
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Start with EliteMediaAccs and scale every social account you
              manage.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
              Sign up in under a minute, explore services with test orders and
              plug into our API when you’re ready to automate everything.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/register"
                className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2 text-xs font-semibold text-white shadow-sm shadow-blue-400 hover:bg-blue-600"
              >
                Join EliteMediaAccs
              </a>
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-blue-400 hover:text-blue-100"
              >
                Sign in to existing account
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-[11px] text-slate-500 md:flex-row">
          <p>© {year} EliteMediaAccs. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="hover:text-blue-600">
              Terms
            </a>
            <a href="#" className="hover:text-blue-600">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-600">
              API docs
            </a>
            <a href="#" className="hover:text-blue-600">
              Support
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
