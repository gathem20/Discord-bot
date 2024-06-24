import { Client, GatewayIntentBits } from "discord.js";
import Dotenv from "dotenv";
import path from "path";

Dotenv.config({ path: "../.env" });
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
  if (message.content === "bing") {
    message.reply("bong");
  }
});

client.login(process.env.token);
