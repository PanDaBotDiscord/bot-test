const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
        message.channel.send('Pong!')
    }

module.exports.config = {
  name: "ping"
}
