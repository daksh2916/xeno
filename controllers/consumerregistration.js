const Consumer = require("../models/consumer");




exports.createConsumer = async (req, res) => {
    const { fname, lname,  email } = req.body;

    if (!fname || !lname  || !email ) {
        return res.status(400).json({
            success: false,
            message: "Enter all the details carefully"
        });
    }

    try {
       
        const existingUserCount = await Consumer.countDocuments();
        const consumer_id = existingUserCount + 1;

      
        const newUser = await Consumer.create({consumer_id, fname, lname, email });

       
        res.status(200).json({
            success: true,
            data: { newUser},
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