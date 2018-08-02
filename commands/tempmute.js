const Discord = require("discord.js");
const ms = require("ms");
const config = require("../botconfig.json");
const red = config.red;
const green = config.green;
const orange = config.orange

module.exports.run = async (bot, message, args) => {

  if(message.member.roles.find("name", "Admins")) {
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply(" I couldn't find that user.");
  if(tomute.roles.find("name", "Moderators")) return message.reply("They can't be muted!");
  
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  message.delete().catch(O_o=>{});

try{
 await tomute.send(`You have been muted for ${mutetime}. Sorry!`)
}catch(e){
message.channel.send(`A user has been muted, We tried to DM them but their DMs are locked. They will be muted for ${mutetime}`)
}

  let muteembed = new Discord.RichEmbed()
.setDescription(`Mute executed by ${message.author}`)
.setColor("#0f71fc")
.addField("User:", tomute)
.addField("Moderator:", message.author)
.addField("Channel:", message.channel)
.addField("Duration:", mutetime)
.setFooter(`${message.author.displayName} muted ${tomute.displayName} for ${mutetime} in ${message.channel}`, bot.user.displayAvatarURL)
.setTimestamp(new Date());

let incidentschannel = message.guild.channels.find(`name`, "logs");
if(!incidentschannel) return message.reply("Please create a incidents channel first!");
incidentschannel.send(muteembed);


  await(tomute.addRole(muterole.id));
 

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));



} else
message.channel.send("You don't have permission to use this command!");
}

module.exports.help = {
  name: "tempmute"
}