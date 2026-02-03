import Link from "next/link";
import MiniRunner from "../../MiniRunner";

export default function RunnerPage() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-slate-100 animated-grid">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-44 right-[-160px] h-[460px] w-[460px] rounded-full bg-[#0ea5e9] opacity-25 blur-3xl" />
          <div className="absolute top-28 left-[-160px] h-[380px] w-[380px] rounded-full bg-[#22d3ee] opacity-20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),rgba(15,23,42,0))]" />
        </div>

        <main className="mx-auto w-full max-w-5xl px-6 py-16">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-white">
                Mini Runner
              </h1>
              <p className="mt-2 text-slate-300">
                Jump over obstacles and try to beat your best.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Back to home
            </Link>
          </div>

          <div className="mt-8">
            <MiniRunner />
          </div>
        </main>
      </div>
    </div>
  );
}
