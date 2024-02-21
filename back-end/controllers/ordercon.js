const razorpay= require("razorpay")


exports.orderReq=async(req,res)=>{

    //instance create

    const instance = new razorpay({
        key_id: process.env.KEY,
        key_secret:process.env.SECRET,
    })
    //order api yha pe request hroi h     

    const options ={
        amount:Number(req.body.amount*100),
        currency:"INR",
    };
    
    const order = await instance.orders.create(options);
    console.log(order);
    res.status(200).json({
        success:true,order
    })

};