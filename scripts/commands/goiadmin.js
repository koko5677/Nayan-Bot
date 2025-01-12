module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100080043381746") {
    var aid = ["100080043381746"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Baat aakhon ki suno dil mein utar jaati hai.. Zubba ka kya kabhi bi mukkar jaati hai","toRaaz Khol Dete Hain Nazuk Se Ishaare Aksar.. Kitni Khamosh Mohabbat Ki Zubaan Hoti Hai.","Aapki Aankho Mai Aaj Nami Dekhi. Tumhari Jindagi Ke Liye Kisi Ki Kami Dekhi","Naino kee mat suniyo re.. Naino kee mat suniyo.. Naina thag lenge","Ladkiya.. makeup mein le leti he ladko ki jaan.. aur saala makeup utaro toh poora kabristan..!","Aye Dil! Qasam Se Koi Nahi, Koi Nahi, Koi Nahi, Yaqeen maano Darwaza Faqat Hawa Se Khula","Ae Neend Aaja Ke Ab Koi Nahi Hai Paas Mere.! Ke Jis Ke Liye Tujhe Chora Tha Woh To Kab Kii So Gaye","Masla ye nahi k tera hu Masla ye hai k sirf tera hu..!!","toZindagi chain sey guzar jaye... Agar wo zehan sey utar jaye"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
