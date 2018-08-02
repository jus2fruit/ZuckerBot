const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that!");
if(!args[0]) return message.channel.send("specify the amount of messages to delete");
message.delete().catch(O_o=>{});
message.channel.bulkDelete(args[0]).then(() => {
message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(2000));
});
 }


module.exports.help = {
     name: "clear"
}
