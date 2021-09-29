

const XTroid = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

const fs = require('fs');
const Language = require('../language');
const Lang = Language.getString('profile');

XTroid.addCMD({pattern: 'kickme', fromMe: true, desc: Lang.KICKME_DESC, onlyGroup: true}, (async (message, match) => {
    if (Config.KICKMEMSG == 'default') { 
        await message.client.sendMessage(message.jid,Lang.KICKME,MessageType.text);
        await message.client.groupLeave(message.jid);
    }
    else {
        await message.client.sendMessage(message.jid,Config.KICKMEMSG,MessageType.text);
        await message.client.groupLeave(message.jid);
    }
}));

XTroid.addCMD({pattern: 'pp', fromMe: true, desc: Lang.PP_DESC}, (async (message, match) => {    
    if (!message.reply_message || !message.reply_message.image) return await message.client.sendMessage(message.jid,Lang.NEED_PHOTO, MessageType.text);
    
    var load = await message.client.sendMessage(message.jid,Lang.PPING,MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    await message.client.updateProfilePicture(message.client.user.jid, fs.readFileSync(location));
    await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
}));

XTroid.addCMD({pattern: 'block ?(.*)', fromMe: true, desc: Lang.BLOCK_DESC}, (async (message, match) => {   
    if (Config.BLOCKMSG == 'default') {  
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + '```, ' + Lang.BLOCKED + '!```', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
            await message.client.blockUser(message.reply_message.jid, "add");
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + '```, ' + Lang.BLOCKED + '!```', MessageType.text, {
                    previewType: 0, contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });
                await message.client.blockUser(user, "add");
            });
        } else if (!message.jid.includes('-')) {
            await message.client.sendMessage(message.jid, '*' + Lang.BLOCKED_UPPER + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text);
        }
    }
    else {  
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + Config.BLOCKMSG, MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
            await message.client.blockUser(message.reply_message.jid, "add");
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + Config.BLOCKMSG, MessageType.text, {
                    previewType: 0, contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });
                await message.client.blockUser(user, "add");
            });
        } else if (!message.jid.includes('-')) {
            await message.client.sendMessage(message.jid, '*' + Lang.BLOCKED_UPPER + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text);
        }
    }
}));

XTroid.addCMD({pattern: 'unblock ?(.*)', fromMe: true, desc: Lang.UNBLOCK_DESC}, (async (message, match) => { 
    if (Config.UNBLOCKMSG == 'default') { 
   
        if (message.reply_message !== false) {
            await message.client.blockUser(message.reply_message.jid, "remove");
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + '```, ' + Lang.UNBLOCKED + '!```', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.blockUser(user, "remove");
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + '```, ' + Lang.UNBLOCKED + '!```', MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else if (!message.jid.includes('-')) {
            await message.client.blockUser(message.jid, "remove");
            await message.client.sendMessage(message.jid, '*' + Lang.UNBLOCKED_UPPER + '*', MessageType.text,);
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text,);
        }
    }
    else {
        if (message.reply_message !== false) {
            await message.client.blockUser(message.reply_message.jid, "remove");
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + Config.UNBLOCKMSG, MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.blockUser(user, "remove");
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + Config.UNBLOCKMSG, MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else if (!message.jid.includes('-')) {
            await message.client.blockUser(message.jid, "remove");
            await message.client.sendMessage(message.jid, '*' + Lang.UNBLOCKED_UPPER + '*', MessageType.text,);
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text,);
        }
    }
}));
