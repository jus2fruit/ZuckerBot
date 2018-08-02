const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

message.channel.send("**The Role Shop**\n\n**VIP**: 1000 coins\n\n**VIP+**: 1500 coins\n\n**MVP**: 2500 coins\n\n**MVP+**: 5000 coins\n\nYou can get coins by talking in chat and doing z!daily every day. To see your coins do z!balance. To purchase a role do z!rolebuy <rolename>.")

 }


module.exports.help = {
     name: "roleshop"
}
