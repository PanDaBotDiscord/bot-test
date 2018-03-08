const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
if(!message.channel.guild) return;
const embed = new Discord.RichEmbed()
 .setTitle("Security Bot Uptime:")
 .setDescription(`${secondsToString(process.uptime())}`)
 .setColor("#08088A")
.setFooter(bot.user.tag, bot.user.displayAvatarURL);       
message.channel.send(embed)

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

    
}

module.exports.config = {
  command: "uptime"
}
