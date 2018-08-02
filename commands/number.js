const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {
let number = args[0];
var request = require('request');
request(`http://numbersapi.com/${number}`, function (error, response, body) {
  message.channel.send(body);
});

 }


module.exports.help = {
     name: "number"
}