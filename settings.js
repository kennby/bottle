const fs = require('fs')
const chalk = require('chalk')

//  ────────────────── [ 🌟🛠️ Tarjeta del propietario 🛠️🌟] ──────────────────  \\
global.ytname = "" //nombre de tu canal de yt
global.socialm = "" //nombre de tu github o insta
global.location = "America, Lima-Peru" //tu ubicación

// 🔄 ────────────────────────── [ NUEVO ] ───────────────────────── 🔄 \\
global.botname = '' //nombre de tu bot
global.ownernumber = '' //número del propietario
global.ownername = '' //nombre del propietario
global.websitex = ""
global.wagc = ""
global.themeemoji = ''
global.wm = ""
global.botscript = '' //enlace del script
global.packname = "Sticker By"
global.author = ""
global.creator = ""
global.xprefix = '.'
global.premium = [""] // Usuario Premium
global.hituet = 0

// ──────────────── [ ⚙️ Configuración del bot ] ──────────────── \\
global.typemenu = 'v8' // tipo de menú 'v1' => 'v8'
global.typereply = 'v2' // tipo de respuesta 'v1' => 'v3'
global.autoblocknumber = '92' //establecer código de país para bloqueo automático
global.antiforeignnumber = '91' //establecer código de país para número extranjero anti
global.welcome = true //bienvenida/salida en grupos
global.anticall = false //el bot bloquea al usuario cuando se llama
global.autoswview = false //vista de estado/historia automática
global.adminevent = false //mostrar mensaje de promoción/degradación
global.groupevent = false //mostrar mensajes de actualización en el chat del grupo

// ───────────────── [ 📩 Mensajes ] ───────────────── \\
global.mess = {
    limit: '¡Tu límite ha terminado!',
    nsfw: 'Nsfw está deshabilitado en este grupo, por favor dile al administrador que lo habilite',
    done: 'Hecho✓',
    error: '¡Error!',
    success: '¡Aquí tienes!'
}

// ─────────────── [ 🖼️ Miniatura ] ─────────────── \\
global.thumb = fs.readFileSync('./Media/theme/menu.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Actualizar '${__filename}'`))
    delete require.cache[file]
    require(file)
})

//actualizar infomacion (no modificar si no sabe) 
// senseiOfc
global.setBotInfo = (newBotname, newOwnername, newLocation, newOwnernumber, newytname, newsocial, newThemeemoji, newWebsiteX, newWagc) => {
    const updates = {
        botname: newBotname.trim(),
        ownername: newOwnername.trim(),
        location: newLocation.trim(),
        ownernumber: newOwnernumber.trim(),
        ytname: newytname.trim(),
        socialm: newsocial.trim(),
        themeemoji: newThemeemoji.trim(),
        websitex: newWebsiteX.trim(),
        wagc: newWagc.trim()
    }
    for (const key in updates) {
        if (updates.hasOwnProperty(key)) {
            global[key] = updates[key]
            console.log(chalk.yellowBright(`${key} actualizado a: ${updates[key]}`))
        }
    }
        }
