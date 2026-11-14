import { site } from "../config/site";
import { url } from "./url";

const abs = (path: string, base?: URL) => new URL(url(path), base ?? site.url).toString();

export function organizationLd(base?: URL) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    slogan: site.tagline,
    url: abs("/", base),
    email: site.email.hello,
    founder: { "@type": "Person", name: "Kelsey Dalton" },
  };
}

export function personLd(base?: URL) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kelsey Dalton",
    jobTitle: "Founder",
    worksFor: { "@type": "Organization", name: site.name, url: abs("/", base) },
    url: abs("/about/", base),
  };
}

export function productLd(
  product: { title: string; summary: string; slug: string; price: number; checkoutUrl: string },
  base?: URL,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.summary,
    url: abs(`/shop/${product.slug}/`, base),
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: site.commerce.currency,
      availability: "https://schema.org/InStock",
      url: product.checkoutUrl,
    },
  };
}
