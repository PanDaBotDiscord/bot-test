module.exports.run = async (bot, message, args) => {
     if (message === prefix + 'PING') {
        message.channel.send('Pong!')
    }
    
}

module.exports.config = {
    command: "ping"
}
