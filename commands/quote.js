const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {
    let {body} = await superagent
    .get(`https:\/\/talaikis.com\/api\/quotes\/random\/`);
    message.channel.send(`"${body.quote}" - ${body.author}.`);
 }


module.exports.help = {
     name: "quote"
}
