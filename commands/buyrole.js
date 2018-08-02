const Discord = require("discord.js");
const coins = require("../coins.json");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    let sCoins = coins[message.author.id].coins;
    let userrole = message.author.id;
    let VIP = message.guild.roles.find(`name`, "VIP");
let VIP2 = message.guild.roles.find(`name`, "VIP+");
let MVP = message.guild.roles.find(`name`, "MVP");
let MVP2 = message.guild.roles.find(`name`, "MVP+");
if(!args[0]) return message.channel.send("Please specify a role to buy! to see roles that can be bought type !roleshop");

if (args[0] === "VIP") {
    if(sCoins < 1000) return message.reply("You don't have enough coins!"); else {
        message.channel.send("Congratulations you purchased the role VIP!");
        coins[message.author.id] = {
            coins: sCoins - 1000
        };
         message.member.addRole(VIP)
    }
} else

if(args[0] === "VIP+") {
    if(sCoins < 1500) return message.reply("You don't have enough coins!"); else{
        message.channel.send("Congratulations! you purchased the role VIP+!");
        coins[message.author.id] = {
            coins: sCoins - 1500
        };
        message.member.addRole(VIP2)
    }
    } else

    if(args[0] === "MVP") {
        if(sCoins < 2500) return message.reply("You don't have enough coins!"); else {
            message.channel.send("You have purchased the role MVP");
            coins[message.author.id] = {
                coins: sCoins - 2500
            };
            message.member.addRole(MVP)
        }
        } else
        if(args[0] === "MVP+") {
            if(sCoins < 5000) return message.reply("You don't have enough coins!"); else {
                message.channel.send("You have purchased the role MVP+");
                coins[message.author.id] = {
                    coins: sCoins - 5000
                };
                message.member.addRole(MVP2)
            }
        }   


   
 }


module.exports.help = {
     name: "buyrole"
}
