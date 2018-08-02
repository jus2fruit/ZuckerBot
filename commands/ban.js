const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to use that command!");
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be banned!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#0f71fc")
    .addField("User:", `${bUser}`)
    .addField("Moderator", `<@${message.author.id}>`)
    .addField("Channel:", message.channel)
    .addField("Time:", message.createdAt)
    .addField("Reason:", bReason)
    .setFooter(`<@${message.member.displayName}> banned ${bUser.displayName} for ${bReason} at ${message.createdAt}`)
    .setTimestamp(new Date());

    let incidentchannel = message.guild.channels.find(`name`, "logs");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
}


module.exports.help = {
     name: "ban"
}