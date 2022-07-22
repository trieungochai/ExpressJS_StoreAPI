const errorHandlerMiddleware = (error, req, res, next) => {
  console.log(error);
  return res.status(500).json({
    success: false,
    message: "Something went wrong, please try again!",
  });
};

module.exports = errorHandlerMiddleware;
