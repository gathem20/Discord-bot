import dotenv from "dotenv"
import {Client , GatewayIntentBits} from "discord.js"

dotenv.config()
const client = new Client({
    intents:[
        GatewayIntentBits.Guilds , 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent
    ]
})

client.login(process.env.token)