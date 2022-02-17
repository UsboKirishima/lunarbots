const { Client, Message } = require('discord.js');
const { token, postegreURI } = require('../config.json')
const database = require('pg')

/*
const pool = new database.Pool({
    postegreURI,
})

const sqlclient = new database.Client({
    postegreURI,
})

sqlclient.connect();

sqlclient.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
  })*/

const client = new Client({ intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_MESSAGES",
    "GUILD_PRESENCES",
    "GUILD_VOICE_STATES"
] });
const prefix = '?';

client.on('ready', async () => {
    console.log('[STATUS] Online');
})


client.on('messageCreate', async ( message ) => {
    const command = prefix + message.content.toLowerCase();
    if(message.content.toLowerCase() == 'test') {
        await message.channel.send({ content: 'Test!' });
    }
})

client.login(token);

