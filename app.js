const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const chapterRoute = require('./routes/chapter');

app.use(bodyParser.json());
app.use(cors());
app.use('/chapter', chapterRoute);
app.get('/', async (req, res) => {
    try {
        res.send("Halo mama")
    } catch (error) {
        console.log
    }
});

mongoose
    .connect("mongodb+srv://figo:dodoandjoa@enigma.ysm8n.mongodb.net/myDB?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

app.listen(process.env.PORT || 5000);