const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var closeEmbed = new discord.RichEmbed()
        .setTitle("Close a ticket")
        .setFooter("Ticket closed")

    if(!arguments[0]) return message.channel.send(closeEmbed);

    var CategoryName = message.guild.channels.find("name", "tickets");
 
    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (message.channel.parentID == categoryName) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("You need to do this in a ticket.");
 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Hello staff")
        .setDescription("The ticket " + message.channel.name + " is closed.")
        .setFooter("ticket closed");
 
    // Vind kanaal voor de logs.
    var logChannel = message.guild.channels.find("name", "logs");
    if (!logChannel) return message.channel.send("log channel not found, make a channel **logs** on.");
 
    logChannel.send(embedCloseTicket);

        }


module.exports.help = {
    name: "close",
    description: "Close a ticket."
}
