const Discord = require("discord.js");
  var copy = "All CopyRights Reseaved For Luxury bot team";
  var link = "https://discord.gg/tjnFVzy";
  var img = "http://codeup.tk/s/do.php?img=26";
  var idc = "419258975650054145";
  var vr = 'Version  : 1.0.0'
  let prefix = "&";
module.exports.run = async (bot, message, args) => {
   var embed  = new Discord.RichEmbed()
      .addField("مميزات البوت :",`
**الجديد لعرض خيارات الميوزك اكتب  <help music**
:white_check_mark: بوت عربي
👨🚀 مبرمجين البوت 24 ساعه اونلاين يمكنك التواصل معاهم
:wrench: تحديثات للبوت كل يوم تقريبا
:radio_button: 24 ساعه اونلاين
:money_with_wings: كل الخصائص مجانيه
:gear: يخدم اكتر من 300 سيرفر
بوت ميوزك شبه متاكمل
      `)
	  .addField("اوامر الادارة :",`
	  **======================================**
**وضع الاوتو رولز**
***ملحوظة وضع الاوتو رولز يحتاج الى برمشن ***
**manage roles permission**
** ${prefix}rename : لتغير نك العضو **
**${prefix}wel : لتفعيل الترحيب **
       **======================================**
`)
	  
      .addField("اوامر السيرفرات :",`
      **======================================**
**${prefix}server  : معلومات عن السيرفر**
**${prefix}kick    : لطرد شخص من السيرفر**
**${prefix}ban     : لتعطي شخص باند من سيرفرك**
**${prefix}clear   : لحذف رسائل السيرفر**
**<mute / <unmute : لأعطاء شخص ميوت / لألغاء الميوت من على الشخص**
**${prefix}bc      : لأرسال رساله جماعيه فى مربع امبد**
    **======================================**
      `)
      .addField("اوامر الاشخاص :",`
      **======================================**
**${prefix}id : لأظهار ملف التعريف الخاص بك**
**${prefix}profile : لأظهار البروفايل الخاص فيك **
**${prefix}daily : لاخذ هديتك اليومية **
**${prefix}rep : لاعطاء لايك**
**${prefix}myinfo  : لمعرفه معلومات ال بلاينج و غيرو **
**${prefix}short   : لاختصار الروابط **
  **======================================**
`)
.addField("الدعم الفني :",`
**======================================**
**${prefix}support  : سيرفر الدعم الخاص ب سيمبل بوت **
**${prefix}invite   : لأضافه سيمبل بوت الى سيرفرك   **
**${prefix}info     : للتعرف على البوت اكثر **
  **======================================**
`)
.addField("رابط دعوه luxuryclient 💎 :",`
**======================================**
**https://discord.gg/tjnFVzy**
**======================================**
`)
.addField("رابط سيرفر client luxuryclient 💎 :",`
**======================================**
**https://discord.gg/tjnFVzy**
**======================================**
`)
.setFooter(copy,img)
.setColor('RANDOM')
      message.author.send({embed})
	  message.reply("الرجاء التكد من الخاص :mailbox_with_mail: ");
  }
module.exports.config = {
  command: "help"
}
