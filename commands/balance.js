const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot,message,args) => {

if(!coins[message.author.id]){
    coins[message.author.id] = {
        coins: 0
    };
}
let color = ((1 << 24) * Math.random() | 0).toString(16);
let uCoins = coins[message.author.id].coins;

let coinEmbed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#0f71fc")
.addField("💸", uCoins)
.setFooter(`${message.member.displayName}'s Coins`, message.author.displayAvatarURL)
.setTimestamp(new Date());

message.channel.send(coinEmbed)

 }


module.exports.help = {
     name: "balance"
}
