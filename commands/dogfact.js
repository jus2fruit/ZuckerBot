const Discord = require("discord.js");
const dogFacts = require('dog-facts');
module.exports.run = async (bot,message,args) => {
    let randomFact = dogFacts.random();
message.channel.send(randomFact);

 }


module.exports.help = {
     name: "dogfact"
}