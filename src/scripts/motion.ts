const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(pointer: fine)").matches;

function onVisible(elements: Iterable<Element>, callback: (el: Element) => void, rootMargin = "0px 0px -10% 0px") {
  const list = [...elements];
  if (!list.length) return;
  if (!("IntersectionObserver" in window)) {
    list.forEach(callback);
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin },
  );
  list.forEach((el) => observer.observe(el));
}

/* Staggered children: each [data-reveal] inside a group gets its index. */
document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
  group.querySelectorAll<HTMLElement>(":scope > [data-reveal], :scope > * > [data-reveal]").forEach((el, i) => {
    el.style.setProperty("--i", String(i));
  });
});

onVisible(document.querySelectorAll("[data-reveal]"), (el) => el.classList.add("is-visible"));

onVisible(
  document.querySelectorAll('[data-root-lines="hero"], [data-root-lines="divider"]'),
  (el) => el.classList.add("is-drawn"),
  "0px",
);

/* Count-up for stats like "10+", "300%", "1st". The final value is in the HTML. */
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - 2 ** (-10 * t));

onVisible(document.querySelectorAll<HTMLElement>("[data-count]"), (node) => {
  const el = node as HTMLElement;
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix ?? "";
  if (reduced || !Number.isFinite(target) || target === 0) return;
  const duration = 1400;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    el.textContent = `${Math.round(target * easeOutExpo(t))}${suffix}`;
    if (t < 1) requestAnimationFrame(tick);
  };
  el.textContent = `0${suffix}`;
  requestAnimationFrame(tick);
});

/* Scroll-linked: spines that grow, active steps, light parallax. */
const spines = [...document.querySelectorAll<SVGElement>('[data-root-lines="spine"]')];
const parallax = reduced ? [] : [...document.querySelectorAll<HTMLElement>("[data-parallax]")];

if (spines.length || parallax.length) {
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    spines.forEach((spine) => {
      const track = (spine.closest("[data-spine-track]") as HTMLElement | null) ?? spine.parentElement;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const progress = reduced ? 1 : Math.min(1, Math.max(0, (vh * 0.7 - rect.top) / rect.height));
      spine.style.setProperty("--progress", progress.toFixed(3));
    });
    parallax.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - vh / 2) / vh;
      const strength = Number(el.dataset.parallax || 24);
      el.style.translate = `0 ${(-offset * strength).toFixed(1)}px`;
    });
  };
  const request = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  update();
  window.addEventListener("scroll", request, { passive: true });
  window.addEventListener("resize", request);
}

/* Magnetic primary buttons: desktop pointer only, max 6px of travel. */
if (finePointer && !reduced) {
  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    el.addEventListener("pointermove", (event) => {
      const rect = el.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 12;
      el.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.translate = "";
    });
  });
}
