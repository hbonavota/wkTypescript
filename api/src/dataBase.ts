require('dotenv').config();
const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;
const mongoose = require("mongoose");

interface error {
	status: number;
	message: string;
}

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.du2l6.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
const db = mongoose.connection;

mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
})

db.once('open', (err: error)=> {
        console.log('Database is connected successfully');
})

db.on('error', (err: error) => {
        console.log(err);
    })