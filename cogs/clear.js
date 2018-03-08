const Discord = require("discord.js");
  var copy = "All CopyRights Reseaved For Luxury bot team";
  var link = "https://discord.gg/tjnFVzy";
  var img = "http://codeup.tk/s/do.php?img=26";
  var idc = "419258975650054145";
  var vr = 'Version  : 1.0.0'
  let prefix = "&";
 const msg = parseInt();
module.exports.run = async (bot, message, args) => {
	  if(!message.channel.guild) return message.reply('** هاذا الامر يخص طاقم اعضاء الاداره ياظريف وغير مسموح استخدامه في الخاص **');
 if (!args[1]) {
message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
var jedol3 = new Discord.RichEmbed()
.setColor("#008000")
.addField(':customs:', ' تم clear الشات ', true)
.addField('تم بواسطة :put_litter_in_its_place: :', `${message.author.username}#${message.author.discriminator}`, true)
.addField(':pencil2: عدد الرسائل الممسوحة ',args[1], true )
.setFooter(copy,img)
message.channel.send(jedol3).then(msg => {msg.delete(5000)});
bot.channels.get(idc).sendEmbed(jedol3);
} else {
  let messagecount = parseInt(args[1]);
message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
let jedol44 = new Discord.RichEmbed()
.setColor("#008000")
.addField(':customs:', ' تم حذف الشات  ', true)
.addField('تم بواسطة :put_litter_in_its_place: :', `${message.author.username}#${message.author.discriminator}`, true)
.addField(':pencil2: عدد الرسائل المحذوفة ',    args[1], true )
.setFooter(copy,img)
message.delete("..");
message.channel.sendEmbed(jedol44).then(msg => {msg.delete(5000)});
bot.channels.get(idc).sendEmbed(jedol44);
 }

 }
module.exports.config = {
  command: "clear"
}
