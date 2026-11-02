"use client";

import { useState } from "react";
import { contact, profile } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

const topics = ["LLM app (RAG / agent)", "Custom ML model", "Private / local model", "Something else"];

const field =
  "w-full rounded-lg border border-white/15 bg-black/30 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none";

function Row({ label, href, children }: { label: string; href?: string; children: React.ReactNode }) {
  const inner = (
    <>
      <span className="text-xs uppercase tracking-wide text-zinc-500">{label}</span>
      <span className="text-sm text-zinc-200">{children}</span>
    </>
  );
  const cls = "flex flex-col gap-0.5 border-b border-white/10 py-3";
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={`${cls} transition hover:text-emerald-300`}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return; // honeypot: bots fill hidden fields

    // Until a form key is set, fall back to the visitor's email app.
    if (!contact.formKey) {
      const subject = encodeURIComponent(`Project enquiry: ${data.get("topic")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("name")} <${data.get("email")}>`);
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    data.append("access_key", contact.formKey);
    data.append("subject", `Portfolio enquiry: ${data.get("topic")}`);
    data.append("from_name", "Portfolio contact form");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
      <div>
        <p className="mb-6 max-w-md text-zinc-400">
          Tell me which workflow eats your team&apos;s time. I&apos;ll reply with a concrete plan and how we&apos;d
          measure success.
        </p>
        {profile.booking && (
          <a
            href={profile.booking}
            target="_blank"
            rel="noreferrer"
            className="mb-6 inline-block rounded-full bg-emerald-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-emerald-300"
          >
            Book a 30-min call
          </a>
        )}
        <div>
          <Row label="Email" href={`mailto:${contact.email}`}>{contact.email}</Row>
          <Row label="WhatsApp" href={`https://wa.me/${contact.whatsapp}`}>Message me on WhatsApp</Row>
          <Row label="LinkedIn" href={profile.linkedin}>Connect on LinkedIn</Row>
          <Row label="GitHub" href={profile.github}>Code and projects</Row>
          <Row label="YouTube" href={contact.youtube}>Walkthroughs and demos</Row>
          <Row label="Location">{contact.address.join(", ")}</Row>
          <Row label="Working hours">{contact.hours}</Row>
        </div>
      </div>

      <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/3 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm text-zinc-400">
            Name
            <input name="name" required className={`${field} mt-1.5`} placeholder="Your name" />
          </label>
          <label className="text-sm text-zinc-400">
            Email
            <input name="email" type="email" required className={`${field} mt-1.5`} placeholder="you@company.com" />
          </label>
        </div>
        <label className="mt-4 block text-sm text-zinc-400">
          What do you need?
          <select name="topic" className={`${field} mt-1.5`} defaultValue={topics[0]}>
            {topics.map((t) => (
              <option key={t} value={t} className="bg-zinc-900">
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="mt-4 block text-sm text-zinc-400">
          Message
          <textarea
            name="message"
            required
            rows={5}
            className={`${field} mt-1.5`}
            placeholder="A few lines about the problem, your data and your timeline."
          />
        </label>
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-5 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-300 disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        {status === "sent" && <p className="mt-4 text-sm text-emerald-300">Thanks! I&apos;ll reply within 1-2 working days.</p>}
        {status === "error" && (
          <p className="mt-4 text-sm text-rose-300">
            Something went wrong. Please email me directly at {contact.email}.
          </p>
        )}
      </form>
    </div>
  );
}
