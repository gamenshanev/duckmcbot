const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var botIcon = bot.user.displayAvatarUrl;

    var serverEmbed = new discord.RichEmbed()
        .setTitle("Support")
        .setThumbnail(botIcon)
        .setColor("#fc00ff")
        .addField("Maker", "<@384399354066239488>")
        .addField("Support discord", `[Kik hier](https://discord.gg/8vDkB68)`)
        .setFooter("DuckH design support");

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "support",
    Description: "**Enkel voor staff** => Ban een speler."
}