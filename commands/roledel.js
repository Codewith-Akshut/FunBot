const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
  try {
    message.guild.roles.cache.forEach(roles => {
    roles.delete()
    .then(deleted => console.log(`Deleted role ${deleted.name}`))
    .catch(console.error);
    });
    message.delete();
  } catch (e) {
    console.log(e.stack);
  }
};

module.exports.help = {
  name: "roledel",
  desc: "Deletes Roles."
};
