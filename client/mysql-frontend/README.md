# Documentation Front-End

For the frontend application of my project, The Ordinary, we used technologies such as Vue.js which provides us with an easy to use interface for customers to buy The Ordinary branded beauty products, learn about the brand and contact the store.

## Features

- **Home Page:** Shows a list of products for users to browse and add items to their cart.
- **Contact Page:** Through a contact form, customers can ask questions or request help.
- **About us Page:** Tells us why The Ordinary and offers several links to the different brands that comprise it.

## Components

### **Header**

There is the main face of the brand, its name and the navigation bar of the different categories that conform it, as well as the ShoppingCart component, which shows the shopping cart icon. It has a minimalist design with a sample of photos of the bestsellers creams as well as a brief slogan which perfectly describes the reason for The Ordinary.

### **Navbar**

At the moment it is not functional, but it allows the user to navigate through the menu, choosing the different categories of the brand.


### **ShoppingCart**

It provides product information along with an image, price and title, collects the list of products that the customer wishes to purchase and allows users to add products to the shopping cart by clicking on the button with a shopping cart icon located on each product card.

### **Footer**

Offers us the direct link to the brand's instagram profile, a section to learn about the brand and its values, a contact form to get in touch with a skincare expert as well as customer service and a button to return to the home page.

## Technologies Used

- Vue.js 3,Vue Router, Tailwind CSS and Git & GitHub.

## Project Structure

FRONT-END:
client
└── mysql-frontend
    ├── src
    │   ├── assets
    │   └── components
    │       ├── Footer.vue
    │       ├── Header.vue
    │       ├── Navbar.vue
    │       └── ShoppingCart.vue
    ├── views
    │   ├── AboutUs.vue
    │   ├── Contact.vue
    │   ├── Home.vue
    │   └── App.vue
    ├── main.js
    ├── router.js
    ├── style.css
    ├── .gitignore
    └── index.html

BACK-END:
THEORDINARYFINALPROJECT
├── config
│   └── database.js
├── controllers
│   └── products.js
├── models
│   ├── collections
│   │   └── Products.js
│   └── index.js
├── node_modules
├── routes
│   └── products.js
├── .env
├── .env.example
├── .gitignore
├── app.js
├── package-lock.json
└── package.json

## Improvement and optimization plans

Our goal is to achieve a completely functional and optimized application.

- Implementation of a functional Navbar that the user can navigate through the different categories along with a search bar with different filters and a drop-down menu for a comprehensive navigation.

- Authentication of users through a login and registration for customer accounts.
   
- Develop a favorites section so that users can save their favorite products for future purchases.

- Complete the cart flow, implementing a component for check out that allows the customer to enter their shipping and invoice information, as well as payment methods and vouchers.

- Optimize the contact form so that we can store the data and queries of our customers.