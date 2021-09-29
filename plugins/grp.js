const XTroid = require('../events');
const Config = require('../config');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('_xtroid');
const axios = require('axios');
const Menu1 = `
「 *🍁Link pannel🍁* 」


❍ *YouTube*
     y2u.be/mDnJ7q3S3eY

❍ *Web site*
     xtroid.ml  

❍ *Blog* 
     tinyurl.com/Bloglink12

❍ *Book Web*
     cutt.ly/9Qot6w2

❍ *Telegaram*
    ╚⦁⦁⦁ Main Group     ╗
       t.me/danuma01

    ╚⦁⦁⦁ A/L Channel    ╗
       t.me/alxams
  
    ╚⦁⦁⦁ O/L Channel    ╗
       t.me/olxams

    ╚⦁⦁⦁ Bot Channel    ╗
       t.me/danumabots

    ╚⦁⦁⦁ Mod Apps        ╗
       t.me/danuma

    ╚⦁⦁⦁ Film Channel   ╗
       t.me/films_SL_x

    ╚⦁⦁⦁ Play Games     ╗
       t.me/SLPlaygames

    ╚⦁⦁⦁ NXT binners    ╗
       t.me/nxtbinners

    ╚⦁⦁⦁ Cartoon World ╗
       t.me/SL_Toons
`

const Menu2 = `
「 *🍁X-Troid Menu🍁* 」


➤ *N.G 01*🚀
chat.whatsapp.com/Jm6pa5tkyz5HwqoMtWLS8z

➤ *N.G 02*🚀
chat.whatsapp.com/Gu8CaPSCKqCG1EYiladH92

➤ *N.G 03*🚀
chat.whatsapp.com/Lc3EUv1Bb0rLq3bRTbJBHu

➤ *N.G 04*🚀
chat.whatsapp.com/HZYNN499UrcLQVz8fGyYUg

➤ *N.G 05*🚀
chat.whatsapp.com/Lv9LGDw5zHZ8T3jg9gLynF

➤ *N.G 06*🚀
chat.whatsapp.com/I8LuuciTGsDIKB7GTchDt6

➤ *N.G 07*🚀
chat.whatsapp.com/H5mj9Y09y2f0DCeW2YtJTo

_Please join only one group_
`
const Menu3 =`
⧏ 𝒍𝒂𝒔𝒊𝒚𝒂 / ⧐, [03.09.21 12:22]
「 *🪀WhatsApp Menu🪀* 」


•━━━»» *W.G 01*««━━━•
chat.whatsapp.com/JVEdzU42Qmw3KsOkBApTOM

•━━━»» *W.G 02*««━━━•
chat.whatsapp.com/K5niEonkgRiGqnkAxmdlVZ

•━━━»» *W.G 03*««━━━•
chat.whatsapp.com/DjG7hi3kL7mCzP9UwRe38m

•━━━»» *W.G 04*««━━━•
chat.whatsapp.com/DJzGuFUOXZOFRlG6APWR6a

•━━━»» *W.G 05*««━━━•
chat.whatsapp.com/FaPZBiAK37Y2my4RenHm5K

•━━━»» *W.G 06*««━━━•
chat.whatsapp.com/GsqFiZpJhC61zOIwmyrTD0

•━━━»» *W.G 07*««━━━•
chat.whatsapp.com/Fa0huMO87L77YzpHGYer6r

•━━━»» *W.G 08*««━━━•
chat.whatsapp.com/EQxMNwd8VNPEroqLn2sV6O

•━━━»» *W.G 09*««━━━•
chat.whatsapp.com/LSFUlNMigLu4FLYOXXfLBY

•━━━»» *W.G 010*««━━━•
chat.whatsapp.com/IfxHVuTiYqn7cmv7QjtNzE
`


if (Config.WORKTYPE == 'private') {

        XTroid.addCMD({pattern: 'grp', fromMe: true,desc:'Get group link list', deleteCommand: false,}, (async (message, match) => {
var lasiimg = await axios.get(`https://netfiletolink.herokuapp.com/30084`, { responseType: 'arraybuffer' })
var lasiimg2 = await axios.get(`https://telegra.ph/file/145ee2d4fb11363f72582.jpg`, { responseType: 'arraybuffer' })
var lasiimg3 = await axios.get(`https://telegra.ph/file/84800023135d94543132c.jpg`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid, Buffer.from(lasiimg.data), MessageType.video, {mimetype: Mimetype.gif, caption: Menu1})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg2.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu2})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg3.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu3})
    
      }));
}

if (Config.WORKTYPE == 'public') {
    XTroid.addCMD({pattern: 'grp', fromMe: false, desc:'Get group link list',deleteCommand: false,}, (async (message, match) => {
var lasiimg = await axios.get(`https://netfiletolink.herokuapp.com/30084`, { responseType: 'arraybuffer' })
var lasiimg2 = await axios.get(`https://telegra.ph/file/145ee2d4fb11363f72582.jpg`, { responseType: 'arraybuffer' })
var lasiimg3 = await axios.get(`https://telegra.ph/file/84800023135d94543132c.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(lasiimg.data), MessageType.video, {mimetype: Mimetype.gif, caption: Menu1})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg2.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu2})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg3.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu3})
    }));
        
    XTroid.addCMD({pattern: 'grp', fromMe: true, desc:'Get group link list',deleteCommand: false,}, (async (message, match) => {
var lasiimg = await axios.get(`https://netfiletolink.herokuapp.com/30084`, { responseType: 'arraybuffer' })
var lasiimg2 = await axios.get(`https://telegra.ph/file/145ee2d4fb11363f72582.jpg`, { responseType: 'arraybuffer' })
var lasiimg3 = await axios.get(`https://telegra.ph/file/84800023135d94543132c.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(lasiimg.data), MessageType.video, {mimetype: Mimetype.gif, caption: Menu1})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg2.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu2})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg3.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu3})
    }));
}
