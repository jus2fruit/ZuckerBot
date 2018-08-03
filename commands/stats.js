const Discord = require("discord.js");
let xp = require("../xp.json");
let coins = require("../coins.json");
let points = require("../points.json");
let merits = require("../merits.json");


module.exports.run = async (bot,message,args) => {

    

       var user;
if (message.mentions.members.first()) {user = message.mentions.members.first()} 
else  {user = message.member}

let uCoins = coins[user.id].coins;
let uPoints = points[user.id].points;
let uMerits = merits[user.id].merits;
let curxp = xp[user.id].xp;
let curlvl = xp[user.id].level;
let nxtLvlXp = curlvl * 700;
let difference = nxtLvlXp - curxp;

if(!merits[user.id]) {
    merits[user.id] = {
        merits: 0
    };
   }



   if(message.mentions.members.first()){
    let statsembedU = new Discord.RichEmbed()
    .setAuthor(user.displayName)
    .setThumbnail(user.user.displayAvatarURL)
    .setColor(user.displayHexColor)
    .addField("Coins",uCoins, true)
    .addField("Level", curlvl, true)
    .addField("XP", curxp, true)
    .addField("Points", uPoints, true)
    .addField("Merits", uMerits, true)
    .addField("Next level", `${difference} XP needed`, true)
    .setFooter(`${user.displayName}'s stats`, user.user.displayAvatarURL)
    .setTimestamp(new Date());

    message.channel.send(statsembedU);
   } else {
let statsembed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setThumbnail(message.author.displayAvatarURL)
.setColor(message.member.displayHexColor)
.addField("Coins:",uCoins, true)
.addField("Level:", curlvl, true)
.addField("XP:", curxp, true)
.addField("Points:", uPoints, true)
.addField("Merits:", uMerits, true)
.addField("Next level:", `${difference} XP needed`, true)
.setFooter(`${message.member.displayName}'s stats`, message.author.displayAvatarURL)
.setTimestamp(new Date());

message.channel.send(statsembed);
   }
 }


module.exports.help = {
     name: "stats"
}
