//-------------start require ---------//
const Discord = require("discord.js");
const bot = new Discord.Client();
//const colors = require("colors")
//const ms = require('ms');
//const dateFormat = require('dateformat');
//const moment = require('moment');
//moment().format();
//const embed = require('embed');
//const pretty = require("pretty-ms");
//const rn = require("random-number");
//const done = {};
const fs = require("fs");
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
  console.log(`||======================================||`.red);
  console.log(`Logged in as ${bot.user.tag}!`.green);
  console.log(`||======================================||`.red);
  console.log(`ON ${bot.guilds.size} Servers `.green);
  console.log(`||======================================||`.red);
  console.log(`Logged in as ${bot.user.tag}!`.green);
  console.log(`||======================================||`.red);
});

//---------------------------------------//

//function
loadCmds();
//listener
bot.on('message', message => {
    //var
    var sender = message.author;
    var msg = message.content.toUpperCase();
    var prefix= '&';
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

//consol log started bot
bot.on('ready', () => {
    console.log('bot launched....')
});


// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
