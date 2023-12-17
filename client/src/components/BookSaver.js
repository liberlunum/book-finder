import styles from "./BookSaver.module.css";

function BookSaver({ clickBook }) {
  function download(link) {
    window.open(link, "_blank");
  }

  return (
    <div className={styles.saverContainer}>
      <span className={styles.save}>Скачать:</span>
      <div className={styles.buttonContainer}>
        <button
          className={styles.buttonSave}
          onClick={() => download(clickBook.links[4].url)}
        >
          Epub
        </button>

        <button
          onClick={() => download(clickBook.links[0].url)}
          className={styles.buttonSave}
        >
          Fb2
        </button>

        <button
          className={styles.buttonSave}
          onClick={() => download(clickBook.links[5].url)}
        >
          mobi
        </button>
      </div>
    </div>
  );
}

export default BookSaver;
