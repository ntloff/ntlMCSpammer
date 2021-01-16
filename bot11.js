const mineflayer = require('mineflayer');
const host = "minecorp.ru"
const ver = "1.8"
const port = "25565"
const m = "!iIiAnDreYiIi лох"
//+config
const server = "crv" // crv/cls | default: crv (creative)
//-config
//+us
const us0 = "ayeCraft"
const us2 = "YaEbal"
const us3 = "wwSinderww"
const us4 = "JienxHax"
const us5 = "SlavaUkraine"
const us6 = "MoPoZik"
const us7 = "asdfa"
const us8 = "AmongSASKE"
const us9 = "HisHitanax"
const us10 = "hisDie"
const us11 = "dhgfasd"
const us12 = "dassdf"
const us13 = "iIiPutiniIi"
const us14 = "asdaasd"
const us15 = "KerilToper"
const us16 = "afasdf"
//-us
const bot = mineflayer.createBot({
  host: host,
  port: port,
  username: us11,
  version: ver
})
bot.once('login', () => {
  bot.setControlState('jump', true)
  console.log("Ingame bot online!")
  bot.chat("/l pi3da")
  if(server == "crv"){
  setTimeout(() => { bot.chat("/server creative") }, 1000)
  setTimeout(() => { bot.chat("/w JienxHax") }, 1000)
  }
  if(server == "cls"){
    setTimeout(() => { bot.chat("/server classic") }, 1000)
  }
})
bot.on('message', (message) => {
  console.log(message.toAnsi())
})
setInterval(function() {
  bot.chat(m)
}, 2001)