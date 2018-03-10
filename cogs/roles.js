const Discord = require("discord.js");
  var copy = "All CopyRights Reseaved For Luxury bot team";
  var link = "https://discord.gg/tjnFVzy";
  var img = "http://codeup.tk/s/do.php?img=26";
  var idc = "419258975650054145";
  var vr = 'Version  : 1.0.0'
  let prefix = "&";
module.exports.run = async (bot, message,) => {
     if(!message.channel.guild) return;
    
      var roles = message.guild.roles.map(roles => `\n${roles.name} - (${roles.id})`).join('');
       message.channel.send(`
**\`\`Roles Count [${message.guild.roles.size}]\`\`**
\`\`\`autohotkey
${roles}
\`\`\``);
};

module.exports.config = {
  command: "roles"
}
