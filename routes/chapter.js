const express = require('express')
const router = express.Router();
const contentScaper = require("../contentScraper");
const translator = require("../translator");
const linksFile = require('../links');
const links = linksFile.links
router.get('/:chapterId', async (req, res) => {

    if (req.params.chapterId == 0 || req.params.chapterId > links.length) res.send("Invalid Chapter")
    else {
        try {
            let content = await contentScaper.scrapeContent(req.params.chapterId)
            let translatedContent = await translator.translateText(content.regexContent, "id")
            res.send(translatedContent)
        } catch (error) {
            console.log(error)
            res.send("Something's wrong, chapter may be unavailable currently.")
        }
    }
});

module.exports = router;