const Discord = require("discord.js");
const talkedRecently = new Set();
const fs = require("fs");
let merits = require("../merits.json");
let points = require("../points.json");

module.exports.run = async (bot,message,args) => {

    if (talkedRecently.has(message.author.id)) {
        message.channel.send("You can only give a merit every 24 hours!");
} else {
    if(!args[0]) return message.channel.send("You have 1 available merit!");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("I couldn't find that user.");
    if(wUser.id === message.author.id) return message.channel.send("You can't give yourself a merit!");

    if(!merits[wUser.id]) merits[wUser.id] = {
        merits: 0
      };
    
      merits[wUser.id].merits++;
    
      fs.writeFile("./merits.json", JSON.stringify(merits), (err) => {
        if (err) console.log(err)
      });


      if(!points[message.author.id]){
        points[message.author.id] = {
            points: 0
        };
    }
    
    let pointsdecrease = points[wUser.id].points;
    
    points[wUser.id] = {
      points: pointsdecrease + 100
    };

    fs.writeFile("./points.json", JSON.stringify(points), (err) => {
        if(err) console.log(err)
    });


    message.channel.send(`Congratulations <@${wUser.id}>, you recieved a merit from ${message.member.displayName}`);

}
 }


module.exports.help = {
     name: "merit"
}