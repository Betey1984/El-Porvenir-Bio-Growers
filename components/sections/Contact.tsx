"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import type { Translations } from "@/lib/i18n";

interface ContactProps {
  t: Translations["contact"];
}

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact({ t }: ContactProps) {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name    = (form.elements.namedItem("name")    as HTMLInputElement).value.trim();
    const email   = (form.elements.namedItem("email")   as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full bg-transparent border-b border-brand-white/25 focus:border-brand-gold/60 outline-none font-body font-light text-sm text-brand-white placeholder:text-brand-white/45 py-3 transition-colors duration-300";

  return (
    <section
      id="contact"
      className="bg-brand-green overflow-hidden relative"
    >
      {/* Depth overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(25,25,24,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 grid md:grid-cols-2 min-h-[640px]">

        {/* ── Left — image ──────────────────────────────────────────────── */}
        <div className="relative hidden md:block">
          <Image
            src="/images/contactenos.png"
            alt="El Porvenir — contacto"
            fill
            className="object-cover"
            sizes="50vw"
            quality={85}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(90,99,70,0.1) 0%, transparent 40%, rgba(90,99,70,0.6) 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(25,25,24,0.2) 0%, transparent 30%, rgba(25,25,24,0.4) 100%)",
            }}
          />
        </div>

        {/* ── Right — form ──────────────────────────────────────────────── */}
        <div className="py-24 md:py-40 px-6 md:px-12 lg:px-16 flex flex-col justify-center">

          {/* Label */}
          <p className="font-body text-[10px] tracking-[0.38em] uppercase text-brand-gold mb-8 md:mb-10">
            {t.label}
          </p>

          {/* Title */}
          <h2
            className="font-display font-light text-brand-white leading-[0.95] whitespace-pre-line mb-6 md:mb-8"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}
          >
            {t.title}
          </h2>

          {/* Intro */}
          <p className="font-body font-light text-sm text-brand-white/65 leading-relaxed mb-10 md:mb-12 max-w-sm">
            {t.intro}
          </p>

          {/* ── Form ──────────────────────────────────────────────────── */}
          {status === "success" ? (
            <div className="py-8 border-t border-brand-white/15">
              <p className="font-body text-sm text-brand-gold leading-relaxed">
                {t.form.success}
              </p>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-7"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t.form.namePlaceholder}
                  className={inputBase}
                  disabled={status === "submitting"}
                  autoComplete="name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.form.emailPlaceholder}
                  className={inputBase}
                  disabled={status === "submitting"}
                  autoComplete="email"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={t.form.messagePlaceholder}
                  className={`${inputBase} resize-none`}
                  disabled={status === "submitting"}
                />
              </div>

              {status === "error" && (
                <p className="font-body text-xs text-brand-terra/90 leading-relaxed">
                  {t.form.error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.25em] uppercase text-brand-gold border-b border-brand-gold/30 pb-1 hover:border-brand-gold transition-colors duration-300 disabled:opacity-50 group mt-2"
              >
                {status === "submitting" ? t.form.submitting : t.form.submit}
                {status !== "submitting" && (
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                )}
              </button>
            </form>
          )}

          {/* ── Contact details ───────────────────────────────────────── */}
          <div className="mt-14 md:mt-16 pt-8 border-t border-brand-white/15 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <a
              href={`mailto:${t.email}`}
              className="font-body text-xs text-brand-white/50 hover:text-brand-white/80 transition-colors duration-300 tracking-wide"
            >
              {t.email}
            </a>
            <span className="hidden sm:block w-px h-3 bg-brand-white/20" />
            <a
              href={`tel:${t.phone.replace(/\s/g, "")}`}
              className="font-body text-xs text-brand-white/50 hover:text-brand-white/80 transition-colors duration-300 tracking-wide"
            >
              {t.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
