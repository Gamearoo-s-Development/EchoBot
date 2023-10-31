import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import { readdirSync } from "fs";
import { ApplicationCommandTypes, Client, Collection } from "oceanic.js";

export async function commandReg(client: Client, Commands: any) {

    readdirSync("./src/Commands/").forEach(dir => {
        const commands2 = readdirSync(`./src/Commands/${dir}/`).filter((f) =>
            f.endsWith(".ts")
        );

        var commands = client.application;

        // let devguild;

        //  if (bot.dev) devguild = client.guilds.cache.get('1054584863845519390');

        //if (bot.dev) commands = devguild.commands;

        for (let file of commands2) {
            let pull = require(`../src/Commands/${dir}/${file}`);

            Commands.set(pull.name, pull);

            let {
                name,

                description,
                options,
                default_member_permissions,

            } = pull;


            console.log(pull.name)


            commands?.createGlobalCommand({
                name: `${name}`, description: `${description}`, options: options, type: ApplicationCommandTypes.CHAT_INPUT
            })

        }


    })
}
