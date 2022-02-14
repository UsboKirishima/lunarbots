import { Client, Message } from 'discord.js';

export const client: Client = new Client({ intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_MESSAGES",
    "GUILD_PRESENCES",
    "GUILD_VOICE_STATES"
] });
const prefix = '?';


client.on('messageCreate', async ( message: Message ) => {
    const command = prefix + message.content.toLowerCase();
    if(command == 'test') {
        await message.channel.send({ content: 'Test!' });
    }
})