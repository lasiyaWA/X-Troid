/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X


const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const sql = require('./sql/greetings');

const Language = require('../language');
const Lang = Language.getString('greetings');
dsd    #LYDIA_API_KEY = os.environ.get("LYDIA_API_KEY", None)
    #HEROKU_API_KEY = os.environ.get("HEROKU_API_KEY", None)
    #FBAN_GROUP = int(os.environ.get("FBAN_GROUP", False))
    #UPSTREAM_REPO = os.environ.get(    #API_ID = int(os.environ.get("API_ID", 1))
    #API_HASH = os.environ.get("API_HASH", None)
    #BOT_TOKEN = os.environ.get("BOT_TOKEN", None)
    #REM_BG_API_KEY = os.environ.get("REM_BG_API_KEY", None)
    #STRINGSESSION = os.environ.get("STRINGSESSION", None)
    #ASSISTANT_START_PIC = os.environ.get(
     #   "ASSISTANT_START_PIC", "https://telegra.ph//file/92c1a600394c723db90fc.jpg"
    #3)
    #STRINGSESSION_2 = os.environ.get("STRINGSESSION_2", None)
    #S#TRINGSESSION_3 = os.environ.get("STRINGSESSION_3", None)
    #STRINGSESSION_4 = os.environ.get("STRINGSESSION_4", None)
    #LOAD_UNOFFICIAL_PLUGINS = bool(strtobool(str(os.environ.get("LOAD_UNOFFICIAL_PLUGINS", False))))
    #PLUGIN_CHANNEL = os.environ.get("PLUGIN_CHANNEL", False)
    #TZ = os.environ.get("TZ", "Asia/Kolkata"f
    #MONGO_DB = os.environ.get("MONGO_DB", None)
    #LOG_GRP = int(os.environ.get("LOG_GRP", False))
    #COMMAND_HANDLER = os.environ.get("COMMAND_HANDLER", ".")
    #SUDO_USERS = set(int(x) for x in os.environ.get("SUDO_USERS", "").split())
    #AFS = list(SUDO_USERS)
    #CUSTOM_HELP_EMOJI = os.environ.get("CUSTOM_HELP_EMOJI", "✘")
    #HEROKU_APP_NAME = os.environ.get("HEROKU_APP_NAME", None)
    #LYDIA_API_KEY = os.environ.get("LYDIA_API_KEY", None)
    #HEROKU_API_KEY = os.environ.get("HEROKU_API_KEY", None)
    #FBAN_GROUP = int(os.environ.get("FBAN_GROUP", False))
Asena.addCommand({pattern: 'welcome$', fromMe: true, desc: Lang.WELCOME_DESC}, (async (message, match) => {
    var hg = await sql.getMessage(message.jid);
    if (hg === false) {
        await message.client.sendMessage(message.jid,Lang.NOT_SET_WELCOME,MessageType.text);
    } else {
        await message.client.sendMessage(message.jid,Lang.WELCOME_ALREADY_SETTED + hg.message + '```',MessageType.text);
    }
}));

Asena.addCommand({pattern: 'welcome (.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') {
        return await message.client.sendMessage(message.jid,Lang.NEED_WELCOME_TEXT);
    } else {
        if (match[1] === 'delete') { await message.client.sendMessage(message.jid,Lang.WELCOME_DELETED,MessageType.text); return await sql.deleteMessage(message.jid, 'welcome'); }
        await sql.setMessage(message.jid, 'welcome', match[1].replace(/#/g, '\n'));
        return await message.client.sendMessage(message.jid,Lang.WELCOME_SETTED,MessageType.text)
    }
}));

Asena.addCommand({pattern: 'goodbye$', fromMe: true, desc: Lang.GOODBYE_DESC}, (async (message, match) => {
    var hg = await sql.getMessage(message.jid, 'goodbye');
    if (hg === false) {
        await message.client.sendMessage(message.jid,Lang.NOT_SET_GOODBYE,MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.GOODBYE_ALREADY_SETTED + hg.message + '```',MessageType.text);
    }
}));

Asena.addCommand({pattern: 'goodbye (.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') {
        return await message.client.sendMessage(message.jid,Lang.NEED_GOODBYE_TEXT,MessageType.text);
    } else {
        if (match[1] === 'delete') { await message.client.sendMessage(message.jid,Lang.GOODBYE_DELETED,MessageType.text); return await sql.deleteMessage(message.jid, 'goodbye'); }
        await sql.setMessage(message.jid, 'goodbye', match[1].replace(/#/g, '\n'));
        return await message.client.sendMessage(message.jid,Lang.GOODBYE_SETTED,MessageType.text)
    }
}));
# Get more about devaoloper https://lasiya.ml
*/
