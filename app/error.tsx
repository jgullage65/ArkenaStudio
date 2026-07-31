"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex min-h-[65vh] w-full max-w-5xl items-center justify-center px-6 py-20 text-center">
      <div className="w-full rounded-[2rem] border border-[rgba(212,175,55,0.18)] bg-[linear-gradient(145deg,rgba(9,16,32,0.94),rgba(2,5,14,0.98))] px-6 py-16 shadow-[0_30px_90px_rgba(0,0,0,0.36)] sm:px-10">
        <p className="text-xs font-black uppercase tracking-[0.32em] text-[var(--gold)]">Something went wrong</p>
        <h1 className="mt-5 text-4xl font-medium tracking-[-0.055em] text-white sm:text-5xl">
          This page could not load.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--muted)]">
          Try loading it again. If the problem continues, head back to the homepage or contact JG Creative Studio.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-lg border border-amber-300/15 bg-[#081226] px-5 py-3 text-sm font-black text-white shadow-[0_18px_48px_rgba(212,175,55,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-0.5 hover:border-amber-300/30 hover:bg-[#0b1830]"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-amber-300/15 bg-[#081226] px-5 py-3 text-sm font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-0.5 hover:border-amber-300/30 hover:bg-[#0b1830]"
          >
            Back to home
          </a>
        </div>
      </div>
    </section>
  );
}
