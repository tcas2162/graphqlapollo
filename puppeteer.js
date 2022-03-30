const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5500/');
    await page.screenshot({ path: 'example.png' });

    await browser.close();
})();