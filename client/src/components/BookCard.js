import styles from "./BookCard.module.css";
import bookCards from "../arrays/bookCards";
import image from "./alt_cover.jpg";

function BookCard({ clickBook }) {
  return (
    <div className={styles.bookCardContainer}>
      {/* <img src={clickBook.images[0]} alt="cover" className={styles.bookCover}/>*/}
      {clickBook.images[0] === undefined ? (
        <img
          src={image}
          alt="обложка отсутствует"
          className={styles.bookCover}
        />
      ) : (
        <img src={clickBook.images[0]} alt="jjj" className={styles.bookCover} />
      )}
      <div className={styles.bookInfo}>
        <div className={styles.titleContainer}>
          <div>
            <span className={styles.title}>Название:</span> {clickBook.title}
          </div>
        </div>
        <div className={styles.authorContainer}>
          <div>
            <span className={styles.author}>Автор:</span>{" "}
            {clickBook.author === null
              ? "Имя автора не указано"
              : clickBook.author.name}
          </div>
        </div>
        <div className={styles.categoryContainer}>
          <div>
            <span className={styles.category}>Жанр:</span>{" "}
            {clickBook.categories}
          </div>
        </div>
        <div className={styles.annotationContainer}>
          <div>
            <span className={styles.annotation}>Аннотация:</span>
            <div dangerouslySetInnerHTML={{ __html: clickBook.content }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
