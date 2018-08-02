const Discord = require("discord.js");
var request = require('request');
module.exports.run = async (bot,message,args) => {
    request({ uri: 'http://thecatapi.com/api/images/get?format=src&type=png', followRedirect: false }, function (err, res, body) {
        let color = ((1 << 24) * Math.random() | 0).toString(16);
        let catembed = new Discord.RichEmbed()
        .setColor("#0f71fc")
        .setTitle("🐱 | **Here is your random cat:**")
        .setImage(res.headers.location);
        message.channel.send(catembed);
    });
   
 }


module.exports.help = {
     name: "cat"
}
