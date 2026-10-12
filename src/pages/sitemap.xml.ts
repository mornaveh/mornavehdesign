import type { APIRoute } from "astro";

// every page in src/pages except the not-found page; new pages are picked up automatically
const paths = Object.keys(import.meta.glob("./**/*.astro"))
  .filter((p) => !p.includes("404"))
  .map((p) => p.replace(/^\./, "").replace(/(index)?\.astro$/, "").replace(/\/?$/, "/"));

export const GET: APIRoute = ({ site }) => {
  const urls = paths.map((p) => `<url><loc>${new URL(p, site).href}</loc></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { "Content-Type": "application/xml" },
  });
};
