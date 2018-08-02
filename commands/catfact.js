const Discord = require("discord.js");
const catFacts = require('cat-facts');

module.exports.run = async (bot,message,args) => { 
    let randomFact = catFacts.random();
    message.channel.send(randomFact);

 }


module.exports.help = {
     name: "catfact"
}