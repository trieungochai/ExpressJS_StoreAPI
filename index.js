require("dotenv").config();
// async errors
const express = require("express");
const app = express();
const errorHandlerMiddleware = require("./middleware/error-handler.middleware");
const notFoundMiddleware = require("./middleware/not-found.middleware");

// middleware
app.use(express.json());
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

// routes
app.get("/hello", (res, req) => {
  console.log("See you Space Cowboy");
});

const PORT = process.env.PORT || 8000;

const start = () => {
  try {
    // TODO: connectDB
    app.listen(PORT, (req, res) => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
