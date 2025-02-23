const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 3000;
const joinRouter = require('./routes/auth/join');
const loginRouter = require('./routes/auth/login');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/', (req, res, next) => {
    res.sendFile(join(__dirname, 'public', 'index.html'), (err) => {
        if (err) {
            next(err);
        }
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(err.stack);
});
app.use('/join', joinRouter);
app.use('/login', loginRouter);
// mongoose.connect('mongodb://localhost:27017/test', {
//     useNewUrlParser: true
// });
// mongoose.connection.on('error', (err) => {
//     console.error(err);
// });
// mongoose.connection.on('open', () => {
//     console.log('Connected to MongoDB');
// });

app.listen(port,()=>{
    console.log('Server is running on port: '+port);
});
