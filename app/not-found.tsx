import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-4xl items-center px-4 py-20 sm:px-6 lg:px-8">
      <section className="w-full rounded-[32px] border border-black/8 bg-[color:var(--color-surface)] p-8 shadow-[0_20px_60px_rgba(23,28,24,0.05)] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-accent-strong)]">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-[color:var(--color-foreground)] sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--color-muted)]">
          The page you requested does not exist or may have moved. Use the main
          Toolyflow homepage to continue browsing the tools.
        </p>
        <Link
          href="/en"
          className="mt-8 inline-flex rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-strong)]"
        >
          Go to homepage
        </Link>
      </section>
    </main>
  );
}
