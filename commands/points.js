const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let purple = botconfig.purple;
let points = require("../points.json");

module.exports.run = async (bot,message,args) => {
    var user;
    if (message.mentions.members.first()) {user = message.mentions.members.first()} 
    else  {user = message.member}

let curpoints = points[user.id].points;
if(message.mentions.members.first()){
let mentionedPointsEmbed = new Discord.RichEmbed()
.setTitle(`${user.displayName}'s Points`)
.setColor("#0f71fc")
.addField("Points", curpoints, true)
.setFooter(`${user.displayName}'s Points.`)
.setTimestamp(new Date());
message.channel.send(mentionedPointsEmbed)
} else

var pntsEmbed = new Discord.RichEmbed()
.setTitle("Your Points")
.setColor("#0f71fc")
.addField("Points", curpoints, true)
.setDescription("Warnings decrease your points. Merits increase your points. You get 1 point for every message sent.")
.setFooter(`${message.member.displayName}'s points.`, message.author.displayAvatarURL)
.setTimestamp(new Date());

message.channel.send(pntsEmbed);
 }


module.exports.help = {
     name: "points"
}


