export interface NavLink {
  href: string;
  label: string;
}

export interface Translations {
  nav: {
    links: NavLink[];
    langLabel: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    tagline: string;
    scroll: string;
  };
  manifesto: {
    quote: string;
    attribution: string;
  };
  about: {
    label: string;
    title: string;
    body1: string;
    body2: string;
    detail1: string;
    detail2: string;
  };
  philosophy: {
    label: string;
    title: string;
    intro: string;
    pillars: { title: string; body: string }[];
  };
  terraPreta: {
    label: string;
    title: string;
    definition: string;
    body: string;
    principles: { ancestral: string; modern: string }[];
    ancestralHeader: string;
    scienceHeader: string;
  };
  sacredSeed: {
    label: string;
    title: string;
    body1: string;
    body2: string;
    imageCaption: string;
    stats: { value: string; label: string }[];
  };
  ecosystem: {
    label: string;
    title: string;
    subtitle: string;
    pillars: { title: string; body: string }[];
  };
  contact: {
    label: string;
    title: string;
    intro: string;
    email: string;
    phone: string;
    form: {
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
    };
  };
  footer: {
    tagline: string;
    tags: string[];
    copyright: string;
  };
}
