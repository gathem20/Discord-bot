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
  const content = message.content;
  const parts = content.split(" ");
  if (content.startsWith("!bot-do ping")) {
    message.reply("pong");
  } else if (parts[0] === "!bot-do") {
    message.reply("i dont understand ?");
  }
});

client.login(token);
