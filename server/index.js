import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";

dotenv.config({});

// call database connection here
connectDB();
const app = express();

const PORT = process.env.PORT || 3000

// default middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true,
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // allowedHeaders: ['Content-Type', 'Authorization'] 
}));
 
// apis

app.use("/api/v1/user", userRoute);

 
app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
})


