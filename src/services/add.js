const Channel = require("../models/channel");

// Add a new reminder message on a channel
module.exports = async (command) => {
  if (!command.memberPermissions.has(['ADMINISTRATOR']))
    return "Permissions insufisante :(";
  const channel = command.options.getChannel("channel");
  const message = command.options.getString("message");
  if (channel.type === "GUILD_TEXT") {
    await Channel.create({
      identifier: channel.id,
      guild: command.guild.id,
      type: command.options.getString("type"),
      mode: command.options.getInteger("mode"),
      ...(message && { message })
    });
    return `Message ajouté dans le channel <#${channel.id}> !`;
  } else
    return `Le channel <#${channel.id}> n'est pas textuel :(`
}
