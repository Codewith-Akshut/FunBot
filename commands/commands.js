const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        message.channel.send('Bot Under Maintenance');

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "commands",
    desc: "Tells the commands",
    personalThoughts: "Its a command that tells the commands."

}
