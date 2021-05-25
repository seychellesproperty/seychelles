const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../kamikaze.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

db.serialize(() => {
    db.each(` id,
                  image
           FROM photos`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row.id + "\t" + row.name);
    });
});

// close the database connection
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
