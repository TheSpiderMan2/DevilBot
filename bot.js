cconst Discord = require('discord.js');
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



        var fox = "By KillerFox";  // ممنوع اللمس
        var perfix = "By KillerFox";
        console.log('Code BC By KillerFox Embed and Avatar ');
        client.on('message', message => { // BY KillerFox or ALphaCodes
            if (message.author.id === client.user.id) return; // BY KillerFox or ALphaCodes
            if (message.guild) { // BY KillerFox or ALphaCodes
           let embed = new Discord.RichEmbed()
            let args = message.content.split(' ').slice(1).join(' '); // BY KillerFox or ALphaCodes
        if(message.content.split(' ')[0] == '#bc') { // غير امر او برفكس
            if (!args[1]) { // BY KillerFox or ALphaCodes
        message.channel.send("**$bc <Messages> :incoming_envelope:  **"); // ممنوع المس
        return;
        }
                message.guild.members.forEach(m => {
           if(!message.member.hasPermission('ADMINISTRATOR')) return; // ممنوع اللمس
                    var bc = new Discord.RichEmbed()
                    .setThumbnail(client.user.avatarURL)
                    .addField(':beginner: Server :beginner: :twisted_rightwards_arrows: ', `${message.guild.name}`)
                    .addField(':heartpulse:  Sender :heartpulse: :twisted_rightwards_arrows: ', `${message.author.username}#${message.author.discriminator}`)
                    .addField(':scroll: Message :scroll: :twisted_rightwards_arrows: ', args)
                    .addField(':gemini: My Language :gemini: :twisted_rightwards_arrows: ',` JavaScript `)
                    .setFooter('Devolope Code By KillerFox') // حط اي شي تبيه
                    .setColor('RANDOM')
                    // m.send(`[${m}]`);
                    m.send(`${m}`,{embed: bc});
                });
            }
            } else {
                return;
            }
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

                     message.guild.createRole({ name: "Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "King", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Head Admin", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Admin", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Moderator", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Staff Test", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Staff", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP+", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Friend", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Member", color: "#ffffff", permissions: [] })
        

message.channel.sendMessage('**Please Wait While Creating The Roles**')
}
});


client.on('message',async message => {
  if(message.author.bot) return;
if(message.content.indexOf(prefix) !== 0) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(command === "start") {
var title = args[0].split('-').join(" ");
if(args[2]) {
  message.channel.send(` \`\`\`MD
  # Title format <word>-<word>-<word>
  < do not use spaces use - insted
   \`\`\``);
}
var time = args[1].split(":");
var sec = time[3];
var min = time[2];
var hou = time[1];
var day = time[0];
 
if((hou * 1) > 24) {
  message.channel.send(` \`\`\`MD
  # time format <days> : <hours> : <minutes> : <secondes>
  < hours must be 24 or less
   \`\`\``);
}
else if((sec * 1) > 60) {
  message.channel.send(` \`\`\`MD
  # time format <days> : <hours> : <minutes> : <secondes>
  < minutes must be 60 or less
  \`\`\``);
}
else if((min * 1) > 60) {
  message.channel.send(` \`\`\`MD
  # time format <days> : <hours> : <minutes> : <secondes>
  < seconds must be 60 or less
  \`\`\``);
}
else  {
 
var upgradeTime = sec;
upgradeTime = upgradeTime * 2 / 2 + (min * 60);
upgradeTime = upgradeTime * 2 / 2 + (hou * 60 * 60);
upgradeTime = upgradeTime * 2 / 2 + (day * 24 * 60 * 60);
var seconds = upgradeTime;
var duration = (upgradeTime * 1000)
  if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **s You Dont Have Premission**');
  if(!args) return message.channel.send(`**Use : #start  <Presentse> <Time>**`);
  if(!title) return message.channel.send(`**Use : **\`#start ${args[0]} Minutes\`** <Presentse>**`);
  if(!isNaN(args[1])) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
        let giveEmbed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setDescription(`**${title}** \nReact Whit 🎁 To Enter! \n**Ends  after   ${day} day  ${hou} hour  ${min} minute ${sec} second**`)
      .setFooter(message.author.username, message.author.avatarURL);
      message.channel.send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
          message.delete();
          m.react('🎁');
              var giveAwayCut = setInterval(function() {
                  var days        = Math.floor(seconds/24/60/60);
                  var hoursLeft   = Math.floor((seconds) - (days*86400));
                  var hours       = Math.floor(hoursLeft/3600);
                  var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
                  var minutes     = Math.floor(minutesLeft/60);
                  var remainingSeconds = seconds % 60;
                  if (seconds != 0) {
                    seconds--;
                  }
              let updateGiveEmbed = new Discord.RichEmbed()
              .setAuthor(message.guild.name, message.guild.iconURL)
              .setDescription(`**${title}** \nReact With 🎁 To Enter! \n**Ends  after   ${days} day  ${hours} hour  ${minutes} minute ${remainingSeconds} second**`)
              .setFooter(message.author.username, message.author.avatarURL);
              m.edit(updateGiveEmbed)
            }, 1000);
         setTimeout(() => {
          clearInterval(giveAwayCut)
           let users = m.reactions.get("🎁").users;
           let list = users.array().filter(u => u.id !== client.user.id);
           let gFilter = list[Math.floor(Math.random() * list.length) + 0]
           let endEmbed = new Discord.RichEmbed()
           endEmbed.setAuthor(message.author.username, message.author.avatarURL)
           endEmbed.setTitle(title)
           endEmbed.addField('Giveaway End !🎁',`Winners : ${gFilter}`)
         m.edit('** 🎁 GIVEAWAY ENDED 🎁**' , {embed: endEmbed});
         },duration);
       });
  }
}
});


client.on('message', function(message) {
  if(!message.channel.guild) return;
if(message.content ===  '%color 100') {
if(message.member.hasPermission('MANAGE_ROLES')) {
setInterval(function(){})
message.channel.send('سيتم عمل الالوان انتظر ...')
message.channel.send('** يجب ان يكون لديك برمشن ،"MANAGE_ROLES" ❌**')
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
