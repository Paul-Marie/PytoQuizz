const { MessageEmbed } = require("discord.js");

// Return an Embed object containing all commands' informations
module.exports = () => ({
  embeds: [
    new MessageEmbed()
      .setColor(0x4e4ec8)
      .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIlYMPL47eWHXiPuCuW7cDupWrhNV0vgiHaAiTJ9uiSm-V2zgV_Y_UBT2DOEz5a6AU5A&usqp=CAU")
      .addField("`/help`",                           "Affiche le menu d'aide")
      .addField("`/add [channel] [message] [type]`", "Ajoute un rappel sur un channel")
      .addField("`/remove [channel]`",               "Supprime tout les rappels du channel")
  ]
});
