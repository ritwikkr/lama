import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide product title"],
      unique: [true, "Product title shoould be unique"],
    },
    desc: {
      type: String,
      required: [true, "Please provide product description"],
    },
    img: {
      type: String,
      required: [true, "Please provide product image"],
    },
    categories: {
      type: Array,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Please provide product price"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
