const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        message.channel.send('Hi, This is a fun bot to use!! Use !commands for commands.');

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "help",
    desc: "Help for the commands.",
    personalThoughts: "Its a command that helps."

}
