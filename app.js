const express = require('express');
const app = express();

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/autos', (req, resp) => {
    console.log('url', req.url);
    resp.render('autos');
});

app.get('/gatos', (req, resp) => {
    console.log('url', req.url);
    resp.render('gatos');
});

app.get('/autos/nuevo', (req, resp) => {
    console.log('url', req.url);
    resp.render('formulario');
});

app.listen(8000, () => {
    console.log('listening on 8000');
})