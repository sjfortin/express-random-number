var express = require('express');

var app = express();

var port = 5000;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

app.use(express.static('public'));

app.get('/random', function (req, res) {
    res.send(randomNumber(1, 100).toString());
});

app.listen(port, function () {
    console.log('Listening on port number', port);
});