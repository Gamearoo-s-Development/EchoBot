import 'dotenv/config'
import { ExecuteLogger } from 'ram-api.js';

const { TOKEN } = process.env;

if (!TOKEN) {
    new ExecuteLogger("STARTUP").fatalAsync("No Bot token", "EchoBot")
}

export {
    TOKEN
}