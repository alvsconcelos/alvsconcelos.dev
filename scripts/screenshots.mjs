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
  {
    url: 'http://127.0.0.1:4321/',
    file: 'desktop-en-v2.png',
    width: 1280,
    height: 900,
    expand: false,
  },
  {
    url: 'http://127.0.0.1:4321/',
    file: 'desktop-en-v2-expanded.png',
    width: 1280,
    height: 900,
    expand: true,
  },
  {
    url: 'http://127.0.0.1:4321/',
    file: 'mobile-en-v2.png',
    width: 390,
    height: 844,
    expand: false,
  },
  {
    url: 'http://127.0.0.1:4321/pt/',
    file: 'desktop-pt-v2.png',
    width: 1280,
    height: 900,
    expand: false,
  },
];

for (const shot of shots) {
  const context = await browser.newContext({
    viewport: { width: shot.width, height: shot.height },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await page.goto(shot.url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  if (shot.expand) {
    await page.locator('#payments').evaluate((el) => {
      el.open = true;
    });
  }
  await page.waitForTimeout(250);
  const dest = path.join(outDir, shot.file);
  await page.screenshot({ path: dest, fullPage: true, type: 'png' });
  const size = await page.evaluate(() => ({
    width: document.documentElement.clientWidth,
    scroll: document.documentElement.scrollHeight,
  }));
  console.log('wrote', dest, 'scrollHeight', size.scroll);
  await context.close();
}

await browser.close();
