const express = require("express");
const router = express.Router();
const BookController = require("../controllers/BookController");

router.get("/", BookController.getBooks);

router.post("/add-Book", BookController.AddBook);

router.post("/BookbyID/:id", BookController.BookbyID);

router.post("/updatebook/:id", BookController.UpdateBook);

router.post("/deleteBook/:id", BookController.deleteBook);

module.exports = router;
