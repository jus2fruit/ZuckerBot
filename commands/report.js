const Discord = require("discord.js");
let reports = require("../reports.json");

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find that user.");
    let reason = args.join(" ").slice(22);

    if(!reports[rUser.id]){
        reports[rUser.id] = {
        reportedtimes: 0
        };
    }

     reports[rUser.id].reportedtimes++;
    
    let reportEmbed = new Discord.RichEmbed()
    .setTitle("Reported User!")
    .setColor("#0f71fc")
    .addField("Reported:", `${rUser}`)
    .addField("Reporter:", `${message.author}`)
    .addField("Reports:", reports[rUser.id].reports)
    .addField("Channel:", message.channel)
    .addField("Time:", message.createdAt)
    .addField("Reason:", reason)
    .setFooter(`${message.author} reported ${rUser} for ${reason} in ${message.channel} at ${message.createdAt}`, bot.user.displayAvatarURL)
    .setTimestamp(new Date());
    
    let reportschannel = message.guild.channels.find(`name`, "logs");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel");
    
    
    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed)

    message.author.send(`${rUser} has been reported for: ${reason}. If this user has been reported 3 or more times by different players the Admin team will decide whether to punish them or not.`);

    
 }


module.exports.help = {
     name: "report"
}