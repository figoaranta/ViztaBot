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

app.listen(process.env.PORT || 5000);