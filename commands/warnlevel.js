const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const botconfig = require("../botconfig.json");
const orange = botconfig.orange;
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(message.member.roles.find("name", "Admins")) {
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
  let warnlevel = warns[wUser.id].warns;

let warnlevelembed = new Discord.RichEmbed()
.setTitle(`Warn Level of ${wUser}`)
.setColor("#0f71fc")
.addField(`User:`, `${wUser}`)
.addField("Warn Level", warnlevel)
.setFooter(`${wUser}'s Warn Level`, bot.user.displayAvatarURL)
.setTimestamp(new Date());

message.channel.send(warnlevelembed);
} else
message.channel.send("You don't have permission to use this command.");
}

module.exports.help = {
  name: "warnlevel"
}