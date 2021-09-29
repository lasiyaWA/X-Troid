/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved Â©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const XTroid = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');
const Desk = "Temp logo pack\nතාවකාලික පින්තුර සාදනය\n\n╭┅🌸 *.tmug*\n╭┅🌸 *.tlove*\n╭┅🌸 *.tnaru*\n╭┅🌸 *.tgrass*\n╭┅🌸 *.tsky*\n╭┅🌸 *.tcof*\n╭┅🌸 *.tneon*\n╭┅🌸 *.tpubg*\n╭┅🌸 *.tbit*\n```.tbit text1,text2```\n╭┅🌸 *.tbt*\n```.tbt text1,text2```\n"


const os = require('os');
var clh = { cd: 'L3Jvb3QvWC1Ucm9pZC8=', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
if (os.userInfo().homedir !== clh.pay) return;

if (Config.WORKTYPE == 'private') {


    XTroid.addCMD({ pattern: 'tpack ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {
        await message.sendMessage(Desk);
        
    }));





    XTroid.addCMD({ pattern: 'tmug ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    XTroid.addCMD({ pattern: 'tlove ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    XTroid.addCMD({ pattern: 'tnaru ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/narutobanner/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    XTroid.addCMD({ pattern: 'tgrass ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    XTroid.addCMD({ pattern: 'tsky ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    XTroid.addCMD({ pattern: 'tcof ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/coffeecup/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    XTroid.addCMD({ pattern: 'tneon ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/glowingneon/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    XTroid.addCMD({ pattern: 'tpubg ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/pubgmlogo/?text1=${encodeURIComponent(match[1])}&text2=X-Troid`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));


    XTroid.addCMD({pattern: 'tbit ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
      var topText, bottomText;
        if (match[1].includes(',')) {
            var split = match[1].split(',');
            bottomText = split[1];
            topText = split[0];
    }
    
        var webimage = await axios.get(`https://videfikri.com/api/textmaker/8bit/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
        }));

        XTroid.addCMD({pattern: 'tbt ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

            if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
          
          var topText, bottomText;
            if (match[1].includes(',')) {
                var split = match[1].split(',');
                bottomText = split[1];
                topText = split[0];
        }
        
            var webimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
        
            await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
        
            }));




}


if (Config.WORKTYPE == 'public') {


    XTroid.addCMD({ pattern: 'tpack ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
        await message.sendMessage(Desk);
        
    }));

    XTroid.addCMD({ pattern: 'tmug ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    XTroid.addCMD({ pattern: 'tlove ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    XTroid.addCMD({ pattern: 'tnaru ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/narutobanner/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    XTroid.addCMD({ pattern: 'tgrass ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    XTroid.addCMD({ pattern: 'tsky ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    XTroid.addCMD({ pattern: 'tcof ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/coffeecup/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    XTroid.addCMD({ pattern: 'tneon ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/glowingneon/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    XTroid.addCMD({ pattern: 'tneon ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/pubgmlogo/?text1=${encodeURIComponent(match[1])}&text2=X-Troid`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    
    XTroid.addCMD({pattern: 'tbit ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
      var topText, bottomText;
        if (match[1].includes(',')) {
            var split = match[1].split(',');
            bottomText = split[1];
            topText = split[0];
    }
    
        var webimage = await axios.get(`https://videfikri.com/api/textmaker/8bit/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
        }));
    
        XTroid.addCMD({pattern: 'tbt ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
    
            if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
          
          var topText, bottomText;
            if (match[1].includes(',')) {
                var split = match[1].split(',');
                bottomText = split[1];
                topText = split[0];
        }
        
            var webimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
        
            await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
        
            }));
        }    