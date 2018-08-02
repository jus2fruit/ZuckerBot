const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

    let replies = ["I only insult people who are good enough to be insulted.", "You're so ugly Hello Kitty said goodbye to you", "You're so ugly when a garbage collectors see you they say, oh look! There's another one!", "I would ask how old you are, but I know you can't count that high.", "Hey, you have something on your chin...3rd one down.","Why don't you check up on Amazon and see if they have a life for sale.","You’re my favorite person besides every other person I’ve ever met.","You’re impossible to underestimate.","You’re dumber than I tell people.","Are you always an idiot or just when I'm around?"];

    let result = Math.floor((Math.random() * replies.length));

    message.channel.send(replies[result])


 }


module.exports.help = {
     name: "insultme"
}


