const Discord = require("discord.js");
const dateFormat = require('dateformat');
var Canvas = require('canvas')
var jimp = require('jimp')
var moment = require("moment");
const fs = require('fs');
  var copy = "All CopyRights Reseaved For Luxury bot team";
  var link = "https://discord.gg/tjnFVzy";
  var img = "http://codeup.tk/s/do.php?img=26";
  var idc = "419258975650054145";
  var vr = 'Version  : 1.0.0'
  let prefix = "&";
module.exports.run = async (bot, message,) => {
  let args = message.content.split(" ").slice(1);
const w = ['./image.jpg']
        let Image = Canvas.Image,
            canvas = new Canvas(802, 404),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 802, 404);

})



 var mentionned = message.mentions.users.first();
          var getvalueof;
          var bot;
          if(mentionned) {
            getvalueof = mentionned;
          } else {
            getvalueof = message.author;
          }

    ctx.font = '45px Impact';
    //ctx.rotate(.1);
    ctx.fillText(getvalueof.username, 60, 180);
    ctx.fillText('tweets :', 160, 310);
    ctx.fillStyle = 'blue';
    //ctx.drawImage(img, 70, 320)
   // var te = ctx.measureText(message.author.username);
    
        //var img = new Image;
    //img.url = message.author.avatarURL;




                        
                                        let url = message.author.avatarURL.endsWith(".webp") ? message.author.avatarURL.slice(5, -20) + ".png" : message.author.avatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                                //Avatar
                                let Avatar = Canvas.Image;
                                let ava = new Avatar;
                                ava.src = buf;
                                ctx.save();

                                ctx.beginPath();
                                ctx.arc(75, 75, 60, 0, Math.PI*2, true); 
                                ctx.closePath();
                                ctx.clip();
                                ctx.drawImage(ava, 0, 0, 150, 150);
                                ctx.restore();
                                               //wl
                        ctx.font = '35px Arial Bold';
                        ctx.fontSize = '40px';
                        ctx.fillStyle = "#dadada";
                        ctx.textAlign = "center";
                        ctx.fillText(`@${message.author.username}`, 250, 75);

                      //ur name
                        ctx.font = '35px Arial';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(args.join("  "), 445, 185);


    ctx.beginPath();
    //ctx.lineTo(50, 102);
    //ctx.lineTo(50 + te.width, 102);
    ctx.stroke();


  message.channel.sendFile(canvas.toBuffer());
      message.react('?')
})
})
}
module.exports.config = {
  command: "tweet"
}
