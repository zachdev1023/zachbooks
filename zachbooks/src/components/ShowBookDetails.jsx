import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

export default class ShowBookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => {
        this.setState({ books: res.data });
      })
      .catch((err) => {
        console.log("Error from Showbooklist");
      });
  }
  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList;

    if (!books) {
      bookList = "There is no book record!";
    } else {
      bookList = books.map((book, k) => <BookCard book={book} key={k} />);
    }
    return (
      <div className="showBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Books List</h2>
            </div>
            <div className="col-md-11">
              <Link className="btn btn-outline-warning float-right">
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>

          <div className="list">{bookList}</div>
        </div>
      </div>
    );
  }
}
