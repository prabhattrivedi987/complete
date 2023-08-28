require('dotenv').config();
require('./Config/dbConnect');
const express=require('express');
const cors=require('cors');
const todoRoutes=require('./Routes/todoRoutes');

const app=express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use(todoRoutes);

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})