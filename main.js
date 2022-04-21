const express = require("express"); //Import the express dependency
const app = express(); //Instantiate an express app, the main work horse of this server
const products = require("./products");
const port = 3000; //Save the port number where your server will be listening

app.use(express.json());
app.use("/api/v1.0/products/", products);

app.listen(port, () => {
  //server starts listening for any attempts from a client to connect at port: {port}
  console.log(`Now listening on port ${port}`);
});