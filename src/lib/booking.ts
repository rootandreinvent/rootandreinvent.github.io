import { site } from "../config/site";

const subject = "Request: 15 to 20 minute call";

const body = [
  "Hi Kelsey,",
  "",
  "I'd like to book a 15 to 20 minute call.",
  "",
  "Name:",
  "Company:",
  "Role:",
  "What I'm trying to land:",
  "A few times that work for me:",
  "",
  "Thanks,",
].join("\r\n");

/** Pre-filled email used for "Book a call" until a booking tool is set in site.booking.url. */
export const bookingMailto = `mailto:${site.email.contact}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

/** Where every "Book a call" button points. */
export const bookingHref = site.booking.url ?? bookingMailto;
