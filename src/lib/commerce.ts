import { site } from "../config/site";

export type ProductStatus = "coming-soon" | "preorder" | "available" | "service";

export type Purchasable = {
  slug: string;
  status: ProductStatus;
  price: number | null;
  checkoutUrl: string | null;
};

type Adapter = (checkoutUrl: string) => string;

// Each hosted-checkout provider can rewrite the link (for example to add an overlay parameter).
// All are plain links for now; add an embed script only if Kelsey picks an overlay checkout.
const adapters: Record<NonNullable<typeof site.commerce.provider>, Adapter> = {
  payhip: (u) => u,
  "stripe-links": (u) => u,
  lemonsqueezy: (u) => u,
  "shopify-buy-button": (u) => u,
};

export function canCheckout(product: Purchasable): boolean {
  return site.commerce.enabled && site.commerce.provider !== null && Boolean(product.checkoutUrl);
}

export function checkoutHref(product: Purchasable): string | null {
  if (!canCheckout(product) || !product.checkoutUrl || !site.commerce.provider) return null;
  return adapters[site.commerce.provider](product.checkoutUrl);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: site.commerce.currency,
    minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
  }).format(price);
}
