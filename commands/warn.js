const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
let points = require("../points.json");

module.exports.run = async (bot, message, args) => {
  if(message.member.roles.find("name", "Admins")) {
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("I couldn't find that user.");
  if(wUser.roles.find("name", "Moderators")) return message.reply("They can't be warned.");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if(err) console.log(err)
});

message.delete().catch(O_o=>{});

  let warnEmbed = new Discord.RichEmbed()
  .setTitle("Issued Warning:")
  .setColor("#0f71fc")
  .addField("User:", `<@${wUser.id}>`)
  .addField("Moderator:", `<@${message.author}>`)
  .addField("Channel:", message.channel)
  .addField("Warnings:", warns[wUser.id].warns)
  .addField("Reason:", reason)
  .setFooter(`${message.author} muted ${wUser} for ${reason} in ${message.channel}`)
  .setTimestamp(new Date());

  let warnchannel = message.guild.channels.find(`name`, "logs");
  if(!warnchannel) return message.reply("Couldn't find channel");

  warnchannel.send(warnEmbed);

  if(!points[message.author.id]){
    points[message.author.id] = {
        points: 0
    };
}

let pntssdecrease = points[wUser.id].points;;

points[wUser.id] = {
  points: pntssdecrease - 100
};

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
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
    let mutetime = "300s";
    await(wUser.addRole(muterole.id));

    try{
        await wUser.send(`You have been muted for ${reason}. You will be unmuted in 5 minutes`)
    }catch(e){
     message.channel.send(`<@${wUser.id}> has their DMs locked. But they have been temporarily muted for ${reason}`)
    }


    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> has been unmuted.`)
    }, ms(mutetime))
}
  if(warns[wUser.id].warns == 3){
    let muterole = message.guild.roles.find(`name`, "muted");
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
    let mutetime = "1800s";
    
    await(wUser.addRole(muterole.id));

    try{
        await wUser.send(`You have been muted for ${reason}. You will be unmuted in 30 minutes`)
    }catch(e){
     message.channel.send(`<@${wUser.id}> has their DMs locked. But they have been temporarily muted for ${reason}`)
    }

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> has been unmuted.`)
    }, ms(mutetime))

  }
} else
message.channel.send("You don't have permission to use this command!")
}


module.exports.help = {
  name: "warn"
}