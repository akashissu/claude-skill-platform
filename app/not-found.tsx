import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center gap-6 px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-300">404</p>
      <h1 className="text-4xl font-black tracking-tight text-white">Catalog entry not found</h1>
      <p className="text-base leading-8 text-slate-300">
        The requested suite or page is not present in the implemented PAP-438 catalog build.
      </p>
      <Link href="/departments" className="btn-primary">
        Back to departments
      </Link>
    </div>
  );
}
