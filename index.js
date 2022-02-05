const express= require('express');
const mongoose= require('mongoose');
const app=express();

const url= "mongodb+srv://kushal:xC61OOksRFociM3u@cluster0.pi3hu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}
const Deliverymanrouter=require('./Deliveryman.js')
app.use('/Deliveryman',Deliverymanrouter)

const Urgenttasks=require('./Urgenttasks.js')
app.use('/Urgenttasks',Urgenttasks)

const tasks=require('./tasks.js')
app.use('/task',tasks)
app.get("/",(req,res)=>{
    res.send("Hello, Welcome to kushal App")
})

const port=process.env.PORT || 80;
process.on('uncaughtException', function (error) {
    console.log(error);
})
app.listen(port, () =>{
    console.log(port)
    console.log('Server started');
})