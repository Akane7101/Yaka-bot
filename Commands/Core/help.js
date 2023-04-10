module.exports = {
  name: "help",
  alias: ["menu", "h", "helpm", "helpmenu"],
  desc: "Gives all bot commands list",
  react: "🤖",
  category: "Core",
  start: async (Miku, m, { prefix, pushName, NSFWstatus, args, commands, uptime }) => {
      const pad = (s) => (s < 10 ? "0" : "") + s;


          let txt = `
          ⎾ ░ • 𝑳𝒊𝒔𝒕 𝒐𝒇 𝑪𝒐𝒎𝒎𝒂𝒏𝒅 𝑴𝒆𝒏𝒖 • ░ ⏌
    ══════════════════
    👾 *ʙᴀsɪᴄ* ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage - *${prefix}core*

    👾 ɢʀᴏᴜᴘ ʀᴇʟᴀᴛᴇᴅ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage - *${prefix}grpc*

    👾 ᴍᴏᴅ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage - *${prefix}modc*

    👾 ғᴜɴ ᴄᴏᴍᴍᴀɴᴅs! Cᴀɴ ᴜsᴇ ɪɴ ɢʀᴏᴜᴘs.
    🈁 Usage - *${prefix}func*

    👾 ᴅᴏᴡɴʟᴏᴀᴅ ʏᴛ/ᴛɪᴋᴛᴏᴋ/ɪɢ ᴠɪᴅ/ᴀᴜᴅ (ɪɴᴄʟᴜᴅᴇ ᴅᴏᴄ ᴛʏᴘᴇ).
    🈁 Usage - *${prefix}mediac*

    👾 ᴀɴɪᴍᴇ, ɢᴏᴏɢʟᴇ, sᴏɴɢ ʟʏʀɪᴄs ᴇᴛᴄ.
    🈁 Usage - *${prefix}searchc*

    👾 ᴀᴜᴅɪᴏ ʀᴇʟᴀᴛᴇᴅ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage - *${prefix}utilitiesc*

    👾 ᴍᴀᴋᴇ ᴀ sᴛɪᴄᴋᴇʀ/ϙᴜᴏᴛᴇ, ᴛᴜʀɴ ᴛᴏ ᴀᴜᴅ/ᴠɪᴅ.
    🈁 Usage - *${prefix}imageeditc*

    👾 sᴀʏ ᴀɴʏᴛʜɪɴɢ ɪɴ ᴇɴɢʟɪsʜ, ᴊᴀᴘᴀɴᴇsᴇ.
    🈁 Usage - *${prefix}audioc*

    👾 ᴍᴀᴋᴇ ᴀɴʏ ɪᴍᴀɢᴇ ɪɴᴛᴏ ʙʟᴜʀ, ᴄɪʀᴄʟᴇ ᴏʀ ʀᴇᴍᴏᴠᴇ ʙɢ.
    🈁 Usage - *${prefix}essentialsc*

    👾 *ᴏɴʟʏ ғᴏʀ ᴛʜᴇ ᴡᴇᴇʙs!* Iғ ʏᴏᴜ ʟᴜᴄᴋʏ, ᴄᴀɴ sᴇᴇ ᴛʜᴇ NSFW ᴄᴏᴍᴍᴀɴᴅs ᴀs ᴡᴇʟʟ.
    🈁 Usage - *${prefix}weebc*

    👾 ʀᴇᴀᴄᴛɪᴏɴ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage - *${prefix}reactionc*

    👾 ᴍᴀᴋᴇ ᴀɴ ᴀᴡsᴏᴍᴇ ʟᴏɢᴏ ᴜsɪɴɢ ʙᴏᴛ!
    🈁 Usage - *${prefix}logomakerc*

    👾 RPG ɢᴀᴍᴇ. Mɪɴᴇ!!
    🈁 Usage - *${prefix}minecraftc*

    👾 ɢᴇᴛ ᴛʜᴇ ᴇᴄᴏɴᴏᴍʏ ʀᴇʟᴀᴛᴇᴅ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage - *${prefix}economyc*

    
    📶 𝚂𝚎𝚛𝚟𝚎𝚛 𝚄𝚙𝚝𝚒𝚖𝚎  |  *${uptime}*`;
    
    
    await Miku.sendMessage(m.from, {
        video:{url:"https://graph.org/file/2740dd34d7e91b076d302.mp4"},
        caption:txt, 
        gifPlayback: true
    },
        {quoted:m})

      }
  }
