const { CronJob         } = require("cron");
const { Client, Intents } = require("discord.js");
const { setTimeout      } = require("timers/promises");
const Channel             = require("./models/channel");

const bot = new Client({ intents: [ Intents.FLAGS.GUILDS ] });

// Field Boss
new CronJob("50 4,10,16,22 * * *", async () => {
  const result = await Channel.find({ type: "field", mode: { $ne: true } });
  await Promise.all(result.map(async ({ identifier, message }) => (
    await (bot.channels.cache.get(identifier))?.send(message)
  )));
  setTimeout(600000);
  await Promise.all((await Channel.find({ type: "field", mode: true })).map(async ({ identifier, message }) => (
    await (bot.channels.cache.get(identifier))?.send(message)
  )));
}, null, true, "Europe/Paris");

// World Boss
new CronJob("20 4,10,16,22 * * *", async () => {
  const result = await Channel.find({ type: "world", mode: { $ne: true } });
  await Promise.all(result.map(async ({ identifier, message }) => (
    await (bot.channels.cache.get(identifier))?.send(message)
  )));
  setTimeout(600000);
  await Promise.all((await Channel.find({ type: "world", mode: true })).map(async ({ identifier, message }) => (
    await (bot.channels.cache.get(identifier))?.send(message)
  )));
}, null, true, "Europe/Paris");

// Chaos Boss
new CronJob("20 5,11,17,23 * * *", async () => {
  const result = await Channel.find({ type: "chaos", mode: { $ne: true } });
  await Promise.all(result.map(async ({ identifier, message }) => (
    await (bot.channels.cache.get(identifier))?.send(message)
  )));
  setTimeout(600000);
  await Promise.all((await Channel.find({ type: "chaos", mode: true })).map(async ({ identifier, message }) => (
    await (bot.channels.cache.get(identifier))?.send(message)
  )));
}, null, true, "Europe/Paris");

// Arena
new CronJob("50 20 * * 0,2", async () => {
  const result = await Channel.find({ type: "arena", mode: { $ne: true } });
  await Promise.all(result.map(async ({ identifier, message }) => (
    await (bot.channels.cache.get(identifier))?.send(message)
  )));
  setTimeout(600000);
  await Promise.all((await Channel.find({ type: "arena", mode: true })).map(async ({ identifier, message }) => (
    await (bot.channels.cache.get(identifier))?.send(message)
  )));
}, null, true, "Europe/Paris");

bot.login(process.env?.DISCORD_TOKEN);
