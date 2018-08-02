const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.member.roles.find("name", "Admins")) {
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("I couldn't find that user.");
    let role = args.join(" ").slice(22);
    if (!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return message.reply(" I couldn't find that role.");

    if (rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
    await (rMember.addRole(gRole.id));

    try {
      await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
    } catch (e) {
      message.channel.send(`Congratulations <@${rMember.id}>, you have been given the role ${gRole.name}. We tried to DM you, but your DMs are locked.`)

    }
  } else

    message.channel.send("You don't have permission to do this");
}
module.exports.help = {
  name: "addrole"
}