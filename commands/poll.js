const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
    if(message.member.roles.find("name", "Admins")) {
    if (!args[0]) return message.reply("You must have something to vote for!")
    message.delete().catch(O_o=>{});
            const pollTopic = await message.channel.send(message.content.slice(6));
            await pollTopic.react(`✅`);
            await pollTopic.react(`🚫`);
    } else 
    message.channel.send("You don't have permission to use this command");
 }


module.exports.help = {
     name: "poll"
}
