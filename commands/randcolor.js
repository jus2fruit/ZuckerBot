const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
    let color = ((1 << 24) * Math.random() | 0).toString(16);
    let embed = new Discord.RichEmbed() 
            .setTitle(`#${color}`)
            .setColor(`#${color}`)
            .setFooter(`${message.member.displayName}'s Random color`, message.author.displayAvatarURL)
            .setTimestamp(new Date());
     message.channel.send(embed);

 }


module.exports.help = {
     name: "randcolor"
}