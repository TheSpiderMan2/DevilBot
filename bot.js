const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "#";

const bot = new Discord.Client()
  console.log("Bot launched...")

  client.on("ready", () => { 
    console.log('by SuchLuFFy'); client.user.setPresence({ 
           status: 'online', 
           game: { type: 0, name: 'This Bot still in Developing',
  
          } 
  
        }); 
        });



 



client.on('guildMemberAdd', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'log');
  if(!logChannel) return;
 
  let newMember = new Discord.RichEmbed()
  .setTitle('**[NEW MEMBER ADDED]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_lower_right: Joined **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**Days In Discord:** ${Days(member.user.createdAt)}`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)
 
  logChannel.send(newMember);
});

client.on('message', message => {
    var prefix = "#";
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.channel.send(`https://cdn.pg.sa/fjxlms81nk.png`);
  if(!reason) return message.channel.send(`https://cdn.pg.sa/fjxlms81nk.png`);
  if (!message.guild.member(user)
  .bannable) return message.reply(`This User Is Have High Role !`);
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


client.on('message', message => {

    if (message.author.bot) return;
  
    if (!message.content.startsWith(prefix)) return;
  
  
    let command = message.content.split(" ")[0];
  
    command = command.slice(prefix.length);
  
  
    let args = message.content.split(" ").slice(1);
  
  
  // -say
  
    if (command === "say") {
  
            message.delete()
  
      message.channel.sendMessage(args.join(" ")).catch(console.error);
  
    }
  
    
  
   
  
  
  if (command == "embed") {
  
      let say = new Discord.RichEmbed()
  
      .setDescription(args.join(" "))
  
      .setColor(0x23b2d6)
  
      message.channel.sendEmbed(say);
  
      message.delete();
  
    }
  
  
  
  });


client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "-";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)
 
                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}
 
});

client.on('message', message => {
    if (message.content === "#createroles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "-----ManagamentRoles-----", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "CM", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Community Manager", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "-----------------------", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Head Administrator", color: "#ff0000", permissions: [] })
                     message.guild.createRole({ name: "Senior Administrator", color: "#00e0ff", permissions: [] })
                     message.guild.createRole({ name: "Administrator", color: "#ff5600", permissions: [] })
                     message.guild.createRole({ name: "Support Team", color: "#5fee2f",perrmissions: [] })
                     message.guild.createRole({ name: "Head Moderator", color: "#04a5fa", permissions: [] })
                     message.guild.createRole({ name: "Senior Moderator", color: "#cb00f8", permissions: [] })
                     message.guild.createRole({ name: "Moderator", color: "#ff4100", permissions: [] })
                     message.guild.createRole({ name: "Designer", color: "#0cd7f3", permissions: [] })
                     message.guild.createRole({ name: "Staff", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "-----------------------", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "-----GamePassesRoles-----", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "LuckyPass Owner", color: "#e28d13", permissions: [] })
                     message.guild.createRole({ name: "V.I.P Owner", color: "#00ff3e", permissions: [] })
                     message.guild.createRole({ name: "-----------------------", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "-----Special Roles-----", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "YouTuber", color: "#fc3939", permissions: [] })
                     message.guild.createRole({ name: "Giveaways", color: "#2aabfc", permissions: [] })
                     message.guild.createRole({ name: "Special Bots", color: "#e93535", permissions: [] })
                     message.guild.createRole({ name: "-----------------------", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "-----RankRoles-----", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "SuPerPower Fan", color: "#13ff00", permissions: [] })
                     message.guild.createRole({ name: "Godly Fan", color: "#f1ac3f", permissions: [] })
                     message.guild.createRole({ name: "Legendary Fan", color: "#75ff00", permissions: [] })
                     message.guild.createRole({ name: "Marshall", color: "#ff8800", permissions: [] })
                     message.guild.createRole({ name: "The God", color: "#ff0000", permissions: [] })
                     message.guild.createRole({ name: "The Most Actve", color: "#2900ff", permissions: [] })
                     message.guild.createRole({ name: "Very Active", color: "#09f2f5", permissions: [] })
                     message.guild.createRole({ name: "Active", color: "#fabb3d", permissions: [] })
                     message.guild.createRole({ name: "-----------------------", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "-----Normal Roles-----", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "Muted", color: "#030000", permissions: [] })
                     message.guild.createRole({ name: "Fan", color: "#fff700", permissions: [] })
                     message.guild.createRole({ name: "Verified", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "UnVerified", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "Bots", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "-----------------------", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "-----Inviters Roles-----", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "God of inviting", color: "#00ff17", permissions: [] })
                     message.guild.createRole({ name: "Amazing Inviter", color: "#7b00ff", permissions: [] })
                     message.guild.createRole({ name: "Crazy Inviter", color: "#f54848", permissions: [] })
                     message.guild.createRole({ name: "Serious Inviter", color: "#079cf3", permissions: [] })
                     message.guild.createRole({ name: "Skilled inviter", color: "#00ffe1", permissions: [] })
                     message.guild.createRole({ name: "Inviter", color: "#fffa41", permissions: [] })
                     message.guild.createRole({ name: "Inviter", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "-----------------------", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "-----Permission Roles-----", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "Friend", color: "#ff00f7", permissions: [] })
                     message.guild.createRole({ name: "DJ", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "-----------------------", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "-----Bots Roles-----", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "-----------------------", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "-----Reaction Roles-----", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "GameNight Notify", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "Giveaway notify", color: "#fffff", permissions: [] })
                     message.guild.createRole({ name: "-----------------------", color: "#fffff", permissions: [] })

message.channel.sendMessage('**Please Wait While Creating The Roles**')
}
});




client.on('message', function(message) {
  if(!message.channel.guild) return;
if(message.content ===  '%color 100') {
if(message.member.hasPermission('MANAGE_ROLES')) {
setInterval(function(){})
message.channel.send('Wait While I Can Make The Colors Please')
message.channel.send('** I Must Have ،"MANAGE_ROLES" ❌**')
}
}
});

client.on('message', message=>{
if (message.content ===  '%color 100'){
if(!message.channel.guild) return;
if (message.member.hasPermission('MANAGE_ROLES')){
setInterval(function(){})
  let count = 0;
  let ecount = 0;
for(let x = 1; x < 100; x++){
message.guild.createRole({name:x,
color: 'RANDOM'})
}
}
}
});


client.login(process.env.BOT_TOKEN);
