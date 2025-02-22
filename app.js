const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(join(__dirname,'public')));
app.get('/', (req, res, next) => {
    res.sendFile(join(__dirname, 'public', 'index.html'), (err) => {
        if (err) {
            next(err);
        }
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.listen(port,()=>{
    console.log('Server is running on port: '+port);
});
