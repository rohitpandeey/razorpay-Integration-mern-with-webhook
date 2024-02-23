const mongoose=require("mongoose");

const hookSchema = new mongoose.Schema({
    eventId: String,
    amount: Number,
    paymentId: String,
    status: String
});

const hookDetail=mongoose.model('hookDetail',hookSchema);

module.exports =hookDetail;