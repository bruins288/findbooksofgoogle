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
  description,
  classes,
}) {
  let image = Utils.getImage(imageLinks);

  return (
    <div className={styles[`${classes.bookCard}`]}>
      <div className={styles[`${classes.bookCardList.img}`]}>
        <Link to={`/Book/${id}`}>
          <img
            src={image}
            alt="book"
            style={{
              width: `${classes.size.width}`,
              height: `${classes.size.height}`,
            }}
          />
        </Link>
      </div>
      <div className={styles[`${classes.bookCardList.info}`]}>
        <h4>
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </h4>
        <p className={styles[`${classes.bookCardList.infoList.title}`]}>
          {title}
        </p>
        <p className={styles[`${classes.bookCardList.infoList.dop}`]}>
          {authors.map((author) => (
            <span key={author}>{author + ", "}</span>
          ))}
          <span>published:{publishedDate}</span>
        </p>
        {classes.bookCardList.infoList.des && (
          <p className={styles[`${classes.bookCardList.infoList.des}`]}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default BookCard;
