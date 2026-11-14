export const site = {
  name: "Root & Reinvent",
  tagline: "Closing deals takes finding deals.",
  url: "https://rootandreinvent.com",          // update when the domain is live
  email: { hello: "hello@rootandreinvent.com" },
  mailingAddress: null as string | null,       // required in marketing emails; PO box TBD

  signup: {
    provider: "kit" as "kit" | null,
    formActionUrl: null as string | null,      // Kit form endpoint, set later
  },

  booking: {
    provider: null as "calcom" | "calendly" | null,
    url: null as string | null,
  },

  commerce: {
    enabled: false,                            // flips product CTAs from waitlist to buy
    provider: null as "payhip" | "stripe-links" | "lemonsqueezy" | "shopify-buy-button" | null,
    currency: "USD",
  },

  analytics: {
    provider: null as "cloudflare" | "goatcounter" | "plausible" | null,
    siteId: null as string | null,
  },
};
