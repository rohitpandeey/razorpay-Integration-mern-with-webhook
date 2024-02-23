const hookDetail= require("../models/hookschema");



// Function to handle the webhook POST request
exports.handleWebhook = async (req, res) => {
    try {
        // app.use(express.json());

        // Extract relevant data from the request body
        const { event, payload } = req.body;
        const { amount,id}  = payload.payment.entity;

        console.log(payload.payment);

        // Determine payment status based on the event
        let status;
        if (event === "payment.captured") {
            status = "success";
        } else if (event === "payment.failed") {
            status = "failure";
        }

        // Save payment data to MongoDB
        await hookDetail.create({
            eventId: event,
            amount,
            paymentId:id,
            status
        });

        res.status(200).send("Payment data saved successfully.");
    } catch (error) {
        console.error("Error saving payment data:", error);
        res.status(500).send("Error saving payment data.");
    }
};

