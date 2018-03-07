const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
         if (!message.channel.guild) return message.reply('** This command only for servers **');
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";

            }
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }


                var Date15= new Discord.RichEmbed()

                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('__**الامارات 🇦🇪**__',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('__**مكه المكرمه🕋**__',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』")
                .addField('__**مصر🇪🇬**__',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』")

                .addField('__**Date:earth_africa: **__',
                "『"+ Day + "-" + Month + "-" + Year +  "』")
               message.channel.sendEmbed(Date15);
 
}
module.exports.config = {
  command: "time"
}
