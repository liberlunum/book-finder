import "./App.css";
import HomePage from "./components/HomePage";
import BookList from "./components/BookList";
import Finder from "./components/Finder";
import { useState } from "react";
import BookCard from "./components/BookCard";
import BookSaver from "./components/BookSaver";
import AllBooksAuthor from "./components/AllBooksAuthor";

function App() {
  const [booksFromServer, setBooksFromServer] = useState(null);
  const [clickBook, setClickBook] = useState(null);
  const [allBooksAuthor, setAllBooksAuthor] = useState();
  const [initialText, setInitialText] = useState("");
  const bookHandler = (text) => {
    /*const filteredBooks = bookCards.filter((book) => book.author.toLowerCase().includes(text.toLowerCase()) || book.title.toLowerCase().includes(text.toLowerCase()))
        setBook(filteredBooks)*/
    fetch("http://localhost:3001/books/searchByName", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        name: text,
      }),
    })
      .then((response) => response.json())
      .then((books) => {
        setBooksFromServer(books);
      });
  };
  const showBookHandler = (title, authorId) => {
    setClickBook(
      booksFromServer.find((book) => {
        return book.title === title;
      }),
    );
    fetch(`http://localhost:3001/books/searchByAuthorId/${authorId}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((books) => {
        setAllBooksAuthor(books);
      });
    setBooksFromServer("");
  };
  const showBookFromAllAuthorBooks = (title) => {
    setClickBook(
      allBooksAuthor.find((book) => {
        return book.title === title;
      }),
    );
  };

  const initialTextHandler = (text) => {
    setInitialText(text);
  };

  return (
    <div className="App">
      {booksFromServer === null ? (
        <HomePage bookHandler={bookHandler} initialText={initialTextHandler} />
      ) : (
        <>
          <Finder bookHandler={bookHandler} initialText={initialText} />
          <BookList books={booksFromServer} showBook={showBookHandler} />
          {clickBook === null ? (
            <></>
          ) : (
            <>
              <BookCard clickBook={clickBook} />
              <BookSaver clickBook={clickBook} />
              <AllBooksAuthor
                allBooksAuthor={allBooksAuthor}
                showBook={showBookFromAllAuthorBooks}
              ></AllBooksAuthor>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
