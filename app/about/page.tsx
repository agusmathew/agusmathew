import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-slate-100 animated-grid">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-44 right-[-160px] h-[460px] w-[460px] rounded-full bg-[#0ea5e9] opacity-25 blur-3xl" />
          <div className="absolute top-28 left-[-160px] h-[380px] w-[380px] rounded-full bg-[#22d3ee] opacity-20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),rgba(15,23,42,0))]" />
        </div>

        <main className="mx-auto w-full max-w-4xl px-6 py-16">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-white">
                About Me
              </h1>
              <p className="mt-2 text-slate-300">
                I build reliable, high‑impact systems that teams and customers
                trust.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Back to home
            </Link>
          </div>

          <section className="mt-10 rounded-3xl border border-white/10 bg-[#0f172a]/80 p-8 shadow-[0_20px_60px_rgba(3,7,18,0.45)] backdrop-blur">
            <h2 className="text-2xl font-semibold text-white">
              I build systems that scale with confidence
            </h2>
            <p className="mt-4 text-slate-300 leading-7">
              I’m a full‑stack engineer who turns complex product goals into
              reliable, measurable outcomes. I love the work that sits at the
              intersection of architecture, performance, and user experience—
              the details that make a platform feel fast, secure, and
              effortless.
            </p>
            <p className="mt-4 text-slate-300 leading-7">
              Over the last decade, I’ve shipped platforms across healthcare,
              government, and SaaS. I work end‑to‑end—design to deployment—
              with a bias for quality, observability, and real‑world impact.
            </p>
          </section>

          <section className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#0f172a]/80 p-6 shadow-[0_20px_60px_rgba(3,7,18,0.35)] backdrop-blur">
              <h3 className="text-lg font-semibold text-white">How I work</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>Start with clarity: sharp priorities and fast feedback.</li>
                <li>Prefer readable, testable code over clever shortcuts.</li>
                <li>Ship with performance, security, and resiliency built in.</li>
                <li>Instrument everything so teams can move fast with trust.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#0f172a]/80 p-6 shadow-[0_20px_60px_rgba(3,7,18,0.35)] backdrop-blur">
              <h3 className="text-lg font-semibold text-white">
                What I love building
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>Data‑driven platforms with real‑time insights.</li>
                <li>Search and discovery that feel intuitive.</li>
                <li>Secure, reliable infrastructure that scales.</li>
                <li>Interfaces that feel simple, fast, and obvious.</li>
              </ul>
            </div>
          </section>

          <section className="mt-8 rounded-3xl border border-white/10 bg-[#0f172a]/80 p-6 shadow-[0_20px_60px_rgba(3,7,18,0.35)] backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Outside work</h3>
            <p className="mt-3 text-sm text-slate-300 leading-7">
              I enjoy mentoring, experimenting with new tools, and learning how
              great teams ship great products. I’m always up for a systems
              design conversation and love collaborating with people who care
              about craft.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
