const Discord = require("discord.js");
  var copy = "All CopyRights Reseaved For Luxury bot team";
  var link = "https://discord.gg/tjnFVzy";
  var img = "http://codeup.tk/s/do.php?img=26";
  var idc = "419258975650054145";
  var vr = 'Version  : 1.0.0'
  let prefix = "&";
 const msg = parseInt();
module.exports.run = async (bot, message, args) => {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => msg.delete(5000));
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => msg.delete(5000));
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).removeRole(muteRole);
const unmuteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
bot.channels.get(idc).sendEmbed(unmuteembed);

var unmuteembeddm = new Discord.RichEmbed()
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
.setFooter(copy,img)
.setColor("RANDOM")
  user.send( unmuteembeddm);

 }
module.exports.config = {
  command: "unmute"
}
