require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials',{
});

// servir contenido estatico desde carpeta publica
app.use(express.static('public'));

// control generic
app.get('/', function (req, res) {
    res.render('home', {
        name: 'Ricardo Velez',
        title: 'New Title'
    });
});

// control generic
app.get('/generic', function (req, res) {
    res.render('generic', {
        name: 'Ricardo Velez',
        title: 'New Title'
    });
});

// control elements
app.get('/elements', function (req, res) {
    res.render('elements', {
        name: 'Ricardo Velez',
        title: 'New Title'
    });
});

// controls all routes other than those specified
// app.get('*', function (req, res) {
//     res.sendFile('404.html', {root: 'public'});
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});