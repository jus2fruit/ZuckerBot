const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

let roleShop = new Discord.RichEmbed()
.setTitle("The Role Shop")
.setDescription("<@&435588793936904214>: 1,000 coins\n<@&443145260835536916>: 1,500 coins\n<@&443145459566116866>: 2,500 coins\n<@&443145573567299594>: 5,000 coins\n<@&474985778284462091>: 10,000 coins\nTo purchase a role do z!buyrole <rolename>\nYou can get coins by doing z!daily every day and sending messages.\n*All purchases are final, no refuns!*")
.setColor(message.member.displayHexColor)
.setFooter("The Role Shop", message.author.displayAvatarURL)
.setTimestamp(new Date());
message.channel.send(roleShop);
 }


module.exports.help = {
     name: "roleshop"
}
