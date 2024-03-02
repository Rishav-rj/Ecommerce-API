import dotenv from "dotenv"
dotenv.config()
import express from "express";
import productRoute from "./src/routes/productRoute.js";

const app = express()
app.use(express.json())

app.use("/products", productRoute)

app.use("*", (req, res)=>{
    res.status(404).send("Page not found!")
})

export default app;

