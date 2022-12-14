const express = require('express');
const mongoose = require('mongoose');
//const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app=express();
const path = require('path');

//console.log('db connected');
//const seller_route = require('./routes/seller.js');
const authuser_route = require('./routes/user-auth.js');
const workertask_route = require ('./routes/WorkerTask');
const managertask_route = require ('./routes/ManagerTask');

const PORT=process.env.PORT || 8065

app.use(cors())
app.use(express.json())
// app.use('/public',express.static(path.join(__dirname,'uploads'))) 
app.use('/uploads',express.static('uploads'));
// app.use(express.json());  //  useNewUrlParser: true, useFindAndModify: false
app.use(express.urlencoded({extended:true}));


const URL=process.env.MONGODB_URL;
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://dew:asdqwe123@cluster1.jkocv.mongodb.net/sellerdetails?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,


    //useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false
    
})
// .then(() => console.log( 'Database Connected' ))
// .catch(err => console.log( err ));
const connection=mongoose.connection;
 connection.once("open",() =>  {
     console.log('db connected');
 }).catch(err => console.log( err ));

//routes
//app.use('/seller',seller_route) 
app.use('/api',authuser_route)
app.use('/api/workertask',workertask_route)
app.use('/api/managertask',managertask_route)



app.listen(PORT,()=>{
    console.log('server running')
})


