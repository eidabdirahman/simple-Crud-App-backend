const express = require("express");
const dotenv = require("./.env");
const app = express();
const port = 3010;
const ProductRoute = require('./routers/ProductRoute.js')


// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Root route
app.get("/", (req, res) => {
  res.send("Hello World! Our server is running.");
});

//routers
app.use('/api/products', ProductRoute);



// Port listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
