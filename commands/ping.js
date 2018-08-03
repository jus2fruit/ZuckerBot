const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
    message.channel.send("Pinging...").then(msg => {msg.edit(`Pong! - ${bot.ping} ms`)});
    console.log("Bot was pinged");
}


module.exports.help = {
     name: "ping"
}