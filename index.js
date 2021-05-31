const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

//readies the bot to start receiving information from discord
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Destiny 2', {type: 'PLAYING'}); 
});

//if destiny is typed onto a channel, "do your homework" is replied
client.on('message', msg => {
  if (msg.content.includes('destiny')) {
    msg.reply('do your homework!');
  };
});

//triggers every time presence is updated (i.e playing/stopped playing a game,music, etc..)
client.on('presenceUpdate', (oldPresence, newPresence) => {
  //locates the 'general' text channel in the server the presence update was found
  const channel = newPresence.guild.channels.cache.find(ch => ch.name === 'general');

  if (!newPresence.activities) return false; //if ended activity return - could add something here

  //do something for the activity
  newPresence.activities.forEach(activity => {
    if(activity.type === 'LISTENING') { //if listening on spotify
      channel.send(newPresence.user.toString() + ', stop playing trash music');
    }
    else if(activity.type === 'PLAYING' && activity.name === 'Destiny 2') { //if playing destiny 2
      channel.send('KAIWEN DO YOUR HOMEWORK!')
    }
  })
});

//do not push with the token in here or i will be the big mad
client.login(config.token);