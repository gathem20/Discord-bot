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
client.on("ready", (e) => {
  console.log("bot is ready");
});
client.on("messageCreate", (message: any) => {
  if (!message.content.startsWith("!bot-do ")) return;
  const content = (
    message.content.replace("!bot-do ", "") as string
  ).toLowerCase();
  let responded = false;
  for (const response of responses) {
    if (content === response.message) {
      message.reply(response.response);
      responded = true;
    }
    // for (const response of responses) {
    //   if(content === response.message)
    // }
  }
  if (!responded) {
    message.reply("I don't understand!");
  }
  console.log(content);
  // const content = message.content;
  // const parts = content.split(" ");
  // if (content.startsWith("!bot-do ping")) {
  //   message.reply("pong");
  // } else if (parts[0] === "!bot-do") {
  //   message.reply("i dont understand ?");
  // }
  // if (content === "!bot-do who are you") {
  //   message.reply("i'm beta bot for multiverses");
  // }
});
client.login(token);
