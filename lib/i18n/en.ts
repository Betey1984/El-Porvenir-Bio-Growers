import type { Translations } from "./types";

export const en: Translations = {
  nav: {
    links: [
      { href: "#about", label: "About" },
      { href: "#philosophy", label: "Philosophy" },
      { href: "#cacao", label: "Cacao" },
      { href: "#platform", label: "Platform" },
      { href: "#contact", label: "Contact" },
    ],
    langLabel: "ES",
  },

  // ─── HERO ────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: "Colombia · Regenerative Platform · Fine Cacao",
    headline: "Where the Earth\nSpeaks First",
    subtitle:
      "A regenerative platform rooted in ancestral knowledge, living soil, and the future of origin cacao.",
    tagline: "Sacred Seed · Timeless Flavor",
    scroll: "Discover",
  },

  // ─── MANIFESTO ───────────────────────────────────────────────────────────
  manifesto: {
    quote:
      "The seed carries memory. The soil holds centuries. We don't farm the land — we enter into relationship with it. El Porvenir is a living system: rooted in ancestral knowledge, guided by science, built to last.",
    attribution: "El Porvenir Bio Growers",
  },

  // ─── ABOUT ───────────────────────────────────────────────────────────────
  about: {
    label: "Keepers of the Future",
    title: "Guardians of\nwhat the land\nremembers",
    body1:
      "El Porvenir Bio Growers was founded on a simple conviction: the most valuable thing a farm can produce is not a crop — it is a living relationship between land, knowledge, and the generations that follow. We are not extractors. We are custodians.",
    body2: "",
    detail1: "Founded in Colombia's highland cacao corridor",
    detail2:
      "Regenerative platform in development · Zero synthetic inputs · Seeking connections with buyers in Europe and North America",
  },

  // ─── PHILOSOPHY ──────────────────────────────────────────────────────────
  philosophy: {
    label: "Listening to the Earth",
    title: "Agriculture\nas relationship",
    intro:
      "Our practice does not begin with a plan — it begins with observation. We read the soil, follow the water, and apply seasonal intelligence that no textbook fully encodes. Ancient knowledge and modern science, here, tell the same story.",
    pillars: [
      {
        title: "Soil First",
        body: "Living soil is the foundation. Compost, biochar, and permanent plant cover build underground ecosystems — the same logic our ancestors applied, which we are learning to observe and document.",
      },
      {
        title: "Agroforestry",
        body: "Native trees, shade species, and wild corridors integrate into our systems — increasing biodiversity while improving the flavor complexity of every cacao pod.",
      },
      {
        title: "Native Genetics",
        body: "We preserve and multiply native cacao varieties with deep genetic lineage — selected for flavor, resilience, and cultural significance. Not for yield.",
      },
      {
        title: "Water & Cycles",
        body: "Water is not a resource — it is a living element. We design for retention, seasonal flow, and biological cycles. The land knows how to manage water. We follow its lead.",
      },
    ],
  },

  // ─── TERRA PRETA ─────────────────────────────────────────────────────────
  terraPreta: {
    label: "Living Soil · Terra Preta",
    title: "The oldest living\ntechnology on earth",
    definition:
      "Terra Preta — pre-Columbian dark earths created by indigenous Amazonian peoples over centuries through biochar integration, organic matter, and closed mineral cycles. Soil that does not deplete. It deepens.",
    body: "We apply these same principles through biochar integration, closed mineral cycles, and permanent organic cover. We aim to strengthen soil fertility season after season through monitoring and observation. This is the biological foundation beneath every product we grow — an inheritance we tend, not a resource we consume.",
    principles: [
      {
        ancestral: "Biochar from controlled burning",
        modern: "Long-term carbon sequestration",
      },
      {
        ancestral: "Closed organic cycles",
        modern: "Zero synthetic inputs",
      },
      {
        ancestral: "Indigenous land stewardship",
        modern: "Monitoring soil health",
      },
    ],
    ancestralHeader: "Ancestral practice",
    scienceHeader: "Modern science",
  },

  // ─── SACRED SEED ─────────────────────────────────────────────────────────
  sacredSeed: {
    label: "Sacred Seed · Timeless Flavor",
    title: "Before chocolate,\nthere was\nceremony",
    body1:
      "Cacao is not an ingredient. In Colombia, it is a carrier of memory — present in ritual, trade, and daily life for thousands of years before it reached European markets. We grow these varieties not because they are profitable. Because they must not be lost.",
    body2:
      "Our focus is fine-flavor native cacao. We are developing fermentation practices and documentation of each lot’s origin, with the aim of building direct commercial relationships and exploring exports.",
    imageCaption: "Native varieties · Alto Caquetá · Colombia",
    stats: [
      { value: "400–1,200m", label: "Altitude range" },
      { value: "6–8 days", label: "Controlled fermentation" },
      { value: "Fine flavor", label: "Our focus" },
      { value: "In development", label: "Lot traceability" },
    ],
  },

  // ─── ECOSYSTEM ───────────────────────────────────────────────────────────
  ecosystem: {
    label: "Platform Vision",
    title: "A movement,\nnot a farm",
    subtitle:
      "We are building a platform that aims to connect regenerative production, an origin cacao brand, lot traceability, and international partnerships.",
    pillars: [
      {
        title: "Production",
        body: "We are developing regenerative production protocols centered on living soil, agroforestry systems, and native genetics. We use zero synthetic inputs and aim to document every stage.",
      },
      {
        title: "Sacred Seed Brand",
        body: "The brand we are developing to express our origin. We aim to offer fine-flavor cacao and build a documented chain of custody, while connecting with buyers in Europe and North America.",
      },
      {
        title: "Global Network",
        body: "We seek to build relationships with importers, fine chocolatiers, research institutions, and investors who share our vision.",
      },
    ],
  },

  // ─── CONTACT ─────────────────────────────────────────────────────────────
  contact: {
    label: "Let's Connect",
    title: "Begin the\nconversation",
    intro:
      "We are building long-term relationships — not transactions. Tell us who you are and what you are looking for.",
    email: "info@elporvenirbiogrowers.com",
    phone: "+57 310 858 2146",
    form: {
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      submit: "Send message",
      submitting: "Sending…",
      success: "Message sent. We will be in touch soon.",
      error: "Something went wrong. Please try again or write to us directly.",
    },
  },

  // ─── FOOTER ──────────────────────────────────────────────────────────────
  footer: {
    tagline: "Bio Growers · Colombia",
    tags: [
      "Sacred Seed · Timeless Flavor",
      "Terra Preta · Living Soil",
      "Fine Flavor Cacao",
      "Colombian Highland Origin",
    ],
    copyright: "© 2026 El Porvenir Bio Growers. All rights reserved.",
  },
};
