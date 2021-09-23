const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
        message.delete();
        var i = 1;
        while(i<=1000){
          message.channel.send('@everyone');
          i++;
        }

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "spam",
    desc: "Mentions everyone and spam.",

}

