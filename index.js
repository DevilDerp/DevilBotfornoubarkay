const Discord = require("discord.js");

const TOKEN = "NDUzNDk5MjkxODA2NDY2MDQ4.Dflrng.1CaODVfLbrUNBesCjY87dIJFsSI"
const PREFIX = "??"

var bot = new Discord.Client();


bot.on("ready", function(){
    console.log("Bot is on...");
    bot.user.setActivity('Being a Devil')

})


bot.on("message", message => {
    let msg = message.content.toUpperCase();
    let author = message.author;


    if(msg == PREFIX + "TOURNEY") {
        message.guild.channels.get("414567779014934538").send({embed:{
            color: 0xFF0000,
            description: "welcome"
            }
        }).then(m => m.react('👍'))

    }


    if(msg == PREFIX + "PC" + " " + "EU"){
        message.delete();
        var rolePC = message.guild.roles.find("name", "PC");
        var roleEU = message.guild.roles.find("name", "EU");
        var roleNewUser = member.guild.roles.find("name", "Bro");
        message.member.removeRole(roleNewUser)
        message.member.addRole(rolePC);
        message.member.addRole(roleEU);
        message.member.setNickname("[PC]"+ message.member.displayName )
        
    }
    if(msg == PREFIX + "PC" + " " + "NA"){
        message.delete();
        var rolePC = message.guild.roles.find("name", "PC");
        var roleNA = message.guild.roles.find("name", "NA");
        var roleNewUser = member.guild.roles.find("name", "Bro");
        message.member.removeRole(roleNewUser)
        message.member.addRoles(rolePC, roleNA);
        message.member.setNickname("[PC]"+ message.member.displayName )
        
    } 
})

bot.on('guildMemberAdd', async member => {//When a new member joins, dms and messages.
    var roleNewUser = member.guild.roles.find("name", "Bro")
    member.addRole(roleNewUser);
    member.send({embed: {
        color: 3447003,
        author: {
          name: member.user.username,
          icon_url: member.user.avatarURL
        },
        title: "This is an embed",
        url: "http://google.com",
        description: "This is a test embed to showcase what they look like and what they can do.",
        fields: [{
            name: "Fields",
            value: "They can have different fields with small headlines."
          },
          {
            name: "Social Media",
            value: "Coach Duality's [Twitter](https://twitter.com/Coach_Duality) For Updates. \nCoach Duality's [Twitch](https://www.twitch.tv/coach_duality) To watch his streams. \nCoach Duality's [Youtube](https://www.youtube.com/channel/UCJ7WVgv_k5MdTw8PIP8apAA) to watch his new tutorials."
          },
          {
            name: "Markdown",
            value: "You can put all the *usual* **__Markdown__** inside of them."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: member.user.avatarURL,
          text: "© DevilDerp"
        }
      }
    });
    member.guild.channels.get('414567779014934538').send({embed:{
        color: 0xFF0000,
        description: "Welcome " + '<@' + member.user.id + '>'
    }});
})


bot.login(TOKEN);
