const Discord = require("discord.js");
const talkedRecently = new Set();
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot,message,args) => {

    if (talkedRecently.has(message.author.id)) {
        message.channel.send("There is a 24 hour cooldown for this command!");
} else {
let coin = 100;

    coins[message.author.id] = {
        coins: coins[message.author.id].coins + coin
    };
    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if (err) console.log(err)
    });

    message.channel.send("You got your 100 daily coins!")
     
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 240000);
}

 }


module.exports.help = {
     name: "daily"
}


