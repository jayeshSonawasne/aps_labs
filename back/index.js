const express = require("express");
const app = express();
const db = require("./connection/db_connection");
const bodyParser = require("body-parser");
const cors = require("cors")
const product = require("./controller/addProduct");
const upload = require("./middleware/product");
const User = require("./controller/userController");
const cart = require("./controller/cartController");
const order = require("./controller/ordersController");
const admin = require("./controller/admin");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('uploads'))
db;

// for admin login
app.post("/adminlogin",admin.adminLogin);

// for admin register
app.post("/adminregister",admin.adminRegister);

// for login
app.post("/login",User.Login);

// for register
app.post("/register",User.Register);

// for product add
app.post("/addproduct",upload.single('productImage'),product.addProduct);

// for fetch all category and subcategory
app.get("/allcategory",product.allCategory);

// for fetch perticular product
app.get("/perticularproduct/:category",product.perticularProduct);

// for add product to carts
app.post("/addtocart",cart.AddToCart);

// for fetch cart items
app.get("/getcartitem",cart.getCartItem);

// for place order
app.put(`/orderplace`,order.placeOrder);

// for update cart status
app.put("/cartstatus/:id",cart.cartStatus);

// for all orders
app.get("/allorders",order.allOrders);

// for accept order
app.put("/acceptorder/:id",order.acceptOrder);

// for accept procurement 
app.put("/procurementstatus/:id",order.acceptProcurement);

// for pakaging product
app.put("/packagingstatus/:id",order.packagingOrder);

app.listen(5000,()=>{
    console.log('server running on port 5000');
})