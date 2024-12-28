  //project_name : XPLOADER
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : Dark-Xploit
// @tiktok : heyits_tylor
// @whatsapp : +254754783972
//*
//* 
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//=================================================//
global.SESSION_ID = process.env.SESSION_ID || 'XPLOADER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0R2TitxY0gzSmpXRGp6NjR5cUpZZm9GdFQ3dk5ROGNoZ0kyU2ZCYndIOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmg5RDhDM0RmcjV3UGwraGR3cmR4d2NNcXAwUHgxRzdaeXp6V3Zxa1pVcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlR040OXVLeTJ1ZXkvVW4rbVJ5K2JweS9wZGY5S0JkV2htbGR6S1N2c1dZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSSC93UHJSTGVoWkx1Qm1RSnNVODZtZ1N5UHB5UUU1Zkg4dFFwQUNPMUZRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFQMnU3RW5Cc0VXeC84RzVZejIvazhqU3A4Q0NDMXJXSVJDdTBwQU5rVzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZoMHFnSmNzT2JJSm01eStsdTZFaHNaZTI0d2NzV0dMY2dvczVZSllLRG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUlXdUVGRnFlQit6VVQzRmdqdy91bHRnOEE1M3Q1M1JIWUw1RXplcEYzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVd6Y3kxK1JwemFFYkVmSERmNnBTbUJDdjhkOXNDV01NM1dTRG9MRkFCQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMzc2ZNbUVnYVJTNnNuWjlhT1U1SkNzUWcrUGMrem9nK0t2RXN6L1dQWE5mbmhNbWQzZHc2TUlnZWtVbVJhbkJTQkxPVit3akdSTG0vZkVyOWVMemlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM2LCJhZHZTZWNyZXRLZXkiOiJ0NEFHcFRnbi9tOHVXSW1tR3RMSnU1SEE1RGF4VmlMRm5LbE9zTnNLVHY0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYxMTY3MTcyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY2NTM4RDk2Qzg5QjI0OEI1QjVENjYwMzMwNkM3QTE3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzUzOTI0MDh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ii1qMFgzYWNqVEN1OGo2TU51Q3VLdHciLCJwaG9uZUlkIjoiZTQwZWY4OTAtOTA2Yi00YzMyLWJhNDktYTY5YTc3N2UyMWY5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJoSTlSYmhkdkJsdnNpTkpUU3IrTHJjZ0lZWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOc0JVRTVsVm93REcwalBoSkdmTjZaM2hISEk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRU5NUFBaQkUiLCJtZSI6eyJpZCI6Ijk0NzYxMTY3MTcyOjE1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6In5cbl9fX19fX19fXG7jgJBT44CRXG5cbuOAkEjjgJFcblxu44CQQeOAkVxuXG7jgJBM44CRXG5cbuOAkEnjgJFcbl9fX19fX19fX19fX19fXG7jgJBT44CR44CQSOOAkeOAkEHjgJHjgJBM44CR44CQSeOAkSIsImxpZCI6IjExMTQwNzc0Mzg5NzY5MDoxNUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t1Y3FlZ0ZFSVQ1djdzR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpYK1ZRNjNabnU0dkZRRDRpNGl0Wno1NGxNSk5TbllPSWkwVzJiUGw3Q1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ijdkbm1oNXBCbGNLaEdNRnBCOWpmamZwUDhOdWpDK3Fma1FCS0phbGpTcUttQWNCRGx0djA5QVJ5L0hLVVFrTWV2NEtaeXREVG9vMFliQzNKRE11QURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMN1dGR2NOcFo5RWltMExUVnYydHRrTVdPTVFlUExEeVRIR2ROMjZVWXhmRGxhNWs3OHNFMFN0WHM0R3ZhMzQ1NXdQN0lMTFJUSW5obUVVaUYrWFdqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYxMTY3MTcyOjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldWL2xVT3QyWjd1THhVQStJdUlyV2MrZUpUQ1RVcDJEaUl0RnRtejVld2sifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzUzOTI0MDIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTUo4In0=' 
//Enter your Xploader session id here; must start with XPLOADER~

//=================================================//
global.botname = process.env.BOT_NAME || '┃𝗦𝗛𝗔𝗟𝗜 𝐁𝐨𝐭┃' 
//Your desired bot name

//=================================================//
global.ownernumber = process.env.OWNER_NUMBER || '94761167172' 
//Type your number here

//=================================================//
global.ownername = process.env.OWNER_NAME || '💗𝘀𝗵𝗮𝗹𝗶𝗻𝗱𝗮💖' 
//Type your name here

//=================================================//
global.plink = process.env.PLINK || ""

//=================================================//
global.wm = process.env.GL_WM || "©┃𝗦𝗛𝗔𝗟𝗜┃𝐁𝐨𝐭"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "┃𝗦𝗛𝗔𝗟𝗜┃" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "Bot" 
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
global.autostatusreact = process.env.AUTO_STATUS_REACT || 'true'

//=================================================//
global.anticall = process.env.ANTI_CALL || 'false'

//=================================================//
global.welcome = process.env.WELCOME_MSG || 'false'

//=================================================//
global.statusemoji = process.env.STATUS_EMOJI || '🙀'
//Set the emoji that you want to be reacted to status

//=================================================//
global.timezones = process.env.TIMEZONE || "sri lanka/kegalla" 
//Don't edit this if you don't know!

//=================================================//
global.countrycode = process.env.COUNTRY_CODE || '+94' 
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
// options 1, 2, 3, 4 or 5
// 1 = Document menu(Android only)
// 2 = Text only menu(Android & iOS)
//3 = Image menu with context(Android & iOS)
//4 = Image menu(Android & iOS)
//5 = Payment menu

//=================================================//
//Replies
global.mess = { 
  limit: '*Your limit is used up!*', 
  nsfw: '*Tell the admin to enable NSFW first!*', 
  done: '*Done*', 
  error: '*Sorry, I cannot perform that action!*', 
  success: '*©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭*', 
  premium: '*Only premium users can use this command!*', 
  owner: '*Apologies, only my owner can use this command!*', 
  group: '*This feature becomes available when you use it in a group!*', 
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
