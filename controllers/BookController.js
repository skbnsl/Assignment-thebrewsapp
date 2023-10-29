const { ReturnDocument } = require("mongodb");
const Book = require("../models/Books");
const express = require("express");

async function AddBook(req, res) {
  try {
    const { title, author, summary } = req.body;
    const existBook = await Book.findOne({ title: title });
    if (existBook) {
      return res.send("Book Exists");
    }

    if (!title || !author || !summary) {
      return res.send("Data is missing");
    }

    await Book.create({ title, author, summary });
    return res.send({
      status: "success",
      message: "Book Added",
    });
  } catch (error) {
    return res.send({
      status: "failed",
      message: error,
    });
  }
}

async function getBooks(req, res) {
  try {
    const allBooks = await Book.find({});
    return res.send({
      status: "success",
      message: allBooks,
    });
  } catch (error) {
    return res.send({
      message: "Error in getting Books",
    });
  }
}

async function BookbyID(req, res) {
  try {
    const id = await req.params.id;
    //console.log(id);
    if (!id) {
      return res.send({
        status: "failed",
        message: "please provide Book-id",
      });
    }
    const book = await Book.findById({ _id: id });
    if (!book) {
      return res.send({
        status: "failed",
        message: "Book-id is not valid",
      });
    }
    return res.send({
      status: "success",
      message: book,
    });
  } catch (error) {
    return res.send({
      status: "failed",
      message: Error,
    });
  }
}

async function UpdateBook(req, res) {
  try {
    const id = await req.params.id;
    const { title, author, summary } = req.body;
    if (!title || !author || !summary) {
      return res.send("Data is missing");
    }
    if (!id) {
      return res.send({
        status: "failed",
        message: "please provide Book-id",
      });
    }
    const book = await Book.findById({ _id: id });
    if (!book) {
      return res.send({
        status: "failed",
        message: "Book-id is not valid",
      });
    }

    await Book.findByIdAndUpdate(id, { title, author, summary });

    return res.send({
      status: "success",
      message: "Book Updated Successfully",
    });
  } catch (error) {
    return res.send({
      status: "failed",
      message: error,
    });
  }
}

async function deleteBook(req, res) {
  try {
    const id = await req.params.id;

    if (!id) {
      return res.send({
        status: "failed",
        message: "please provide Book-id",
      });
    }
    const book = await Book.findById({ _id: id });
    if (!book) {
      return res.send({
        status: "failed",
        message: "Book-id is not valid",
      });
    }
    await Book.findByIdAndUpdate(id);
    return res.send({
      status: "success",
      message: "Book Deleted Successfully",
    });
  } catch (error) {
    return res.send({
      status: "failed",
      message: Error,
    });
  }
}

module.exports = {
  AddBook,
  getBooks,
  BookbyID,
  UpdateBook,
  deleteBook,
};
