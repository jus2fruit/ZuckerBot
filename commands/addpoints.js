const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const fs = require("fs");
let purple = botconfig.purple;
let points = require("../points.json");

module.exports.run = async (bot, message, args) => {
    if (message.member.roles.find("name", "Server Owner")) {
        let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if (!rMember) return message.reply("I couldn't find that user.");
        let addPoints = args[1];

        if (!points[message.author.id]) {
            points[message.author.id] = {
                points: 0
            };
        }

        let PointsUser = points[rMember.id].points;

        points[rMember.id].points = PointsUser + parseInt(args[1]);

        fs.writeFile("./points.json", JSON.stringify(points), (err) => {
            if (err) console.log(err)
        });

        let addedpoints = new Discord.RichEmbed()
        .setTitle(`Added points to ${rMember.displayName}'s profile`)
        .setDescription(`Added ${addPoints} points`)
        .setColor("#0f71fc")
        .addField("Original Points:", PointsUser)
        .addField("New Points:", points[rMember.id].points)
        .setFooter(`Added ${addPoints} to ${rMember.displayName}'s profile`)
        .setTimestamp(new Date());

        message.channel.send(addedpoints);
    } else
        message.channel.send("You don't have permission to use this command");
}


module.exports.help = {
    name: "addpoints"
}