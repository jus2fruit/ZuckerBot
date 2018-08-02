const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
  if(message.member.roles.find("name", "Admins")) {
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Couldn't find that user, yo.");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Couldn't find that role.");
  
    if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
    await(rMember.removeRole(gRole.id));
  
    try{
      await rMember.send(`Your role${gRole.name} has been removed.`)
    }catch(e){
      message.channel.send(`<@${rMember.id}>, Your role ${gRole.name} has been removed. We tried to DM you, but your DMs are locked.`)
    }
 } else 
 message.channel.send("You don't have permission to use this command")
}


module.exports.help = {
     name: "removerole"
}