const Discord = require("discord.js");
let merits = require("../merits.json");

module.exports.run = async (bot,message,args) => {

    if(!merits[message.author.id]){
        merits[message.author.id] = {
            merits: 0
        };
    }
    var user;
    if (message.mentions.members.first()) {user = message.mentions.members.first().id} 
    else  {user = message.author.id}
    
    let uMerits = merits[user].merits;
    
    if(message.mentions.members.first()){
       let mentioned = new Discord.RichEmbed()
       .setTitle(`${user}'s Merits`)
       .setColor("#0f71fc")
       .addField(`${user} has ${uMerits} merits`)
       .setFooter(`${user}'s Merits`)
       .setTimestamp(new Date());
       message.channel.send(mentioned);
    } else {
        let mentioned2 = new Discord.RichEmbed()
        .setTitle("Your Merits")
        .setColor("#0f71fc")
        .addField(`You have ${uMerits} merits`)
        .setFooter(`${message.member.displayName}'s merits.`, message.author.displayAvatarURL)
        .setTimestamp(new Date());
        message.channel.send(mentioned2);
    }

 }


module.exports.help = {
     name: "merits"
}