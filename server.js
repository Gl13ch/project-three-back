const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3003

app.use(express.json())
app.use(cors())

const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI);

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(PORT, () => {
  console.log('Listening on...', PORT);
  // console.log(process.env);
})

mongoose.connect('mongodb://localhost:27017/proj3')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});
