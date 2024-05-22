import sqlite3 from "sqlite3";

export class Data {
    db = new sqlite3.Database("src/data/chinook.db", err => {
        if (err) console.error(err);
        console.log("Connected to SQLite database");
    });

    tables() {
        this.db.all("SELECT name FROM sqlite_schema WHERE type = 'table' AND name NOT LIKE 'sqlite_%'", [], (err, rows) => {
            if (err) console.error(err);
            
        });
    }
    
    // New method to get all customers
    getAllCustomers(callback) {
        this.db.all("SELECT * FROM customers", [], (err, rows) => {
            if (err) {
                console.error(err);
                callback(err, null);
            } else {
                callback(null, rows);
            }
        });
    }

    customers() {
        this.db.all("SELECT COUNT(CustomerId) FROM customers", [], (err, rows) => {
            if (err) console.error(err);
            console.log(rows);
        });
    }
};
