const { Client, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

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
    // تجاهل الرسائل التي يتم إرسالها بواسطة البوت نفسه
    if (message.author.bot) return;

    // التأكد من أن الرسالة تبدأ بالبادئة المحددة
    if (!message.content.startsWith(prefix)) return;

    // تقسيم الرسالة إلى الأوامر والمعاملات
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // التحقق من الأمر وتنفيذ الرد المناسب
    if (command === "ping") {
        message.reply("Pong");
    }
});

bot.login(process.env.token)
