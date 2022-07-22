const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["Apple", "Nokia", "Samsung", "Sharp", "Xiaomi"],
      message: "{VALUE} is not supported",
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
