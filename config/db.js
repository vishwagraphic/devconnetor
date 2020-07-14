const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongo-uri');

const connectDB = async () => {
    try {
        await mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Connected DB')
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;