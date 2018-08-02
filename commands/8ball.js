const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!args[0]) return message.reply("Please ask a full question!");
    let replies = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "You can count on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Absolutely", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful", "Chances aren't good"];
    let result = Math.floor((Math.random() * replies.length));
    let questions = args.slice(0).join(" ");
    let ballimage = "https://www.horoscope.com/images-US/games/game-magic-8-ball-no-text.png";
    let BallEmbed = new Discord.RichEmbed()
    .setTitle("Magic 8 Ball")
    .setColor("#0f71fc")
    .addField("Question", questions)
    .addField("Answer", replies[result])
    .setFooter("Magic 8 Ball", ballimage)
    .setTimestamp(new Date());
    message.channel.send(BallEmbed);

}


module.exports.help = {
    name: "8ball"
}
