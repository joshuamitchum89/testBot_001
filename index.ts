import DiscordJS, {Intents, Interaction, Message} from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

/* Properties */

const client = new DiscordJS.Client(
{
    intents:
    
    [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

/* Init Bot */

initBotClient();

client.login(process.env.TOKEN)

/* Functions */

function initBotClient()
{

client.on('ready', x =>
{
    botReadyMessage()
    initWOKCommands()
})

}

function initWOKCommands()
{
    new WOKCommands(client, 
    {
        commandDir: path.join(__dirname, 'commands')
        , typeScript: true
        , testServers: '934905816719446016'
    })
}

function botReadyMessage()
{
    console.log('The bot is ready')
}

function pingPongMessage(message)
{
    if (message.content === 'ping')
    {
        message.reply({ content: 'pong', })
    }
}