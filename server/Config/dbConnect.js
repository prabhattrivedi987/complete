require('dotenv').config();
const mongoose=require('mongoose');

const dbConnect=async()=>{
    try {
        await mongoose
          .connect(
            "mongodb+srv://prabhattrivedi987:12345@cluster0.blnyaek.mongodb.net/TODO?retryWrites=true&w=majority"
          )
          .then(() => console.log("Database Connected"));
    } catch (error) {
        console.log('conection error',error.message);
    }
}
module.exports=dbConnect();