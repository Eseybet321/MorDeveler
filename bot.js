const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`BOT: ${client.user.tag} İsimiyle Giriş Yaptı!`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam Draktüse Hoşgeldin Eğlenmene Bak.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Tolgay') {
    msg.reply('he O adam ünlü işte :)');
  }
});

client.on('message', msg => {
  if (msg.content === 'Draktüs') {
    msg.reply('İşte Benim Favorim :)');
  }
});

client.on('message', msg => {
  if (msg.content === 'Twitch') {
    msg.reply('DraktüsTv Takip Etmessen Adam Deilsin');
  }
});

client.on('message', msg => {
  if (msg.content === 'Youtube') {
    msg.reply('==>(**Draktüs**)<== Neyy Hala Youtube Kanalımı Bilmiyomusun Ayıp Ettin');
  }
});

client.on('message', msg => {
  if (msg.content === 'Emray') {
    msg.reply('Hee o Adam Bence Filimleri Seslendirsin Helede DaffyDuck Çizgi Filmini');
  }
});

client.on('message', msg => {
  if (msg.content === 'Komutlar') {
    msg.reply('sa,Tolgay,Twitch,Youtube,Yapımcım');
  }
});

client.on('message', msg => {
  if (msg.content === 'Yapımcım') {
    msg.reply('==>**Eseybet**<== Beni Bu Adam Kodladı Saçma Kodlamış Olabilirmi ? :)');
  }
});

client.on('message', msg => {
  if (msg.content === 'benkimim') {
    msg.reply('**Sanane Kardeşim Özelime karışma yoooaaa**');
  }
});

client.on('message', msg => {
  if (msg.content === 'DraktüsBot') {
    msg.reply('Efendim Canım.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Kölem Olurmusun') {
    msg.reply('**Hayır Canım Tolgayın Dışında Kimsenin Kölesi Olmam**!!!!');
  }
});

client.login('NDc5MTc0MDI4MDU0MTAyMDM2.DlVofg.A9FwJAQHOfmPj-Oqzfm4Fz-BfPI');
