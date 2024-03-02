import productModel from "../models/productModel.js"


export const addProduct = async (name, quantity)=>{

    try{
        quantity = Number(quantity)
        const newProduct = new productModel({name, quantity})
        await newProduct.save()
        return newProduct
    }catch(err){
        throw new Error("Something went wrong while adding new product")
    }
}

export const getProducts = async ()=>{

    try{
        const Products = await productModel.find()
        return Products
    }catch(err){
        throw new Error("Something went wrong while getting products")
    }
}

export const deleteProductRepo = async (id)=>{

    try{
        const product = await productModel.findByIdAndDelete(id)
        return product
    }catch(err){
        throw new Error("Something went wrong while deleting product")
    }
}

export const updateProductRepo = async (id, number)=>{

    try{
        const product = await productModel.findById(id)
        console.log(product);
        let quantity = product.quantity + Number(number)
        if(quantity < 0){
            quantity = 0
        }
        product.quantity = quantity
        await product.save()
        console.log(product);
        return product
    }catch(err){
        throw new Error("Something went wrong while updating product")
    }
}