const User = require("../models/user")
// const bcrypt= require("bcryptjs")

//? In an Express.js application, a "controller" refers to a part of your code that is responsible for handling the application's logic. Controllers are typically used to process incoming requests, interact with models (data sources), and send responses back to clients. They help organize your application by separating concerns and following the MVC (Model-View-Controller) design pattern.


//* ----------------------------------------------------------------
// Home Logic
//* ----------------------------------------------------------------

const home =async (req,res) => {
    try{
        res.status(200).send('Hello World using a router!')
    }
    catch(error){
        console.log(error);
    }
}

//* ----------------------------------------------------------------
// user Registration Logic
//* ----------------------------------------------------------------
// 1. Get Registration Data: Retrieve user data (username, email, password).
// 2. Check Email Existence: Check if the email is already registered.
// 3. Hash Password: Securely hash the password.
// 4. Create User: Create a new user with hashed password.
//5. Save to DB: Save user data to the database.
// 6. Respond: Respond with "Registration Successful" or handle errors.

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body; // Extracting values from request body
        const userCreated = await User.create({ username, email, phone, password }); // Creating user
        res.status(201).send("Registration successful", userCreated);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}


//* ----------------------------------------------------------------
// User Login Logic
//* ----------------------------------------------------------------

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        console.log("User data:", userExist); // Log user data to the terminal
        if (!userExist) {
            return res.status(404).json({ message: "Invalid credentials" });
        }
        const user = await userExist.comparePassword(password);
        if (user) {
            res.status(201).send({ message: "Login successful" });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}


module.exports = {home, register,login}