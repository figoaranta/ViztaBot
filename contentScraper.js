const puppeteer = require('puppeteer');
const linksFile = require('./links');

const links = linksFile.links

async function scrapeContent(chapter) {
    // Setting up puppeteer
    const browser = await puppeteer.launch({ args: ['--no-sandbox', "--no-zygote", "--incognito", "--single-process", "--disabled-setuid-sandbox"] }).catch(error => {
        console.log(error);
    });
    const page = await browser.newPage().catch(error => {
        console.log(error);
    });
    // await page.setDefaultNavigationTimeout(0);

    await page.goto(links[chapter], { waitUntil: 'networkidle2' }).catch(error => {
        console.log(error);
    });

    const [el] = await page.$x('//*[@id="htmlContent"]');
    const txt = await el.getProperty('textContent')
    const content = await txt.jsonValue()
    const regexContent = content.replace(/(\(adsbygoogle = window.adsbygoogle \|+ \[]\)\.push\({}\);)|(\")/gi, '')
    await page.close();
    await browser.close();
    return { regexContent };

}

module.exports = { scrapeContent };
//(\(adsbygoogle = window.adsbygoogle \|+ \[]\)\.push\({}\);)|(\")
//(/[^\w\s]/gi, '')
