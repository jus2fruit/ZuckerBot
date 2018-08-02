const Discord = require("discord.js");
const superagent = require("superagent");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot,message,args) => {
if(!args[0]) {
    let {body} = await superagent
    .get(`https://random.dog/woof.json`);
    let color = ((1 << 24) * Math.random() | 0).toString(16);
    let dogembed = new Discord.RichEmbed()
    .setColor("#0f71fc")
    .setTitle("🐶 | **Here is your random dog:**")
    .setImage(body.url);
    
    message.channel.send(dogembed);
} else if(args[0] === "puppy")
 
randomPuppy()
    .then(url => {
        let puppyembed = new Discord.RichEmbed()
    .setColor("#0f71fc")
    .setTitle("🐶 | **Here is your random puppy:**")
    .setImage(url);
        message.channel.send(puppyembed);
    })
 }


module.exports.help = {
     name: "dog"
}
