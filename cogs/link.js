const Discord = require("discord.js");
  var copy = "All CopyRights Reseaved For Luxury bot team";
  var link = "https://discord.gg/tjnFVzy";
  var img = "http://codeup.tk/s/do.php?img=26";
  var idc = "419258975650054145";
  var vr = 'Version  : 1.0.0'
  let prefix = "&";
module.exports.run = async (bot, message, args) => {
  if(!message.channel.guild) return message.reply('** This command only for servers **');

        message.channel.createInvite({
        thing: true,
        maxUses: 2,
        maxAge: 86400
    }).then(invite => {

        const em1 = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("RANDOM")
        .setTimestamp()
        .setDescription(`هاذا الشخص طلب رابط, \n 
        الرابط: \`${invite.url}\``)
   .setFooter(message.guild.name, message.guild.iconURL);
      bot.channels.get(idc).sendEmbed(em1);
        message.author.sendMessage(invite.url)
        message.author.sendMessage("هاذا الرابط لمستخدم واخد فقط")
      return;
    });
    
      	    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(copy,"تم ارسالك في الخاص",img)
   .setFooter(message.guild.name, message.guild.iconURL);
      message.channel.sendEmbed(embed);
    }
module.exports.config = {
  command: "link"
}
