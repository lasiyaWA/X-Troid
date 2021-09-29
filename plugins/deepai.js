/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const XTroid = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg'); // For Creating File
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const axios = require('axios'); // lasi Checker
const Config = require('../config'); // GAN STYLE Support

const got = require("got"); // Responses Catcher
const deepai = require('deepai'); // Localde ise deepmain.js oluşturarak özelleştirilebilir şekilde kullanabilirsiniz. Web Sunucularında Çalışmaz!!
deepai.setApiKey('3098e7e8-2590-436e-89b0-939da517c1f1'); // Quickstart API Key

const Language = require('../language'); 
const Lang = Language.getString('deepai'); // Language Support

if (Config.WORKTYPE == 'private') {

    XTroid.addCMD({pattern: 'deepai', fromMe: true, deleteCommand: false, desc: Lang.DEEPAI_DESC}, (async (message, match) => {


        await message.sendMessage('💻 Usage: *.moodai <text>*\n It finds your mood from the article you wrote.\n\n💻 Usage: *.colorai*\nIt colorize bw photos.\n\n💻 Usage: *.faceai*\nGenerates human faces with artificial intelligence, that never existed before.\n\n💻 Usage: *.animai*\nGenerates anime faces with artificial intelligence, that never existed before.\n\n💻 Usage: *.superai*\nImproves the quality of photos with Neural AI.\n\n💻 Usage: *.waifuai*\nCombines the color palettes of photos with artificial intelligence.\n\n💻 Usage: *.dreamai*\nApplies deepdream effect to the photo.\n\n💻 Usage: *.neuraltalkai*\nExplain the phenomenon in the photo with artificial intelligence.\n\n💻 Usage: *.ttiai <text>*\nConverts text to a picture. (Text-to-Image)\n\n💻 Usage: *.toonai*\nTurns the face in the photo into a cartoon character.\n\n💻 Usage: *.textai <text>*\nIt creates an artificial story for you from your sentence.\n\n💻 Usage: *.nudityai*\nIt shows the NSFW value between 1 and 0 in the photo.\n\n💻 Usage: *.ganstyle*\nCombines the photo you answered with the selected picture.\n\n⚠️ 🇬🇧 *All the tools here work with deep learning. The more you use it, the more information it stores.* ```Use only english characters!```');

    }));
    XTroid.addCMD({pattern: 'faceai', fromMe: true, deleteCommand: false, dontAddCMDList: true }, (async (message, match) => {

        var webimage = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://thispersondoesnotexist.com/&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

    }));

    XTroid.addCMD({pattern: 'animai', fromMe: true, deleteCommand: false, dontAddCMDList: true }, (async (message, match) => {

        var min = 10000; 
        var max = 50000;  

        var xtroidlasi = Math.floor(Math.random() * (+max - +min) + +min); 
        var IMGWADATA = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://www.thiswaifudoesnotexist.net/example-' + xtroidlasi + '.jpg&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })

        await message.sendMessage(
            Buffer.from(IMGWADATA.data),
            MessageType.image, 
            {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY }
        )

    }));
    XTroid.addCMD({pattern: 'colorai', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Colorizing.. 🎨',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'waifuai', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Mixing.. 🧩',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("waifu2x", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'superai', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Enhancing.. 🖌️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("torch-srgan", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'moodai ?(.*)', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var lasi = await deepai.callStandardApi("sentiment-analysis", {
            text: `${match[1]}`,

        });

        await message.reply(`*Mood:* ${lasi.output}`);

    }));

    XTroid.addCMD({pattern: 'dreamai', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Starry Night.. 🌃',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("deepdream", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'neuraltalkai', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Reading.. 🙇🏻',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("neuraltalk", {
                    image: fs.createReadStream("./output.jpg"),

                });

                await message.reply(`*Output:* ${lasi.output}`);

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'ttiai ?(.*)', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var lasi = await deepai.callStandardApi("text2img", {
            text: `${match[1]}`,

        });

        var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

    }));

    XTroid.addCMD({pattern: 'toonai', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Tooning.. 🌟',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'nudityai', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Finding NSFW.. 🔥',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("content-moderation", {
                    image: fs.createReadStream("./output.jpg"),

                });

                await message.reply(`*Output:* ${lasi.output.nsfw_score}`);

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'textai ?(.*)', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var lasi = await deepai.callStandardApi("text-generator", {
            text: `${match[1]}`,

        });

        await message.reply(`*Article:*\n ${lasi.output}`);

    }));

    XTroid.addCMD({pattern: 'ganstyle', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Creating.. ♻️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("CNNMRF", {
                    style: Config.GANSTYLE,
                    content: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));
}
else if (Config.WORKTYPE == 'public') {

    XTroid.addCMD({pattern: 'deepai', fromMe: false, deleteCommand: false, desc: Lang.DEEPAI_DESC}, (async (message, match) => {

        await message.sendMessage('💻 Usage: *.moodai <text>*\nℹ️ Desc: 🇹🇷 Yazdığınız yazıdan ruh halinizi bulur.\n🇬🇧 It finds your mood from the article you wrote.\n\n💻 Usage: *.colorai*\nℹ️ Desc: 🇹🇷 Siyah beyaz fotoğrafları renklendirir.\n🇬🇧 It colorize bw photos.\n\n💻 Usage: *.faceai*\nℹ️ Desc: 🇹🇷 Yapay zeka ile daha önce hiç var olmamış insan yüzleri üretir.\n🇬🇧 Generates human faces with artificial intelligence, that never existed before.\n\n💻 Usage: *.animai*\nℹ️ Desc: Yapay zeka ile daha önce hiç var olmayan anime yüzleri üretir.\n🇬🇧 Generates anime faces with artificial intelligence, that never existed before.\n\n💻 Usage: *.superai*\nℹ️ Desc: 🇹🇷 Fotoğrafın kalitesini yapay zeka ile arttırır.\n🇬🇧 Improves the quality of photos with Neural AI.\n\n💻 Usage: *.waifuai*\nℹ️ Desc: 🇹🇷 Fotoğrafların renk paletlerini yapay zeka ile birleştirir.\n🇬🇧 Combines the color palettes of photos with artificial intelligence.\n\n💻 Usage: *.dreamai*\nℹ️ Desc: 🇹🇷 Fotoğrafa deepdream efekti uygular.\n🇬🇧 Applies deepdream effect to the photo.\n\n💻 Usage: *.neuraltalkai*\nℹ️ Desc: 🇹🇷 Fotoğrafki olan şeyi yapay zeka ile açıklar.\n🇬🇧 Explain the phenomenon in the photo with artificial intelligence.\n\n💻 Usage: *.ttiai <text>*\nℹ️ Desc: 🇹🇷 Yazıyı resme dönüştürür.\n🇬🇧 Converts text to a picture. (Text-to-Image)\n\n💻 Usage: *.toonai*\nℹ️ Desc: 🇹🇷 Fotoğraftaki yüzü çizgi film karakterine çevirir.\n🇬🇧 Turns the face in the photo into a cartoon character.\n\n💻 Usage: *.textai <text>*\nℹ️ Desc: 🇹🇷 Yazdığınız cümleden size yapay bir hikaye yaratır.\n🇬🇧 It creates an artificial story for you from your sentence.\n\n💻 Usage: *.nudityai*\nℹ️ Desc: 🇹🇷 Fotoğraftaki NSFW değerini 1 ve 0 arasında gösterir. \n🇬🇧 It shows the NSFW value between 1 and 0 in the photo.\n\n💻 Usage: *.ganstyle*\nℹ️ Desc: 🇹🇷 Yanıtladığınız fotoğrafı seçili olan resim ile birleştirir.\n🇬🇧 Combines the photo you answered with the selected picture.\n\n⚠️ 🇹🇷 *Bütün bu yapay zeka araçlarını derin öğrenme ile çalışır. Ne kadar fazla kullanırsanız o kadar fazla bilgiyi depolar.* ```Sadece ingilizce karakter kullanın!```\n\n⚠️ 🇬🇧 *All the tools here work with deep learning. The more you use it, the more information it stores.* ```Use only english characters!```');

    }));

    XTroid.addCMD({pattern: 'faceai', fromMe: false, deleteCommand: false, dontAddCMDList: true }, (async (message, match) => {

        var webimage = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://thispersondoesnotexist.com/&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

    }));

    XTroid.addCMD({pattern: 'animai', fromMe: false, deleteCommand: false, dontAddCMDList: true }, (async (message, match) => {

        var min = 10000; 
        var max = 50000;  

        var xtroidlasi = Math.floor(Math.random() * (+max - +min) + +min); 
        var IMGWADATA = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://www.thiswaifudoesnotexist.net/example-' + xtroidlasi + '.jpg&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })

        await message.sendMessage(
            Buffer.from(IMGWADATA.data),
            MessageType.image, 
            {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY }
        )

    }));
    XTroid.addCMD({pattern: 'faceai', fromMe: true, deleteCommand: false, dontAddCMDList: true }, (async (message, match) => {

        var webimage = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://thispersondoesnotexist.com/&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

    }));

    XTroid.addCMD({pattern: 'animai', fromMe: true, deleteCommand: false, dontAddCMDList: true }, (async (message, match) => {

        var min = 10000; 
        var max = 50000;  

        var xtroidlasi = Math.floor(Math.random() * (+max - +min) + +min); 
        var IMGWADATA = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://www.thiswaifudoesnotexist.net/example-' + xtroidlasi + '.jpg&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })

        await message.sendMessage(
            Buffer.from(IMGWADATA.data),
            MessageType.image, 
            {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY }
        )

    }));
    XTroid.addCMD({pattern: 'colorai', fromMe: false, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Colorizing.. 🎨',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'waifuai', fromMe: false, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Mixing.. 🧩',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("waifu2x", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'superai', fromMe: false, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Enhancing.. 🖌️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("torch-srgan", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'moodai ?(.*)', fromMe: false, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var lasi = await deepai.callStandardApi("sentiment-analysis", {
            text: `${match[1]}`,

        });

        await message.reply(`*Mood:* ${lasi.output}`);

    }));

    XTroid.addCMD({pattern: 'dreamai', fromMe: false, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Starry Night.. 🌃',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("deepdream", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'neuraltalkai', fromMe: false, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Reading.. 🙇🏻',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("neuraltalk", {
                    image: fs.createReadStream("./output.jpg"),

                });

                await message.reply(`*Output:* ${lasi.output}`);

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'ttiai ?(.*)', fromMe: false, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var lasi = await deepai.callStandardApi("text2img", {
            text: `${match[1]}`,

        });

        var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

    }));

    XTroid.addCMD({pattern: 'toonai', fromMe: false, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Tooning.. 🌟',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'nudityai', fromMe: false, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Finding NSFW.. 🔥',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("content-moderation", {
                    image: fs.createReadStream("./output.jpg"),

                });

                await message.reply(`*Output:* ${lasi.output.nsfw_score}`);

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'textai ?(.*)', fromMe: false, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var lasi = await deepai.callStandardApi("text-generator", {
            text: `${match[1]}`,

        });

        await message.reply(`*Article:*\n ${lasi.output}`);

    }));

    XTroid.addCMD({pattern: 'ganstyle', fromMe: false, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Creating.. ♻️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("CNNMRF", {
                    style: Config.GANSTYLE,
                    content: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));
    XTroid.addCMD({pattern: 'deepai', fromMe: true, deleteCommand: false, desc: Lang.DEEPAI_DESC, dontAddCMDList: true}, (async (message, match) => {


        await message.sendMessage('💻 Usage: *.moodai <text>*\nℹ️ Desc: 🇹🇷 Yazdığınız yazıdan ruh halinizi bulur.\n🇬🇧 It finds your mood from the article you wrote.\n\n💻 Usage: *.colorai*\nℹ️ Desc: 🇹🇷 Siyah beyaz fotoğrafları renklendirir.\n🇬🇧 It colorize bw photos.\n\n💻 Usage: *.faceai*\nℹ️ Desc: 🇹🇷 Yapay zeka ile daha önce hiç var olmamış insan yüzleri üretir.\n🇬🇧 Generates human faces with artificial intelligence, that never existed before.\n\n💻 Usage: *.animai*\nℹ️ Desc: Yapay zeka ile daha önce hiç var olmayan anime yüzleri üretir.\n🇬🇧 Generates anime faces with artificial intelligence, that never existed before.\n\n💻 Usage: *.superai*\nℹ️ Desc: 🇹🇷 Fotoğrafın kalitesini yapay zeka ile arttırır.\n🇬🇧 Improves the quality of photos with Neural AI.\n\n💻 Usage: *.waifuai*\nℹ️ Desc: 🇹🇷 Fotoğrafların renk paletlerini yapay zeka ile birleştirir.\n🇬🇧 Combines the color palettes of photos with artificial intelligence.\n\n💻 Usage: *.dreamai*\nℹ️ Desc: 🇹🇷 Fotoğrafa deepdream efekti uygular.\n🇬🇧 Applies deepdream effect to the photo.\n\n💻 Usage: *.neuraltalkai*\nℹ️ Desc: 🇹🇷 Fotoğrafki olan şeyi yapay zeka ile açıklar.\n🇬🇧 Explain the phenomenon in the photo with artificial intelligence.\n\n💻 Usage: *.ttiai <text>*\nℹ️ Desc: 🇹🇷 Yazıyı resme dönüştürür.\n🇬🇧 Converts text to a picture. (Text-to-Image)\n\n💻 Usage: *.toonai*\nℹ️ Desc: 🇹🇷 Fotoğraftaki yüzü çizgi film karakterine çevirir.\n🇬🇧 Turns the face in the photo into a cartoon character.\n\n💻 Usage: *.textai <text>*\nℹ️ Desc: 🇹🇷 Yazdığınız cümleden size yapay bir hikaye yaratır.\n🇬🇧 It creates an artificial story for you from your sentence.\n\n💻 Usage: *.nudityai*\nℹ️ Desc: 🇹🇷 Fotoğraftaki NSFW değerini 1 ve 0 arasında gösterir. \n🇬🇧 It shows the NSFW value between 1 and 0 in the photo.\n\n💻 Usage: *.ganstyle*\nℹ️ Desc: 🇹🇷 Yanıtladığınız fotoğrafı seçili olan resim ile birleştirir.\n🇬🇧 Combines the photo you answered with the selected picture.\n\n⚠️ 🇹🇷 *Bütün bu yapay zeka araçlarını derin öğrenme ile çalışır. Ne kadar fazla kullanırsanız o kadar fazla bilgiyi depolar.* ```Sadece ingilizce karakter kullanın!```\n\n⚠️ 🇬🇧 *All the tools here work with deep learning. The more you use it, the more information it stores.* ```Use only english characters!```');

    }));

    XTroid.addCMD({pattern: 'colorai', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Colorizing.. 🎨',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'waifuai', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Mixing.. 🧩',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("waifu2x", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'superai', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Enhancing.. 🖌️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("torch-srgan", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'moodai ?(.*)', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var lasi = await deepai.callStandardApi("sentiment-analysis", {
            text: `${match[1]}`,

        });

        await message.reply(`*Mood:* ${lasi.output}`);

    }));

    XTroid.addCMD({pattern: 'dreamai', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Starry Night.. 🌃',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("deepdream", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'neuraltalkai', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Reading.. 🙇🏻',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("neuraltalk", {
                    image: fs.createReadStream("./output.jpg"),

                });

                await message.reply(`*Output:* ${lasi.output}`);

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'ttiai ?(.*)', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var lasi = await deepai.callStandardApi("text2img", {
            text: `${match[1]}`,

        });

        var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

    }));

    XTroid.addCMD({pattern: 'toonai', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Tooning.. 🌟',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'nudityai', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Finding NSFW.. 🔥',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("content-moderation", {
                    image: fs.createReadStream("./output.jpg"),

                });

                await message.reply(`*Output:* ${lasi.output.nsfw_score}`);

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    XTroid.addCMD({pattern: 'textai ?(.*)', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var lasi = await deepai.callStandardApi("text-generator", {
            text: `${match[1]}`,

        });

        await message.reply(`*Article:*\n ${lasi.output}`);

    }));

    XTroid.addCMD({pattern: 'ganstyle', fromMe: true, deleteCommand: false, dontAddCMDList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Creating.. ♻️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var lasi = await deepai.callStandardApi("CNNMRF", {
                    style: Config.GANSTYLE,
                    content: fs.createReadStream("./output.jpg"),

                });

                var lasiimage = await axios.get(`${lasi.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));
}
