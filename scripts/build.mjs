import { execSync } from "node:child_process";
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DIST = join(ROOT, "dist");
const TMP = join(ROOT, ".build");

rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
mkdirSync(TMP, { recursive: true });

console.log("1/4 tailwind build...");
execSync("npx tailwindcss -i assets/css/input.css -o .build/tailwind.css --minify", {
  cwd: ROOT,
  stdio: "inherit",
});

console.log("2/4 minify site.js (esbuild)...");
execSync("npx esbuild assets/js/site.js --minify --outfile=.build/site.js", {
  cwd: ROOT,
  stdio: "inherit",
});

const tailwindCss = readFileSync(join(TMP, "tailwind.css"), "utf8");
const siteCss = readFileSync(join(ROOT, "assets", "css", "site.css"), "utf8");
const siteJs = readFileSync(join(TMP, "site.js"), "utf8");

const PAGES = ["index.html", "menu.html", "about.html", "location.html", "privacy.html", "tos.html"];
for (const page of PAGES) {
  console.log("3/4 inline css + js ->", page);
  let html = readFileSync(join(ROOT, page), "utf8");
  const twLink = '<link href="assets/css/tailwind.css" rel="stylesheet"/>';
  const siteLink = '<link href="assets/css/site.css" rel="stylesheet"/>';
  if (!html.includes(twLink) || !html.includes(siteLink)) {
    throw new Error(page + ": expected css link tags not found");
  }
  html = html.replace(twLink, "<style>" + tailwindCss + "</style>", 1);
  html = html.replace(siteLink, "<style>" + siteCss + "</style>", 1);
  writeFileSync(join(DIST, page), html, "utf8");
}

console.log("4/4 copy assets & root files...");
cpSync(join(ROOT, "assets"), join(DIST, "assets"), { recursive: true });
writeFileSync(join(DIST, "assets", "js", "site.js"), siteJs, "utf8");
rmSync(join(DIST, "assets", "css"), { recursive: true, force: true });
for (const f of ["favicon.ico", "apple-touch-icon.png", "robots.txt", "sitemap.xml", "site.webmanifest"]) {
  cpSync(join(ROOT, f), join(DIST, f));
}

console.log("build complete ->", DIST);