<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="PytoQuiz" src="https://data.topquizz.com/distant/quizz/big/8/1/0/5/125018_09e4887414.jpg"/>

# PytoQuiz

<p align="center">
  <a href="https://discord.com/api/oauth2/authorize?client_id=642935463048642570&permissions=347200&scope=applications.commands%20bot" alt="Build Status">
    <img src="https://img.shields.io/badge/Add-Bwuno-800080.svg?style=flat" />
  </a>
    <a href="https://github.com/discordjs">
    <img alt="discord.js" src="https://img.shields.io/badge/nodejs-v18.3-red.svg?logo=npm" >
  </a>
  <a href="https://www.typescriptlang.org/">
    <img alt="typescript" src="https://img.shields.io/badge/typescript-v4.7.3-blue.svg?logo=typescript" >
  </a>
  <a href="https://github.com/Paul-Marie/Bwuno/commits/master">
    <img src="https://img.shields.io/github/last-commit/Paul-Marie/Bwuno?style=flat-square&logo=github&logoColor=white" alt="GitHub last commit">
  </a>
  <a href="https://github.com/Paul-Marie/Bwuno/commits/master" alt="Code Size">
    <img src="https://shields.io/github/languages/code-size/Paul-Marie/Bwuno" />
  </a>
</p>

[![](https://img.shields.io/badge/discord.js-v13.8-green.svg?logo=node.js)](https://nodejs.org/dist/v18.6.0/node-v18.6.0-x64.msi)
[![](https://img.shields.io/badge/typescript-v1.22.17-blue.svg?logo=yarn)](https://github.com/yarnpkg/yarn/releases/download/v1.22.19/yarn-1.22.19.msi)
[![](https://img.shields.io/badge/mongoDB-v3.6.8-blackgreen.svg?logo=mongodb)](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.9-signed.msi)

> Simple site de quiz pour pyto.

## Installation

```sh
git clone https://github.com/Paul-Marie/PytoQuizz;
cd PytoQuizz/
```
Open `.env.dist` file and fill up `DISCORD_TOKEN` and `MONGODB_URI` (optionnal) in a new file nammed `.env`
> basic `MONGODB_URI` value can be `mongodb://localhost/notifybot`

Make sure to use [Node.JS](https://nodejs.org/fr/download/) v18 or higher, then start your bot using [yarn](https://classic.yarnpkg.com/fr/docs/install/#debian-stable) or [npm](https://nodejs.org/fr/download/) (here with yarn)
```sh
yarn;				# Install all dependencies
yarn start 			# Start the bot
```

Feel free to use [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) or [screen](https://www.gnu.org/software/screen/screen.html) in order to keep your Discord bot running.
