const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

message.channel.send("The respective help commands for each bot:\n**Almond bot:** a!help\n**Casino bot:** cas!help\n**Chess bot:** |help\n**CoinMaster bot:** !cmhelp\n**DiscordRPG:** #!help \n**DuckHunt bot:** dh!help\n**Flarebot:** ;;help\n**Pokecord bot:** p!help\n**Tatsumaki bot:** t!help\n**Snail Racing bot:** !s help\n**Hangman bot:** h/help\n**Hex:** h!help (__Impersonating a Moderator is against the rules__)")

 }


module.exports.help = {
     name: "bothelp"
}


