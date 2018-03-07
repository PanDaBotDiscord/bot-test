const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  message.author.send(`   : https://discordapp.com/oauth2/authorize?client_id=419188357181079553&scope=bot&permissions=1610087543`)
             message.reply("من فضلك راجع الخاص :mailbox_with_mail: ").then(m => m.delete(1500));
             message.delete();
module.exports.config = {
  command: "inv"
}
