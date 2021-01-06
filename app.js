const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-Parser');
mongoose.Promise = global.Promise;

mongoose.connect ('mongodb://localhost:27017',(err)=>{
    if(err){
        console.error(err)
    }else{
        console.log('Connect to mongodb')
    }
});

const app = express () ;
app.use (bodyParser.json());

require ('./routes/api')(app)
module.exports = app ;