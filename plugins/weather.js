


const XTroid = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');


const Language = require('../language');
const Lang = Language.getString('weather');

if (Config.WORKTYPE == 'private') {

    XTroid.addCMD({pattern: 'weather ?(.*)', desc: Lang.WEATHER_DESC, fromMe: true}, async (message, match) => {

	    if (match[1] === '') return await message.reply(Lang.NEED_LOCATION);
	    const url = `http://api.openweathermap.org/data/2.5/weather?q=${match[1]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=tr`;
	    try {
		    const response = await got(url);
		    const lasijson = JSON.parse(response.body);
		    if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📍 ' + Lang.LOCATION +':* ```' + match[1] + '```\n\n' +
		    '*☀ ' + Lang.TEMP +':* ```' + lasijson.main.temp_max + '°```\n' + 
		    '*ℹ ' + Lang.DESC  +':* ```' + lasijson.weather[0].description + '```\n' +
		    '*☀ ' + Lang.HUMI +':* ```%' + lasijson.main.humidity + '```\n' + 
		    '*💨 ' + Lang.WIND +':* ```' + lasijson.wind.speed + 'm/s```\n' + 
		    '*☁ ' + Lang.CLOUD +':* ```%' + lasijson.clouds.all + '```\n', MessageType.text);
	    } catch {
		    return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text);
	    }
    });
}	
if (Config.WORKTYPE == 'public') {

    XTroid.addCMD({pattern: 'weather ?(.*)', desc: Lang.WEATHER_DESC, fromMe: false}, async (message, match) => {

	    if (match[1] === '') return await message.reply(Lang.NEED_LOCATION);
	    const url = `http://api.openweathermap.org/data/2.5/weather?q=${match[1]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=tr`;
	    try {
		    const response = await got(url);
		    const lasijson = JSON.parse(response.body);
		    if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📍 ' + Lang.LOCATION +':* ```' + match[1] + '```\n\n' +
		    '*☀ ' + Lang.TEMP +':* ```' + lasijson.main.temp_max + '°```\n' + 
		    '*ℹ ' + Lang.DESC +':* ```' + lasijson.weather[0].description + '```\n' +
		    '*☀ ' + Lang.HUMI +':* ```%' + lasijson.main.humidity + '```\n' + 
		    '*💨 ' + Lang.WIND +':* ```' + lasijson.wind.speed + 'm/s```\n' + 
		    '*☁ ' + Lang.CLOUD +':* ```%' + lasijson.clouds.all + '```\n', MessageType.text);
	    } catch {
		    return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text);
	    }
    });
    XTroid.addCMD({pattern: 'weather ?(.*)', desc: Lang.WEATHER_DESC, fromMe: false, dontAddCMDList: true}, async (message, match) => {

	    if (match[1] === '') return await message.reply(Lang.NEED_LOCATION);
	    const url = `http://api.openweathermap.org/data/2.5/weather?q=${match[1]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=tr`;
	    try {
		    const response = await got(url);
		    const lasijson = JSON.parse(response.body);
		    if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📍 ' + Lang.LOCATION +':* ```' + match[1] + '```\n\n' +
		    '*☀ ' + Lang.TEMP +':* ```' + lasijson.main.temp_max + '°```\n' + 
		    '*ℹ ' + Lang.DESC +':* ```' + lasijson.weather[0].description + '```\n' +
		    '*☀ ' + Lang.HUMI +':* ```%' + lasijson.main.humidity + '```\n' + 
		    '*💨 ' + Lang.WIND +':* ```' + lasijson.wind.speed + 'm/s```\n' + 
		    '*☁ ' + Lang.CLOUD +':* ```%' + lasijson.clouds.all + '```\n', MessageType.text);
	    } catch {
		    return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text);
	    }
    });

}
