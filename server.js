const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const mongoose = require('mongoose');
const db = process.env.MONGODB_URI || 'mongodb://localhost/test';

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Connected to MongoDB at ${db}`))
    .catch(err => console.error(`Error connecting to MongoDB: ${err}`));
