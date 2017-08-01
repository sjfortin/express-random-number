var express = require('express');

var app = express();

var port = 5000;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

var randomGeneratedNumber = randomNumber(1, 100).toString();

app.use(express.static('public'));

app.get('/random', function (req, res) {
    res.send(randomGeneratedNumber);
});

app.listen(port, function () {
    console.log('Listening on port number', port);
    console.log(randomGeneratedNumber);
});