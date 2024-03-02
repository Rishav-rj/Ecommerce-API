import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true, "Name is required"]
    },
    quantity:{
        type:Number,
        required:[true, "Quantity is required"]
    }
})

const productModel = mongoose.model("Product", productSchema)

export default productModel;