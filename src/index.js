"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.GuildMessageReactions,
        discord_js_1.GatewayIntentBits.MessageContent,
    ],
});
client.on("ready", function (e) {
    console.log("bot is ready");
});
client.on("messageCreate", function (message) {
    if (message.content === "bing") {
        message.reply("bong");
    }
});
client.login(process.env.token);
