const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser')
const todoRoutes = require('./routes/todos')


//middlewares
app.use(cors());
app.use(bodyparser.json());
app.use(todoRoutes);


//start the server 
const port =3000;
mongoose.connect('mongodb://localhost:27017/mernapp')
.then(res=>{
    app.listen(port)
    console.log(`Server starts on ${port}`)})
.catch(err=>console.log(err));


