const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {
    let xkcdn = Math.floor(Math.random() * 601);
    let {body} = await superagent
    .get(`https:\/\/xkcd.com\/${xkcdn}\/info.0.json`);
    let color = ((1 << 24) * Math.random() | 0).toString(16);
    let xkcdimg = new Discord.RichEmbed()
    .setImage(body.img)
    .setColor("#0f71fc");
    message.channel.send(xkcdimg);
 }


module.exports.help = {
     name: "xkcd"
}
