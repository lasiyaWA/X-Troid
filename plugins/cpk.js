
const XTroid = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const CPK = `
─── ∙ 🍁↤THE CPACK↦🍁 ∙ ──
╔══════ ≪❈≫ ══════╗
║╠═*.cup*
║🍄 _.cup your text_
║╠═*.cmt*
║🍄 _.cmt your text_
║╠═*.cfl*
║🍄 _.cfl your text_
║╠═*.cmg*
║🍄 _.cmg your text_
║╠═*.cgl*
║🍄 _.cgl your text_
║╠═*.cstn*
║🍄 _.cstn your text_
║╠═*.crod*
║🍄 _.crod your text_
║╠═*.cgem*
║🍄 _.cgem your text_
║╠═*.cbery*
║🍄 _.cbery your text_
║╠═*.ctrn*
║🍄 _.ctrn your text_
║
║ *Cpack V2.0*
║➥ *.cdem*
║🌙 _.cdem your text_
║➥ *.crob*
║🌙 _.crob your text_
║➥ *.cpink*
║🌙 _.cpink your text_
║➥ *.csl*
║🌙 _.csl your text_
║➥ *.csand*
║🌙 _.csand your text_
║➥ *.csun*
║🌙 _.csun your text_
║➥ *.cgrass*
║🌙 _.cgrass your text_
║➥ *.cchoco*
║🌙 _.cchoco your text_
║
╚⏤⏤⏤⏤╗❀╔⏤⏤⏤⏤╝`
const Config = require('../config')
const Ln = "Cpack Logo"
let FM = Config.WORKTYPE == 'public' ? false : true


XTroid.addCMD({pattern: 'cpk', fromMe: FM, deleteCommand: false, desc: Ln,}, (async (message, match) => {await message.client.sendMessage(message.jid,CPK, MessageType.text);}));
