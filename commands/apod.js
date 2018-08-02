const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {
let NASAIcon = 'https://png.icons8.com/color/1600/nasa.png';
    const request = require('request');
 
    request('https://api.nasa.gov/planetary/apod?hd=true&api_key=mzIb6zZUjFCQiAidYwG4IfScOldXeNFWklTMbsJJ', { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
      let apod = new Discord.RichEmbed()
      .setColor("#0f71fc")
      .setTitle(body.title)
      .setImage(body.hdurl)
      .setDescription(body.explanation)
      .setFooter("NASA's Astronomy Picture Of The Day", NASAIcon)
      .setTimestamp(new Date());
      message.channel.send(apod);
    });
}


module.exports.help = {
     name: "apod"
}