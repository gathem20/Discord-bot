import {
  ChatInputCommandInteraction,
  Client,
  GatewayIntentBits,
  Message,
  SlashCommandBuilder,
} from "discord.js";
import { responses } from "./resposnes";
import * as Dotenv from "dotenv";

Dotenv.config();

const server_id: string = process.env.SERVER;
const bot_id = process.env.client;
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
  const ping = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("hello from command");
  client.application.commands.create(ping);
  const hello = new SlashCommandBuilder()
    .setName("hello")
    .setDescription("hi man!");
  client.application.commands.create(ping);
  const goodbye = new SlashCommandBuilder()
    .setName("goodbye")
    .setDescription("bye!");
  client.application.commands.create(ping, server_id);
  client.application.commands.create(hello, server_id);
  client.application.commands.create(goodbye, server_id);

  console.log("bot is ready");
});
client.on("interactionCreate", (interaction: ChatInputCommandInteraction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === "ping") {
    interaction.reply("pong");
  }
  if (interaction.commandName === "hello") {
    interaction.reply("im good!");
  }
  if (interaction.commandName === "goodbye") {
    interaction.reply("have a nice day");
  }
});

client.on("messageCreate", (message: any) => {
  if (!message.content.startsWith("!bot-do ")) return;
  const content = message.content.slice("!bot-do ".length).trim().toLowerCase();

  let responded = false;
  for (const response of responses) {
    if (Array.isArray(response.message)) {
      message.reply(response.response);
      responded = true;
      break;
    } else {
      if (content.startsWith(response.message.toLocaleLowerCase())) {
        message.reply(response.response);
        responded = true;
      }
    }
    if (!responded) {
      message.reply("I don't understand!");
    }
    console.log(content);
  }
});
client.login(token);
// for (const response of responses) {
//   if(content === response.message)
// }
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
