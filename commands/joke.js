const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
    let replies = ["What's the difference between a hippo and a Zippo?\n\n\nOne is really heavy, and the other is a little lighter.", "I submitted 10 puns to a joke-writing competition to see if any of them made the finals.\n\n\nSadly, no pun in ten did.", "What happens to a frog's car when it breaks down?\n\n\nIt gets toad away.", "Can a kangaroo jump higher than the Empire State Building?\n\n\nOf course! The Empire State Building can't jump.", "If you ever get cold, stand in the corner of a room for a while.\n\n\nThey're usually 90 degrees.", "What's the best thing about Switzerland?\n\n\nI don't know, but the flag is a big plus.", "Apparently you can't use beef stew as a password.\n\n\nIt's not stroganoff.", "If you have 10 apples in one hand and 14 oranges in the other, what do you have?\n\n\nReally, really big hands.", "What do we want? Low-flying airplane noises!\n\n\nWhen do we want them? NNNNNEEEEOOOOOOOWWWWWWW!"];
    let result = Math.floor((Math.random() * replies.length));
    message.channel.send(replies[result])

 }


module.exports.help = {
     name: "joke"
}