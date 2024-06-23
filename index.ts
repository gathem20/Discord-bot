import dotenv from "dotenv"
import {Client , GatewayIntentBits} from "discord.js"

dotenv.config()
const bot = new Client({
    intents:[
        GatewayIntentBits.Guilds , 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent
    ]
})
const prefix = "Bot-Do!";

bot.on("ready", () => {
    console.log("online");
});

bot.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        message.reply("Pong");
    }
});

bot.login(process.env.token)
