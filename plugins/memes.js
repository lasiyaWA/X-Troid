/* 
*/

const XTroid = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const memeMaker = require('meme-maker')
const axios = require('axios');
const fs = require('fs')
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('memes');
const ll ="*Need some Word*"
const Ln = "Make memes your own\nඔබගේම මිම් සාදාගැනීමට "
const PRN =  "Please replyto photo\nකරුණාකර පින්තුරයකට් රිප්ලයි කරන්න\nEg: ```.meme text1,text2```"
const code = "╔════════════════════╗\n║   😹 *Meme World* 😹\n║\n║\n╠═══ *🎭commands🎭*\n║\n╠══ *.bocca* text\n╠══ *.mymeme* text\n╠══ *.santha* text\n╠══ *.chaina* text\n╠══ *.bomu* text\n╠══ *.saduni* text\n╠══ *.tharindu* text\n╠══ *.mme* text1,text2\n║\n╚════════════════════╝"

if (Config.WORKTYPE == 'private') {
	
	
	      XTroid.addCMD({pattern: 'mpack', fromMe: true, desc: Ln,}, (async (message, match) => {

   		 await message.client.sendMessage(
  
    			  message.jid,code, MessageType.text);
  
  }));

    XTroid.addCMD({pattern: 'mme ?(.*)', fromMe: true,dontAddCMDList: true}, (async (message, match) => {   

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,PRN, MessageType.text);
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1];
            bottomText = split[0];
        }
	    else {
            topText = match[1];
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'x.png',
            topText: topText,
            bottomText: bottomText,
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('x.png'), MessageType.image, {filename: 'x.png', mimetype: Mimetype.png, caption: Config.CAPTION_KEY});
            await info.delete();    
        });
    }));
	
	XTroid.addCMD({ pattern: 'bocca ?(.*)', fromMe: true, dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=Bocca&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4f8ec319795a05f7d0cf5.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

    }));
  
     XTroid.addCMD({ pattern: 'mymeme ?(.*)', fromMe: true,dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=Bocca&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4f8ec319795a05f7d0cf5.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
       XTroid.addCMD({ pattern: 'santha ?(.*)', fromMe: true,dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/32880d3d04d269923eca7.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
  
      XTroid.addCMD({ pattern: 'chaina ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/e91e8daa9a99a234ccca8.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
  
        XTroid.addCMD({ pattern: 'bomu ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/5f8e5f3a06abc0a95aef1.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
  
  XTroid.addCMD({ pattern: 'saduni ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(ll);

  var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/7e77a02d9a702eec32bd4.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));
  
  XTroid.addCMD({ pattern: 'tharindu ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(ll);

  var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/05a04ecbc5c1d0603d6e6.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));
}

//=========================================================================================================================================================================================================================================================================================


else if (Config.WORKTYPE == 'public') {

    XTroid.addCMD({pattern: 'mpack', fromMe: false, desc: Ln,}, (async (message, match) => {

        await message.client.sendMessage(
      
          message.jid,code, MessageType.text);
      
      }));

      XTroid.addCMD({ pattern: 'bocca ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=Bocca&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4f8ec319795a05f7d0cf5.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
  
       XTroid.addCMD({ pattern: 'mymeme ?(.*)', fromMe: false , dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=Bocca&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4f8ec319795a05f7d0cf5.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
       XTroid.addCMD({ pattern: 'santha ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/32880d3d04d269923eca7.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
  
        XTroid.addCMD({ pattern: 'chaina ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/e91e8daa9a99a234ccca8.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
  
          XTroid.addCMD({ pattern: 'bomu ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/5f8e5f3a06abc0a95aef1.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
  
  XTroid.addCMD({ pattern: 'saduni ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(ll);

  var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/7e77a02d9a702eec32bd4.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));
  
  XTroid.addCMD({ pattern: 'tharindu ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(ll);

  var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/05a04ecbc5c1d0603d6e6.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));

XTroid.addCMD({pattern: 'mme ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {    

    if (message.reply_message === false) return await message.client.sendMessage(message.jid,PRN, MessageType.text);
    var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    }
    else {
        topText = match[1];
        bottomText = '';
    }

    var info = await message.reply(Lang.DOWNLOADING);

    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    }); 

    memeMaker({
        image: location,         
        outfile: 'x.png',
        topText: topText,
        bottomText: bottomText,
    }, async function(err) {
        if(err) throw new Error(err)
        await message.client.sendMessage(message.jid, fs.readFileSync('x.png'), MessageType.image, {filename: 'x.png', mimetype: Mimetype.png, caption: Config.CAPTION_KEY});
        await info.delete();    
    });
}));








XTroid.addCMD({pattern: 'mpack', fromMe: true, dontAddCMDList: true }, (async (message, match) => {

    await message.client.sendMessage(

          message.jid,code, MessageType.text);

}));

XTroid.addCMD({pattern: 'mme ?(.*)', fromMe: true,dontAddCMDList: true}, (async (message, match) => {   

if (message.reply_message === false) return await message.client.sendMessage(message.jid,PRN, MessageType.text);
var topText, bottomText;
if (match[1].includes(';')) {
    var split = match[1].split(';');
    topText = split[1];
    bottomText = split[0];
}
else {
    topText = match[1];
    bottomText = '';
}

var info = await message.reply(Lang.DOWNLOADING);

var location = await message.client.downloadAndSaveMediaMessage({
    key: {
        remoteJid: message.reply_message.jid,
        id: message.reply_message.id
    },
    message: message.reply_message.data.quotedMessage
}); 

memeMaker({
    image: location,         
    outfile: 'x.png',
    topText: topText,
    bottomText: bottomText,
}, async function(err) {
    if(err) throw new Error(err)
    await message.client.sendMessage(message.jid, fs.readFileSync('x.png'), MessageType.image, {filename: 'x.png', mimetype: Mimetype.png, caption: Config.CAPTION_KEY});
    await info.delete();    
});
}));

XTroid.addCMD({ pattern: 'bocca ?(.*)', fromMe: true, dontAddCMDList: true }, (async (message, match) => {

if (match[1] === '') return await message.sendMessage(ll);

var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=Bocca&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4f8ec319795a05f7d0cf5.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

}));

XTroid.addCMD({ pattern: 'mymeme ?(.*)', fromMe: true,dontAddCMDList: true}, (async (message, match) => {

if (match[1] === '') return await message.sendMessage(ll);

var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=Bocca&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4f8ec319795a05f7d0cf5.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));
XTroid.addCMD({ pattern: 'santha ?(.*)', fromMe: true,dontAddCMDList: true}, (async (message, match) => {

if (match[1] === '') return await message.sendMessage(ll);

var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/32880d3d04d269923eca7.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));

XTroid.addCMD({ pattern: 'chaina ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

if (match[1] === '') return await message.sendMessage(ll);

var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/e91e8daa9a99a234ccca8.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));

XTroid.addCMD({ pattern: 'bomu ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

if (match[1] === '') return await message.sendMessage(ll);

var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/5f8e5f3a06abc0a95aef1.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));

XTroid.addCMD({ pattern: 'saduni ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

if (match[1] === '') return await message.sendMessage(ll);

var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/7e77a02d9a702eec32bd4.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));

XTroid.addCMD({ pattern: 'tharindu ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

if (match[1] === '') return await message.sendMessage(ll);

var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/05a04ecbc5c1d0603d6e6.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));

    }
