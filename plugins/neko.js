

const XTroid = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('nekobin');

if (Config.WORKTYPE == 'private') {

    XTroid.addCMD({pattern: 'neko', fromMe: true, desc: Lang.NEKO_DESC}, (async (message, match) => {

        if (!message.reply_message) return await message.sendMessage(Lang.NEED_REPLY);
        if (!message.reply_message.text) return await message.sendMessage(Lang.MUST_TEXT);
        let base_URI = "https://nekobin.com/api/documents";
        try {
            const response = await got.post(base_URI, {lasijson : {content : message.reply_message.text}}); 
            lasijson = JSON.parse(response.body);
            neko_url = 'https://nekobin.com/' + lasijson.result.key;
            await message.reply(neko_url);        
        } catch (err) {
            await message.reply(err.message, MessageType.text);
            console.log(err.message);
        }
       
    }));
}
else if (Config.WORKTYPE == 'public') {

    XTroid.addCMD({pattern: 'neko', fromMe: false, desc: Lang.NEKO_DESC}, (async (message, match) => {

        if (!message.reply_message) return await message.sendMessage(Lang.NEED_REPLY);
        if (!message.reply_message.text) return await message.sendMessage(Lang.MUST_TEXT);
        let base_URI = "https://nekobin.com/api/documents";
        try {
            const response = await got.post(base_URI, {lasijson : {content : message.reply_message.text}}); 
            lasijson = JSON.parse(response.body);
            neko_url = 'https://nekobin.com/' + lasijson.result.key;
            await message.reply(neko_url);        
        } catch (err) {
            await message.reply(err.message, MessageType.text);
            console.log(err.message);
        }
       
    }));
    XTroid.addCMD({pattern: 'neko', fromMe: true, desc: Lang.NEKO_DESC, dontAddCMDList: true}, (async (message, match) => {

        if (!message.reply_message) return await message.sendMessage(Lang.NEED_REPLY);
        if (!message.reply_message.text) return await message.sendMessage(Lang.MUST_TEXT);
        let base_URI = "https://nekobin.com/api/documents";
        try {
            const response = await got.post(base_URI, {lasijson : {content : message.reply_message.text}}); 
            lasijson = JSON.parse(response.body);
            neko_url = 'https://nekobin.com/' + lasijson.result.key;
            await message.reply(neko_url);        
        } catch (err) {
            await message.reply(err.message, MessageType.text);
            console.log(err.message);
        }
       
    }));
}
