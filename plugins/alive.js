const XTroid = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
let FM = Config.WORKTYPE == 'public' ? false : true

XTroid.addCMD({pattern: 'alive', fromMe: FM, deleteCommand: true,}, (async (message, match) => {

var lasi = await axios.get(`${Config.ALIVEIMG}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(lasi.data), MessageType.image, {mimetype: Mimetype.png, caption: '            '+Config.ALIVETEXT+'\n          ᴾᵒʷᵉʳᵈ ᵇʸ ˣ⁻ᵀʳᵒᶦᵈ'})
    }));