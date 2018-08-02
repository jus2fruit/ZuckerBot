const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
    let sicon = message.guild.iconURL;
    let color = ((1 << 24) * Math.random() | 0).toString(16);
    let serverembed = new Discord.RichEmbed()
    .setTitle(message.guild.name)
    .setColor("#0f71fc")
    .setThumbnail(sicon)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Members", `${message.guild.memberCount - message.guild.members.filter(member => !member.user.bot).size}`, true)
    .addField("Online Members", message.guild.members.filter(user => user.presence.status === 'online').size)
    .addField("Guild Owner", message.guild.owner)
    .addField("Guild ID", message.guild.id)
    .addField("Region", message.guild.region)
    .addField("Invite Link", "https://discord.gg/aXjjKBB")
    .setFooter(`${message.guild.name}'s info`, sicon)
    .setTimestamp(new Date());

    return message.channel.send(serverembed);
 }


module.exports.help = {
     name: "server"
}