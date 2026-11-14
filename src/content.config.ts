import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    audience: z.string(),
    summary: z.string(),
    workOn: z.array(z.string()),
    format: z.string(),
    price: z.number().nullable(),
    order: z.number(),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    type: z.enum(["digital", "physical", "service"]),
    status: z.enum(["coming-soon", "preorder", "available", "service"]),
    price: z.number().nullable(),
    checkoutUrl: z.url().nullable(),
    includes: z.array(z.string()),
    sections: z.array(z.string()),
    audience: z.string(),
    faq: z.array(z.object({ q: z.string(), a: z.string().nullable() })).default([]),
    guarantee: z.string().nullable().default(null),
    order: z.number(),
  }),
});

const method = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/method" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    pillar: z.string(),
    numeral: z.string(),
    description: z.string(),
    lede: z.string(),
    mentionsAI: z.boolean().default(false),
    draft: z.boolean().default(true),
    order: z.number(),
  }),
});

export const collections = { services, products, method };
