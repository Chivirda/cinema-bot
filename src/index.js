import "dotenv/config";
import { Telegraf } from "telegraf";
import { Data } from "./data/data.js";

class CinemaBot {
    constructor() {
        this.bot = new Telegraf(process.env.BOT_TOKEN);
        this.data = new Data(); // Initialize the Data class

        this.bot.start((ctx) => {
            // Fetch all customers when the bot starts
            this.data.getAllCustomers((err, customers) => {
                if (err) {
                    ctx.reply('Sorry, there was an error fetching customers.');
                } else {
                    // Format and send the list of customers
                    let message = 'List of Customers:\n\n';
                    customers.forEach(customer => {
                        message += `${customer.CustomerId}: ${customer.FirstName} ${customer.LastName}\n`;
                    });
                    ctx.reply(message);
                }
            });
        });
        
        this.bot.launch();
    }
}

new CinemaBot();
