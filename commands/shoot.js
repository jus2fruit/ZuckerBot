const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
    if(!args[0]) return message.reply("Please specify a user to shoot!");
    let sUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!sUser) return message.message.send("I couldn't find that user");
    if(sUser.id === message.author.id) return message.channel.send("You can't shoot yourself!");
    let shootEmbed = new Discord.RichEmbed()
    .setTitle(`${message.member.displayName} is on a killing spree!`)
    .setColor("#0f71fc")
    .setDescription(`<@${sUser.id}> 🔫`)
    .setFooter(`${message.member.displayName} shot ${sUser.displayName}!`, message.author.displayAvatarURL)
    .setTimestamp(new Date());
    message.channel.send(shootEmbed);
 }


module.exports.help = {
     name: "shoot"
}