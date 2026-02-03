"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "newsletter_popup_dismissed";

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (open) {
      emailRef.current?.focus();
    }
  }, [open]);

  function close() {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "1");
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        throw new Error("Subscription failed");
      }
      setSubmitted(true);
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-title"
    >
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0f172a] p-6 shadow-[0_30px_80px_rgba(3,7,18,0.6)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              id="newsletter-title"
              className="text-lg font-semibold text-white"
            >
              Stay in the loop
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Get occasional updates on projects, launches, and engineering
              notes.
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close newsletter popup"
            className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={submit} className="mt-5 flex flex-col gap-3">
            <label className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Email
            </label>
            <input
              ref={emailRef}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="h-11 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-[#22d3ee] focus:ring-2 focus:ring-[#22d3ee]/40"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#22d3ee] px-6 text-sm font-semibold text-[#0b1020] transition hover:-translate-y-0.5 hover:opacity-90"
            >
              {loading ? "Saving..." : "Notify me"}
            </button>
            <p className="text-xs text-slate-400">
              No spam. Unsubscribe anytime.
            </p>
            {error && <p className="text-xs text-red-300">{error}</p>}
          </form>
        ) : (
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
            Thanks! You’re on the list. I’ll keep it useful and low‑volume.
          </div>
        )}
      </div>
    </div>
  );
}
