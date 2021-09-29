const XTroid = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const axios = require('axios');
const fs = require('fs')
//

if (Config.WORKTYPE == 'private') {
XTroid.addCMD({ pattern: 'movie ?(.*)', fromMe: true, desc: "Shows movie info." }, (async (message, match) => {
	if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
	let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
	const response = await got(url);
	const lasijson = JSON.parse(response.body);
	if (lasijson.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
	let msg = '';
	msg += '*🎞Title*\n' + '```' + lasijson.Title + '```' + '\n\n';
	msg += '*🏷Year*\n' + '```' + lasijson.Year + '```' + '\n\n';
	msg += '*⭐️Rated*\n' + '```' + lasijson.Rated + '```' + '\n\n';
	msg += '*🎁Released*\n' + '```' + lasijson.Released + '```' + '\n\n';
	msg += '*🕐Runtime*\n' + '```' + lasijson.Runtime + '```' + '\n\n';
	msg += '*🎈Genre*\n' + '```' + lasijson.Genre + '```' + '\n\n';
	msg += '*📽Director*\n' + '```' + lasijson.Director + '```' + '\n\n';
	msg += '*📃Writer*\n' + '```' + lasijson.Writer + '```' + '\n\n';
	msg += '*🦸🏻‍♂️Actors*\n' + '```' + lasijson.Actors + '```' + '\n\n';
	msg += '*👀Plot*\n' + '```' + lasijson.Plot + '```' + '\n\n';
	msg += '*💬Language*\n' + '```' + lasijson.Language + '```' + '\n\n';
	msg += '*🏳️‍🌈Country*\n' + '```' + lasijson.Country + '```' + '\n\n';
	msg += '*🏆Awards*\n' + '```' + lasijson.Awards + '```' + '\n\n';
	msg += '*💵BoxOffice*\n' + '```' + lasijson.BoxOffice + '```' + '\n\n';
	msg += '*🎬Production*\n' + '```' + lasijson.Production + '```' + '\n\n';
	msg += '*🧚🏻‍♀️imdbRating*\n' + '```' + lasijson.imdbRating + '```' + '\n\n';
	msg += '*👌🏻imdbVotes*\n' + '```' + lasijson.imdbVotes + '```' + '\n';

	var lasiimage = await axios.get(`https://telegra.ph/file/ea34e463b6d09d967c063.jpg`, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.png, caption: msg });
}));
}

else if (Config.WORKTYPE == 'public') {
	
XTroid.addCMD({ pattern: 'movie ?(.*)', fromMe: false, desc: "Shows movie info." }, (async (message, match) => {
	if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
	let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
	const response = await got(url);
	const lasijson = JSON.parse(response.body);
	if (lasijson.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
	let msg = '';
	msg += '*🎞Title*\n' + '```' + lasijson.Title + '```' + '\n\n';
	msg += '*🏷Year*\n' + '```' + lasijson.Year + '```' + '\n\n';
	msg += '*⭐️Rated*\n' + '```' + lasijson.Rated + '```' + '\n\n';
	msg += '*🎁Released*\n' + '```' + lasijson.Released + '```' + '\n\n';
	msg += '*🕐Runtime*\n' + '```' + lasijson.Runtime + '```' + '\n\n';
	msg += '*🎈Genre*\n' + '```' + lasijson.Genre + '```' + '\n\n';
	msg += '*📽Director*\n' + '```' + lasijson.Director + '```' + '\n\n';
	msg += '*📃Writer*\n' + '```' + lasijson.Writer + '```' + '\n\n';
	msg += '*🦸🏻‍♂️Actors*\n' + '```' + lasijson.Actors + '```' + '\n\n';
	msg += '*👀Plot*\n' + '```' + lasijson.Plot + '```' + '\n\n';
	msg += '*💬Language*\n' + '```' + lasijson.Language + '```' + '\n\n';
	msg += '*🏳️‍🌈Country*\n' + '```' + lasijson.Country + '```' + '\n\n';
	msg += '*🏆Awards*\n' + '```' + lasijson.Awards + '```' + '\n\n';
	msg += '*💵BoxOffice*\n' + '```' + lasijson.BoxOffice + '```' + '\n\n';
	msg += '*🎬Production*\n' + '```' + lasijson.Production + '```' + '\n\n';
	msg += '*🧚🏻‍♀️imdbRating*\n' + '```' + lasijson.imdbRating + '```' + '\n\n';
	msg += '*👌🏻imdbVotes*\n' + '```' + lasijson.imdbVotes + '```' + '\n';

	var lasiimage = await axios.get(`https://telegra.ph/file/ea34e463b6d09d967c063.jpg`, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.png, caption: msg });
}));




XTroid.addCMD({ pattern: 'movie ?(.*)', fromMe: true, dontAddCMDList: true }, (async (message, match) => {
	if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
	let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
	const response = await got(url);
	const lasijson = JSON.parse(response.body);
	if (lasijson.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
	let msg = '';
	msg += '*🎞Title*\n' + '```' + lasijson.Title + '```' + '\n\n';
	msg += '*🏷Year*\n' + '```' + lasijson.Year + '```' + '\n\n';
	msg += '*⭐️Rated*\n' + '```' + lasijson.Rated + '```' + '\n\n';
	msg += '*🎁Released*\n' + '```' + lasijson.Released + '```' + '\n\n';
	msg += '*🕐Runtime*\n' + '```' + lasijson.Runtime + '```' + '\n\n';
	msg += '*🎈Genre*\n' + '```' + lasijson.Genre + '```' + '\n\n';
	msg += '*📽Director*\n' + '```' + lasijson.Director + '```' + '\n\n';
	msg += '*📃Writer*\n' + '```' + lasijson.Writer + '```' + '\n\n';
	msg += '*🦸🏻‍♂️Actors*\n' + '```' + lasijson.Actors + '```' + '\n\n';
	msg += '*👀Plot*\n' + '```' + lasijson.Plot + '```' + '\n\n';
	msg += '*💬Language*\n' + '```' + lasijson.Language + '```' + '\n\n';
	msg += '*🏳️‍🌈Country*\n' + '```' + lasijson.Country + '```' + '\n\n';
	msg += '*🏆Awards*\n' + '```' + lasijson.Awards + '```' + '\n\n';
	msg += '*💵BoxOffice*\n' + '```' + lasijson.BoxOffice + '```' + '\n\n';
	msg += '*🎬Production*\n' + '```' + lasijson.Production + '```' + '\n\n';
	msg += '*🧚🏻‍♀️imdbRating*\n' + '```' + lasijson.imdbRating + '```' + '\n\n';
	msg += '*👌🏻imdbVotes*\n' + '```' + lasijson.imdbVotes + '```' + '\n';

	var lasiimage = await axios.get(`https://telegra.ph/file/ea34e463b6d09d967c063.jpg`, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.png, caption: msg });
}));
}
