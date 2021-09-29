
const XTroid = require('../events');
const Axios = require('axios');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('system_stats');
const LP = Language.getString('profile');
const LW = Language.getString('whois'); 
const I_PACK ="⊱⊱————-　⚜　————-⊰⊰\n        Infomation Pack\n\n┏━━━━━Cmd━━━━━━\n┃\n┣ *.sysd*\n┃⊷️「sys info」\n┃\n┣ *.info*\n┃⊷️「basic info」\n┃\n┣ *.inf*\n┃⊷️「advance info」\n┃\n┣ *.id*\n┃⊷️「user id」\n┣ *.bot*\n┃⊷️「bot info」\n┃\n┗━━━━━━━━━━━━━━"
const I_DESC = "Get infomations with smart bot"
const DD = " *Group Description:* "

var ADMİN_USER = ''
var USER_USER = ''
var TR_USER = ''
var Hİ_USER = ''
var AZ_USER = ''
var SRİ_USER = ''
var RU_USER = ''
var USA_USER = ''
var OTHER = ''
if (Config.LANG == 'EN') ADMİN_USER = '✪\n║ ➢ *Admins:* ', USER_USER = '║ ➢ *All members:* ', TR_USER = '║ ➢ *Tr Members:* ', Hİ_USER = '║ ➢ *In Members:* ', AZ_USER = '║ ➢ *Az Members:* ', SRİ_USER = '║ ➢ *SL Members:* ', RU_USER = '║ ➢ *Ru Members:* ', USA_USER = '║ ➢ *USA Members:* ', OTHER = '║ ➢ *Other members:* '
if (Config.LANG == 'SI') ADMİN_USER = '✪\n║➢ *පරිපාලකවරුන්:* ', USER_USER = '║➢ *මුළු සාමාජීකයින්:* ', TR_USER = '║➢ *තුර්කි අංක:* ', Hİ_USER = '║➢ *ඉන්දියානු අංක:* ', AZ_USER = '║➢ *Az අංක:* ', SRİ_USER = '║➢ *ශ්‍රී ලාංකික අංක:* ', RU_USER = '║➢ *රුසියානු අංක:* ', USA_USER = '║➢ *USA අංක :* ', OTHER = '║➢ *වෙනත් අංක:* '


if (Config.WORKTYPE == 'private') {


    XTroid.addCMD({pattern: 'ipack', fromMe: true, deleteCommand: false, desc: I_DESC}, (async (message, match) => {
       
        await message.sendMessage(I_PACK);
      }));



    XTroid.addCMD({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC,dontAddCMDList: true}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));


    XTroid.addCMD({ pattern: 'info', fromMe: true,deleteCommand: false,deleteCommand: false,desc: LW.PL_DESC,dontAddCMDList: true }, async (message, match) => { 

        if (message.jid.includes('-')) {
            var lasijson = await message.client.groupMetadataMinimal(message.jid) 

            var code = await message.client.groupInviteCode(message.jid)

            var nwjson = await message.client.groupMetadata(message.jid) 

            const msg = `*Grup ID:* ${lasijson.id} \n` + LW.SUB + `${nwjson.subject} \n` + LW.OWN + `${lasijson.owner} \n` + LW.COD + `${code} \n` + LW.DES + `\n\n${nwjson.desc}`

            var ppUrl = await message.client.getProfilePicture(message.jid) 

            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            await message.sendMessage(
                Buffer(resim.data), 
                MessageType.image, 
                { caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const nwmsg = LW.JİD + `${usexists.jid} \n` + LW.ST + `${status.status}`
            const resimnw = await Axios.get(usppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer(resimnw.data), 
                MessageType.image, 
                { caption: nwmsg }
            );
        }
    });



    XTroid.addCMD({ pattern: 'inf$', fromMe: true, desc: LW.PL_DESC, dontAddCMDList: true }, async (message, match) => { 
        if (message.jid.includes('-')) {
            var lasijson = await message.client.groupMetadataMinimal(message.jid) 
            var code = await message.client.groupInviteCode(message.jid)
            var nwjson = await message.client.groupMetadata(message.jid) 
            let region = await message.client.groupMetadata(message.jid);
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            var users1 = [];
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
                users1.push(uye.id.replace('c.us', 's.whatsapp.net'));
            });
            var admin_count = jids.length + '\n'
            var user_count = users1.length + '\n'
            var tr_user = [];
            var hi_user = [];
            var az_user = [];
            var sri_user = [];
            var ru_user = [];
            var usa_user = [];
            var other_user = [];
            region['participants'].map(async (reg) => {
                if (reg.jid.startsWith('90')) { tr_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('994')) { az_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('91')) { hi_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('94')) { sri_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('7')) { ru_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('1')) { usa_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } 
            });
            var trus = ' ' + tr_user.length + '\n'
            var hius = ' ' + hi_user.length + '\n'
            var azus = ' ' + az_user.length + '\n'
            var srius = ' ' + sri_user.length + '\n'
            var ruus = ' ' + ru_user.length + '\n'
            var usaus = ' ' + usa_user.length + '\n'
            var oth = ' ' + user_count - trus - hius - azus - srius - ruus - usaus
            const user_count_msg = ADMİN_USER + admin_count + USER_USER + user_count + SRİ_USER + srius + TR_USER + trus + Hİ_USER + hius + AZ_USER + azus  + RU_USER + ruus + USA_USER + usaus + OTHER + oth + '\n✪ '
            const msg = `*Group ID:* ${lasijson.id} \n` + LW.SUB + `${nwjson.subject} \n` + LW.OWN + `${lasijson.owner} \n` + LW.COD + `${code} \n` + user_count_msg + DD + `\n\n${nwjson.desc}`
            var ppUrl = await message.client.getProfilePicture(message.jid) 
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer.from(resim.data), 
                MessageType.image, 
                {caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const nwmsg = LW.JİD + `${usexists.jid} \n` + LW.ST + `${status.status}`
            const resimnw = await Axios.get(usppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer.from(resimnw.data), 
                MessageType.image, 
                { caption: nwmsg }
            );
        }
    });

    XTroid.addCMD({pattern: 'id ?(.*)', fromMe: true, desc: LP.JID_DESC, dontAddCMDList: true}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, LP.JID.format(message.reply_message.jid.split('@')[0], message.reply_message.jid), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, LP.JID.format(user.split('@')[0], user), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else {
            await message.client.sendMessage(message.jid, LP.JID_CHAT.format(message.jid), MessageType.text);
        }
    }));


    XTroid.addCMD({pattern: 'bot', fromMe: true, deleteCommand: false,desc:'Get info aboout bot'}, (async (message, match) => {
      var lasiyasimg = await axios.get(`https://telegra.ph/file/145ee2d4fb11363f72582.jpg`, { responseType: 'arraybuffer' })
      await message.client.sendMessage(message.jid, Buffer.from(lasiyasimg.data), MessageType.image, {mimetype: Mimetype.png, caption: '                  *♔ 𝓧-𝓣𝓻𝓸𝓲𝓭 ♔* \n\n\n❍ 𝗛𝗼𝘀𝘁𝗲𝗱 ➤ 𝘼𝙒𝙎\n❍ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 ➤ 𝐕'+Config.VERSION+'\n❍ 𝗕𝗿𝗮𝗻𝗰𝗵  ➤ *'+Config.BRANCH+'*\n❍ 𝗔𝗯𝗼𝘂𝘁    ➤ 𝙡𝙖𝙨𝙞𝙮𝙖.𝙢𝙡\n❍ 𝗢𝘄𝗻𝗲𝗿   ➤𝙩.𝙢𝙚/𝙡𝙖𝙨𝙞99𝙓\n❍ 𝗠𝗼𝗱𝗲𝗿𝘀 ➤┓\n                        ┣ @W4RR10R\n                        ┣ @SL_MGx03\n                        ┣ @lucy_99X\n❍ 𝗠𝗮𝗶𝗻 𝗚𝗿𝗼𝘂𝗽 ➤ t.me/danuma01\n\n❍ 𝐓𝐮𝐭𝐞 ➤ https://cutt.ly/hmtJU0u\n⊱ ──────    ♔    ────── ⊰\n'})
    
   
   }));
    
    
    
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

else if (Config.WORKTYPE == 'public') {


    XTroid.addCMD({pattern: 'ipack', fromMe: false, deleteCommand: false, desc: I_DESC}, (async (message, match) => {
       
        await message.sendMessage(I_PACK);
      }));

    XTroid.addCMD({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC, dontAddCMDList: true}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));



    XTroid.addCMD({ pattern: 'info', fromMe: false,deleteCommand: false, desc: LW.PL_DESC , dontAddCMDList: true}, async (message, match) => { 

        if (message.jid.includes('-')) {
            var lasijson = await message.client.groupMetadataMinimal(message.jid) 

            var code = await message.client.groupInviteCode(message.jid)

            var nwjson = await message.client.groupMetadata(message.jid) 

            const msg = `*Grup ID:* ${lasijson.id} \n` + LW.SUB + `${nwjson.subject} \n` + LW.OWN + `${lasijson.owner} \n` + LW.COD + `${code} \n` + LW.DES + `\n\n${nwjson.desc}`

            var ppUrl = await message.client.getProfilePicture(message.jid) 

            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            await message.sendMessage(
                Buffer(resim.data), 
                MessageType.image, 
                { caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const nwmsg = LW.JİD + `${usexists.jid} \n` + LW.ST + `${status.status}`
            const resimnw = await Axios.get(usppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer(resimnw.data), 
                MessageType.image, 
                { caption: nwmsg }
            );
        }
    });


    XTroid.addCMD({ pattern: 'inf$', fromMe: false, desc: LW.PL_DESC, dontAddCMDList: true }, async (message, match) => { 
        if (message.jid.includes('-')) {
            var lasijson = await message.client.groupMetadataMinimal(message.jid) 
            var code = await message.client.groupInviteCode(message.jid)
            var nwjson = await message.client.groupMetadata(message.jid) 
            let region = await message.client.groupMetadata(message.jid);
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            var users1 = [];
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
                users1.push(uye.id.replace('c.us', 's.whatsapp.net'));
            });
            var admin_count = jids.length + '\n'
            var user_count = users1.length + '\n'
            var tr_user = [];
            var hi_user = [];
            var az_user = [];
            var sri_user = [];
            var ru_user = [];
            var usa_user = [];
            var other_user = [];
            region['participants'].map(async (reg) => {
                if (reg.jid.startsWith('90')) { tr_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('994')) { az_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('91')) { hi_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('94')) { sri_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('7')) { ru_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('1')) { usa_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } 
            });
            var trus = ' ' + tr_user.length + '\n'
            var hius = ' ' + hi_user.length + '\n'
            var azus = ' ' + az_user.length + '\n'
            var srius = ' ' + sri_user.length + '\n'
            var ruus = ' ' + ru_user.length + '\n'
            var usaus = ' ' + usa_user.length + '\n'
            var oth = ' ' + user_count - trus - hius - azus - srius - ruus - usaus
            const user_count_msg = ADMİN_USER + admin_count + USER_USER + user_count + TR_USER + trus + Hİ_USER + hius + AZ_USER + azus + SRİ_USER + srius + RU_USER + ruus + USA_USER + usaus + OTHER + oth + '\n✪ '
            const msg = `*Group ID:* ${lasijson.id} \n` + LW.SUB + `${nwjson.subject} \n` + LW.OWN + `${lasijson.owner} \n` + LW.COD + `${code} \n` + user_count_msg + DD + `\n\n${nwjson.desc}`
            var ppUrl = await message.client.getProfilePicture(message.jid) 
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer.from(resim.data), 
                MessageType.image, 
                {caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const nwmsg = LW.JİD + `${usexists.jid} \n` + LW.ST + `${status.status}`
            const resimnw = await Axios.get(usppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer.from(resimnw.data), 
                MessageType.image, 
                { caption: nwmsg }
            );
        }
    });

    XTroid.addCMD({pattern: 'id ?(.*)', fromMe: false, desc: Lang.JID_DESC, dontAddCMDList: true}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, Lang.JID.format(message.reply_message.jid.split('@')[0], message.reply_message.jid), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, Lang.JID.format(user.split('@')[0], user), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else {
            await message.client.sendMessage(message.jid, Lang.JID_CHAT.format(message.jid), MessageType.text);
        }
    }));

    
    XTroid.addCMD({pattern: 'bot', fromMe: false, deleteCommand: false,desc:'Get info aboout bot'}, (async (message, match) => {
var lasiyasimg = await axios.get(`https://telegra.ph/file/145ee2d4fb11363f72582.jpg`, { responseType: 'arraybuffer' })
      await message.client.sendMessage(message.jid, Buffer.from(lasiyasimg.data), MessageType.image, {mimetype: Mimetype.png, caption: '                  *♔ 𝓧-𝓣𝓻𝓸𝓲𝓭 ♔* \n\n\n❍ 𝗛𝗼𝘀𝘁𝗲𝗱 ➤ 𝘼𝙒𝙎\n❍ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 ➤ 𝐕'+Config.VERSION+'\n❍ 𝗕𝗿𝗮𝗻𝗰𝗵  ➤ *'+Config.BRANCH+'*\n❍ 𝗔𝗯𝗼𝘂𝘁    ➤ 𝙡𝙖𝙨𝙞𝙮𝙖.𝙢𝙡\n❍ 𝗢𝘄𝗻𝗲𝗿   ➤𝙩.𝙢𝙚/𝙡𝙖𝙨𝙞99𝙓\n❍ 𝗠𝗼𝗱𝗲𝗿𝘀 ➤┓\n                        ┣ @W4RR10R\n                        ┣ @SL_MGx03\n                        ┣ @lucy_99X\n❍ 𝗠𝗮𝗶𝗻 𝗚𝗿𝗼𝘂𝗽 ➤ t.me/danuma01\n\n❍ 𝐓𝐮𝐭𝐞 ➤ https://cutt.ly/hmtJU0u\n⊱ ──────    ♔    ────── ⊰\n'})
    }));





    //==============================================================================================================================================================================================================


    XTroid.addCMD({pattern: 'ipack', fromMe: true, deleteCommand: false, desc: I_DESC}, (async (message, match) => {
       
        await message.sendMessage(I_PACK);
      }));



    XTroid.addCMD({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC,dontAddCMDList: true}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));


    XTroid.addCMD({ pattern: 'info', fromMe: true,deleteCommand: false,deleteCommand: false,desc: LW.PL_DESC,dontAddCMDList: true }, async (message, match) => { 

        if (message.jid.includes('-')) {
            var lasijson = await message.client.groupMetadataMinimal(message.jid) 

            var code = await message.client.groupInviteCode(message.jid)

            var nwjson = await message.client.groupMetadata(message.jid) 

            const msg = `*Grup ID:* ${lasijson.id} \n` + LW.SUB + `${nwjson.subject} \n` + LW.OWN + `${lasijson.owner} \n` + LW.COD + `${code} \n` + LW.DES + `\n\n${nwjson.desc}`

            var ppUrl = await message.client.getProfilePicture(message.jid) 

            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            await message.sendMessage(
                Buffer(resim.data), 
                MessageType.image, 
                { caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const nwmsg = LW.JİD + `${usexists.jid} \n` + LW.ST + `${status.status}`
            const resimnw = await Axios.get(usppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer(resimnw.data), 
                MessageType.image, 
                { caption: nwmsg }
            );
        }
    });



    XTroid.addCMD({ pattern: 'inf$', fromMe: true, desc: LW.PL_DESC, dontAddCMDList: true }, async (message, match) => { 
        if (message.jid.includes('-')) {
            var lasijson = await message.client.groupMetadataMinimal(message.jid) 
            var code = await message.client.groupInviteCode(message.jid)
            var nwjson = await message.client.groupMetadata(message.jid) 
            let region = await message.client.groupMetadata(message.jid);
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            var users1 = [];
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
                users1.push(uye.id.replace('c.us', 's.whatsapp.net'));
            });
            var admin_count = jids.length + '\n'
            var user_count = users1.length + '\n'
            var tr_user = [];
            var hi_user = [];
            var az_user = [];
            var sri_user = [];
            var ru_user = [];
            var usa_user = [];
            var other_user = [];
            region['participants'].map(async (reg) => {
                if (reg.jid.startsWith('90')) { tr_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('994')) { az_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('91')) { hi_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('94')) { sri_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('7')) { ru_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('1')) { usa_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } 
            });
            var trus = ' ' + tr_user.length + '\n'
            var hius = ' ' + hi_user.length + '\n'
            var azus = ' ' + az_user.length + '\n'
            var srius = ' ' + sri_user.length + '\n'
            var ruus = ' ' + ru_user.length + '\n'
            var usaus = ' ' + usa_user.length + '\n'
            var oth = ' ' + user_count - trus - hius - azus - srius - ruus - usaus
            const user_count_msg = ADMİN_USER + admin_count + USER_USER + user_count + SRİ_USER + srius + TR_USER + trus + Hİ_USER + hius + AZ_USER + azus  + RU_USER + ruus + USA_USER + usaus + OTHER + oth + '\n✪ '
            const msg = `*Group ID:* ${lasijson.id} \n` + LW.SUB + `${nwjson.subject} \n` + LW.OWN + `${lasijson.owner} \n` + LW.COD + `${code} \n` + user_count_msg + DD + `\n\n${nwjson.desc}`
            var ppUrl = await message.client.getProfilePicture(message.jid) 
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer.from(resim.data), 
                MessageType.image, 
                {caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const nwmsg = LW.JİD + `${usexists.jid} \n` + LW.ST + `${status.status}`
            const resimnw = await Axios.get(usppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer.from(resimnw.data), 
                MessageType.image, 
                { caption: nwmsg }
            );
        }
    });

    XTroid.addCMD({pattern: 'id ?(.*)', fromMe: true, desc: LP.JID_DESC, dontAddCMDList: true}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, LP.JID.format(message.reply_message.jid.split('@')[0], message.reply_message.jid), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, LP.JID.format(user.split('@')[0], user), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else {
            await message.client.sendMessage(message.jid, LP.JID_CHAT.format(message.jid), MessageType.text);
        }
    }));

    XTroid.addCMD({pattern: 'bot', fromMe: true, deleteCommand: false,desc:'Get info aboout bot'}, (async (message, match) => {
var lasiyasimg = await axios.get(`https://telegra.ph/file/145ee2d4fb11363f72582.jpg`, { responseType: 'arraybuffer' })
            await message.client.sendMessage(message.jid, Buffer.from(lasiyasimg.data), MessageType.image, {mimetype: Mimetype.png, caption: '                  *♔ 𝓧-𝓣𝓻𝓸𝓲𝓭 ♔* \n\n\n❍ 𝗛𝗼𝘀𝘁𝗲𝗱 ➤ 𝘼𝙒𝙎\n❍ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 ➤ 𝐕'+Config.VERSION+'\n❍ 𝗕𝗿𝗮𝗻𝗰𝗵  ➤ *'+Config.BRANCH+'*\n❍ 𝗔𝗯𝗼𝘂𝘁    ➤ 𝙡𝙖𝙨𝙞𝙮𝙖.𝙢𝙡\n❍ 𝗢𝘄𝗻𝗲𝗿   ➤𝙩.𝙢𝙚/𝙡𝙖𝙨𝙞99𝙓\n❍ 𝗠𝗼𝗱𝗲𝗿𝘀 ➤┓\n                        ┣ @W4RR10R\n                        ┣ @SL_MGx03\n                        ┣ @lucy_99X\n❍ 𝗠𝗮𝗶𝗻 𝗚𝗿𝗼𝘂𝗽 ➤ t.me/danuma01\n\n❍ 𝐓𝐮𝐭𝐞 ➤ https://cutt.ly/hmtJU0u\n⊱ ──────    ♔    ────── ⊰\n'})
    }));


}
