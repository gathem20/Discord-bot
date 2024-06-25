import { Client, GatewayIntentBits, Message } from "discord.js";
import { responses } from "./resposnes";
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
client.on("ready", () => {
  console.log("bot is ready");
});

client.on("messageCreate", (message: Message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith("!bot-do ")) return;

  const content = message.content.slice("!bot-do ".length).trim().toLowerCase();
  let responded = false;

  for (const response of responses) {
    if (Array.isArray(response.message)) {
      if (response.message.some((msg) => content.startsWith(msg.toLowerCase()))) {
        message.reply(response.response);
        responded = true;
        break;
      }
    } else {
      if (content.startsWith(response.message.toLowerCase())) {
        message.reply(response.response);
        responded = true;
        break;
      }
    }
  }

  if (!responded) {
    message.reply("I don't understand!");
  }
});

client.login(token);
