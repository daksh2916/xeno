const User = require("../models/user");




exports.createUser = async (req, res) => {
    const { fname, lname, mobileNumber, email, role_name, health_facility_name } = req.body;

    if (!fname || !lname || !mobileNumber || !email || !role_name || !health_facility_name) {
        return res.status(400).json({
            success: false,
            message: "Enter all the details carefully"
        });
    }

    try {
       
        const existingUserCount = await User.countDocuments();
        const user_id = existingUserCount + 1;

      
        const newUser = await User.create({user_id, fname, lname, mobileNumber, email });

       
        res.status(200).json({
            success: true,
            data: { newUser, newUserRole, newUserScore },
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