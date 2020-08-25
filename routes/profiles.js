// exactly what we did before
// respond to any method that has the path "/bio"
// res.send("Bio")

const express = require('express');

const app = express();

app.get('/bio', (req, res) => {
    res.send('Bio');
})

app.get('/contact', (req, res) => {
    res.send('Contact');
})

module.exports = app;
