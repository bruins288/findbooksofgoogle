import React from "react";

/*customs styles */
import styles from "./BooksCard.module.scss";

function BooksCard({
  id,
  authors,
  categories,
  imageLinks,
  publishedDate,
  title,
}) {
  let image = imageLinks.smallThumbnail
    ? imageLinks.smallThumbnail
    : imageLinks;

  return (
    <div className={styles.booksCard}>
      <div className={styles.booksCard_img}>
        <img
          src={image}
          alt="book"
          style={{ width: "100px", height: "150px" }}
        />
      </div>
      <div className={styles.booksCard_info}>
        <p className={styles.booksDetail}>
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
          <strong>{title}</strong>
          {authors.map((author) => (
            <span key={author}>{author}</span>
          ))}
          <span>{publishedDate}</span>
        </p>
      </div>
    </div>
  );
}

export default BooksCard;
