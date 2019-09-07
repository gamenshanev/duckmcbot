const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const aantalSterren = args[0];

    if (!aantalSterren || aantalSterren < 1 || aantalSterren > 5) return message.channel.send("Geef een aantal sterren op tussen 1-5!");

    const bericht = args.splice(1, args.length).join(' ') || '**Geen bericht meegegeven!**';

    var reviewChannel = message.guild.channels.find("name", "»⭐review");
    if (!reviewChannel) return message.channel.send("reviews kanaal niet gevonden!");

    var sterren = "";

    for (var i = 0; i < aantalSterren; i++) {
        sterren += ":star: ";
    }

    message.delete();

    var icon = message.guild.displayAvatarUrl;

    const review = new Discord.RichEmbed()
        .setTitle(`${message.author.username} heeft een review geschreven! :tada: `)
        .setColor("#00ff00")
        .setThumbnail(icon)
        .addField("sterren:", `${sterren}`)
        .addField("Review: ", `${bericht}`);

    message.channel.send(`${message.author.username} Je hebt succesvol een review gemaakt! :white_check_mark: `);
    return reviewChannel.send(review);

}

module.exports.help = {
    name: "review",
    description: "Stuur een review in het review kanaal"
};