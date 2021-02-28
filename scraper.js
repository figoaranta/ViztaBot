const puppeteer = require('puppeteer');

async function scrapeQR() {
    // Setting up puppeteer
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] }).catch(error => {
        console.log(error);
    });
    const page = await browser.newPage().catch(error => {
        console.log(error);
    });

    await page.goto('https://www.viztagym.id/', { waitUntil: 'networkidle2' }).catch(error => {
        console.log(error);
    });
    await page.setCookie({
        'url': 'https://www.viztagym.id/member/qr-code.php',
        'expires': Date.now() / 1000 + 10,
        'name': 'PHPSESSID',
        'value': 'oa5l3ice81nhjd59ntfd5pj2u1',
    })

    await page.goto('https://www.viztagym.id/member/qr-code.php', { waitUntil: 'networkidle2' }).catch(error => {
        console.log(error);
    });
    try {
        const [el] = await page.$x('/html/body/div[1]/img');
        const src = await el.getProperty('src');
        const srcTxt = await src.jsonValue();

        return srcTxt
    } catch (error) {
        console.log(error)
    }

    await browser.close();
}

module.exports = { scrapeQR };