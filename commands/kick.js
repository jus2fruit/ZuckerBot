const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to use that command!");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#0f71fc")
    .addField("User:", `${kUser} with`)
    .addField("Moderator", `<@${message.author.id}> with`)
    .addField("Channel:", message.channel)
    .addField("Time:", message.createdAt)
    .addField("Reason:", kReason)
    .setFooter(`<@${message.member.displayName}> kicked ${kUser.displayName} for ${kReason} at ${message.createdAt}`)
    .setTimestamp(new Date());

    let kickChannel = message.guild.channels.find(`name`, "logs");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }


module.exports.help = {
     name: "kick"
}