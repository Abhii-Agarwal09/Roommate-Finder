const mongoose = require('mongoose');
// const dbURL = process.env.DB_URL;
const dbURL = process.env.DB_URL;

const connectDB = () => {
    mongoose.connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('database connected');
    });
};

module.exports = connectDB;
