const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json())
app.use(express.static('./images'))
app.use(bodyParser.json())


const AdoptionPostsRoute = require('./Routes/AdoptionPostsRouter');

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('Database connection is successfull')
})
app.use('/api/v1/adoptionPosts', AdoptionPostsRoute)

app.get('/',(req, res)=>{

      
res.send("App is running")
})

module.exports = app;