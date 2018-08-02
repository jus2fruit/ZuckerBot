const Discord = require("discord.js");
const coins = require("../coins.json");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    let sCoins = coins[message.author.id].coins;
let numbers = [2];

let result = Math.floor((Math.random() * numbers.length));

if(!args[0]) return message.channel.send("Please specify a number to bet on!");

if(args[0] === "1") {
    if(numbers[result] === 2) {
        message.channel.send("I rolled 2! I win!")
        coins[message.author.id] = {
            coins: sCoins - 50
        };

    }
}

 }


module.exports.help = {
     name: "dice"
}