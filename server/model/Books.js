import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  coverImageUrl: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
});

const bookModel = new mongoose.model("Books", bookSchema, "books");
export default bookModel;
