import express from "express";
import mongoose from "mongoose";
import bookModel from "../../model/Books.js";

const router = express.Router();

// GET API : /books

router.get("/", async (req, res) => {
  try {
    let getAllBooks = await bookModel.find({});
    res.status(200).json(getAllBooks);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/add", async (req, res) => {
  try {
    let getBookFromClient = req.body;
    await bookModel.create(getBookFromClient);
    res.status(201).json({ success: "Book Added Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    let getId = req.params.id;

    let find = await bookModel.findOne({ id: getId });
    if (!find) {
      return res.status(404).json({ error: "No ID Found" });
    }

    let takeDataFromClient = req.body;

    await bookModel.updateOne(
      { id: getId },
      {
        $set: takeDataFromClient,
      }
    );
    res.status(201).json({ success: "Book Updated Successfully" });

    res.send(find);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    let getId = req.params.id;

    let find = await bookModel.findOne({ id: getId });
    if (!find) {
      return res.status(404).json({ error: "No ID Found" });
    }

    await bookModel.deleteOne({ id: getId });
    res.status(201).json({ success: "Book Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
});
export default router;
