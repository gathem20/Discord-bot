"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dotenv = require("dotenv");
Dotenv.config();
var token = process.env.token;
// const client = new Client({
//   intents: [
//     GatewayIntentBits.Guilds,
//     GatewayIntentBits.GuildMessages,
//     GatewayIntentBits.GuildMessageReactions,
//     GatewayIntentBits.MessageContent,
//   ],
// });
// client.on("ready", (e) => {
//   console.log("bot is ready");
// });
// client.on("messageCreate", (message: any) => {
//   if (message.content === "ping") {
//     message.reply("pong");
//   }
// });
console.log(token);
// client.login(token);