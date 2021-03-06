const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) =>{

    if(err)console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles <=0) {
        console.log("Files not found. Sorry");
        return;        
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`File ${f} is ready`);

        bot.commands.set(fileGet.help.name, fileGet);

    })

});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is nu online en klaar voor gebruik.`);

    bot.user.setActivity(`Duck H Design / !ticket`, { type: "WATCHING" });

});


bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    if(message.content.startsWith("!"));

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);


    var commands = bot.commands.get(command.slice(prefix.length));

    if(commands) commands.run(bot,message, arguments);


    
});

bot.login(process.env.BOT_TOKEN);
