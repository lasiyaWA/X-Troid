

const XTroid = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('weather');


if (Config.WORKTYPE == 'private') {
XTroid.addCMD({pattern: 'news ?(.*)', fromMe: true, desc: Lang.NEWS_DESC}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_CATEGORY);
	const url = `https://inshortsapi.vercel.app/news?category=${match[1]}`;
	try {
		const response = await got(url);
		const lasijson = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📁 ' + Lang.CATEGORY +':* ```' + match[1] + '```\n\n\n' +
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[0].title + '```\n' + 
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[0].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[0].readMoreUrl + '```\n\n' +
                '*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[1].title + '```\n' +                                                                         
		'*📰 ' + Lang.NEWS +':* ```' + lasijson.data[1].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[1].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[2].title + '```\n' +
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[2].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[2].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[3].title + '```\n' +
   	        '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[3].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[3].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[4].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[4].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[4].readMoreUrl + '```\n\n'+ 
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[5].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[5].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[5].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[6].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[6].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[6].readMoreUrl + '```\n\n'+									 
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[7].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[7].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[7].readMoreUrl + '```\n\n'+									 
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[8].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[8].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[8].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[9].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[9].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[9].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[10].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[10].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[10].readMoreUrl + '```\n\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDC, MessageType.text);
	}
});
}


else if (Config.WORKTYPE == 'public') {
	
	XTroid.addCMD({pattern: 'news ?(.*)', fromMe: false, desc: Lang.NEWS_DESC}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_CATEGORY);
	const url = `https://inshortsapi.vercel.app/news?category=${match[1]}`;
	try {
		const response = await got(url);
		const lasijson = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📁 ' + Lang.CATEGORY +':* ```' + match[1] + '```\n\n\n' +
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[0].title + '```\n' + 
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[0].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[0].readMoreUrl + '```\n\n' +
                '*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[1].title + '```\n' +                                                                         
		'*📰 ' + Lang.NEWS +':* ```' + lasijson.data[1].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[1].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[2].title + '```\n' +
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[2].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[2].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[3].title + '```\n' +
   	        '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[3].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[3].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[4].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[4].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[4].readMoreUrl + '```\n\n'+ 
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[5].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[5].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[5].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[6].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[6].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[6].readMoreUrl + '```\n\n'+									 
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[7].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[7].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[7].readMoreUrl + '```\n\n'+									 
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[8].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[8].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[8].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[9].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[9].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[9].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[10].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[10].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[10].readMoreUrl + '```\n\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDC, MessageType.text);
	}
});
	
	
	XTroid.addCMD({pattern: 'news ?(.*)', fromMe: true, desc: Lang.NEWS_DESC}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_CATEGORY);
	const url = `https://inshortsapi.vercel.app/news?category=${match[1]}`;
	try {
		const response = await got(url);
		const lasijson = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📁 ' + Lang.CATEGORY +':* ```' + match[1] + '```\n\n\n' +
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[0].title + '```\n' + 
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[0].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[0].readMoreUrl + '```\n\n' +
                '*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[1].title + '```\n' +                                                                         
		'*📰 ' + Lang.NEWS +':* ```' + lasijson.data[1].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[1].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[2].title + '```\n' +
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[2].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[2].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[3].title + '```\n' +
   	        '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[3].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[3].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[4].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[4].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[4].readMoreUrl + '```\n\n'+ 
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[5].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[5].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[5].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[6].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[6].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[6].readMoreUrl + '```\n\n'+									 
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[7].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[7].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[7].readMoreUrl + '```\n\n'+									 
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[8].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[8].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[8].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[9].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[9].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[9].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + lasijson.data[10].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + lasijson.data[10].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + lasijson.data[10].readMoreUrl + '```\n\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDC, MessageType.text);
	}
});
}
