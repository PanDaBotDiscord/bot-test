const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if(!message.channel.guild) return;  
        const googl = require('goo.gl');
        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('Error!');
        });

    }
module.exports.config = {
  command: "short"
}
