const { Translate } = require('@google-cloud/translate').v2;
require('dotenv').config();

// Your credentials
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// Configuration for the client
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

const detectLanguage = async (text) => {

    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error) {
        console.log(`Error at detectLanguage --> ${error}`);
        return 0;
    }
}

const translateText = async (text, targetLanguage) => {

    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};

// translateText("Shengluo continent 920016 AD Zishi Haoyuan Empire capital city The wind roared the sky clattered and the rain poured down like a waterfall Boom In the dark night sky bright lightning danced wildly and the lightning like silver snake tore the dark night sky and cut it down fiercely Yunfu adsbygoogle  windowadsbygoogle  pushOn a tree in the backyard there is a thin and slender girl hanging Her whole body is wet with rain and her long hair is wet on her face It looks distressing Boom A very strange lightning showing a strange blood red abruptly towards the tree down the position is just hanging girl Immediately the rope hanging from her broke and the girl fell heavily on the ground The bright electric current was flashing all over her body and her long hair was scorched yellow sending out a faint smell like being roasted adsbygoogle  windowadsbygoogle  pushNo miss three is hit by thunder miss three is hit by thunder The servants voice sounded sharply in the night but because of the rain it didnt spread to the whole cloud house Dog slave whats the noise Do you let people sleep in the middle of the night  A young girls chivalrous voice rang out in the room and the servant was immediately frightened into silence Wait that bitch was struck by thunder Ha ha Ill go out and have a look right away  Soon the girls pretty voice rang again followed by a sound of knowing how to dress Didnt he say he was killed by thunder How can you still be alive Its really hard for you to live Youre really cheap and cant stand tossing  There was a girls clear and vicious voice in her ear Feng Yu frowned bitterly It hurt Her whole body seemed to have been struck by thunder and lightning and she felt as if she had been cut to pieces Even her hair hurt Open eyes one eye to see the dim line of sight a girl with a vicious face squatting in front of her see her open eyes mercilessly toward her face a few slaps Pa pa pa Very hard a few slaps down directly hit the Feng feather to muddle the small face immediately swollen up the corner of the mouth has the bloodstain to flow out Bitch if you dont chop you to death if you die like this who will miss Ben toss about in the future The girl was about fourteen or fifteen years old Her round face was small and delicate She was very beautiful but her eyebrows were all rude and vicious She suddenly put out her hand to cover Fengyus mouth raised her hand to pull out the silver hairpin from her bun and stabbed Fengyu fiercely on her arm and body She didnt know that Fengyu had a blood feud with her which would make her stab so cruel and ferocious Feng Yus whole body was convulsed with pain and the big sweat came out from her forehead She was pale and wanted to struggle but her body seemed to have no strength and she could only let the girl torture her She wanted to shout but her mouth was covered tightly and she couldnt make a sound Can only bear the pain The girl stabbed her like a hundred times At last she seemed to be tired Then she stopped She narrowed her eyes and fell on Fengyus thin waxy face with a vicious smile on her lips Wave the silver hairpin in the hand mercilessly toward Feng Yus face to delimit Poof The weak voice rang softly and the bright red blood immediately seeped out from Fengyus face just like the demon flower in the dark Fengyus eyes were black and her consciousness fell into a coma again", 'id').then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

module.exports = { translateText };
