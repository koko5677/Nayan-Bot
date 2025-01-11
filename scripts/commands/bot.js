const axios = require('axios');
const fs = require('fs'); 
const path = require('path');

module.exports.config = {
  name: "koko brand",
  version: "1.koko",
  hasPermssion: 0,
  credits: "Koko",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100000194336639") {
    var aid = ["100000194336639"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Ruko Jan me kam kar rahahu ", " abey ruk me kam pe hu jan wait karo mere liye", "or bata khana khaya ya ni khaya ni khaya to avi jake khale ni to mukka marunga, Jan I love You soo Much Me avi on ni hu","oh ho samajh gea tujhe kiss cahiye ye le ummmmmmmmmmmmmmmmmmah😏"," jan apni dheyan rakh me ake bat kartihu tere sath ","oee jaan naraj ho ,kiu najar ho me tumko bht love karta hu","i love you jaan","I miss you jaan","I need you Jaan","Tu sawal nahi, tu paheli hai ,Meri manjil tu nahi,teri saheli hai !!","Khoobsurat Ladkiyaa Zyada Padhti Nahi Hai, Kyo Ki Unhe Pata Hota Hai, Ki Duniya Ke Kisi Na Kisi Kone Me Koi Gadha Unke Liye Doctor Ya Engineer Ban Raha Hoga......??","Mahilaao Ko Oxizon Ki Zaroorat Nahi Hoti Hai,.....We Taareefe Sun Kar Bhi Zinda Reh Sakti Hai. ???","Shadi Bijali Ke Jhatko Ki Tarah Hoti Hai, Connection Sahi Jagah Ho Jaaye To Jeewan Bhar Roshni Hi Roshni, Or Galat Jagah Ho Jaaye To Zindagi Bhar Jhatke Hi Jhakte. ???","Aadami Ko Aurat Ki Taaqat Ka Andaaja Usi Waqt Laga Lena Chahiye, Jab Wo Use Lene Poori Barat Le Kar Jata Hai , Or Wo Waha Se Sherni Ki Tarah Akeli Chali Aati Hai.....???",];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
