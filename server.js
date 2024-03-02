import connectDB from "./config/mongoDB.js";
import app from "./index.js"

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server is listening at ${port}`);
    // Connect MongoDB using Mongoose
    connectDB()
})

