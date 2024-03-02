import express from "express"
import ProductController from "../controllers/productController.js"

const productRoute = express.Router()

const productController = new ProductController()

productRoute.get("/", productController.getAllProducts)
productRoute.post("/create", productController.createProduct)
productRoute.delete("/:id", productController.deleteProduct)
productRoute.post("/:id/update_quantity", productController.updateProduct)

export default productRoute;