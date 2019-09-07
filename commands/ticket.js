const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    const categoryId = "591979728399892509";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => {

        createdChan.setParent(categoryId).then((settedParent) => {

            settedParent.overwritePermissions(message.guild.roles.find("name", "@everyone"), { "READ_MESSAGES": false });

            settedParent.overwritePermissions(message.guild.roles.find("name", "staff"), {                
            
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
                
            });

            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });

            var createEmbed = new discord.RichEmbed()
                .setTitle("Beste, " + message.author.username)
                .setDescription(`Vraag uw design aan in <#${settedParent.id}>`)
                .setFooter("Je ticket ligt op de lopende band");
    
            message.channel.send(createEmbed);


            var embedParent = new discord.RichEmbed()
            .setTitle("Beste, " + message.author.username.toString())
            .setDescription("**1.** Gratis of Betaald? \n**2.** Wat wilt u een Logo, banner of een cartoon? \n**3.** Welke grote? Logo, Youtube banner, Twitch Banner, Thumbnail, Custom grote? \n**4.** Wat voor Thema wilt u? \n**5.** Welke Tekst? \n**6.** Welke kleuren? \n**7.** Extra? \n\n**Groetjes Team DuckH-Design**");

        settedParent.send(embedParent);
    }).catch(err => {
        message.channel.send("Er is iets fout gelopen.");
    });

}).catch(err => {
    message.channel.send("Er is iets fout gelopen.");
}); 


}

module.exports.help = {
    name: "ticket",
    description: "Maak een ticket aan"
}