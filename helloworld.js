const Discord = require('discord.js');
const client = new Discord.Client();
const Token = 'MzczODMxNjE0OTc2ODg0NzM2.DkhoQQ.liVlEOovLqZtH1J1VS8frNbwp4w';

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
