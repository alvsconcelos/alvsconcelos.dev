/**
 * Rewrite root-absolute asset and navigation URLs in the built site so it
 * works both at the domain root (alvsconcelos.dev) and on a GitHub Pages
 * project subpath (alvsconcelos.github.io/alvsconcelos.dev/).
 *
 * Canonical, hreflang, Open Graph, Twitter image, sitemap and JSON-LD stay
 * as absolute https://alvsconcelos.dev URLs.
 *
 * 404.html can be served for a missing path at any depth, so those URLs are
 * written relative to the site root and a tiny synchronous script sets
 * <base> from location (github.io project page vs custom domain).
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const KEEP_HTTPS = 'https://alvsconcelos.dev';

function resolveDist(dir) {
  if (!dir) return path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
  if (dir instanceof URL) return fileURLToPath(dir);
  if (typeof dir === 'string' && dir.startsWith('file:')) return fileURLToPath(dir);
  return path.resolve(dir);
}

async function walk(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

function depthOf(distDir, file) {
  const rel = path.relative(distDir, file).replaceAll('\\', '/');
  const dir = path.dirname(rel);
  if (dir === '.') return 0;
  return dir.split('/').filter(Boolean).length;
}

function isRootAbsolute(url) {
  return typeof url === 'string' && url.startsWith('/') && !url.startsWith('//');
}

function toRelative(abs, depth, { siteRootRelative = false } = {}) {
  if (!isRootAbsolute(abs)) return abs;
  if (siteRootRelative) return abs === '/' ? './' : abs.slice(1);
  const prefix = depth === 0 ? './' : '../'.repeat(depth);
  return abs === '/' ? prefix : prefix + abs.slice(1);
}

function rewriteUrlValue(value, depth, opts) {
  // srcset: "url 1x, url2 2x"
  if (value.includes(',') || /\s/.test(value.trim())) {
    return value.replace(/(^|[\s,])(\/\S+)/g, (all, pre, url) => {
      if (!isRootAbsolute(url)) return all;
      return pre + toRelative(url, depth, opts);
    });
  }
  return toRelative(value, depth, opts);
}

function rewriteCss(css, depth) {
  return css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (all, quote, url) => {
    const trimmed = url.trim();
    if (!isRootAbsolute(trimmed)) return all;
    const next = toRelative(trimmed, depth);
    return `url(${quote}${next}${quote})`;
  });
}

const BASE_SCRIPT =
  '<script>(function(){var b="/";if(/\\.github\\.io$/i.test(location.hostname)){var s=location.pathname.split("/").filter(Boolean)[0];if(s)b="/"+s+"/";}var e=document.createElement("base");e.href=location.origin+b;document.head.insertBefore(e,document.head.firstChild);})();</script>';

function rewriteHtml(html, depth, { is404 = false } = {}) {
  const opts = { siteRootRelative: is404 };

  html = html.replace(
    /\b(href|src)=("|')([^"']+)\2/g,
    (all, attr, q, value) => {
      if (value.startsWith(KEEP_HTTPS)) return all;
      if (!isRootAbsolute(value)) return all;
      return `${attr}=${q}${toRelative(value, depth, opts)}${q}`;
    },
  );

  html = html.replace(/\bsrcset=("|')([^"']+)\1/g, (all, q, value) => {
    return `srcset=${q}${rewriteUrlValue(value, depth, opts)}${q}`;
  });

  // meta refresh: content="0; url=/"
  html = html.replace(
    /\bcontent=("|')(\d+\s*;\s*url=\s*)([^"']+)\1/gi,
    (all, q, prefix, url) => {
      const trimmed = url.trim();
      if (!isRootAbsolute(trimmed)) return all;
      return `content=${q}${prefix}${toRelative(trimmed, depth, opts)}${q}`;
    },
  );

  html = html.replace(/url\(\s*(['"]?)(\/[^'")]+)\1\s*\)/g, (all, quote, url) => {
    if (!isRootAbsolute(url)) return all;
    return `url(${quote}${toRelative(url, depth, opts)}${quote})`;
  });

  if (is404 && !html.includes('document.createElement("base")')) {
    html = html.replace(/<head([^>]*)>/i, `<head$1>${BASE_SCRIPT}`);
  }

  return html;
}

export async function relativizeDist(dir) {
  const distDir = resolveDist(dir);
  const files = await walk(distDir);
  let count = 0;
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext !== '.html' && ext !== '.css') continue;
    const depth = depthOf(distDir, file);
    const original = await readFile(file, 'utf8');
    const rel = path.relative(distDir, file).replaceAll('\\', '/');
    const next =
      ext === '.css'
        ? rewriteCss(original, depth)
        : rewriteHtml(original, depth, { is404: rel === '404.html' });
    if (next !== original) {
      await writeFile(file, next);
      count += 1;
    }
  }
  return count;
}

export default function relativizeUrls() {
  return {
    name: 'relativize-urls',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        await relativizeDist(dir);
      },
    },
  };
}

const isMain =
  process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url;

if (isMain) {
  const count = await relativizeDist();
  console.log(`Relativized URLs in ${count} file(s).`);
}
