import { Client, GatewayIntentBits } from "discord.js";
import * as Dotenv from "dotenv";
Dotenv.config();
const token = process.env.token;
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
});
client.on("ready", (e) => {
  console.log("bot is ready");
});

client.on("messageCreate", (message: any) => {
  console.log(message.content);
  if (message.content === "ping") {
    message.reply("pong");
  }
});

client.login(token);
