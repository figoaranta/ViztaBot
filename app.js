const express = require('express')
const scraper = require("./scraper");
const app = express();
const port = 8000;


app.get('/', async (req, res) => {
    const QR = await scraper.scrapeQR();
    res.send(`<img src='${QR}' alt="Figo's QR" width="350" height="350">`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});