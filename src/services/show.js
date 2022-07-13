const Channel = require("../models/channel");

// Add a new reminder message on a channel
module.exports = async (command) => {
  if (!command.memberPermissions.has(['ADMINISTRATOR']))
    return "Permissions insufisante :(";
  const result = await Channel.find({ guild: command.guild.id });
  const content = result?.map(c =>
    `🔸 <#${c.identifier}> (${c.type.charAt(0).toUpperCase()}${c.type.slice(1)}${c.type !== "arena" ? " Boss" : ''} ${c.mode ? '🕛' : '🕦'}): \`${c.message}\``
  )?.join('\n') ?? "Aucun rappel pour le moment !";
  return { content, ephemeral: true };
}