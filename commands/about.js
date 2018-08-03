const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
    let totalSeconds = (bot.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.round(totalSeconds % 60);
let aboutEmbed = new Discord.RichEmbed()

.setTitle("About ZuckerBot")
.setDescription("ZuckerBot is a Discord Bot made by [StrangeAlmond](https://github.com/StrangeAlmond)")
.addField("Owner", "StrangeAlmond#001", true)
.addField("Uptime", `${hours} hours ${minutes} minutes ${seconds} seconds`, true)
.setColor("#0f71fc")
.setFooter("About ZuckerBot", bot.user.displayAvatarURL)
.setTimestamp(new Date());
message.channel.send(aboutEmbed);
 }


module.exports.help = {
     name: "about"
}