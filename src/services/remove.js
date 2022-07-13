const Channel   = require("../models/channel");

// Add a new reminder on a channel
module.exports = async (command) => {
  if (!command.memberPermissions.has(['ADMINISTRATOR']))
    return "Permissions insufisante :(";
  const channel = command.options.getChannel("channel");
  if (channel.type === "GUILD_TEXT") {
    const success = await Channel.findOneAndDelete({
      identifier: channel.id,
      guild: command.guild.id
    });
    return success ? `Rappel du channel <#${channel.id}> retiré !` : "Rappel non trouvé :(";
  } else
    return `Le channel <#${channel.id}> n'est pas textuel :(`
}
