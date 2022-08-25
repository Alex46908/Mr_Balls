require("dotenv").config();
const { Telegraf } = require('telegraf');

const
    token = process.env.bot_token,
    bot = new Telegraf(token);

bot.hears('/clear', (ctx) => console.log(ctx));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));