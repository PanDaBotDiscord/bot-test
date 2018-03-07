const Discord = require("discord.js");
  var copy = "All CopyRights Reseaved For Luxury bot team";
  var link = "https://discord.gg/tjnFVzy";
  var img = "http://codeup.tk/s/do.php?img=26";
  var idc = "419258975650054145";
  var vr = 'Version  : 1.0.0';
module.exports.run = async (bot, message, args) => {
          if(!message.channel.guild) return message.reply('**انتا تبغا توقف البوت ولا تستهبل رح السيرفر تشتغل قفطتك هاه يا ذكي**');
         var embed  = new Discord.RichEmbed()
         .addField("``علامة البوت :``",`${prefix}`)
         .addField("``مجموع سيرفرات البوت :``", bot.guilds.size,true)
         .addField("``مجموع القنوات :``", bot.channels.size,true)
         .addField("`` الرام المستخدم للجافا : ``",`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,true)
         .addField("``عدد المستخدمين الحاليين``",`${bot.guilds.reduce((mem, g) => mem += g.memberCount, 0)}`,true)
         .addField("``اصداري :``", `${vr}`,true)
         .addField("``bot Luxury bot 💎 ID :``", "ID : ``419188357181079553`` ",true)
         .addField("``لايمكن الاعتماد عليها``",` سرعة الاستجابة! \`${Date.now() - message.createdTimestamp} ms\``,true)
         .addField("add " , link)
         .setColor('RANDOM')
		            .setFooter(copy,img)
         message.channel.sendEmbed(embed)
}

module.exports.config = {
  command: "info"
}
