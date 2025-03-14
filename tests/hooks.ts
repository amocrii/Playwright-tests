import { Before, After, Status } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium, firefox, webkit } from 'playwright';
import * as dotenv from 'dotenv';
import * as fs from 'fs'

// Load environment variables
dotenv.config();

let browser: Browser;
let context: BrowserContext;
let page: Page;

// Expose the page globally for use in step definitions
export { page };

Before(async function () {
  const browserName = process.env.BROWSER || 'chromium';
  const headless = process.env.HEADLESS === 'true';

  let browserType;
  switch (browserName) {
    case 'firefox': browserType = firefox; break;
    case 'webkit': browserType = webkit; break;
    case 'chromium': 
    default: browserType = chromium; break;
  }

  browser = await browserType.launch({ headless });
  context = await browser.newContext();
  page = await context.newPage();
});

After(async function (scenario) {
     // Check if the scenario failed
  if (scenario.result?.status === Status.FAILED) {
    const screenshotPath = `./screenshots/${scenario.pickle.name.replace(/\s+/g, '_')}.png`;
    
    // Ensure the screenshots directory exists
    if (!fs.existsSync('./screenshots')) {
      fs.mkdirSync('./screenshots', { recursive: true });
    }

    // Take a screenshot
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`📸 Screenshot saved: ${screenshotPath}`);
  }

  await page.close();
  await browser.close();
});
