const express = require("express");
const session = require('express-session');
const flash = require('connect-flash');
const app = express();

app.use(session({secret: 'mipropiaclave'}));  
app.use(flash());

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/static'));

app.use('/static', express.static('static'));

app.use(require('./routes/cisco'));

const server = app.listen(8000, () =>
console.log(`el server esta usando el puerto: ${server.address().port}!`)
);