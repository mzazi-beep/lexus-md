  //project_name : LEXUS
// @author : MZAZI
// @youtube : https://www.youtube.com/@MZAZI8946
// @instagram : MZAZI8946
// @telegram : t.me/MZAZI-TECH-KENYA
// @github : MZAZI-BEEP
// @tiktok : MATHEMAGICIAN
// @whatsapp : +254741388986
//*
//* 
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//=================================================//
global.SESSION_ID = process.env.SESSION_ID || '' 
//Enter your LEXUS session id here; must start with LEXUS~

//=================================================//
global.botname = process.env.BOT_NAME || 'LEXUS-MD ᗷOT' 
//Your desired bot name

//=================================================//
global.ownernumber = process.env.OWNER_NUMBER || '254741388986' 
//Type your number here

//=================================================//
global.ownername = process.env.OWNER_NAME || 'MZAZI' 
//Type your name here

//=================================================//
global.wm = process.env.GL_WM || "©LEXUS-MD ᗷOT"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "MZAZI" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "LEXUS" 
//The sticker author name

//=================================================//
global.urldb =process.env.MONGODB_URL || ""
// just leave blank or enter a mongoDB url

//=================================================//
global.xprefix = process.env.PREFIX || '.' 
//Set your desired prefix

//=================================================//
global.mode = process.env.MODE || 'public';
// Set to 'private' to enable private mode, otherwise default is 'public'

//=================================================//
global.hituet = 0 
//=================================================//
global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'true'

//=================================================//
global.autoreactstatus = process.env.AUTO_STATUS_REACT || 'true'

//=================================================//
global.anticall = process.env.ANTI_CALL || 'false'

//=================================================//
global.welcome = process.env.WELCOME_MSG || 'false'

//=================================================//
global.statusemoji = process.env.STATUS_EMOJI || '🙂'
//Set the emoji that you want to be reacted to status

//=================================================//
global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know what you are doing!

//=================================================//
global.countrycode = process.env.COUNTRY_CODE || '254' 
//set your country code for functionality of blockforeign and antiforeign commands

//=================================================//
global.autoblockforeign = process.env.AUTO_BLOCK_FOREIGN || 'false';
// Set to 'true' to enable automatic blocking of foreign numbers

//=================================================//
global.gcantiforeign = process.env.GC_ANTI_FOREIGN || 'false';
// Set to 'true' to enable automatic removal of foreign numbers from groups

//=================================================//
global.autoread = process.env.AUTO_READ || 'false';
// Set to 'true' to enable automatic reading of messages

//=================================================//
//=================================================//
global.menustyle = process.env.MENU_STYLE || '2' 
// options 1 or 2
// 1 = Document menu(Android only)
// 2 = Text only menu(Android & iOS)

//=================================================//
//Replies
global.mess = { 
  limit: '*Your limit is used up!*', 
  nsfw: '*Tell the admin to enable NSFW first!*', 
  done: '*Done*', 
  error: '*Sorry, I cannot perform that action!*', 
  success: '*©LEXUS-MD*', 
  premium: '*Only premium users can use this command!*', 
  owner: '*Apologies, only my owner can use this command or I can call you idot!*', 
  group: '*This feature becomes available when you use it in a group only!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}
//=================================================//

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})
//=================================================//
