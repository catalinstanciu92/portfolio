import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();
  
  await page.goto('http://localhost:5173');
  await page.waitForLoadState('networkidle');
  
  // Wait for animations to settle
  await page.waitForTimeout(1000);
  
  // Screenshot 1: Hero section
  await page.screenshot({ 
    path: '/home/node/clawd/portfolio/screenshots/01-hero.png',
    fullPage: false
  });
  
  // Scroll to About
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(500);
  await page.screenshot({ 
    path: '/home/node/clawd/portfolio/screenshots/02-about.png',
    fullPage: false
  });
  
  // Scroll to Experience
  await page.evaluate(() => document.getElementById('experience').scrollIntoView());
  await page.waitForTimeout(500);
  await page.screenshot({ 
    path: '/home/node/clawd/portfolio/screenshots/03-experience.png',
    fullPage: false
  });
  
  // Scroll to Skills
  await page.evaluate(() => document.getElementById('skills').scrollIntoView());
  await page.waitForTimeout(500);
  await page.screenshot({ 
    path: '/home/node/clawd/portfolio/screenshots/04-skills.png',
    fullPage: false
  });
  
  // Scroll to Projects
  await page.evaluate(() => document.getElementById('projects').scrollIntoView());
  await page.waitForTimeout(500);
  await page.screenshot({ 
    path: '/home/node/clawd/portfolio/screenshots/05-projects.png',
    fullPage: false
  });
  
  // Scroll to Contact
  await page.evaluate(() => document.getElementById('contact').scrollIntoView());
  await page.waitForTimeout(500);
  await page.screenshot({ 
    path: '/home/node/clawd/portfolio/screenshots/06-contact.png',
    fullPage: false
  });
  
  // Mobile viewport
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:5173');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  
  await page.screenshot({ 
    path: '/home/node/clawd/portfolio/screenshots/07-mobile-hero.png',
    fullPage: false
  });
  
  await browser.close();
  console.log('Screenshots captured!');
})();
