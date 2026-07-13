"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: real users leave this empty; bots fill it.
    if (data.company) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(body.error ?? "Something went wrong. Please call us instead.");
        return;
      }

      setStatus("success");
      setMessage("Thanks — we received your request and will reply within one business day.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again or give us a call.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-line bg-stone p-8 text-center">
        <p className="text-lg font-medium text-ink">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
      {/* Honeypot field — visually hidden, ignored by humans */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-ink">
          Name
          <input
            name="name"
            required
            autoComplete="name"
            className="rounded-md border border-line bg-paper px-3 py-2.5 text-base outline-none focus:border-cardinal focus:ring-2 focus:ring-cardinal/20"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="rounded-md border border-line bg-paper px-3 py-2.5 text-base outline-none focus:border-cardinal focus:ring-2 focus:ring-cardinal/20"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-ink">
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="rounded-md border border-line bg-paper px-3 py-2.5 text-base outline-none focus:border-cardinal focus:ring-2 focus:ring-cardinal/20"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-ink">
        How can we help?
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us about the property and what you're seeing (cracks, sticking doors, sloping floors)."
          className="rounded-md border border-line bg-paper px-3 py-2.5 text-base outline-none focus:border-cardinal focus:ring-2 focus:ring-cardinal/20"
        />
      </label>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-cardinal">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-12 items-center justify-center rounded-md bg-cardinal px-6 text-base font-semibold text-white transition-colors hover:bg-cardinal-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request a free inspection"}
      </button>
    </form>
  );
}
