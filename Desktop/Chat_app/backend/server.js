import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";

const app = express();



dotenv.config();
const PORT = process.env.PORT || 8000;
app.get("/", (req,res)=>{
    // root route https://localhost:8000/
    res.send("Hello World!!");
});

app.use("/api/auth",authRoutes);
app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));
