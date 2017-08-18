client.login("")

var prefix = "px;"

client.on("message", function(message) {

    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        //ping command
        case "ping":
             const embed = new Discord.RichEmbed()
           	.setColor("#940000")
           	.setTitle(":ping_pong: Pong!", "Response time: " + client.ping + "ms")
           	.setFooter("Requested by " + message.author.username, message.author.displayAvatarURL)
           	.setTimestamp()
		message.channel.send({embed});
		break;
	// about command
	case "about":
	     const embed = new Discord.RichEmbed()
	        .setColor("#940000")
  		.setTitle("About PixaBot", "PixaBot is a Discord bot that features games, image manipulation, moderation and music commands written in JavaScript.")
           	.setFooter("Requested by " + message.author.username, message.author.displayAvatarURL)
           	.setTimestamp()
		message.channel.send({embed});
		break;
	// version command
        case "version":
            message.channel.send("The current version of PixaBot is " + 0.2  + " beta 1")
            break;
        case "kick":
		    message.channel.send("Coming Soon!")
			break;
		case "ban":
		    message.channel.send("Coming Soon!")
			break;
		case "help":
		    message.channel.send("coming soon!")
			break;
	    case "coming soon":
		    message.channel.send("kick: px;kick ban: px;ban and help command")
            break;
        case "CanIbeMod?":
		    message.channel.send("no but you can be jailed if you want (from kaiss)")
            break;		
}
})
