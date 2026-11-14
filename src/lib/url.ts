const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Prefix an internal path ("/shop/") with the deploy base path. */
export function url(path: string): string {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
