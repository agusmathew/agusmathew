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
                A brief story of how I build and why I care.
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
              I build systems that feel effortless
            </h2>
            <p className="mt-4 text-slate-300 leading-7">
              I’m a full-stack engineer focused on scalable, user-centered
              systems. I enjoy the parts of engineering that blend deep
              technical thinking with real product outcomes—architecture,
              reliability, performance, and the little details that make a
              product feel fast and trustworthy.
            </p>
            <p className="mt-4 text-slate-300 leading-7">
              Over the last decade, I’ve built platforms across healthcare,
              government, and SaaS, often working end-to-end: from design and
              infrastructure to deployment and observability. I’m most at home
              in environments where quality, privacy, and resilience matter.
            </p>
          </section>

          <section className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#0f172a]/80 p-6 shadow-[0_20px_60px_rgba(3,7,18,0.35)] backdrop-blur">
              <h3 className="text-lg font-semibold text-white">
                How I work
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>Clear requirements, sharp priorities, fast feedback.</li>
                <li>Readable code over clever code.</li>
                <li>Performance and security as defaults.</li>
                <li>Build once, instrument everywhere.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#0f172a]/80 p-6 shadow-[0_20px_60px_rgba(3,7,18,0.35)] backdrop-blur">
              <h3 className="text-lg font-semibold text-white">
                What I love building
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>Systems with data at the center.</li>
                <li>Search and discovery workflows.</li>
                <li>Reliable, secure infrastructure.</li>
                <li>Interfaces that feel simple and fast.</li>
              </ul>
            </div>
          </section>

          <section className="mt-8 rounded-3xl border border-white/10 bg-[#0f172a]/80 p-6 shadow-[0_20px_60px_rgba(3,7,18,0.35)] backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Outside work</h3>
            <p className="mt-3 text-sm text-slate-300 leading-7">
              I enjoy exploring new tools, mentoring, and learning from how
              teams ship real products. I’m always up for a good systems design
              conversation and enjoy collaborating with people who care about
              craft.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
