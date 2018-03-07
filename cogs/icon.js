const Discord = require("discord.js");
  var copy = "All CopyRights Reseaved For Luxury bot team";
  var link = "https://discord.gg/tjnFVzy";
  var img = "http://codeup.tk/s/do.php?img=26";
  var idc = "419258975650054145";
  var vr = 'Version  : 1.0.0';
module.exports.run = async (bot, message, args) => {
    if(!message.channel.guild) return;
  let ava = message.guild.iconURL
  let embed = {
      color:205254,
      description:"**This is "+message.guild.name+" icon**",
      image:{url:ava}
  }
  message.channel.send("", {embed});
  }


module.exports.config = {
  command: "icon"
}
