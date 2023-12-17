import quotes from "../arrays/quotes";
import styles from "./HomePage.module.css";
import HomePageFinder from "./HomePageFinder";

function HomePage({ bookHandler, initialText }) {
  const oneQuoteIndex = Math.trunc(Math.random() * quotes.length);

  return (
    <div className={styles.form}>
      <div className={styles.containerTitle}>
        <h1 className={styles.title}>Давай найдём то, что ты ищешь</h1>
      </div>
      <HomePageFinder
        bookHandler={bookHandler}
        initialText={initialText}
      ></HomePageFinder>
      <div className={styles.containerQuotes} key={quotes[oneQuoteIndex].id}>
        <p className={styles.quote}>{quotes[oneQuoteIndex].quote}</p>
      </div>
      <div className={styles.containerAuthor}>
        <p className={styles.author}>{quotes[oneQuoteIndex].author}</p>
      </div>
    </div>
  );
}

export default HomePage;
