const Discord = require("discord.js");
 
let coins = require("../coins.json");

module.exports.run = async (bot,message,args) => {

if(!coins[message.author.id]){
    return message.reply("You don't have any coins!")
}
if(!args[0]) return message.channel.send("Please specify a user to pay!");
let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!pUser) return message.channel.send("I couldn't find that user!")
if(!args[1]) return message.channel.send("Please specify how much you want to pay!");
if(!coins[pUser.id]){
    coins[pUser.id] = {
coins: 0
    };
}

let pCoins = coins[pUser.id].coins;
let sCoins = coins[message.author.id].coins;

if(sCoins < args[0]) return message.reply("You don't have enough coins!");

coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
};

coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
};

message.channel.send(`You have given ${pUser} ${args[1]} coins!`);

fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) console.log(err)
});

}


module.exports.help = {
     name: "pay"
}
