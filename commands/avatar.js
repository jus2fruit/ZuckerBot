const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!args[0]) {
        let avatar = new Discord.RichEmbed()
        .setTitle(`${message.member.displayName}'s Avatar`)
        .setDescription(`[Avatar URL Link](${message.author.displayAvatarURL})`)
        .setColor("#0f71fc")
        .setImage(message.author.displayAvatarURL);
         message.channel.send(avatar)
    }else {
    var aMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!aMember) return message.channel.send("I couldn't find that user!");
    let avatar2 = new Discord.RichEmbed()
    .setTitle(`${aMember.displayName}'s Avatar`)
    .setDescription(`[Avatar URL Link](${aMember.user.displayAvatarURL})`)
    .setColor("#0f71fc")
    .setImage(aMember.user.displayAvatarURL);
    message.channel.send(avatar2);
    }
}


module.exports.help = {
    name: "avatar"
}


