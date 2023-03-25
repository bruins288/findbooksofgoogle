import React from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import { Context } from "../index";
import { status } from "../mobx/BooksStore";
import Utils from "../utils/Utils";

import Skeleton from "../components/BookCard/Skeleton";

import "../scss/content.scss";

const ContentDetails = observer(() => {
  const { id } = useParams();
  const { booksStore } = React.useContext(Context);

  let contextNow = booksStore.getBookById(id) || booksStore.book;

  let image = Utils.getImage(contextNow);

  React.useEffect(() => {
    if (booksStore.query === "") {
      (async () => {
        booksStore.setStatusLoading();
        await booksStore.getBookByIdAsyncAwait(id);
      })();
    }
  }, [booksStore, id]);

  return (
    <div className="bookCardLarge">
      {booksStore.status === status.LOADING ? (
        <Skeleton />
      ) : (
        booksStore.status === status.SUCCESS && (
          <div className="bookCardLarge_img">
            <img
              src={image}
              alt="book"
              style={{ width: "250px", height: "400px" }}
            />
          </div>
        )
      )}
      {booksStore.status === status.SUCCESS && (
        <div className="bookCardLarge_info">
          <h4>
            {contextNow.categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </h4>
          <p className="bookCardLarge_info_title"> {contextNow.title}</p>
          <p className="bookCardLarge_info_dop">
            {contextNow.authors.map((author) => (
              <span key={author}>{author + ", "}</span>
            ))}
            <span>published:{contextNow.publishedDate}</span>
          </p>
          <p className="bookCardLarge_info_des">{contextNow.description}</p>
        </div>
      )}
    </div>
  );
});

export default ContentDetails;
