import {createClient} from './client';
import {handleCC} from './events/channelCreate';
import {TOKEN} from './config/config';

const client = createClient();

client.on('channelCreate', (channel) => {
    handleCC(client, channel);
});

client.login(TOKEN).catch(console.error);