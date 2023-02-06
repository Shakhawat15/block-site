const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');

const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// db connection
const db = require('./config/keys').mongoURI;
mongoose.set('strictQuery', true);
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err));

// routes  
app.use(apiRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on Port No ${PORT}`));