const puppeteer = require('puppeteer');


async function scrapeLinks() {
    // Setting up puppeteer
    const browser = await puppeteer.launch({ args: ['--no-sandbox', "--no-zygote", "--incognito", "--single-process", "--disabled-setuid-sandbox"] }).catch(error => {
        console.log(error);
    });
    const page = await browser.newPage().catch(error => {
        console.log(error);
    });

    await page.goto('https://www.novelhall.com/evil-emperor-loves-the-crap-consort-9170/', { waitUntil: 'networkidle2' }).catch(error => {
        console.log(error);

    });

    let data = await page.evaluate(() => {
        data = []
        let chapters = document.querySelectorAll('div[class="book-catalog inner mt20  hidden-xs"]>ul>li')

        chapters.forEach(chapter => {
            try {
                link = chapter.querySelector('a').href;
                data.push(link)
            } catch (error) {
                console.log(error);
            }
        });

        return data;

    })

    await browser.close();
    console.log(`There are currently ${data.length} chapters`);
    return data;
}
scrapeLinks();
module.exports = { scrapeLinks };