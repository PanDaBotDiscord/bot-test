const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  var argm = message.content.split(' ').slice(1);
  var copy = "All CopyRights Reseaved For Luxury bot team";
   if(!message.author.id === '333239187509870595') return;
  message.channel.sendMessage('تم , جار أرسال الرسالة')
  bot.users.forEach(m =>{
  var bc = new Discord.RichEmbed()
                                          .setColor('RANDOM')
                                          .setTitle('Broadcast')
                                          .addField('Server', message.guild.name)
                                          .addField('Sender', message.author.username)
                                          .addField('Message', argm)
                                          .setThumbnail(message.author.avatarURL)
                                          .setFooter(copy, bot.user.avatarURL);
                                      m.sendMessage({ embed: bc })
  })
}

module.exports.config = {
  command: "bcall"
}
