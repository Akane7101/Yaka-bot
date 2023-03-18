const { mku } = require("../../Database/dataschema.js");

module.exports = { 

    name: "owner", 
    desc: "To view the list of current Mods", 
    alias: ["modlist","mods","mod"],
    category: "Core", 
    usage: "owner", 
    react: "🃏", 
    start: async (
      Miku, 
      m, 
      { text, prefix, mentionByTag, pushName, isCreator,owner,includes,modStatus} 
    ) => { 

        try { 
        
            var modlist = await mku.find({addedMods: "true"});
            var modlistString = "";
            var ownerList = global.owner;
            modlist.forEach(mod => {
              modlistString += `\n@${mod.id.split("94774516277@s.whatsapp.net")[0]}\n`
            });
            var mention = await modlist.map(mod => mod.id);
            let xy = modlist.map(mod => mod.id);
            let yz = ownerList.map(owner => owner+"94774516277@s.whatsapp.net");
            let xyz = xy.concat(yz);

            let textM = `             ╟- *${botName} Owner & Mods* -╢\n\n`;

            if(ownerList.length == 0){
              textM = "*No Mods Added !*";
            }

            for (var i = 0; i < ownerList.length; i++) {
              textM += `\n👹 Owner - @94774516277\n`
            }

            if(modlistString != ""){
              for (var i = 0; i < modlist.length; i++) {
                textM += `\n👻 Mods - @${modlist[i].id.split("@")[0]}\n`
              }
            } 
            
            if(modlistString != "" || ownerList.length != 0){
               textM += `\n\n⛩ For any help, ask in group 💬.\n\n*Thanks for using ${botName} Bot!..*\n`
            }
            
            return Miku.sendMessage( 
              m.from, 
              { text: textM, mentions: xyz }, 
              { quoted: m } 
            );

          } catch (err) { 
            console.log(err);
            return Miku.sendMessage(m.from, { text: `An internal error occurred while fetching the mod list.` }, { quoted: m });
          } 
        }, 
    }
