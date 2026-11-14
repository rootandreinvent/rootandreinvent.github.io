export type Faq = { q: string; a: string | null };

/** Answers stay null until Kelsey writes them; the FAQ only renders answered questions. */
export const workWithMeFaq: Faq[] = [
  { q: "Do you work with teams outside tech?", a: null },
  { q: "Is everything virtual?", a: null },
  { q: "How soon can we start?", a: null },
];
