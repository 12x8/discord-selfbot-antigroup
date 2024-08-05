import {Channel, Client, GroupDMChannel} from "discord.js-selfbot-v13";

export function handleCC(client: Client, channel: Channel) {
    if (channel.type === "GROUP_DM") {
        const groupChannel = channel as GroupDMChannel;
        groupChannel
            .delete()
            .then(() =>
                console.log(
                    `J'ai quitté le groupe auquel vous avez été ajouté ✅`
                )
            )
            .catch(console.error);
    }
}
