import { chromium } from 'playwright-core';
import path from 'node:path';
import { mkdir } from 'node:fs/promises';

const outDir = '/workspace/site-alvsconcelos-shots';
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
});

const shots = [
  { url: 'http://127.0.0.1:4321/', file: 'desktop-en.png', width: 1280, height: 900 },
  { url: 'http://127.0.0.1:4321/', file: 'mobile-en.png', width: 390, height: 844 },
  { url: 'http://127.0.0.1:4321/pt/', file: 'desktop-pt.png', width: 1280, height: 900 },
  { url: 'http://127.0.0.1:4321/pt/', file: 'mobile-pt.png', width: 390, height: 844 },
];

for (const shot of shots) {
  const context = await browser.newContext({
    viewport: { width: shot.width, height: shot.height },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await page.goto(shot.url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(200);
  const dest = path.join(outDir, shot.file);
  await page.screenshot({ path: dest, fullPage: true, type: 'png' });
  console.log('wrote', dest);
  await context.close();
}

await browser.close();
