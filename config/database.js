var mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', function() {
    console.log(`Connected to MongoDB at ${process.env.DATABASE_URL}`);
});

