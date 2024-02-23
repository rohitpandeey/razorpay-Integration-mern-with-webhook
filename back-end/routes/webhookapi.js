const express= require("express");
const {handleWebhook}= require("../controllers/webhook");


const router= express.Router();

router.route("/").post(handleWebhook);


module.exports =router;