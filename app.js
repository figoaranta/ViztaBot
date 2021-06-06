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


app.listen(process.env.PORT || 8000);