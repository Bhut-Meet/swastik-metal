require("dotenv").config();
const express = require("express")
const cors = require("cors")
const app = express()
const connectDb = require("./utils/db");
const authRoutes = require('./router/auth-router')

// const corsOptions={
//     origin: "http://localhost:5173",
//     // origin: "https://websitedevelopmentservices.vercel.app",
//     // origin:"https://websitedevelopmentservices.vercel.app", // Replace with allowed origins from environment variable or default to Vercel domain
//     // methods: ["GET", "HEAD","PUT","PATCH","POST","DELETE"],
//     Credential:true,
// }

app.use(cors());

app.use(express.json()) // middleware for parsing JSON bodies

app.use("/api/auth", authRoutes);

const PORT =process.env.PORT || 5000;
connectDb().then(()=>{
    app.listen(PORT, () => {
        console.log('server is running on port ' + PORT);
        // console.log(`server is running on port: ${PORT}`);
    });
});