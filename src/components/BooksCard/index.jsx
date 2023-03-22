import React from "react";

/*customs styles */
import styles from "./BooksCard.module.scss";

function BooksCard() {
  return (
    <div className={styles.booksCard}>
      <div className={styles.booksCard_img}>
        <img
          src="https://books.google.com/books/content?id=WnogjOIFY3oC&printsec=frontcover&img=1&zoom=5&source=gbs_api"
          alt="book"
        />
      </div>
      <div className={styles.booksCard_info}>
        <p className={styles.booksDetail}>
          <span>computers</span>
          <strong>Learn Javascript</strong>
          <span>Автор</span>
        </p>
      </div>
    </div>
  );
}

export default BooksCard;
