

const XTroid = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const fs = require('fs');
const Language = require('../language');
const Lang = Language.getString('_xtroid');
const logo = fs.readFileSync('./media/logo/free.png')  
const pro = `
👑 *New Items* 👑
────────────────

  🧊 *Cmd :* .spack trial 
  🎐 *Desc :* Fully unlocked sticker 
          pack 

  🧊 *Cmd :* .npack trial
  🎐 *Desc :* Premium logo pack 

  🧊 *Cmd :* .epack trial
  🎐 *Desc :* Fully unlocked logo pack 


  🧊 *Cmd :* .mpack trial
  🎐 *Desc :*  Fully unlocked meme 
         pack

  🧊 *Cmd :* .menu comming soon
  🎐 *Desc :*  Custom menu.
   ────────────────`

if (Config.WORKTYPE == 'private') {

    XTroid.addCMD({pattern: 'x ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    var CMD_HELP = '';
    if (match[1] === '') {
        XTroid.commands.map(
            async (command) =>  {
                if (command.dontAddCMDList || command.pattern === undefined) return;
                try {
                    var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                } catch {
                    var match = [command.pattern];
                }
    
                var HANDLER = '';
    
                if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                    HANDLER = '.';
                } else {
                    HANDLER = '.';
                }
                CMD_HELP +='' + Config.MENU_EMOJI+ ' *Cmd :* ' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '\n' : '\n');
                if (command.desc !== '') CMD_HELP += Config.DESC_EMOJI+ ' *Desc :* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                if (command.usage !== '') CMD_HELP += '*🀄️ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ' + command.warn + '\n\n';

            }
        );
       var MENMSG = '\n*      𝓧𝓽𝓻𝓸𝓲𝓭*\n\n'+ pro +'\n'+ CMD_HELP
        await message.client.sendMessage(message.jid,logo, MessageType.image, {mimetype: logo.png, caption: MENMSG} );

                
 
    } else {
        var CMD_HELP = '';
        XTroid.commands.map(
            async (command) =>  {
                if (command.dontAddCMDList || command.pattern === undefined) return;
                try {
                    var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                } catch {
                    var cmatch = [command.pattern];
                }
                
                if (cmatch[2] == match[1]) {
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP +='' + Config.MENU_EMOJI+ ' *Cmd :* ' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '\n' : '\n');
                    if (command.desc !== '') CMD_HELP += Config.DESC_EMOJI+ ' *Desc :* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                    if (command.usage !== '') CMD_HELP += '*🀄️ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ' + command.warn + '\n\n';
    
                }
            }
        );
        if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
        var MENMSG = '\n*'+Config.MENUTEXT+'*\n\n' + CMD_HELP
        await message.client.sendMessage(message.jid,logo, MessageType.image, {mimetype: logo.png, caption: MENMSG} );
    }
}));


}
else if (Config.WORKTYPE == 'public') {

    XTroid.addCMD({pattern: 'x ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
    var CMD_HELP = '';
    if (match[1] === '') {
        XTroid.commands.map(
            async (command) =>  {
                if (command.dontAddCMDList || command.pattern === undefined) return;
                try {
                    var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                } catch {
                    var match = [command.pattern];
                }
    
                var HANDLER = '';
    
                if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                    HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                } else {
                    HANDLER = '.';
                }
                CMD_HELP +='' + Config.MENU_EMOJI+ ' *Cmd :* ' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '\n' : '\n');
                if (command.desc !== '') CMD_HELP += Config.DESC_EMOJI+ ' *Desc :* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                if (command.usage !== '') CMD_HELP += '*🀄️ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ' + command.warn + '\n\n';

            }
        );
        
        var MENMSG = '\n*      𝓧𝓽𝓻𝓸𝓲𝓭*\n\n'+ pro +'\n'+ CMD_HELP
        await message.client.sendMessage(message.jid,logo, MessageType.image, {mimetype: logo.png, caption: MENMSG} );     
    } else {
        var CMD_HELP = '';
        XTroid.commands.map(
            async (command) =>  {
                if (command.dontAddCMDList || command.pattern === undefined) return;
                try {
                    var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                } catch {
                    var cmatch = [command.pattern];
                }
                
                if (cmatch[2] == match[1]) {
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP +='' + Config.MENU_EMOJI+ ' *Cmd :* ' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '\n' : '\n');
                    if (command.desc !== '') CMD_HELP += Config.DESC_EMOJI+ ' *Desc :* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                    if (command.usage !== '') CMD_HELP += '*🀄️ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ' + command.warn + '\n\n';
    
                }
            }
        );
        if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
        var MENMSG = '\n*'+Config.MENUTEXT+'*\n\n' + CMD_HELP
        await message.client.sendMessage(message.jid,logo, MessageType.image, {mimetype: logo.png, caption: MENMSG} );
    }
}));

XTroid.addCMD({pattern: 'x ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    var CMD_HELP = '';
    if (match[1] === '') {
        XTroid.commands.map(
            async (command) =>  {
                if (command.dontAddCMDList || command.pattern === undefined) return;
                try {
                    var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                } catch {
                    var match = [command.pattern];
                }
    
                var HANDLER = '';
    
                if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                    HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                } else {
                    HANDLER = '.';
                }
                CMD_HELP +='' + Config.MENU_EMOJI+ ' *Cmd :* ' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '\n' : '\n');
                if (command.desc !== '') CMD_HELP += Config.DESC_EMOJI+ ' *Desc :* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                if (command.usage !== '') CMD_HELP += '*🀄️ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ' + command.warn + '\n\n';

            }
        );
        
        var MENMSG = '\n*      𝓧𝓽𝓻𝓸𝓲𝓭*\n\n'+ pro +'\n'+ CMD_HELP
        await message.client.sendMessage(message.jid,logo, MessageType.image, {mimetype: logo.png, caption: MENMSG} );     
    } else {
        var CMD_HELP = '';
        XTroid.commands.map(
            async (command) =>  {
                if (command.dontAddCMDList || command.pattern === undefined) return;
                try {
                    var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                } catch {
                    var cmatch = [command.pattern];
                }
                
                if (cmatch[2] == match[1]) {
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP +='' + Config.MENU_EMOJI+ ' *Cmd :* ' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '\n' : '\n');
                    if (command.desc !== '') CMD_HELP += Config.DESC_EMOJI+ ' *Desc :* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                    if (command.usage !== '') CMD_HELP += '*🀄️ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    if (command.warn !== '') CMD_HELP += '*⚠️ ' + Lang.WARN + ':* ' + command.warn + '\n\n';
    
                }
            }
        );
        if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
        await message.client.sendMessage(
                message.jid,'✥▬▬ *'+Config.MENUTEXT+'* ▬▬✥\n\n\n' + CMD_HELP, MessageType.text
            );
    }
}));

}
