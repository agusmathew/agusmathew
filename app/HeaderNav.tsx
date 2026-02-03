"use client";

import { useState } from "react";
import Image from "next/image";

type HeaderNavProps = {
  name: string;
  role: string;
};

export default function HeaderNav({ name, role }: HeaderNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0b1020]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white/10">
            <Image
              src="/agus-portfolio.png"
              alt={`${name} profile`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-100">{name}</div>
            <div className="text-xs text-slate-400">{role}</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          <a className="nav-link hover:text-white" href="#about">
            About
          </a>
          <a className="nav-link hover:text-white" href="#achievements">
            Achievements
          </a>
          <a className="nav-link hover:text-white" href="#experience">
            Experience
          </a>
          <a className="nav-link hover:text-white" href="#skills">
            Skills
          </a>
          <a className="nav-link hover:text-white" href="#contact">
            Contact
          </a>
          <a className="nav-link hover:text-white" href="#gallery">
            Gallery
          </a>
          <div className="group relative">
            <a className="nav-link hover:text-white" href="/play/runner">
              Play
            </a>
            <div className="invisible absolute left-0 top-[calc(100%+10px)] z-20 min-w-[180px] translate-y-[-6px] rounded-[14px] border border-white/10 bg-[#0f172a]/95 p-2 opacity-0 shadow-[0_20px_50px_rgba(3,7,18,0.45)] backdrop-blur transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <a
                className="flex items-center gap-2 rounded-[10px] px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
                href="/play/runner"
              >
                Mini Runner
              </a>
              <a
                className="flex items-center gap-2 rounded-[10px] px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
                href="/play/memory"
              >
                Memory Flip
              </a>
            </div>
          </div>
          <a className="nav-link hover:text-white" href="/docs/AgusMathew.pdf" download>
            <span className="inline-flex items-center gap-2">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M10 12.5 6.5 9h2.25V3h2.5v6H13.5L10 12.5Zm-5.5 4.5A1.5 1.5 0 0 1 3 15.5v-2h2v1.5h10V13.5h2v2A1.5 1.5 0 0 1 15.5 17h-11Z" />
              </svg>
              CV
            </span>
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 sm:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-5 w-5"
            fill="currentColor"
          >
            <path d="M3 5h14v2H3V5Zm0 6h14v2H3v-2Zm0 6h14v2H3v-2Z" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0b1020]/95 px-6 py-4 sm:hidden">
          <div className="grid gap-3 text-sm text-slate-300">
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#achievements">
              Achievements
            </a>
            <a className="hover:text-white" href="#experience">
              Experience
            </a>
            <a className="hover:text-white" href="#skills">
              Skills
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
            <a className="hover:text-white" href="#gallery">
              Gallery
            </a>
            <div className="pt-2 text-xs uppercase tracking-[0.3em] text-slate-400">
              Play
            </div>
            <a className="hover:text-white" href="/play/runner">
              Mini Runner
            </a>
            <a className="hover:text-white" href="/play/memory">
              Memory Flip
            </a>
            <a className="hover:text-white" href="/docs/AgusMathew.pdf" download>
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
