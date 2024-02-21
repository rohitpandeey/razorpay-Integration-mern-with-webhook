const express =require("express");
const { paymentVeri } = require("../controllers/paymentcont");


const router =express.Router();

router.route("/paymentverification").post(paymentVeri);


module.exports =router;










