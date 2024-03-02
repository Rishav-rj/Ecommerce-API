# Product Management API

This is a simple RESTful API for managing products. It allows you to perform CRUD (Create, Read, Update, Delete) operations on products.

## Getting Started

To get started with this project, follow these steps:

**1. Clone the repository to your local machine:**

```

git clone https://github.com/Rishav-rj/Ecommerce-API.git

```

**2. Install dependencies:**
```

npm install

```
**3. Set up environment variables:**

Create a .env file in the root directory of the project and define the following variables:
```

PORT=<port_number>
MONGODB_URL=<mongodb_connection_string>

```
Replace <port_number> with the port number you want the server to listen on, and <mongodb_connection_string> with the connection string for your MongoDB database.

**4. Start the server:**
```

npm start

```
The server will start running on the specified port, and you should see a message in the console indicating that the server is listening.

## Endpoints

### GET /products
**Retrieve a list of all products.**

### POST /products/create
**Create a new product.**

***Request Body:***
```

{
    "name": "Product Name",
    "quantity": 10
}

```

## DELETE /products/:id
**Delete a product by ID.**

## POST /products/:id/update_quantity
**Update the quantity of a product by ID.**

***Query Parameters:***

- number: The number by which to update the quantity (can be positive or negative).

## Folder Structure

- `config/mongoDB.js` - MongoDB configuration.
- `src`
    - `controllers/productController.js` - Product controller for handling route logic.
    - `models/productModel.js` - Mongoose schema for product data.
    - `repository/productRepo.js` - Repository functions for interacting with the database.
    - `routes.productRoute.js` - Product Routes
- `index.js` - Entry point of the application.
- `server.js` - main file to run the application.

## Technologies Used
- Node.js
- Express.js
- Mongoose
- Dotenv