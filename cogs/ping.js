const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
     if (message === prefix + 'PING') {
        message.channel.send('Pong!')
    }

}

module.exports.help = {
  name: "ping"
}
