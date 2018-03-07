module.exports.run = async (bot, message, args) => {
     if (msg === prefix + 'PING') {
        message.channel.send('Pong!')
    }
    
}

module.exports.config = {
    command: "ping"
}
