const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });

  const distPath = path.resolve(__dirname, 'dist/index.html');
  await page.goto('file://' + distPath);
  
  // Wait for fonts to load
  await page.waitForTimeout(500);
  
  // Full page screenshot
  await page.screenshot({ 
    path: 'screenshot-desktop.png',
    fullPage: true 
  });
  
  // Mobile viewport
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('file://' + distPath);
  await page.waitForTimeout(500);
  
  await page.screenshot({ 
    path: 'screenshot-mobile.png',
    fullPage: true 
  });
  
  await browser.close();
  console.log('Screenshots saved: screenshot-desktop.png, screenshot-mobile.png');
})();
