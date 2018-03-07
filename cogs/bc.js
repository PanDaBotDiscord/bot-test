const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
var copy = "All CopyRights Reseaved For Luxury bot team";
if (message.author.bot) return;
if (!message.channel.type == `text`) return message.channel.send('هذا الأمر فقط للسيرفرات')
var per = "You Don\'t Have Permission ";
        var request = `Requested By ${message.author.username}`;
                    var args = message.content.split(" ").join(" ").slice(2 + prefix.length);
                    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(per + "Administrator");
                    if (!args) return message.reply('You Must Place An Argument To Do This Command');
                    message.reply(`هل انت متاكد انك تريد ارسال هاذهه الرسالة ? [Y]/[yes]`).then(() => {
                        message.channel.awaitMessages(msg => msg.content == 'y' || msg.content == 'نعم' || msg.contnet == "ن", {
                            max: 1,
                            time: 30000,
                            errors: ['time']
                        })
                            .then(() => {
                                message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`);
                                message.guild.members.forEach(m => {
                                    var bc = new
                                        Discord.RichEmbed()
                                        .setColor('RANDOM')
                                        .setTitle('Broadcast')
                                        .addField('Server', message.guild.name)
                                        .addField('Sender', message.author.username)
                                        .addField('Message', args)
                                        .setThumbnail(message.author.avatarURL)
                                        .setFooter(copy, bot.user.avatarURL);
                                    m.send({ embed: bc })
                                });
                            });
                    });
                
}                


module.exports.config = {
  command: "bc"
}
