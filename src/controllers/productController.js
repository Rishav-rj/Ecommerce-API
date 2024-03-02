import { addProduct, deleteProductRepo, getProducts, updateProductRepo } from "../repository/productRepo.js";


export default class ProductController {

    createProduct = async(req, res)=>{
        try{
            const {name, quantity} = req.body;
            console.log(name, quantity);
            const newProduct  = await addProduct(name, quantity)
            if(newProduct){
                res.status(201).send({data:{product:newProduct}})
            }
        }catch(err){
            throw new Error("Something went wrong while adding new product")
        }
    }

    getAllProducts = async(req, res)=>{
        try{
            const products  = await getProducts()
            if(products){
                res.status(200).send({data:{products:products}})
            }else{
                res.status(200).send({data:{msg:"No product found!"}})
            }
        }catch(err){
            throw new Error("Something went wrong while getting products")
        }
    }

    deleteProduct = async(req, res)=>{
        try{
            const {id} = req.params
            const product  = await deleteProductRepo(id)
            if(product){
                res.status(200).send({data:{message: "product deleted"}})
            }else{
                res.status(404).send({data:{message: "product not found!"}})
            }
        }catch(err){
            throw new Error("Something went wrong while deleting product")
        }
    }

    updateProduct = async(req, res)=>{
        try{
            const {id} = req.params
            const {number} = req.query
            const product  = await updateProductRepo(id, number)
            if(product){
                res.status(200).send({data:{product: product}})
            }
        }catch(err){
            throw new Error("Something went wrong while updating product")
        }
    }
}