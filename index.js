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

//do not push with the token in here or i will be the big mad
client.login('Bot Token in here');