require("dotenv").config();
const { Telegraf } = require('telegraf');

const token = process.env.bot_token;
const bot = new Telegraf(token);

bot.on("text", (ctx) => {
    console.log(ctx.message, ctx.message.message_id);
    if (ctx.message.text.startsWith(process.env.prefix)){
        let command = ctx.message.text.split(" ");
        switch (command[0].slice(1)){
            case "clear":
                // let counter = parseInt(command[1]) + 1;
                // let step = 0;
                console.log("clearing");
                try {
                    ctx.deleteMessage(ctx.message.chat.id, ctx.message.message_id);
                    ctx.deleteMessage(ctx.message.chat.id, ctx.message.message_id-1);
                    ctx.deleteMessage(ctx.message.chat.id, ctx.message.message_id-2);
                } catch (error) {
                    console.log(error);
                }
        }
    }
})

bot.launch();
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));