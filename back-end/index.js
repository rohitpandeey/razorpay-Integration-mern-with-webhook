const express =require("express");
const app =express();
const cors =require("cors")
const dotenv =require("dotenv");
const bodyParser = require("body-parser");

dotenv.config({ path: "./config/config.env" });


app.use(express.json());// Middleware to parse JSON bodies
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());


const orderapi= require("./routes/order");// order api
const payVerification= require("./routes/paymentver") ;// payemnt verification
const handleWebhook = require("./routes/webhookapi");

app.use("/",orderapi);
app.use("/",payVerification);
app.use("/",handleWebhook);




module.exports=app;