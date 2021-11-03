const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const db = mongoose.connection;
require('dotenv').config()

//Port
const PORT = process.env.PORT || 3003

//Database
const MONGODB_URI  = process.env.MONGODB_URI

//connect to mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log("Connection Successful"))
    .catch(err => console.log(err));

//error messages
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

//controllers
const storeController = require('./controllers/store.js');
app.use('/store', storeController)

//Route
app.get('/', (req, res) => {
    res.redirect('/store')
})

//Listeners
app.listen(PORT, () => {
  console.log('Listening on...', PORT);
})

mongoose.connect('mongodb://localhost:27017/proj3')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});
