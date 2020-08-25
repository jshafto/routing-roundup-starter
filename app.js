const express = require('express');

const app = express();

const profileRouter = require('./routes/profiles.js')

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


app.use('/margot', profileRouter)
app.use('/margeaux', profileRouter)



app.all(/^\/[^\/]*$/, (req, res) => {
    // if (req.path.split('/').length > 2) {
    //     res.statusCode = 404;
    //     res.send();
    //     return;
    // }
    // assign a variable to capture the method
    let method = req.method;
    let path = req.path;
    let randomNumber = Math.floor(Math.random()*10);

    res.render('layout1', {method, path, randomNumber});
})

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
