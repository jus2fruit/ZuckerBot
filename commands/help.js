const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
message.channel.send('**Standard Commands List**\n**The Prefix is z! use this before every command**' + 
                        "\n\n**Core -** `help` `server` `botinfo` `userinfo` `uptime` `ping`" + 
                        "\n**Fun -** `dog` `dogfact` `cat` `catfact` `8ball` `coinflip` `joke` `insultme` `xkcd` `avatar` `help` `shoot` `hug` `slap` `kiss`" +
                        "\n**Economy -** `daily` `balance` `pay` `stats` `level` `roleshop` `buyrole` `merit`" + 
                        "\n**Utilities -** `report` `randcolor` " + 
                        "\n**Information -** `number` `quote` `apod` `rules` `country`");
                        
if(message.member.roles.find('name', "Moderators")) {
    let modcommands =     message.author.send("**Moderator Commands List**\n**The Prefix is z! use this before every command**" +
    "\n\n`warn` `warnlevel` `clear` `tempmute`");
    try{
        await modcommands;
    }catch(e){
        message.reply("Your DMs are locked. I cannot send you the Moderator Help Menu")
    }
}

if(message.member.roles.find("name", "Admins")) {
    let adcommands = message.author.send("**Admin Commands List**\n**The Prefix is z! use this before every command**" +
    "\n\n`warn` `warnlevel` `clear` `tempmute` `addrole` `removerole` `kick` `ban`");
    try{
        await adcommands
    }catch(e){
    message.reply("Your DMs are locked. I cannot send you the Admin help menu.");
    }
    }
 }


module.exports.help = {
     name: "help"
}
