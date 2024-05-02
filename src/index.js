import "dotenv/config";
import { Telegraf } from "telegraf";
import { Data } from "./data/data.js";

class CinemaBot {
    constructor() {
        this.bot = new Telegraf(process.env.BOT_TOKEN);
        this.bot.start((ctx) => ctx.reply("Hi!"));
        this.bot.hears("таблицы", (ctx) => {
            console.log("Index:", new Data().tables());
        })
        this.bot.hears("customers", (ctx) => {
            console.log("Index:", new Data().customers());
        })
        this.bot.launch();
    }
}

new CinemaBot();
