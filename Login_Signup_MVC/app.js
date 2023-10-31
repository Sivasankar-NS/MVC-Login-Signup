const express = require('express')
const app=express();
const cors = require('cors')
require('dotenv').config();
const mongoose=require("mongoose")
const router=require("./router")
mongoose.connect(process.env.DBURL)
.then(()=>{
console.log("DB connected");
}).catch(()=>{
console.log("DB not connected");
})
app.use(express.json())
app.use (express.urlencoded({extended:true}))
app.use('/api',router)
app.listen(process.env.PORT,()=>{
console.log("Server Is Running",process.env.PORT);
})