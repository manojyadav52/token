const express = require('express');
const mongoose = require('mongoose');
const router = require('./Auth/router/userRouter');
const app = express();
const PORT = 8080;

const {createServer} = require('http');
const cors = require('cors');
const {Server} = require('socket.io');


app.use(express.json());
app.use(express.urlencoded({extended:true}));



// connect the mongodb database 
mongoose.connect('mongodb://localhost:27017/io-1')
.then(()=> console.log(`data base has been connected`))
.catch((error)=> console.log(`something is ${error}`));


// user rotuer
app.use('/', router);



// created the server here
app.listen(PORT, ()=> console.log(`the server will be listening on ${PORT}`));