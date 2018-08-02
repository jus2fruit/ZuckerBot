/*
ZuckerBot is a discord bot created by StrangeAlmond#001.
When I first started creating this bot I was just learning, I wanted to get into coding and decided to learn it by creating a discord bot.
At first it was an extremely basic bot and only had a ping command and such, but eventually as I learned JavaScript more and more this bot grew and grew.
ZuckerBot is under continuous development, ZuckerBot is completely owned by StrangeAlmond#001.
*/
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
let coins = require("./coins.json");
let xp = require("./xp.json");
let points = require("./points.json");
let prefix = botconfig.prefix;
let purple = botconfig.purple;
let cooldown = new Set();
let cdseconds = 1;

fs.readdir("./commands/", (err, files) => {
	if (err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js");
	if (jsfile.length <= 0) {
		console.log("Couldn't find commands.");
		return;
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});
});

bot.on("disconnected", function() {
	bot.connect();
});

bot.on("ready", async () => {
	console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
	bot.user.setActivity("z!help");
});

bot.on("guildMemberAdd", async member => {
	member.guild.channels.find("name","member-logs").send(`Welcome to **The Arcade** ${member}! Please read the rules in <#435572502648061962> and have fun!`);
	console.log(`${member.username} has joined The Arcade.`);
});

bot.on("guildMemberRemove", async member => {
	member.guild.channels.find("name","member-logs").send(`${member.displayName} has sadly left us.`)
	console.log(`${member.username} has left The Arcade.`)
});

bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));

bot.on("message", async message => {
	if (message.author.bot) return;
	if (message.channel.type === "dm") return;
	if(message.channel.id === "437448182994042881") {
		let MessageContent = parseInt(message.content);
		let ChannelName = message.channel.name;
		let ChannelNumberName = ChannelName.slice(9);
		let CHANNELNAME = parseInt(ChannelNumberName);
		if (!Number.isInteger(MessageContent)) return message.delete();
		if(MessageContent > CHANNELNAME) return message.delete();
	} 
	else if(message.channel.id === "437715679827853322") {
		let messagecontent = message.content;
		let amountOfWordsInMessage = messagecontent.split(' ').length;
		if(amountOfWordsInMessage > 1) return message.delete();
	}

	if (!coins[message.author.id]) {
		coins[message.author.id] = {
			coins: 0
		};
	}

	let coinAmt = Math.floor(Math.random() * 15) + 1;
	let baseAmt = Math.floor(Math.random() * 15) + 1;

	if (coinAmt === baseAmt) {
		coins[message.author.id] = {
			coins: coins[message.author.id].coins + coinAmt
		};

		fs.writeFile("./coins.json", JSON.stringify(coins), err => {
			if (err) console.log(err);
		});
	}

	let xpAdd = Math.floor(Math.random() * 5) + 5;

	if (!xp[message.author.id]) {
		xp[message.author.id] = {
			xp: 0,
			level: 1
		};
	}

	let curxp = xp[message.author.id].xp;
	let curlvl = xp[message.author.id].level;
	let nxtLvl = parseInt(curlvl) * 700;
	xp[message.author.id].xp = curxp + xpAdd;
	if (nxtLvl <= xp[message.author.id].xp) {
		xp[message.author.id].level = curlvl + 1;
		let lvlup = new Discord.RichEmbed()
			.setTitle("Level Up!")
			.setColor("#0f71fc")
			.addField("New Level", curlvl + 1)
			.setFooter(`${message.member.displayName} Leveled Up!`, message.author.displayAvatarURL)
			.setTimestamp(new Date());

		message.channel.send(lvlup);
	}
	fs.writeFile("./xp.json", JSON.stringify(xp), err => {
		if (err) console.log(err);
	});

	let curPoints = points[message.author.id].points;

	if (!points[message.author.id]) {
		points[message.author.id] = {
			points: 0
		};
	}

	points[message.author.id].points++;
	fs.writeFile("./points.json", JSON.stringify(points), err => {
		if (err) console.log(err);
	});
	if (!message.content.startsWith(prefix)) return;

	if (cooldown.has(message.author.id)) {
		message.delete();
		return message.reply("You have to wait 1 second between commands.");
	}
	if (!message.member.hasPermission("ADMINISTRATOR")) {
		cooldown.add(message.author.id);
	}

	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
	let newcmd = cmd.toLowerCase();
	let commandfile = bot.commands.get(newcmd.slice(prefix.length));
	if (commandfile) commandfile.run(bot, message, args);

	setTimeout(() => {
		cooldown.delete(message.author.id);
	}, cdseconds * 1000);
});
bot.login(botconfig.token);
