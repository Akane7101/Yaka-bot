module.exports = {
  name: "charlist",
  alias: ["characterlist", "botcharacterlist"],
  desc: "Ban a member",
  category: "Mods",
  usage: "setchar 0/1/2/3/4/5/6/7",
  react: "☢️",
  start: async (Miku, m, { text, prefix, modStatus }) => {

    let txt = `       『  *Bot Charactes*  』\n\n\n_0 - Yaka MD_\n\n_1 - Power_\n\n_2 - Makima_\n\n_3 - Denji_\n\n_4 - Zero Two_\n\n_5 - Chika_\n\n_6 - Miku_\n\n_7 - Marin_\n\n_8 - Ayanokoji_\n\n_9 - Ruka_\n\n_10 - Mizuhara_\n\n_11 - Rem_\n\n_12 - Sumi_\n\n_13 - Kaguya_\n\n_14 - Yumeko_\n\n_15 - Kurumi_\n\n_16 - Mai_\n\n_17 - Yor_\n\n_18 - Shinbou_\n\n_19 - Eiko_\n\n_20 - Benimaru_\n\n21 - Hinata_\n\n22 - Obito_\n\n23 - Mikasa_\n\n24 - Emilia_\n\n25 - Ayane_\n\n\nExample: *${prefix}setchar 7* or choose button below.\n`;

    let botLogos = [
      'https://cdn.dribbble.com/users/2400955/screenshots/10843457/test_4x.jpg',
      'https://wallpapercave.com/wp/wp11287624.jpg',
      'https://wallpapercave.com/wp/wp9666938.jpg',
      'https://wallpapercave.com/wp/wp11646689.jpg',
      'https://wallpapercave.com/uwp/uwp2159409.jpeg',
      'https://images4.alphacoders.com/100/1002134.png',
      'https://wallpapercave.com/wp/wp5440431.jpg',
      'https://wallpapercave.com/uwp/uwp2518151.webp',
      'https://wallpapers.com/images/file/kiyotaka-ayanokoji-in-pink-qs33qgqm79ccsq7n.jpg',
      'https://wallpapercave.com/uwp/uwp1175293.png',
      'https://wallpapercave.com/wp/wp7231907.jpg',
      'https://wallpapercave.com/wp/wp3923451.png',
      'https://moewalls.com/wp-content/uploads/2022/07/sumi-sakurasawa-hmph-rent-a-girlfriend-thumb.jpg',
      'https://wallpapercave.com/uwp/uwp912010.jpeg',
      'https://wallpapercave.com/wp/wp5235308.png',
      'https://wallpapercave.com/wp/wp5894820.jpg',
      'https://wallpapercave.com/wp/wp10128659.png',
      'https://wallpapercave.com/wp/wp11031122.jpg',
      'https://wallpapercave.com/uwp/uwp3393663.webp',
      'https://images8.alphacoders.com/122/1229829.jpg',
      'https://wallpapercave.com/wp/wp9179142.jpg',
      'https://wallpapercave.com/uwp/uwp985562.jpeg',
      'https://images3.alphacoders.com/105/1052843.jpg',
      'https://wallpapercave.com/wp/wp8142276.png',
      'https://wallpapercave.com/wp/wp8142276.png'
    ];

    let randomimage = botLogos[Math.floor(Math.random() * botLogos.length)];

    let sections = []
    let chars = ['Yaka', 'Power', 'Makima', 'Denji', 'Zero Two', 'Chika', 'Miku', 'Marin', 'Ayanokoji', 'Ruka', 'Mizuhara', 'Rem', 'Sumi', 'Kaguya', 'Yumeko', 'Kurumi', 'Mai', 'Yor', 'Shinbou', 'Eiko', 'Benimaru', 'Hinata', 'Obito', 'Mikasa', 'Emilia']
    let buttonDesc = [`Set bot character to Yaka MD`, `Set bot character to Power`, `Set bot character to Makima`, `Set bot character to Denji`, `Set bot character to Zero Two`, `Set bot character to Chika`, `Set bot character to Miku`, `Set bot character to Marin`, `Set bot character to Ayanokoji`, `Set bot character to Ruka`, `Set bot character to Mizuhara`, `Set bot character to Rem`, `Set bot character to Sumi`, `Set bot character to Kaguya`, `Set bot character to Yumeko`, `Set bot character to Kurumi`, `Set bot character to Mai`, `Set bot character to Yor`, `Set bot character to Shinbou`, `Set bot character to Eiko`, `Set bot character to Benimaru Shinmon`, `Set bot character to Hinata Hyuga`, `Set bot character to Obito`, `Set bot character to Mikasa`, `Set bot character to Emilia`]
    let buttonTexts = [`${prefix}setchar 0`, `${prefix}setchar 1`, `${prefix}setchar 2`, `${prefix}setchar 3`, `${prefix}setchar 4`, `${prefix}setchar 5`, `${prefix}setchar 6`, `${prefix}setchar 7`, `${prefix}setchar 8`, `${prefix}setchar 9`, `${prefix}setchar 10`, `${prefix}setchar 11`, `${prefix}setchar 12`, `${prefix}setchar 13`, `${prefix}setchar 14`, `${prefix}setchar 15`, `${prefix}setchar 16`, `${prefix}setchar 17`, `${prefix}setchar 18`, `${prefix}setchar 19`, `${prefix}setchar 20`, `${prefix}setchar 21`, `${prefix}setchar 22`, `${prefix}setchar 23`, `${prefix}setchar 24`, `${prefix}setchar 25`]

    for (let i = 0; i < chars.length; i++) {
      const list = {
        title: `${prefix}setchar ${i}`,
        rows: [

          {
            title: `${chars[i]}`,
            rowId: `${buttonTexts[i]}`,
            description: `${buttonDesc[i]}`
          }
        ]
      }
      sections.push(list)
    }


    let buttonMessage = {
      //image: { url: randomimage },
      text: txt,
      footer: `*${botName}*`,
      buttonText: "Choose Character",
      sections,
    };

    Miku.sendMessage(m.from, buttonMessage, { quoted: m });
  },
};
