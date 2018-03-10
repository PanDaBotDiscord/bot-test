const Discord = require("discord.js");
  var copy = "All CopyRights Reseaved For Luxury bot team";
  var link = "https://discord.gg/tjnFVzy";
  var img = "http://codeup.tk/s/do.php?img=26";
  var idc = "419258975650054145";
  var vr = 'Version  : 1.0.0'
  let prefix = "&";
module.exports.run = async (bot, message, args) => {
 var mentionned = message.mentions.users.first();
    var bot;
      if(mentionned){
          var bot = mentionned;
      } else {
          var bot = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${bot.avatarURL}`)
      message.channel.sendEmbed(embed);;
  }
module.exports.config = {
  command: "avatar"
}
