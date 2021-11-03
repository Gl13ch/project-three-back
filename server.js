const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const db = mongoose.connection;

require('dotenv').config()
const PORT = process.env.PORT || 3003

app.use(express.json())
app.use(cors())

const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI);

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

app.listen(PORT, () => {
  console.log('Listening on...', PORT);
  // console.log(process.env);
})

mongoose.connect('mongodb://localhost:27017/proj3')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});
