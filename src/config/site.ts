export const site = {
  name: "Root & Reinvent",
  tagline: "Closing deals takes finding deals.",
  url: "https://rootandreinvent.com",          // update when the domain is live
  email: {
    hello: "hello@rootandreinvent.com",          // not live yet: needs the domain
    contact: "kelsey.maria.dalton@gmail.com",    // shown on the site and used for "Book a call" until hello@ works
  },
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

  video: {
    uploadDate: "2026-11-13",
    main: {
      src: "/video/brand-main.mp4", poster: "/video/poster.jpg", captions: "/video/brand-main.en.vtt", duration: "1:39",
      title: "Root & Reinvent: what the Repeat Success Method is and who built it",
      description: "What the Repeat Success Method is, who built it, and the three-part first email at its heart.",
    },
    walkthrough: {
      src: "/video/walkthrough.mp4", poster: "/video/walkthrough-poster.jpg", captions: "/video/walkthrough.en.vtt", duration: "3:05",
      title: "The Repeat Success Method: a 3-minute walkthrough",
      description: "A walkthrough of all four parts of the Repeat Success Method: Prioritize, People, Proof and Persistence.",
    },
    teaser: {
      src: "/video/teaser-4x5.mp4", poster: "/video/teaser-poster.jpg", captions: "/video/teaser.en.vtt", duration: "0:28",
      title: "Root & Reinvent in 30 seconds",
      description: "The Repeat Success Method in 30 seconds.",
    },
    heroLoop:    "/video/hero-loop.mp4",
  },

  analytics: {
    provider: null as "cloudflare" | "goatcounter" | "plausible" | null,
    siteId: null as string | null,
  },
};
