const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // Id van category van tickets.
    const categoryId = "619053958056509441";

    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (message.channel.parentID == categoryId) {

        message.channel.delete();

    } else {

        message.channel.send("Gelieve dit commando in een ticket kanaal te doen.");

    }

    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Hello staff")
        .setDescription("The ticket " + message.channel.name + " is closed.")
        .setFooter("ticket closed");
 
    // Vind kanaal voor de logs.
    var logChannel = message.guild.channels.find("name", "⚡tickets");
    if (!logChannel) return message.channel.send("Kanaal bestaat niet");

    logChannel.send(embedCloseTicket);

}

module.exports.help = {
    name: "close",
    description: "Close een ticket"
}
