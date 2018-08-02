const Discord = require("discord.js");
var coinflip = require('coinflip');

module.exports.run = async (bot,message,args) => {

    if (coinflip()) {
        message.channel.send('Heads!');
      } else {
        message.channel.send('Tails!');
      }

 }


module.exports.help = {
     name: "coinflip"
}


