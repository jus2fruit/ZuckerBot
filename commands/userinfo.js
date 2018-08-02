const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
let uIcon = message.author.displayAvatarURL;
let color = ((1 << 24) * Math.random() | 0).toString(16);
let userinfo = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#0f71fc")
.setThumbnail(uIcon)
.addField("ID:", message.author.id)
.addField("You joined this server:",message.member.joinedAt)
.addField("Nickname:", message.member.displayName)
.addField("Tag", message.author.tag)
.addField("Account Creation Date", message.author.createdAt)
.setFooter(`${message.member.displayName}'s info`, message.author.displayAvatarURL)
.setTimestamp(new Date());

message.channel.send(userinfo)
 }


module.exports.help = {
     name: "userinfo"
}


