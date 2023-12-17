import { useRef, useState } from "react";
import styles from "./HomePageFinder.module.css";

function HomePageFinder({ bookHandler, initialText }) {
  const [text, setText] = useState("");
  /*const inputText = useRef("");*/
  const onSubmitHandler = (event) => {
    event.preventDefault();
    /*bookHandler(inputText.current.value);
    initialText(inputText.current.value);*/
    bookHandler(text);
    initialText(text);
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          className={styles.input}
          placeholder="Введите имя автора или название книги"
          /*ref={inputText}*/
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.button}>Find</button>
      </form>
    </>
  );
}
export default HomePageFinder;
