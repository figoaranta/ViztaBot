const express = require('express')
const router = express.Router();
const contentScaper = require("../contentScraper");
const translator = require("../translator");
const linksFile = require('../links');
const links = linksFile.links
const Post = require('../models/Post')

router.get('/:chapterId', async (req, res) => {

    if (req.params.chapterId == 0 || req.params.chapterId > links.length) res.send("Invalid Chapter")
    else {
        try {
            const posts = await Post.find({ chapter: req.params.chapterId })
            res.send(posts[0].content)
        } catch (error) {
            console.log(error)
            res.send("Something's wrong, chapter may be unavailable currently.")
        }
    }
});


module.exports = router;