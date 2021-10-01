
const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './Xproject.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: '4.5 ADMIN',
    CCRUN: "zeks",
    GG:"Error 101",
    CHANNEL: 'https://t.me/danumabots',
    MENU_EMOJI: process.env.EMOJI === undefined ?'🔮' : process.env.EMOJI,
    DESC_EMOJI: process.env.DEMOJI === undefined ?'🪅' : process.env.DEMOJI,
    SONG_UP_TEXT: process.env.SONGUPMSG === undefined ?'🪅' : process.env.SONGUPMSG,
    SONG_DOWN_TEXT: process.env.SONGUPMSG === undefined ?'🪅' : process.env.SONDOWNMSG,
    MENUTEXT: process.env.MENU === undefined ?'Admin' : process.env.MENU,
    CMENUTEXT: process.env.CUSTOMLIST === undefined ?'' : process.env.CUSTOMLIST,
    MENU_IMAGE: process.env.MENUIMG === undefined ?'' : process.env.MENUIMG,
    CAPTION_KEY: process.env.CP === undefined ?'    ⚜ X-Troid Pro ⚜' : process.env.CP,
    ALIVETEXT: process.env.ALIVEMSG === undefined ?'😈 Admin 😈' : process.env.ALIVEMSG,
    ALIVEIMG: process.env.ALIVEIMG === undefined ? 'https://telegra.ph/file/a143b34753c8434058e87.jpg' : process.env.ALIVEIMG,
    GIF_WEL: process.env.GIF_WEL === undefined ?'https://netfiletolink.herokuapp.com/49353' : process.env.GIF_WEL,
    GIF_BYE: process.env.GIF_BYE === undefined ?'https://webfilesdanuma.herokuapp.com/stream/14' : process.env.GIF_BYE,


    SESSION: process.env.A_XTROID_SESSION === undefined ? '' : process.env.A_XTROID_SESSION,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://telegra.ph/file/b11ff90ad6a02293fefaf.jpg' : process.env.GAN_IMAGE,
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE.toUpperCase(),

    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    AILIZA: process.env.AI_LIZA === undefined ? 'false' : process.env.AI_LIZA,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    LOCKR: process.env.LOCKR === undefined ?'https://tinyurl.com/' : process.env.LOCKR,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    LOCK: process.env.LOCK === undefined ?'****' : process.env.LOCK,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,




    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    CCN: "Ikyy69",
    DATABASE: DATABASE_URL === './Xproject.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    ON: "hunter",



    SUPPORT: "94702102324-1616997271",
    SUPPORT2:"94702102324-1619710622",
    SUPPORT3:"94702102324-1623132102",
    G1:"94758258917-1538284375",
    G2:"94758258917-1553586710",
    G3:"94758258917-1563444031",
    G4:"94758258917-1563796118",
    G5:"94758258917-1574127271",
    G6:"94758258917-1577356855",
    G7:"94702102324-1606916704",
    G8:"94702102324-1612721726",
    G9:"94702102324-1623072392",
    G10:"94702102324-1623072431",
    NWS1:"94702102324-1616483925",
    NWS2:"94702102324-1621503960",
    NWS3:"94702102324-1624633291"
};


