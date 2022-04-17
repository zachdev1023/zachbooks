import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
        <Routes>
          <Route exact path="/" element={<ShowBookList />} />
          <Route exact path="/create-book" element={<CreateBook />} />
          <Route exact path="/edit-book/:id" element={<UpdateBookInfo />} />
          <Route exact path="/show-book/:id" element={<ShowBookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
