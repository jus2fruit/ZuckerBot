const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
    if(!args[0]) return message.channel.send("Please specify someone to kiss!");
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    if(kUser.id === message.author.id) return message.channel.send(`<@${message.author.id}> kissed him self!`);
    message.channel.send(`${message.member.displayName} kissed ${kUser.displayName}!`);
 }


module.exports.help = {
     name: "kiss"
}