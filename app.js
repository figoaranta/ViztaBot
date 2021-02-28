const express = require('express')
const scraper = require("./scraper");
const app = express();


app.get('/', async (req, res) => {
    // res.send("Hello world")
    const QR = await scraper.scrapeQR();
    res.send(`<img src='${QR}' alt="Figo's QR" width="350" height="350">`);
});

app.listen(process.env.PORT || 8000);