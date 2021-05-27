const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.includes('destiny')) {
    msg.reply('do your homework!');
  }
});

client.login('ODQ3NTc2ODU3NDE0MzM2NTMy.YLAFdg.-H1fGljvOzuOynF3v6-ljArE1Xs');