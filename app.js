const express = require('express')
const app = express();

const chapterRoute = require('./routes/chapter');
app.use('/chapter', chapterRoute);

app.get('/', async (req, res) => {
    try {
        res.send("Halo mama")
    } catch (error) {
        console.log
    }
});

const port = process.env.port || 8000;
app.listen(port, () => {
    console.log("App is listening on port", port)
});