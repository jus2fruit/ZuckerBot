const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
    let bicon = bot.user.displayAvatarURL;
    let color = ((1 << 24) * Math.random() | 0).toString(16);
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("#0f71fc")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField("ID", bot.user.id)
    .addField("Tag", bot.user.tag)
    .setFooter(`${bot.user.username}'s info`, bicon)
    .setTimestamp(new Date());

    return message.channel.send(botembed);

 }


module.exports.help = {
     name: "botinfo"
}