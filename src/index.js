const { Client, Intents } = require("discord.js");
const { REST            } = require("@discordjs/rest");
const { Routes          } = require("discord-api-types/v9");
const mongoose            = require("mongoose");
const services            = require("./services");
const commands            = require("./commands");
                            require('dotenv').config();
                            require("./cron");

const { DISCORD_TOKEN, MONGODB_URI } = process.env;

const rest = new REST({ version: "9" }).setToken(DISCORD_TOKEN);
const bot  = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
});

// Declare the `epur()` method on String
String.prototype.epur = function () {
  return this?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
};

// Called when NotifyBot is online
bot.on("ready", async () => {
  const commandsList = Object.keys(commands)?.map(name => commands[name]);
  bot.guilds.cache
    .map(({ id, name, joinedTimestamp }) => ({ id, name, joinedTimestamp }))
    .sort((a, b) => b.joinedTimestamp - a.joinedTimestamp)
    .reverse()
    .map(({ name }) => console.log(`🔸 ${name}`));
  console.log(`Curently connected on (${bot.guilds.cache.size}) servers:`);
  const importedCmd = await rest.put(Routes.applicationCommands(bot.user.id), { body: commandsList });
  console.log(`${importedCmd.length} imported command${importedCmd.length ? "s" : ""}.`);
  await bot.user.setActivity("le royaume sans-nom", { type: "WATCHING" });
});

// Called each time an interaction slash command is invoked to NotifyBot
bot.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) {
    const { username, discriminator } = interaction.user;
    const argument = interaction.options.data.length &&
      `(${interaction.options?.data?.[0]?.name}):${interaction.options?.data?.[0]?.value}`;
    console.log(`${username}#${discriminator}: /${interaction.commandName} ${argument || ""}`);
    await interaction.reply(await services[interaction.commandName.epur()](interaction));
  }
});

// Connect to MongoDB's database and to Discord's API
(async () => {
  try {
    const uri = MONGODB_URI ?? "mongodb://localhost/notifybot";
    await mongoose.connect(uri);
    console.log(`Connected to database at ${uri}`);
    await bot.login(DISCORD_TOKEN);
  } catch (err) {
    console.error(err) ?? process.exit(1);
  }
})();
