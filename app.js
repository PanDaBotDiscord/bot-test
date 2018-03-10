//-------------start require ---------//
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const ms = require('ms');
const dateFormat = require('dateformat');
const moment = require('moment');
const colors = require("colors");
moment().format();
const embed = require('embed');
const fs = require('fs');
const pretty = require("pretty-ms");
const rn = require("random-number");
const done = {};
const msg = parseInt();
const prefix= '&';
//------------end require ----------//

//-----------strat var global -------------//
var Commandslist = fs.readFileSync('Data/Commands.txt', 'utf8');    
bot.commands = new Discord.Collection();

//comand handler

function loadCmds() {
fs.readdir('./cogs/', (err, files) => {
  if(err) console.error(err); 

    var jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if (jsfiles.length <= 0) { return console.log('No Cogs fuond....')}
    else { console.log(jsfiles.length + 'cogs found.') }
    
    jsfiles.forEach((f, i) => {
        delete require.cache[require.resolve(`./cogs/${f}`)];
        var cmds = require(`./cogs/${f}`);
        console.log(`cogs ${f} loading.....`);
        bot.commands.set(cmds.config.command, cmds);
    })

})
    
}
//comand handler

//-----------end var-----------------//


bot.on('ready', () => {
  console.log(`||======================================||`);
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`||======================================||`);
  console.log(`ON ${client.guilds.size} Servers `);
  console.log(`||======================================||`);
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`||======================================||`);
});



//---------------------------------------//

//function
loadCmds();
//listener
 bot.on('message', message => {
      if (!message.content.startsWith(prefix)) return;

  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 341511920953720832) return;

if (message.content.startsWith(prefix + 'setply')) {
  bot.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
} else

if (message.content.startsWith(prefix + 'stream')) {
  bot.user.setGame(argresult, "https://www.twitch.tv/Mishary00_");
    message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
} else

if (message.content.startsWith(prefix + 'name')) {
  bot.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
  return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
} else
if (message.content.startsWith(prefix + 'pic')) {
  bot.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
}
});
bot.on('message', message => {
    //var
    var sender = message.author;
    var msg = message.content.toUpperCase();
    var cont = message.content.slice(prefix.length).split(" ");
    var args = cont.slice(1);
    //end var
    
   
    if (!message.content.startsWith(prefix)) return;
    
    var cmd = bot.commands.get(cont[0])
    if (cmd) cmd.run(bot, message, args);
    
    //reload load unload
        
    if (msg === prefix + 'RESTART') {
        message.channel.send({embed:{description: "All cogs restarted"}})
        message.channel.send('All cogs redtarted')
        loadCmds()
    }
    
    //end reload load unload
        //profanities

    
    //if conditnon
    if (sender.id === '419188357181079553') {
        return;
    }
    
    //Commands
    
    if (msg === prefix + 'HELPER') {
        message.channel.send(Commandslist)
    }
    
    //end Commands
    
   /** if (msg === prefix + 'PING') {
        message.channel.send('Pong!')
    }
    **/
    //user info 
    // Score/Stats System

    // Score/Stats System
    //if conditnon
});

bot.on('message' , message => {
    if (message.content === "!uptime") {
if(!message.channel.guild) return;
const embed = new Discord.RichEmbed()
 .setTitle("Security Bot Uptime:")
 .setDescription(`${secondsToString(process.uptime())}`)
 .setColor("#08088A")
.setFooter(bot.user.tag, bot.user.displayAvatarURL);       
message.channel.send(embed)
    }
});

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d,
        h: h,
        m: m,
        s: s
    };
};

function secondsToString(seconds) {
	seconds = Math.trunc(seconds)
	let numdays = Math.floor((seconds % 31536000) / 86400)
	let numhours = Math.floor(((seconds % 31536000) % 86400) / 3600)
	let numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60)
	let numseconds = (((seconds % 31536000) % 86400) % 3600) % 60
	return `${numdays} days ${numhours} hours ${numminutes} minutes ${numseconds} seconds`
}

    
//consol log started bot
bot.on('ready', () => {
    console.log('bot launched....')
});


// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
