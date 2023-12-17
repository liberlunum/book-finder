import styles from "./Finder.module.css";
import { useState } from "react";

function Finder({ bookHandler, initialText }) {
  const [text, setText] = useState(initialText);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    bookHandler(text);
  };
  return (
    <form className={styles.finder} onSubmit={onSubmitHandler}>
      <input
        type="text"
        className={styles.input}
        placeholder="Введите имя автора или название книги"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles.button} title="Submit">
        Find!
      </button>
    </form>
  );
}

export default Finder;
