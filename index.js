require("dotenv").config();
const connectDB = require("./database/connect");
// async errors
const express = require("express");
const app = express();
const errorHandlerMiddleware = require("./middleware/error-handler.middleware");
const notFoundMiddleware = require("./middleware/not-found.middleware");

const productsRouter = require("./routes/products.router");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  return res.send(
    "<h1>Store API</h1><a href='/api/v1/products'>Product route</a>"
  );
});

app.use("/api/v1/products", productsRouter);

// products route
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
