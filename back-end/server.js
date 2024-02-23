const mongoose =require("mongoose")
const app=require("./index");


const dotenv=require("dotenv");

dotenv.config({path:"./config/config.env"})

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/razorpaywebhook');
//     console.log("database connection succesfull")
// }

mongoose.connect(process.env.MONGODB).then(()=>{
    console.log("connection succesfull")
}).catch((e)=>{
    console.log(error);
})


app.listen(process.env.PORT,()=>{
    console.log(`server listening on port no ${process.env.PORT}`);
})