const Discord = require('discord.js');
const client = new Discord.Client();
const tokenModule = require('./token');

Token = tokenModule.getToken();
console.log(`Welcome to SafetyBot`);
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(Token);
