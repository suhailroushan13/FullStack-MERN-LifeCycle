import express from "express";
import booksRouter from "./controller/books/books.js";

const app = express();
const port = 5000;

import "./dbConnect.js";

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Replace with your React app's domain
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => {
  res.status(200).send("Hello Book Server Running");
});
app.use("/api/books", booksRouter);
app.listen(port, () => {
  console.log(`SERVER RUNNING AT ${port}`);
});
