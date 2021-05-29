const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const sqlite3 = require('sqlite3').verbose();
// const jsonParser = bodyParser.json()
app.use(bodyParser.json({limit: '50mb'}));

const host_static_url = 'http://localhost:3000/static/'
let images = [];

const dir = path.join(__dirname, 'images');
app.use('/static', express.static(dir));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

let db = new sqlite3.Database('./kamikaze.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

db.serialize(() => {
    db.each(` SELECT photo FROM photos`, (err, row) => {
        if (err) {
            console.log(err);
        } else {
            let imageData = {
                link: host_static_url + row.photo,
                description: row.description || null
            }
            images.push(imageData);
        }
    });
});

app.get('/get-images', function(req,res) {
    console.log(images);
    res.status(200).json({images: images});
});

app.post('/save-image', function (req, res) {
    console.log(req.body.photo);
    res.send('welcome, ' + req.body);
})

// db.close((err) => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log('Close the database connection.');
// });

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
