// Fails the production build if placeholder text or banned terms reach the output.
// Banned terms (employer, customer and colleague names) are never committed: they come from
// the gitignored .banned-terms.local file or the BANNED_TERMS environment variable / CI secret.
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const scanDirs = [dist, join(root, "src"), join(root, "public"), join(root, "scripts"), join(root, ".github")];
const textExt = /\.(html|xml|txt|json|js|css|md|mdx|astro|ts|mjs|yml|yaml|svg|vtt)$/i;

const placeholderPatterns = [/\[KELSEY TO/i, /\[TODO/i, /\[Pending/i, /\[Guide title pending/i];

function loadBannedTerms() {
  const raw = [];
  const file = join(root, ".banned-terms.local");
  if (existsSync(file)) raw.push(...readFileSync(file, "utf8").split("\n"));
  if (process.env.BANNED_TERMS) raw.push(...process.env.BANNED_TERMS.split(/[\n,]/));
  return [...new Set(raw.map((t) => t.trim()).filter((t) => t && !t.startsWith("#")))];
}

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".astro")) continue;
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) walk(path, out);
    else if (textExt.test(name)) out.push(path);
  }
  return out;
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const bannedTerms = loadBannedTerms();
const bannedPatterns = bannedTerms.map((t) => ({ term: t, re: new RegExp(`(^|[^\\p{L}\\p{N}])${escape(t)}($|[^\\p{L}\\p{N}])`, "iu") }));

if (!existsSync(dist)) {
  console.error("check-placeholders: dist/ not found. Run `astro build` first.");
  process.exit(1);
}

const problems = [];

for (const file of walk(dist)) {
  const text = readFileSync(file, "utf8");
  for (const re of placeholderPatterns) {
    const m = text.match(re);
    if (m) problems.push(`${relative(root, file)}: placeholder text "${m[0]}..." in production output`);
  }
}

for (const dir of scanDirs) {
  for (const file of walk(dir)) {
    if (file.endsWith("check-placeholders.mjs")) continue;
    const text = readFileSync(file, "utf8");
    for (const { term, re } of bannedPatterns) {
      if (re.test(text)) problems.push(`${relative(root, file)}: banned term "${term}"`);
    }
  }
}

if (bannedTerms.length === 0) {
  console.warn("check-placeholders: no banned terms configured (.banned-terms.local or BANNED_TERMS). Skipping that check.");
}

if (problems.length) {
  console.error(`check-placeholders: ${problems.length} problem(s)\n  ${[...new Set(problems)].join("\n  ")}`);
  process.exit(1);
}

console.log(
  `check-placeholders: OK (${walk(dist).length} output files, ${bannedTerms.length} banned terms checked)`,
);
