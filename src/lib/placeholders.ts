/** Pending items render as TODO chips in `astro dev` and are hidden in production builds. */
export const showPending = import.meta.env.DEV;

/** A value is a placeholder when it is null/empty or a `[bracketed]` note. */
export function isPlaceholder(value: string | null | undefined): boolean {
  if (value == null) return true;
  const v = value.trim();
  return v === "" || (v.startsWith("[") && v.endsWith("]"));
}
