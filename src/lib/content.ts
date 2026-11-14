import { getCollection } from "astro:content";
import { isPlaceholder, showPending } from "./placeholders";

export async function getServices() {
  const items = await getCollection("services");
  return items.map((s) => s.data).sort((a, b) => a.order - b.order);
}

/** Products whose title is still a placeholder only appear in development. */
export async function getProducts() {
  const items = await getCollection("products");
  return items
    .map((p) => p.data)
    .filter((p) => showPending || !isPlaceholder(p.title))
    .sort((a, b) => a.order - b.order);
}

/** Method posts marked `draft: true` only appear in development until Kelsey approves them. */
export async function getMethodPosts() {
  const items = await getCollection("method");
  return items
    .filter((p) => showPending || !p.data.draft)
    .sort((a, b) => a.data.order - b.data.order);
}

export const methodPillars = [
  {
    slug: "prioritize",
    numeral: "1",
    title: "Prioritize",
    body: "Rank accounts by what changed, not by size, so one win can make your year.",
  },
  {
    slug: "people",
    numeral: "2",
    title: "People",
    body: "Find the person closest to the pain, and know who owns the money.",
  },
  {
    slug: "proof",
    numeral: "3",
    title: "Proof",
    body: "Build a library of customer stories by industry, with real challenges and approved results.",
  },
  {
    slug: "persistence",
    numeral: "4",
    title: "Persistence",
    body: "Follow up across email, phone and in person, and give them something new every time.",
  },
] as const;
