//routes/api/books.js

const express = require("express");
const router = express.Router();

//Load Book Model
const Book = require("../../models/Book");

//@CREATE
//@route GET api/books
//@description add/save book
//@access Public
router.post("/", (req, res) => {
  Book.create(req.body)
    .then((book) => res.json({ msg: "Book added successfully." }))
    .catch((err) => res.status(400).json({ error: "Unable to add this Book" }));
});

//@READ
//@route GET api/books/test
//@description tests books route
// access Public
router.get("/test", (req, res) => res.send("book route testing!"));

//@READ
// @route GET api/books
// @description Get all books
// @access Public
router.get("/", (req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(404).json({ nobooksfound: "No Books Found.." }));
});

//@READ
// @route GET api/books:id
// @description Get specified book
// @access Public
router.get("/:id", (req, res) => {
  Book.findOne(req.params.id)
    .then((book) => res.json(book))
    .catch((err) =>
      res
        .status(404)
        .json({ nobooksfound: `No Book found with id ${req.params.id} ..` })
    );
});

//@UPDATE
//@route GET api/books/:id
//@description Update Book
//@access Public
router.put("/:id", (req, res) => {
  Book.findOneAndUpdate(req.params.id, req.body)
    .then((book) =>
      res.json({
        msg: `Book with id ${req.params.id} is successfully updated `,
      })
    )
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

//@DELETE
//@route GET api/books/:id
//@description Delete Book
//@access Public
router.delete("/:id", (req, res) => {
  Book.findOneAndRemove(req.params.id, req.body)
    .then((book) =>
      res.json({ msg: `Book with id ${req.params.id} has been removed..` })
    )
    .catch((err) => res.status(404).json({ error: "No such book" }));
});

module.exports = router;
