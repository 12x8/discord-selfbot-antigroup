import {Client} from "discord.js-selfbot-v13";

export function createClient() {
    const client = new Client();

    client.on("ready", () => {
        console.log(`Log sur ${client.user?.tag}`);
    });

    return client;
}