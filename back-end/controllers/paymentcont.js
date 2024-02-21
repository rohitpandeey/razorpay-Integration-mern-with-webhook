const crypto =require("crypto");
const Payment = require('../models/paymentschema');


exports.paymentVeri=async(req,res)=>{
    
    const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;

    const body = razorpay_order_id + "|" +razorpay_payment_id;
    const expectedsignature =crypto.createHmac('sha256',process.env.SECRET).update(body.toString()).digest('hex')
    const isauth = expectedsignature === razorpay_signature;
    if(isauth){
     await Payment.create({
         razorpay_order_id,razorpay_payment_id,razorpay_signature 
     })
     

     res.redirect(`http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`)
    }
    else{
     res.status(400).json({success:false});
    }
 };