const contentScaper = require("./contentScraper");
const translator = require("./translator");
const linksFile = require('./links');
const links = linksFile.links
const Post = require('./models/Post')

async function contentFeeder() {

    for (let i = 1001; i <= 1066; i++) {
        try {
            let content = await contentScaper.scrapeContent(i)
            let translatedContent = await translator.translateText(content.regexContent, "id")
            const post = new Post({
                chapter: i,
                content: translatedContent
            })
            await post.save();
            console.log(`Chapter ${i} has been added to the database`);
        } catch (error) {
            console.log(`An error occurred when trying to add Chapter ${i}`)
        }
    }

}
module.exports = { contentFeeder };

