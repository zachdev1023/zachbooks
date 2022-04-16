import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CreateBook from "./components/CreateBook";
import ShowBookDetails from "./components/ShowBookDetails";
import ShowBookList from "./components/ShowBookList";
import UpdateBookInfo from "./components/UpdateBookInfo";

//CSS
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ShowBookList} />
        <Route exact path="/create-book" component={CreateBook} />
        <Route exact path="/edit-book/:id" component={UpdateBookInfo} />
        <Route exact path="/show-book/:id" component={ShowBookDetails} />
      </div>
    </Router>
  );
}

export default App;
