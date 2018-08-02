const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
    if(!args[0]) return message.channel.send("Please specify someone to hug!");
    let hUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hUser) return message.channel.send("Can't find user!");
    if(hUser.id === message.author.id) return message.channel.send(`<@${message.author.id}> hugged him self!`);
    message.channel.send(`${message.member.displayName} has hugged ${hUser.displayName}!`);

 }


module.exports.help = {
     name: "hug"
}