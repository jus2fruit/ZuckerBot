const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
    if(!args[0]) return message.reply("Please specify a user to slap!");
    let sUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!sUser) return message.message.send("I couldn't find that user");
    if(sUser.id === message.author.id) return message.channel.send("You can't slap yourself!");
    let slapEmbed = new Discord.RichEmbed()
    .setTitle(`${message.member.displayName} slapped ${sUser.displayName}!`)
    .setColor("#0f71fc")
    .setDescription(`<@${sUser.id}> 👋`)
    .setFooter(`${message.member.displayName} slapped ${sUser.displayName}!`, message.author.displayAvatarURL)
    .setTimestamp(new Date());
    message.channel.send(slapEmbed);
 }


module.exports.help = {
     name: "slap"
}