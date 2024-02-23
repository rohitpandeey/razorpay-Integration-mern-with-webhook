const express =require("express");
const { orderReq } = require("../controllers/ordercon");


const router =express.Router();

router.route("/order").post(orderReq);


module.exports =router;