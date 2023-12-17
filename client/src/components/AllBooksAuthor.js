import bookCards from "../arrays/bookCards";
import styles from "./AllBooksAuthor.module.css";
import { useState } from "react";

function AllBooksAuthor({ allBooksAuthor, showBook }) {
  const [toggleClick, setToggleClick] = useState(false);
  const toggleOnClick = () => {
    setToggleClick((toggleClick) => !toggleClick);
  };

  return (
    <div className={styles.someBooksContainer}>
      <div className={styles.titleBookLine} onClick={() => toggleOnClick()}>
        {toggleClick === false
          ? "Показать все книги автора"
          : "Скрыть список книг"}
      </div>
      {toggleClick === false ? (
        <></>
      ) : (
        <>
          {allBooksAuthor.map((book) => (
            <div
              key={book.id}
              className={styles.oneBookLine}
              onClick={() => showBook(book.title)}
            >
              <span className={styles.oneBookTitle}>{book.title} </span>
              <span className={styles.oneBookAuthor}>{book.author.name}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default AllBooksAuthor;
