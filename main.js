require('./settings')
const makeWASocket = require("@whiskeysockets/baileys").default
const { uncache, nocache } = require('./lib/loader')
const { color } = require('./lib/color')
const NodeCache = require("node-cache")
const readline = require("readline")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const { Low, JSONFile } = require('./lib/lowdb')
const yargs = require('yargs/yargs')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const _ = require('lodash')
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./lib/myfunc')
const { default: SenseiOfcConnect, getAggregateVotesInPollMessage, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@whiskeysockets/baileys")

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(new JSONFile(`src/database.json`))

global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() { if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000)); if (global.db.data !== null) return; global.db.READ = true; await global.db.read(); global.db.READ = false; global.db.data = { users: {}, database: {}, chats: {}, game: {}, settings: {}, ...(global.db.data || {}) }; global.db.chain = _.chain(global.db.data); }
loadDatabase()

if (global.db) setInterval(async () => { if (global.db.data) await global.db.write() }, 30 * 1000);

require('./XeonCheems10.js')
nocache('../XeonCheems10.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
require('./main.js')
nocache('../main.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))

//------------------------------------------------------
let phoneNumber = "916909137213"
let owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))

const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

async function startSenseiOfc() {
let { version, isLatest } = await fetchLatestBaileysVersion()
const {  state, saveCreds } =await useMultiFileAuthState(`./session`)
    const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
    const SenseiOfc = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, // popping up QR in terminal log
      mobile: useMobile, // mobile api (prone to bans)
      browser: [ "Ubuntu", "Chrome", "20.0.04" ], // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      markOnlineOnConnect: true, // set false for offline
      generateHighQualityLinkPreview: true, // make high preview link
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
   })
   
   store.bind(SenseiOfc.ev)

    // login use pairing code
   // source code https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L61
   if (pairingCode && !SenseiOfc.authState.creds.registered) {
      if (useMobile) throw new Error('Cannot use pairing code with mobile api')

     let phoneNumber
      if (!!phoneNumber) {
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Comienza con el código de país de tu número de WhatsApp, Ejemplo : +916909137213")))
            process.exit(0)
         }
      } else {
         phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Por favor, escribe tu número de WhatsApp 😍\nPor ejemplo: +916909137213 : `)))
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         // Pregunta de nuevo cuando se introduce un número incorrecto
         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Comienza con el código de país de tu número de WhatsApp, Ejemplo : +916909137213")))

            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Por favor, escribe tu número de WhatsApp 😍\nPor ejemplo: +916909137213 : `)))
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
            rl.close()
         }
      }

      setTimeout(async () => {
         let code = await SenseiOfc.requestPairingCode(phoneNumber)
         code = code?.match(/.{1,4}/g)?.join("-") || code
         console.log(chalk.black(chalk.bgGreen(`Tu código de vinculacion : `)), chalk.black(chalk.white(code)))
      }, 3000)
   }

SenseiOfc.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Archivo de sesión incorrecto, por favor borra la sesión y escanea de nuevo`);
				startSenseiOfc()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Conexión cerrada, reconectando....");
				startSenseiOfc();
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Conexión perdida con el servidor, reconectando...");
				startSenseiOfc();
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Conexión reemplazada, se abrió una nueva sesión, por favor cierra la sesión actual primero");
				startSenseiOfc()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Dispositivo desconectado, por favor borra la sesión y escanea de nuevo.`);
				startSenseiOfc();
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Se requiere reiniciar, reiniciando...");
				startSenseiOfc();
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Tiempo de conexión agotado, reconectando...");
				startSenseiOfc();
			} else SenseiOfc.end(`Razón de desconexión desconocida: ${reason}|${connection}`)
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			console.log(color(`\n🌿Conectando...`, 'yellow'))
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
			console.log(color(` `,'magenta'))
            console.log(color(`🌿Conectado a => ` + JSON.stringify(SenseiOfc.user, null, 2), 'yellow'))
			await delay(1999)
            console.log(chalk.yellow(`\n\n               ${chalk.bold.blue(`[ ${botname} ]`)}\n\n`))
            console.log(color(`< ================================================== >`, 'cyan'))
	        console.log(color(`\n${themeemoji} CANAL DE YT: Erik`,'magenta'))
            console.log(color(`${themeemoji} GITHUB: DGErik `,'magenta'))
            console.log(color(`${themeemoji} INSTAGRAM: @unicorn_Erik `,'magenta'))
            console.log(color(`${themeemoji} NÚMERO DE WA: ${owner}`,'magenta'))
            console.log(color(`${themeemoji} CRÉDITO: ${wm}\n`,'magenta'))
            await delay(1000 * 2)
		}
	
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  startSenseiOfc();
	}
})
SenseiOfc.ev.on('creds.update', saveCreds)
SenseiOfc.ev.on("messages.upsert",  () => { })
//------------------------------------------------------

//farewell/welcome
    SenseiOfc.ev.on('group-participants.update', async (anu) => {
    	if (global.welcome){
console.log(anu)
try {
let metadata = await SenseiOfc.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await SenseiOfc.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await SenseiOfc.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
	// Bienvenida
memb = metadata.participants.length
ErikWlcm = await getBuffer(ppuser)
ErikLft = await getBuffer(ppuser)
                if (anu.action == 'add') {
                const Erikbuffer = await getBuffer(ppuser)
                let ErikName = num
                const xtime = moment.tz('America/Lima').format('HH:mm:ss')
	            const xdate = moment.tz('America/Lima').format('DD/MM/YYYY')
	            const xmembers = metadata.participants.length
                Erikbody = `┌─❖
│「 𝗛𝗼𝗹𝗮 👋 」
└┬❖ 「  @${ErikName.split("@")[0]}  」
   │✑  𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼 𝗮 
   │✑  ${metadata.subject}
   │✑  𝗠𝗶𝗲𝗺𝗯𝗿𝗼𝘀 : 
   │✑ ${xmembers}th
   │✑  𝗦𝗲 𝘂𝗻𝗶𝗼́ : 
   │✑ ${xtime} ${xdate}
   │✑  𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝗰𝗶𝗼́𝗻 𝗱𝗲𝗹 𝗴𝗿𝘂𝗽𝗼 : 
   │✑ ${metadata.desc}
   └───────────────┈ ⳹`
SenseiOfc.sendMessage(anu.id,
 { text: Erikbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": ErikWlcm,
"sourceUrl": `${wagc}`}}})
                } else if (anu.action == 'remove') {
                	const Erikbuffer = await getBuffer(ppuser)
                    const Eriktime = moment.tz('America/Lima').format('HH:mm:ss')
	                const Erikdate = moment.tz('America/Lima').format('DD/MM/YYYY')
                	let ErikName = num
                    const Erikmembers = metadata.participants.length
                    Erikbody = `┌─❖
│「 𝗔𝗱𝗶𝗼́𝘀 👋 」
└┬❖ 「 @${ErikName.split("@")[0]}  」
   │✑  𝗦𝗮𝗹𝗶𝗼́ 
   │✑ ${metadata.subject}
   │✑  𝗠𝗶𝗲𝗺𝗯𝗿𝗼𝘀 : 
   │✑ ${Erikmembers}th
   │✑  𝗛𝗼𝗿𝗮 : 
   │✑  ${Eriktime} ${Erikdate}
   └───────────────┈ ⳹`
SenseiOfc.sendMessage(anu.id,
 { text: Erikbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": ErikLft,
"sourceUrl": `${wagc}`}}})
}
}
} catch (err) {
console.log(err)
}
}
})

// Anti Llamadas
SenseiOfc.ev.on('call', async (llamada) => {
    if (global.anticall) {
        console.log(llamada);
        for (let usuario of llamada) {
            if (usuario.isGroup == false) {
                if (usuario.status == "offer") {
                    let mensajeBloqueo = await SenseiOfc.sendTextWithMentions(usuario.from, `*${SenseiOfc.user.name}* no puede recibir ${usuario.isVideo ? `videollamadas` : `llamadas`}. Lo siento @${usuario.from.split('@')[0]}, serás bloqueado. Si fue una llamada accidental, por favor, contacta al propietario para desbloquearte.`);
                    SenseiOfc.sendContact(usuario.from, owner, mensajeBloqueo);
                    await sleep(8000);
                    await SenseiOfc.updateBlockStatus(usuario.from, "block");
                }
            }
        }
    }
})
    //autostatus view
        SenseiOfc.ev.on('messages.upsert', async chatUpdate => {
        	if (global.antiswview){
            mek = chatUpdate.messages[0]
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
            	await SenseiOfc.readMessages([mek.key]) }
            }
    })
    //admin event
    SenseiOfc.ev.on('group-participants.update', async (anu) => {
    	if (global.adminevent){
console.log(anu)
try {
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await SenseiOfc.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await SenseiOfc.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
if (anu.action == 'promote') {
const Eriktime = moment.tz('America/Lima').format('HH:mm:ss')
const Erikdate = moment.tz('America/Lima').format('DD/MM/YYYY')
let ErikName = num
Erikbody = ` 𝗙𝗲𝗹𝗶𝗰𝗶𝗱𝗮𝗱𝗲𝘀🎉 @${ErikName.split("@")[0]}, has sido *promovido* a *administrador* 🥳`
   SenseiOfc.sendMessage(anu.id,
 { text: Erikbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": ErikWlcm,
"sourceUrl": `${wagc}`}}})
} else if (anu.action == 'demote') {
const Eriktime = moment.tz('America/Lima').format('HH:mm:ss')
const Erikdate = moment.tz('America/Lima').format('DD/MM/YYYY')
let ErikName = num
Erikbody = `𝗨𝗽𝘀‼️ @${ErikName.split("@")[0]}, has sido *degradado* de *administrador* 😬`
SenseiOfc.sendMessage(anu.id,
 { text: Erikbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": ErikLft,
"sourceUrl": `${wagc}`}}})
}
}
} catch (err) {
console.log(err)
}
}
})

// detect group update
		SenseiOfc.ev.on("groups.update", async (json) => {
			if (global.groupevent) {
			try {
ppgroup = await SenseiOfc.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
			console.log(json)
			const res = json[0]
			if (res.announce == true) {
				await sleep(2000)
				SenseiOfc.sendMessage(res.id, {
					text: `「 Cambio de Configuración del Grupo 」\n\nEl grupo ha sido cerrado por el administrador, ¡Ahora solo los administradores pueden enviar mensajes!`,
				})
			} else if (res.announce == false) {
				await sleep(2000)
				SenseiOfc.sendMessage(res.id, {
					text: `「 Cambio de Configuración del Grupo 」\n\nEl grupo ha sido abierto por el administrador, ¡Ahora los participantes pueden enviar mensajes!`,
				})
			} else if (res.restrict == true) {
				await sleep(2000)
				SenseiOfc.sendMessage(res.id, {
					text: `「 Cambio de Configuración del Grupo 」\n\nLa información del grupo ha sido restringida, ¡Ahora solo el administrador puede editar la información del grupo!`,
				})
			} else if (res.restrict == false) {
				await sleep(2000)
				SenseiOfc.sendMessage(res.id, {
					text: `「 Cambio de Configuración del Grupo 」\n\nLa información del grupo ha sido abierta, ¡Ahora los participantes pueden editar la información del grupo!`,
				})
			} else if(!res.desc == ''){
				await sleep(2000)
				SenseiOfc.sendMessage(res.id, { 
					text: `「 Cambio de Configuración del Grupo 」\n\n*La descripción del grupo ha sido cambiada a*\n\n${res.desc}`,
				})
      } else {
				await sleep(2000)
				SenseiOfc.sendMessage(res.id, {
					text: `「 Cambio de Configuración del Grupo 」\n\n*El nombre del grupo ha sido cambiado a*\n\n*${res.subject}*`,
				})
			} 
			}
		})
            
    SenseiOfc.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!SenseiOfc.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('Erik') && mek.key.id.length === 16) return
            if (mek.key.id.startsWith('BAE5')) return
            m = smsg(SenseiOfc, mek, store)
            require("./XeonCheems10")(SenseiOfc, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

   
    SenseiOfc.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    SenseiOfc.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = SenseiOfc.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    SenseiOfc.getName = (jid, withoutContact = false) => {
        id = SenseiOfc.decodeJid(jid)
        withoutContact = SenseiOfc.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = SenseiOfc.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === SenseiOfc.decodeJid(SenseiOfc.user.id) ?
            SenseiOfc.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

SenseiOfc.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await SenseiOfc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await SenseiOfc.getName(i)}\nFN:${await SenseiOfc.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
	    })
	}
	SenseiOfc.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

    SenseiOfc.public = true

    SenseiOfc.serializeM = (m) => smsg(SenseiOfc, m, store)

    SenseiOfc.sendText = (jid, text, quoted = '', options) => SenseiOfc.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })
    SenseiOfc.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await SenseiOfc.sendMessage(jid, {
            image: buffer,
            caption: caption,
            ...options
        }, {
            quoted
        })
    }
    SenseiOfc.sendTextWithMentions = async (jid, text, quoted, options = {}) => SenseiOfc.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    SenseiOfc.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await SenseiOfc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

SenseiOfc.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await SenseiOfc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
    SenseiOfc.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    
    SenseiOfc.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await SenseiOfc.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}
    
    SenseiOfc.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return SenseiOfc.sendMessage(jid, { poll: { name, values, selectableCount }}) }

SenseiOfc.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
            
    SenseiOfc.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }
    return SenseiOfc
}

startSenseiOfc()

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})
