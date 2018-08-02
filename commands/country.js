const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {
    if(!args[0]) return message.channel.send("Please specify a countries 3 letter code")
let countrycode = args[0];
let flagcode = countrycode.slice(0, 2);
let flag = `https://www.countryflags.io/${flagcode}/flat/64.png`
let {body} = await superagent
.get(`https://restcountries.eu/rest/v2/alpha/${countrycode}`);
let color = ((1 << 24) * Math.random() | 0).toString(16);
let countryEmbed = new Discord.RichEmbed()
.setTitle(body.name)
.addField("Capital", body.capital, true)
.addField("Region", body.subregion, true)
.addField("Population", body.population, true)
.addField("Currency", `Code: ${body.currencies[0].code}\nName: ${body.currencies[0].name}\nSymbol: ${body.currencies[0].symbol}`, true)
.setColor(color)
.setFooter(body.name, flag)
.setTimestamp(new Date());

message.channel.send(countryEmbed);


 }


module.exports.help = {
     name: "country"
}