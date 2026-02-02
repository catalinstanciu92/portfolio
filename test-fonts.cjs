const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const fonts = [
  {
    name: 'neue-machina',
    fontFamily: '"Neue Machina", monospace',
    cssFile: '/fonts/neue-machina.css'
  },
  {
    name: 'monument',
    fontFamily: '"Monument Extended", sans-serif',
    cssFile: '/fonts/monument.css'
  },
  {
    name: 'satoshi',
    fontFamily: '"Satoshi", sans-serif',
    cssFile: '/fonts/satoshi.css'
  }
];

const indexCssPath = path.join(__dirname, 'src', 'index.css');
const indexHtmlPath = path.join(__dirname, 'index.html');
const originalCss = fs.readFileSync(indexCssPath, 'utf-8');
const originalHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

async function testFont(font) {
  console.log(`\n=== Testing ${font.name} ===`);
  
  // Update index.html to include font CSS
  let newHtml = originalHtml.replace(
    '</head>',
    `  <link rel="stylesheet" href="${font.cssFile}">\n  </head>`
  );
  fs.writeFileSync(indexHtmlPath, newHtml);
  
  // Update index.css with new font-family
  const newCss = originalCss.replace(
    /body\s*{\s*font-family:[^;]+;/,
    `body {\n  font-family: ${font.fontFamily};`
  );
  fs.writeFileSync(indexCssPath, newCss);
  
  console.log(`Updated CSS for ${font.name}`);
  
  // Wait a bit for Vite to detect changes
  await new Promise(r => setTimeout(r, 2000));
  
  // Take screenshot
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });
  
  await page.goto('http://localhost:5173');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500); // Wait for fonts to load
  
  const screenshotPath = path.join(__dirname, 'screenshots', `font-${font.name}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`Screenshot saved: ${screenshotPath}`);
  
  await browser.close();
  
  // Restore original files
  fs.writeFileSync(indexCssPath, originalCss);
  fs.writeFileSync(indexHtmlPath, originalHtml);
  
  console.log(`Restored original files`);
}

(async () => {
  console.log('Starting font tests...');
  console.log('Make sure the dev server is running on http://localhost:5173');
  
  for (const font of fonts) {
    await testFont(font);
  }
  
  console.log('\n=== All font tests completed ===');
  console.log('Screenshots saved to:');
  fonts.forEach(f => console.log(`  - screenshots/font-${f.name}.png`));
})();
