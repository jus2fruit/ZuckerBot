const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
let toSort = args.join(" ").slice(0)
toSort.split(" ");
toSort.sort();
message.channel.send(toSort);

 }


module.exports.help = {
     name: "sort"
}