var express = require('express');
var app = new express();
var PORT = 8080;

app.get('/', function (req, res) {
    res.json({
        "data": "successfully working"
    });
});

app.listen(PORT, function () {
    console.log("HTTP server started listening on port: %s", PORT);
})