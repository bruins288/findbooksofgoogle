import React from "react";
import { Link } from "react-router-dom";

/*customs styles */
import styles from "./BookCard.module.scss";
import Utils from "../../utils/Utils";

function BookCard({
  id,
  authors,
  categories,
  imageLinks,
  publishedDate,
  title,
}) {
  let image = Utils.getImage(imageLinks);
  return (
    <div className={styles.bookCard}>
      <div className={styles.bookCard_img}>
        <Link to={`/Book/${id}`}>
          <img
            src={image}
            alt="book"
            style={{ width: "100px", height: "150px" }}
          />
        </Link>
      </div>
      <div className={styles.bookCard_info}>
        <h4>
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </h4>
        <p className={styles.bookCard_info_title}>{title}</p>
        <p className={styles.bookCard_info_dop}>
          {authors.map((author) => (
            <span key={author}>{author + ", "}</span>
          ))}
          <span>published:{publishedDate}</span>
        </p>
      </div>
    </div>
  );
}

export default BookCard;
