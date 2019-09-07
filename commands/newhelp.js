const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var helpEmbed = new discord.RichEmbed()
     .setTitle("**__HELP__**")
     .setColor("#cc00ee")
     .addField("Tickets", `!help ticket`)
     .addField("Fun", `!help fun`)
     .addField("Overig", `!help overig`)
     .addField("Meme", `!help meme`)
     .addField("Staff", `!help staff`)
     .setFooter("Typ een van deze help category's");

    if(!arguments[0]) return message.channel.send(helpEmbed);

    var options = ["ticket", "fun", "overig", "staff", "meme"];

    var result = options[Math.floor(Math.random() * options.length)];

    if(arguments[0] == "ticket"){

        var ticketEmbed = new discord.RichEmbed()
            .setTitle("**__TICKET HELP__**")
            .setColor("#ffff00")
            .addField("!ticket", `Maak een ticket aan`)
            .addField("!new", `Maak een ticket aan`)
            .addField("!bestelling", `Maak een ticket aan`)
            .addField("!close", `sluit een ticket`)
            .addField("!add", `Soon`)
            .addField("!claim", `Soon`);

        return message.channel.send(ticketEmbed)

    }

    else if(arguments[0] == "fun"){

        var funEmbed = new discord.RichEmbed()
        .setTitle("**__FUN HELP__**")
        .setColor("#ffff00")
        .addField("!sps", `Speel steen papier schaar`)
        .addField("!8ball", `Stel me een vraag en ik antwoord`)
        .addField("!flip", `Krijg een random nummer tussen 1 en 100`)
        .addField("!kopofmunt", `Speel kop of munt`);

        return message.channel.send(funEmbed);

    }

    else if(arguments[0] == "overig"){

        var overEmbed = new discord.RichEmbed()
            .setTitle("**__OVERIGE HELP__**")
            .setColor("#ffff00")
            .addField("!botinfo", `Verkrijg info over de bot.`)
            .addField("!serverinfo", `Verkrijg info over de server`)
            .addField("!idee", `Laat een idee achter`)
            .addField("!review", `Laat een review achter`)
            .addField("!portfolio", `Krijg een portfolio overzicht te zien`)
            .addField("!ping", `Verkrijg de bot ping`)
            .addField("!support", `Is er een probleem met de? dan kan je hier terecht`);
            
                return message.channel.send(overEmbed);

    }

    else if(arguments[0] == "meme"){

        var memeEmbed = new discord.RichEmbed()
            .setTitle("**__MEME HELP__**")
            .setColor("#ffff00")
            .addField("!meme", `random meme van duckpraat of alleenhoi alleenhoi`)
            .addField("!hoimeme", `meme van alleenhoi`)
            .addField("!duckmeme", `meme van duckpraat`)
            .addField("!newmeme", ` nieuwste meme van duckpraat`);
            
        return message.channel.send(memeEmbed);

    }

    else if(arguments[0] == "staff"){

        var staffEmbed = new discord.RichEmbed()
            .setTitle("**__STAFF HELP__**")
            .setColor("#ffff00")
            .addField("!kick", `Kick een speler`)
            .addField("!ban", `ban een speler`)
            .addField("!say", `Laat de bot iets zeggen => Zonder embed`)
            .addField("!sayembed", `Laat de bot iets zeggen => Met embed`)
            .addField("!clear", `Clear een antal berichten`)
            .addField("!announce", `Laat de bot een mededeling doen`);
            
        return message.channel.send(staffEmbed);

    }

}

module.exports.help = {
    name: "help",
    description: "speel steen, papier, schaar."
}