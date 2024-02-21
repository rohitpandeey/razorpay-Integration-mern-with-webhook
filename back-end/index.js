const express =require("express");
const app =express();
const cors =require("cors")
const  dotenv =require("dotenv");
const bodyParser = require("body-parser");

dotenv.config({ path: "./config/config.env" });


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());


const orderapi= require("./routes/order");// order api
const payVerification= require("./routes/paymentver") ;// payemnt verification

app.use("/",orderapi);
app.use("/",payVerification);


app.get("/api/getkey",(req,res)=>{
    return res.status(200).json({key:process.env.KEY})
})





module.exports=app;