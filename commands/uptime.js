const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
    let totalSeconds = (bot.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.round(totalSeconds % 60);
    let color = ((1 << 24) * Math.random() | 0).toString(16);
    let uptime = new Discord.RichEmbed()
    .setTitle('Uptime')
    .setColor("#0f71fc")
    .setDescription(`${hours} hours ${minutes} minutes ${seconds} seconds`)
    .setFooter(`${bot.user.username}'s Uptime`, bot.user.displayAvatarURL);
    message.channel.send(uptime)

 }


module.exports.help = {
     name: "uptime"
}