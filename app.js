const express = require('express')
const contentScaper = require("./contentScraper");
const translator = require("./translator");
const app = express();

const chapterRoute = require('./routes/chapter');
app.use('/chapter', chapterRoute);

app.get('/', async (req, res) => {
    try {
        res.send("Halo ma")
    } catch (error) {
        console.log
    }
});

const port = process.env.port || 8000;
app.listen(port, () => {
    console.log("App is listening on port", port)
});