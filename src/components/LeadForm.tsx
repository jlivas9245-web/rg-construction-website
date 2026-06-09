"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/lib/site";

type Props = {
  // "quote" shows project-type + budget fields; "contact" is a simpler message form.
  variant?: "quote" | "contact";
  title?: string;
  description?: string;
};

export function LeadForm({
  variant = "quote",
  title,
  description,
}: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // No backend is wired up yet. This simulates a submission so the UI is
    // fully functional. Connect to an API route, email service or CRM here.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    (e.target as HTMLFormElement).reset();
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-xl border border-ink-200 bg-white p-10 text-center shadow-card dark:border-ink-800 dark:bg-ink-900">
        <CheckCircle2 className="h-14 w-14 text-brand-500" />
        <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-wide text-ink-900 dark:text-white">
          Thank You!
        </h3>
        <p className="mt-2 max-w-sm text-ink-600 dark:text-ink-300">
          Your request has been received. A member of the RG Construction team
          will reach out shortly to discuss your project.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-6"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-ink-200 bg-white p-6 shadow-card dark:border-ink-800 dark:bg-ink-900 sm:p-8">
      {title && (
        <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-ink-900 dark:text-white">
          {title}
        </h3>
      )}
      {description && (
        <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">
          {description}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="label-field">
              Full Name *
            </label>
            <input id="name" name="name" required className="input-field" placeholder="Jane Doe" />
          </div>
          <div>
            <label htmlFor="phone" className="label-field">
              Phone *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="input-field"
              placeholder="(903) 555-0123"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="label-field">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="input-field"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="city" className="label-field">
              City / Location
            </label>
            <input id="city" name="city" className="input-field" placeholder="Longview, TX" />
          </div>
        </div>

        {variant === "quote" && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="service" className="label-field">
                Service Needed
              </label>
              <select id="service" name="service" className="input-field" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other">Other / Not sure</option>
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="label-field">
                Estimated Budget
              </label>
              <select id="budget" name="budget" className="input-field" defaultValue="">
                <option value="" disabled>
                  Select a range
                </option>
                <option>Under $5,000</option>
                <option>$5,000 – $25,000</option>
                <option>$25,000 – $75,000</option>
                <option>$75,000 – $200,000</option>
                <option>$200,000+</option>
              </select>
            </div>
          </div>
        )}

        <div>
          <label htmlFor="message" className="label-field">
            Project Details {variant === "contact" && "*"}
          </label>
          <textarea
            id="message"
            name="message"
            rows={variant === "quote" ? 4 : 5}
            required={variant === "contact"}
            className="input-field resize-none"
            placeholder="Tell us about your project, timeline and goals…"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {variant === "quote" ? "Request Free Estimate" : "Send Message"}
            </>
          )}
        </button>
        <p className="text-center text-xs text-ink-500 dark:text-ink-400">
          We respect your privacy. Your information is only used to respond to
          your request.
        </p>
      </form>
    </div>
  );
}
