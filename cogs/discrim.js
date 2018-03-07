module.exports.run = async (bot, message, args) => {
    var args = message.content.split(" ").slice(1);
      if (message.author.bot) return;
      if (!message.content.startsWith(prefix)) return;
      var discri = args[0]
      let discrim
      if(discri){
      discrim = discri;
      }else{
      discrim = message.author.discriminator;
      }
      if(discrim.length == 1){
          discrim = "000"+discrim
      }
      if(discrim.length == 2){
          discrim = "00"+discrim
      }
      if(discrim.length == 3){
          discrim = "0"+discrim
      }
  
          const users = bot.users.filter(user => user.discriminator === discrim).map(user => user.username);
          return message.channel.send(`
              **Found ${users.length} users with the discriminator #${discrim}**
              ${users.join('\n')}
          `);
  }

module.exports.config = {
    command: "discrim"
}
