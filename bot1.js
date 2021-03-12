function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
const mineflayer = require('mineflayer');
const host = "minecorp.ru"
const ver = "1.8"
const port = "25565"
const m = "!#РАЗБАН ЛОГОНИСЕР"
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
  username: us1,
  version: ver
})
bot.once('login', () => {
  console.log("Ingame bot online!")
  bot.chat("/l sukablat")
  if(server == "crv"){
    sleep(2001)
    bot.chat("/server creative")
  }
  if(server == "cls"){
    sleep(2001)
    bot.chat("/server classic")
  }
})
bot.on('message', (message) => {
  console.log(message.toAnsi())
})
setInterval(function() {
  bot.chat(m)
}, 2001)