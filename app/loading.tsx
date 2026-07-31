export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6 py-20">
      <div className="flex items-center gap-3 rounded-2xl border border-[rgba(212,175,55,0.18)] bg-[rgba(3,7,19,0.86)] px-5 py-4 text-sm font-bold text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[var(--gold)] shadow-[0_0_18px_rgba(212,175,55,0.55)]" />
        Loading JG Creative Studio…
      </div>
    </div>
  );
}
