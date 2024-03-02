import dotenv from "dotenv"
dotenv.config()
import express from "express";
import productRoute from "./src/routes/productRoute.js";

const app = express()

// Geting json form data
app.use(express.json())

// Routes for Prrocut
app.use("/products", productRoute)

// Wrong URL
app.use("*", (req, res)=>{
    res.status(404).send("Page not found!")
})

export default app;

