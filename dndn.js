const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

‏نقدم لك دعوة لسموك الراقيَ .
‏لنحظى بجمال حضورك وتواجدك
•بتنـورونـا الجميع :wink:
•اي مشكله توآجهك ولا يهمك. عندك الاداره تفضل ونحل مشكلتك مع آي شخص بالسيرفر.:telephone_receiver:
•عندك فكره موضوع تفضل شآركنا فيه:jack_o_lantern::gift:
•واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
شرفنا يا عسل:wink: :kissing_heart:
https://discord.gg/kcxk7p
joined info-selfie
! Selfie.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

‏نقدم لك دعوة لسموك الراقيَ .
‏لنحظى بجمال حضورك وتواجدك
•بتنـورونـا الجميع :wink:
•اي مشكله توآجهك ولا يهمك. عندك الاداره تفضل ونحل مشكلتك مع آي شخص بالسيرفر.:telephone_receiver:
•عندك فكره موضوع تفضل شآركنا فيه:jack_o_lantern::gift:
•واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
شرفنا يا عسل:wink: :kissing_heart:

https://discord.gg/kcxk7p
joined info-selfie
! Selfie.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login('NTEwNzgyOTI0Mjk2MTU5MjQz.DtRwgA.WkWN26hQL6qocQ9E8z7g8C9ctYg');