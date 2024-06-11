const Consumer = require("../models/consumer");
const Order =require("../models/order");




exports.createOrder = async (req, res) => {
    const { consumer_id,fname, lname,  orderPrice } = req.body;

    if (!fname || !lname  || !email ||!orderPrice) {
        return res.status(400).json({
            success: false,
            message: "Enter all the details carefully"
        });
    }

    try {
       


        const existingOrderCount = await Order.countDocuments();
        const order_id = existingOrderCount + 1;

      
        const newOrder = await Order.create({consumer_id,order_id, fname, lname, orderPrice });

       
        res.status(200).json({
            success: true,
            data: { newOrder},
            message: "User created successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: "Error in creating user"
        });
    }
};