import { ApplicationCommandTypes, Client, Collection, PermissionNames, Permissions } from "oceanic.js";
import { TOKEN } from "./config";
import { ExecuteLogger } from "ram-api.js";

import ApplicationCommands from "oceanic.js/dist/lib/routes/ApplicationCommands";
import { commandReg } from "./command";


export class Bot extends Client {
    public commands;
    constructor() {
        super({ auth: `Bot ${TOKEN}`, gateway: { intents: ["GUILDS", "GUILD_INTEGRATIONS"] } })
        this.commands = new Collection();
    }
    private RunTimeLoggerInfo(msg: string) {
        new ExecuteLogger("RunTime Manager").infoAsync(msg, "EchoBot");
    }
    private RunTimeLoggerError(msg: string) {
        new ExecuteLogger("RunTime Manager").errorAsync(msg, "EchoBot");
    }
    private RunTimeLoggerWarn(msg: string) {
        new ExecuteLogger("RunTime Manager").warnAsync(msg, "EchoBot");
    }
    public async start() {



        this.once('ready', () => {

            commandReg(this, this.commands)
            this.RunTimeLoggerInfo("Ready")
        })
        this.connect();

    }
}






