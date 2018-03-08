const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
       const m = await message.channel.send("Ping!");
	 m.edit(`:ping_pong: Pong! (\`${Date.now() - message.createdTimestamp}\`ms) - API: (\`${Math.round(bot.ping)}\`ms)`);

    }

module.exports.config = {
  command: "ping"
}
