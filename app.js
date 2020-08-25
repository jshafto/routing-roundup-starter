const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});


app.get(/xyz$/, (req, res) => {
  res.send("That's all I wrote.")
});

app.get('/capital-letters/:phrase', (req, res) => {
  res.send(req.params.phrase.toUpperCase())
})



app.all('*', (req, res) => {
    // assign a variable to capture the method
    let method = req.method;
    let path = req.path;
    let randomNumber = Math.floor(Math.random()*10);

    res.render('layout1', {method, path, randomNumber});
})

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
