import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center px-4 py-20">
      <div className="text-center">
        <p className="font-display text-7xl font-bold text-brand-500">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-ink-900 dark:text-white">
          Page Not Found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink-600 dark:text-ink-300">
          The page you're looking for doesn't exist or has moved. Let's get you
          back on solid ground.
        </p>
        <Link href="/" className="btn-primary mt-6">
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
