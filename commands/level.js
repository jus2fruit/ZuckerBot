const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let purple = botconfig.purple;
let xp = require("../xp.json");

module.exports.run = async (bot,message,args) => {
    if(!xp[message.author.id]) {
        xp[message.author.id] = {
            xp: 0,
            level: 1
       };
       }
       let curxp = xp[message.author.id].xp;
       let curlvl = xp[message.author.id].level;
       let nxtLvlXp = parseInt(curlvl) * 700;
       let difference = nxtLvlXp - curxp;
       
       let lvlEmbed = new Discord.RichEmbed()
       .setAuthor(message.author.username)
       .setColor("#0f71fc")
       .addField("Level:", curlvl, true)
       .addField("XP:", curxp, true)
       .setFooter(`${difference} XP until you level up`, message.author.displayAvatarURL)
       .setTimestamp(new Date());
       
       message.channel.send(lvlEmbed);
}


module.exports.help = {
     name: "level"
}


