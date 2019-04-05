const express = require('express');
require('dotenv').config();
const massive = require('massive');
const session = require('express-session');

const properties = require('./controllers/properties');

const app = express();  

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is setup')
})

app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 123456789
    }
}))

app.get('/dashboard', properties.get)
app.post('/addProperty', properties.post)
app.delete('/deleteListing/:id', properties.delete)

app.listen(SERVER_PORT, () => console.log('listening on', SERVER_PORT))