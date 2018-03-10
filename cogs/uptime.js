const Discord = require("discord.js");
const dateFormat = require('dateformat');
const { version } = require('discord.js');
var moment = require("moment");
const fs = require('fs');
  var copy = "All CopyRights Reseaved For Luxury bot team";
  var link = "https://discord.gg/tjnFVzy";
  var img = "http://codeup.tk/s/do.php?img=26";
  var idc = "419258975650054145";
  var vr = 'Version  : 1.0.0'
  let prefix = "&";
module.exports.run = async (bot, message,) => {
          if(!message.channel.guild) return;
               let u = convertMS(bot.uptime);
     let uptime = u.d + " d  , " + u.h + " h  , " + u.m + " m  , " + u.s + " s"
     const embed = new Discord.RichEmbed()
         .setColor(654040)
         .setTimestamp(new Date)
         .setDescription(`Security Bot information`)
         .addField(':globe_with_meridians: Servers',`\`\`\`autohotkey
${bot.guilds.size}
\`\`\``,true)
         .addField(':hash: Channels',`\`\`\`autohotkey
${bot.channels.size}
\`\`\``,true)
         .addField(':busts_in_silhouette: Users',`\`\`\`autohotkey
${bot.users.size}
\`\`\``,true)

         .addField(':ping_pong: Ping',`\`\`\`autohotkey
${Date.now() - message.createdTimestamp} ms
\`\`\``,true)
          .addField(':floppy_disk: RAM Usage',`\`\`\`autohotkey
${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
\`\`\``,true)       
          .addField(':clock1: Uptime Bot',`\`\`\`autohotkey
${uptime}
\`\`\``,true)     
          .addField(':book: Discord.js ',`\`\`\`autohotkey
v ${version}
\`\`\``,true)     
          .addField(':love_letter: invite',`https://goo.gl/7sqhKL`,true)     
          .addField(':sos: Support Server',`https://discord.gg/bGBwGrZ`,true)    
          .setFooter(`BOT ID (${bot.user.id})`);      
  message.channel.sendEmbed(embed);

}
function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d,
        h: h,
        m: m,
        s: s
    };
};

function secondsToString(seconds) {
	seconds = Math.trunc(seconds)
	let numdays = Math.floor((seconds % 31536000) / 86400)
	let numhours = Math.floor(((seconds % 31536000) % 86400) / 3600)
	let numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60)
	let numseconds = (((seconds % 31536000) % 86400) % 3600) % 60
	return `${numdays} days ${numhours} hours ${numminutes} minutes ${numseconds} seconds`
}

module.exports.config = {
  command: "uptime"
}
