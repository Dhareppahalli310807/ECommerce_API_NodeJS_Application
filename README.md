# ECommerce_API_NodeJS_Application

This is an E-Commerce API built with Node.js and MongoDB. It allows the platform admin to manage product inventory through various endpoints.

## Features

- Add new products
- List all products
- Delete products
- Update product quantity

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Prerequisites

- Node.js installed
- MongoDB installed and running

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Dhareppahalli310807/ECommerce_API_NodeJS_Application.git
    ```
2. Navigate to the project directory:
    ```sh
    cd ECommerce_API_NodeJS_Application
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Configuration

1. Ensure MongoDB is running on your local machine or update the MongoDB connection string in `server.js` to point to your MongoDB server.

## Running the Server

1. Start the server:
    ```sh
    npm start
    npm run dev
    ```
    The server will run on `http://localhost:8080`.

## API Endpoints

### Add Product

- **URL:** `/products/create`
- **Method:** `POST`
- **Request:**
    ```json
    {
      "name": "laptop",
      "quantity": 10
    }
    ```
- **Response:**
    ```json
    {
      "data": {
        "product": {
          "name": "laptop",
          "quantity": 10
        }
      }
    }
    ```

### List Products

- **URL:** `/products`
- **Method:** `GET`
- **Response:**
    ```json
    {
      "data": {
        "products": [
          {
            "id": "1",
            "name": "laptop",
            "quantity": 10
          },
          {
            "id": "2",
            "name": "camera",
            "quantity": 5
          },
          {
            "id": "3",
            "name": "smartwatch",
            "quantity": 8
          }
        ]
      }
    }
    ```

### Delete Product

- **URL:** `/products/:id`
- **Method:** `DELETE`
- **Response:**
    ```json
    {
      "data": {
        "message": "product deleted"
      }
    }
    ```

### Update Product Quantity

- **URL:** `/products/:id/update_quantity/?number=10`
- **Method:** `POST`
- **Response:**
    ```json
    {
      "data": {
        "product": {
          "id": "1",
          "name": "laptop",
          "quantity": 20
        },
        "message": "updated successfully"
      }
    }
    ```

## Project Structure

ecommerce-api/
│
├── models/
│ └── productModel.js
│
├── controllers/
│ └── productController.js
│
├── routes/
│ └── productRoutes.js
│
├── node_modules/
│
├── package.json
│
├── package-lock.json
│
├── server.js.js
│
└── README.md


## Testing

You can test the API using Postman or any other API client by hitting the above endpoints.

## Extra Points

- Code is well-commented.
- The project structure is scalable with separate folders for models, controllers, and routes.

## Credits
This project was created by Dhareppa Halli. Special thanks to Coding Ninjas.