/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const XTroid = require('../events');
const {MessageType, MessageOptions} = require('@adiwajshing/baileys');
const Config = require('../config');

// ==================== MAIN DESCRIPTION TEXT ====================
const h_Des = "Yardım menüsünden botu kullanım hakkında bilgi verir."
const h_DedEN = "Gives information about using the bot from the Help menu."
const h_DedSI = "උදව් මෙනුවෙන් බොට් භාවිතා කිරීම පිළිබඳ තොරතුරු ලබා දෙයි."
const matchnullSI = "✥ _මූලික උදව්_ ✥\n\n🔹 *.alive:* Bot ක්‍රියාත්මක වේදැයි පරීක්ෂා කරයි.\n\n🔹 *.x :* සම්පූර්ණ විධාන ලැයිස්තුව පෙන්වයි.\n🔹 *.setvar WORK_TYPE: public* Bot public කිරීමට.\n🔹 *.setvar WORK_TYPE: private* Bot public කිරීමට.\n🔹 *.restart* Bot නැවත පනගැන්වීමට (සිරවූ විටක)\n🔹 *.setvar SUDO: 94XXXXXXXX* Bot වෙත තවත් පාලකයෙකු ලබදීමට(public/private අවස්ථා දෙකෙහිදීම ඔහුට පාලනය කල හැක.)\n🔹 *.dyno* ඔබගේ Heroku පැය ප්‍රමාණය කොපමනද බැලීමට. මාසිකව පැය 550ක් ලැබෙන අතර එය මසකට පෙර අවසන් වූවිට ඔබගේ bot ක්‍රියා විරහිත වේ.ඊලමාසය එනතුරු බලා හිදීම හෝ අලුත් බොට් කෙනෙකු අලුත් හෙරොකු එකක ශාදාගත හැක.  \n\n🔸 ඔබගේ *.zpack* විධානය තුල ඇති සමහරක් අංගයන් නිසි පරිදී වැඩ නොකරන්නේ නම් ඊට හේතුව botගේ APIඅදික ප්රිබෝජනයට ලක්වී තිබිමයි.අපට පිරිවැය දැරීමට නොහැකි බැවින් ඔබ සියලු දෙනාට බෙදාගැනීමට ලබාදී ඇත්තේ ලෝගෝ වාර 2000ක් පමණි,(අවශ්‍ය යට තනි තනිව බවිත කිරීමට ලබාගත හැක ඒ සදහා  admin වරයෙකුගෙන් විමසන්න)\n\n====== *X-Troid News & Help groups* ======\n\n සමූහ අංක 01\n```https://chat.whatsapp.com/EotXTpTHhcG4atdTbyZg3T```\n\nසමූහ අංක 02\n```https://chat.whatsapp.com/LUbUB7edSU3H0uRgLuvAll```\n\n"
const matchnullEN = "✥ *_Basic Help_* ✥\n\n🔹 *.alive:* Checks if the bot is working.\n\n🔹 *.x :* It shows full command list.\n🔹 *.setvar WORK_TYPE: public* To tern bot public.\n🔹 *.setvar WORK_TYPE: private* To tern bot private\n🔹 *.restart* To bot restart  (when bot in struck)\n🔹 *.setvar SUDO: 94XXXXXXXX* To add another conroler for bot(who can control bot both  public & private)\n🔹 *.dyno* To check your Heroku dyno hours, you have 550 hours default, if it over already before 30 days you can make another bot in new heroku account or wain next month. \n\n🔸 about *.zpack* If some of the components in the command do not work properly, it is because the bot's API has been overused. We can not afford the cost.then you can call admin to get premium  Api key to use your own.)\n\n====== *X-Troid News & Help groups* ======\n\nGroup No: 01\n```https://chat.whatsapp.com/EotXTpTHhcG4atdTbyZg3T```\n\nGroup No: 02\n```https://chat.whatsapp.com/LUbUB7edSU3H0uRgLuvAll```\n\n"
const matchnull = "✥ *🇱🇰 සාමාන්‍ය උදව් 🇱🇰* ✥\n\n🔹 *.alive:* Botun çalışıp çalışmadığını kontrol eder.\n🔹 *.x:* Tüm komut listesini gösterir.\n🔹 *.setvar:* Herokuya girmeden config ayarlar.\n\n🔸 Daha fazla yardım için ```.help <yardım almak istediğiniz konu>``` komutunu kullanın.\nÖrnek: ```.help botumu nasıl public yaparım?```\n\n====== *X-Troid* ======"
const notfound = "```The help you wanted to get was not found!```\n```Please state the problem more clearly.```"
const notfoundSI = "```ඔබට ලබා ගැනීමට අවශ්‍ය උපකාර සොයාගත නොහැකි විය!```\n```කරුණාකර ගැටලුව වඩාත් පැහැදිලිව සඳහන් කරන්න.```"
const notfoundEN = "```The help you wanted to get was not found!```\n```Please state the problem in a more descriptive way.```"

// ==================== ALL DESCRİPTİONS ====================
const pubEN = "Commanding your bot generalizes the command. Once it is published, the user can only use private and administrative commands. The user can not use commands other than this. \n To publish your bot, click on"
const pubSI = "ඔබේ බොට් පොදු කිරීමෙන් විධාන පොදු වේ. එය ප්‍රසිද්ධ කළ පසු, පරිශීලකයාට භාවිතා කළ හැක්කේ පුද්ගලික සහ පරිපාලක විධාන පමණි. පරිශීලකයාට මෙය හැර වෙනත් විධානයන් භාවිතා කළ නොහැක.\n ඔබේ බොට් ප්‍රසිද්ධ කිරීමට, ටයිප් කරන්න*.setvar WORK_TYPE:public*"
const blTR = "BlockChat botunu belirlediğiniz gruba, kişiye veya birden fazla sohbete kapatır.\nKullanmak için önce sohbete gidip *.jid* yazın. Daha sonra gelen *90xxx-xxx@g.us veya 90xxx@whatsapp.net* yazısını kopyalayın. (@g.us ve @whatsapp.net'i silin!)\nArdından *.setvar BLOCK_CHAT:id && id1,id2...* komutunu kullanın."
const sudoTR = "SUDO, botunuzu seçtiğiniz kullanıcıya tüm yetkileri ile paylaşır. Numara sonuna ,0 koyarsanız gruplarda da aktif hale gelir.\nKullanmak için *.setvar SUDO:90xxxx && 90xx,90xxx [ülke kodu ile, (❌ +90xx • ✅ 90xx)]"

const privEN = "Making your bot private makes the commands private only for you. Others cannot. \nTo make your boat private, use the  .setvar WORK_TYPE: private command."
const privSI = "ඔබේ බොට් පුද්ගලික කිරීම මඟින් විධාන පුද්ගලික වේ. ඕනෑම කෙනෙකුට භාවිතා කළ හැකිය. Bot ඔබේ බොට් පුද්ගලික කිරීමට, ටයිප් කරන්න *.setvar WORK_TYPE:private*"
const blEN = "ඔබ සඳහන් කරන කණ්ඩායම්, පුද්ගල හෝ බහු කතාබස් වලට බ්ලොක්චැට් බොට් වසා දමයි.\n එය භාවිතා කිරීමට, පළමුව චැට් වෙත ගොස් ටයිප් කරන්න *.jid* ඉන්පසු එන කේතයට පිටපත් කරන්න. (Except @g.us or @whatsapp.net!)\nThen use this command *.setvar BLOCK_CHAT:id && id1,id2..*"
const sudoEN = "SUDO, ඔබේ බොට් එක ඔබ තෝරාගත් පරිශීලකයාට එහි සියලු බලයන් සමඟ බෙදා ගනී..\nTo use, type *.setvar SUDO:94xxxx && 94xx,94xxx [with county code, (❌ +94xx • ✅ 94xx)]*"

if (Config.LANG == 'EN') {
    
    XTroid.addCMD({pattern: 'help ?(.*)', fromMe: true, desc: h_Des}, (async (message, match) => {

        if (match[1] === '') {
            return await message.client.sendMessage(
                message.jid,
                matchnullEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('public') && match[1].includes('nasıl')) || (match[1].includes('public') && match[1].includes('yapimi')) || (match[1].includes('public') && match[1].includes('yapımı')) || (match[1].includes('public') && match[1].includes('nedir')) || (match[1].includes('herkese') && match[1].includes('acik') || match[1].includes('açık')) ) {
            return await message.client.sendMessage(
                message.jid,
                pubEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('private') && match[1].includes('nasıl')) || (match[1].includes('private') && match[1].includes('yapimi')) || (match[1].includes('private') && match[1].includes('yapımı')) || (match[1].includes('private') && match[1].includes('nedir')) || (match[1].includes('bana') && match[1].includes('özel')) ) {
            return await message.client.sendMessage(
                message.jid,
                privEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('block') && match[1].includes('chat')) || (match[1].includes('sohbet') && match[1].includes('kapat')) || (match[1].includes('nasil') && match[1].includes('kapatabilirim')) || (match[1].includes('blockchat') && match[1].includes('nedir')) || (match[1].includes('sohbet') && match[1].includes('özel')) ) {
            return await message.client.sendMessage(
                message.jid,
                blEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('SUDO') && match[1].includes('nedir')) || (match[1].includes('SUDO') && match[1].includes('nasil')) || (match[1].includes('botu') && match[1].includes('baskasina')) || (match[1].includes('botu') && match[1].includes('arkadaşıma')) || (match[1].includes('SUDO') && match[1].includes('kullanmak')) ) {
            return await message.client.sendMessage(
                message.jid,
                sudoEN,
                MessageType.text
            );
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                notfoundEN,
                MessageType.text
            );
        }
    }));
}

	 if (Config.LANG == 'SI') {
    
    XTroid.addCMD({pattern: 'help ?(.*)', fromMe: true, desc: h_DedSI}, (async (message, match) => {

        if (match[1] === '') {
            return await message.client.sendMessage(
                message.jid,
                matchnullSI,
                MessageType.text
            );
        }
        else if ( (match[1].includes('public') && match[1].includes('nasıl')) || (match[1].includes('public') && match[1].includes('yapimi')) || (match[1].includes('public') && match[1].includes('yapımı')) || (match[1].includes('public') && match[1].includes('nedir')) || (match[1].includes('herkese') && match[1].includes('acik') || match[1].includes('açık')) ) {
            return await message.client.sendMessage(
                message.jid,
                pubSI,
                MessageType.text
            );
        }
        else if ( (match[1].includes('private') && match[1].includes('nasıl')) || (match[1].includes('private') && match[1].includes('yapimi')) || (match[1].includes('private') && match[1].includes('yapımı')) || (match[1].includes('private') && match[1].includes('nedir')) || (match[1].includes('bana') && match[1].includes('özel')) ) {
            return await message.client.sendMessage(
                message.jid,
                privSI,
                MessageType.text
            );
        }
        else if ( (match[1].includes('block') && match[1].includes('chat')) || (match[1].includes('sohbet') && match[1].includes('kapat')) || (match[1].includes('nasil') && match[1].includes('kapatabilirim')) || (match[1].includes('blockchat') && match[1].includes('nedir')) || (match[1].includes('sohbet') && match[1].includes('özel')) ) {
            return await message.client.sendMessage(
                message.jid,
                blSI,
                MessageType.text
            );
        }
        else if ( (match[1].includes('SUDO') && match[1].includes('nedir')) || (match[1].includes('SUDO') && match[1].includes('nasil')) || (match[1].includes('botu') && match[1].includes('baskasina')) || (match[1].includes('botu') && match[1].includes('arkadaşıma')) || (match[1].includes('SUDO') && match[1].includes('kullanmak')) ) {
            return await message.client.sendMessage(
                message.jid,
                sudoSI,
                MessageType.text
            );
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                notfoundSI,
                MessageType.text
            );
        }
    }));
}
