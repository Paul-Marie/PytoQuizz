<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="Bwuno" src="https://pbs.twimg.com/profile_images/1508950960592211973/_eooqgBH_400x400.jpg"/>

# NotifyBot

[![](https://img.shields.io/badge/Add-NotifyBot-0199FE.svg?style=flat)](https://discord.com/api/oauth2/authorize?client_id=981840577794543666&permissions=277025655872&scope=bot%20applications.commands)
[![](https://img.shields.io/badge/discord.js-v13.6.0-blue.svg?logo=npm)](https://github.com/discordjs)

> Simple Ni No Kuni Discord bot notifying boss' arrival.

NotifyBot is a simple Discord bot which will remind your users of the upcoming arrival of **Field Boss**, **World Boss** and **Arena** (Lava Valley) of the game [Ni No Kuni](https://play.google.com/store/apps/details?id=com.netmarble.enngb&hl=fr&gl=US).


## Commands

This bot use Discord' slash commands, in order to use it you need to invite it on your Discord server with permissions to create **application commands**.

🔸 `/help` -> Display the help menu

🔸 `/add <channel> <type={FieldBoss,WorldBoss,ChaosBoss,Arena} [mode={before,now}] [message]` -> Add a reminder on a TextChannel (multiple on the same channel supported)

🔸 `/remove <channel>` -> Delete all reminder on a TextChannel

🔸 `/show` -> Display all reminders on this Discord server

The `message` posted musn't exceed 2500 char, and can mentions roles or peoples by mentionning the role or user directly using `<@id>` where `id` is user or role's Discord id.
> Same goes for emojis.

In order to make more reliable notifications, you can choose whether the bot publishes 10 min before the boss arrives or on time

|                                 | Notification schedule (mode: before) | Notification schedule (mode: now) |
|---------------------------------|--------------------------------------|-----------------------------------|
| World Boss (Everyday)           | `3:20`, `9:20`, `15:20`              | `3:30`, `9:30`, `15:30`, `21:30`  |
| Field Boss (Everyday)           | `3:50`, `9:50`, `15:50`, `21:50`     | `4:00`, `10:00`, `16:00`, `22:00` |
| Chaos Boss (Everyday)           | `4:20`, `10:20`, `16:20`, `22:20`     | `4:30`, `10:30`, `16:30`, `22:30` |
| Arena (Each Tuesday and Sunday) | `19:50`                              | `20:00`                           |

## Installation

⚠️ This part is reserved to developers wanting to make their own bot only, if you don't master Discord applications creation, just install the already made one by [clicking here](https://discord.com/api/oauth2/authorize?client_id=981840577794543666&permissions=277025655872&scope=bot%20applications.commands)

```sh
git clone https://github.com/Paul-Marie/NotifyBot;
cd NotifyBot/
```
Open `.env.dist` file and fill up `DISCORD_TOKEN` and `MONGODB_URI` (optionnal) in a new file nammed `.env`
> basic `MONGODB_URI` value can be `mongodb://localhost/notifybot`

Make sure to use [Node.JS](https://nodejs.org/fr/download/) v17 or higher, then start your bot using [yarn](https://classic.yarnpkg.com/fr/docs/install/#debian-stable) or [npm](https://nodejs.org/fr/download/) (here with yarn)
```sh
yarn;				# Install all dependencies
yarn start 			# Start the bot
```

Feel free to use [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) or [screen](https://www.gnu.org/software/screen/screen.html) in order to keep your Discord bot running.
