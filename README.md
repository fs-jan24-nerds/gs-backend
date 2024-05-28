# PRODUCT CATALOG API
## Demo

Check out the [DEMO](https://fs-jan24-nerds.github.io/gadgets-store/) to see the project in action!

## Technologies used

* Node.js
* Express.js
* TypeScript
* PostgreSQL
* Sequelize ORM

## Description
This backend provides a catalog of products with  various endpoints to facilitate access to product data. Below is a list of the main functionalities:

 ##### 1 Get all products:

* Endpoint: `/products`

 ##### 2 Get products by category:

* Endpoint: `/products?category=phones`
* Categories include: `phones`, `tablets`, `accessories`

##### 3 Get detailed product info:

* Endpoint: `/products/details/{itemId}`
* Example: `/products/details/apple-iphone-11-64gb-black`

##### 4 Get products with pagination and category:

* Endpoint: `/products?category=phones&limit=16&page=1`

##### 5 Get products with sorting options:

* Endpoint: `/products?category=phones&limit=16&page=1&orderBy=year&orderDir=DESC`
* orderDir can be `ASC` (ascending) or `DESC` (descending)

##### 6 Get products by IDs:

* Endpoint:`/products/{id}`

##### 7 Get products with the biggest discounts:

* Endpoint: `/products//products/hot-price`

##### 8 Get recommended products:

* Endpoint: `/products/:category/recommended`

