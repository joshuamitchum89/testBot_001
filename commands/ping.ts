import { Message } from 'discord.js';
import { ICommand } from 'wokcommands';

export default 
{
    category: 'Testing'
    , description: 'Replies with pong'
    , slash: true
    , testOnly: true
    , callback: async ({ interaction }) => 
    {
        interaction.reply('Fetching..')
        const msg = await interaction.fetchReply() as Message
        interaction.editReply(`VMG's ping is: \`${msg.createdTimestamp - interaction.createdTimestamp}ms\``)
    }
} as ICommand