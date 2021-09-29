const XTroid = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const SIZ = "Size"
const Language = require('../language');
const Lang = Language.getString('weather');


if (Config.WORKTYPE == 'private') {
	
XTroid.addCMD({pattern: 'hpmod ?(.*)', fromMe: true, desc: Lang.HMODD_DESC, dontAddCMDList: true }, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://api.zeks.xyz/api/happymod?apikey=&q=${match[1]}&apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs`;
	try {
		const response = await got(url);
		const lasi = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*📕 ' + Lang.NAMEY +'* ```' + lasi.result[0].title + '```\n' + 
		'*📘 ' + 'Size' +'* ```' + lasi.result[0].size + '```\n' + 
		'*📗 ' + Lang.DOWNLOAD +':* ```' + lasi.result[0].link + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
}
else if (Config.WORKTYPE == 'public') {
	
XTroid.addCMD({pattern: 'hpmod ?(.*)', fromMe: false, desc: Lang.HMODD_DESC, dontAddCMDList: true }, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://api.zeks.xyz/api/happymod?apikey=&q=${match[1]}&apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs`;
	try {
		const response = await got(url);
		const lasi = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*📕 ' + Lang.NAMEY +'* ```' + lasi.result[0].title + '```\n' + 
		'*📘 ' + 'Size' +'* ```' + lasi.result[0].size + '```\n' + 
		'*📗 ' + Lang.DOWNLOAD +':* ```' + lasi.result[0].link + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});

XTroid.addCMD({pattern: 'hpmod ?(.*)', fromMe: true, desc: Lang.HMODD_DESC, dontAddCMDList: true }, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://api.zeks.xyz/api/happymod?apikey=&q=${match[1]}&apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs`;
	try {
		const response = await got(url);
		const lasi = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*📕 ' + Lang.NAMEY +'* ```' + lasi.result[0].title + '```\n' + 
		'*📘 ' + 'Size' +'* ```' + lasi.result[0].size + '```\n' + 
		'*📗 ' + Lang.DOWNLOAD +':* ```' + lasi.result[0].link + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});


}
