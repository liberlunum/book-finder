import styles from "./BookList.module.css";
import bookCards from "../arrays/bookCards";
import image from "./alt_cover.jpg";

function BookList({ books, showBook }) {
  return (
    <div className={styles.bookList}>
      <div className={styles.bookLink}>
        {books?.length === 0 ? (
          <div>По данному запросу ничего не найдено</div>
        ) : (
          <div>
            {books?.map((book) => {
              return (
                <div
                  key={book.id}
                  className={styles.bookContainer}
                  onClick={() =>
                    showBook(
                      book.title,
                      /*book.author === null ? book.id : book.author.id,*/
                      book.author.id,
                    )
                  }
                >
                  {book.images[0] === undefined ? (
                    <img
                      src={image}
                      alt="обложка отсутствует"
                      width="65px"
                      height="90px"
                    />
                  ) : (
                    <img
                      src={book.images[0]}
                      alt="jjj"
                      width="65px"
                      height="90px"
                    />
                  )}
                  <div className={styles.info}>
                    {book.author === null ? (
                      <p>Имя автора не указано</p>
                    ) : (
                      <p>{book.author.name}</p>
                    )}
                    <p>{book.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default BookList;
