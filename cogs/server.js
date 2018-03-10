const Discord = require("discord.js");
const dateFormat = require('dateformat');
  var copy = "All CopyRights Reseaved For Luxury bot team";
  var link = "https://discord.gg/tjnFVzy";
  var img = "http://codeup.tk/s/do.php?img=26";
  var idc = "419258975650054145";
  var vr = 'Version  : 1.0.0'
  let prefix = "&";
module.exports.run = async (bot, message,) => {
 if(!message.channel.guild) return message.reply('**انتا تبغا توقف البوت ولا تستهبل رح السيرفر تشتغل قفطتك هاه يا ذكي**');
         const millis = new Date().getTime() - message.guild.createdAt.getTime();
         const now = new Date();
         dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
         const verificationLevels = ['بلا', 'ضعيف', 'وسط', 'قوي', 'قوي جدا'];
             const days = millis / 1000 / 60 / 60 / 24;
                      let roles = bot.guilds.get(message.guild.id).roles.map(r => r.name);
         var embed  = new Discord.RichEmbed()
         .setAuthor(message.guild.name, message.guild.iconURL)
         .addField(":id: اي دي السيرفر :", message.guild.id,true)
         .addField(":crown: صاحب السيرفر :", message.guild.owner,true)
         .addField(" :earth_africa: بلد السيرفر :" , message.guild.region,true)
         .addField(' :globe_with_meridians: عدد القنوات  :',`**[${message.guild.channels.size}]** Channel `,true)
         .addField(" :telephone_receiver: عدد القنوات الصوتية :", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
         .addField(" :hammer_pick: السيرفر له : ", ` ** [ ${days.toFixed(0)} ] ** يوم ` ,true)
         .addField(":gear: عدد الرولات :",`**[${message.guild.roles.size}]** Role `,true)
         .addField("MemberLive :" ,message.guild.available,true)
         .addField(" :construction: مستوى حماية السيرفر:", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)
         .addField(" :calendar: صنع بتاريخ :", ` ** [ ${dateFormat(message.guild.createdAt)} ] ** `,true)
         .addField("الاعضاء :",`
       المجموع  : **${message.guild.memberCount} **
         `)
         .setThumbnail(message.guild.iconURL)
         .setColor('RANDOM')
		 .setFooter(copy,img)
         message.channel.sendEmbed(embed)
}
module.exports.config = {
  command: "server"
}
