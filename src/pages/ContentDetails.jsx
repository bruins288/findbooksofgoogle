import React from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import { Context } from "../index";
import { status } from "../utils/data";
import { bookStyles } from "../utils/data";

import Skeleton from "../components/BookCard/Skeleton";
import BookCard from "../components/BookCard";

const ContentDetails = observer(() => {
  const { id } = useParams();
  const { booksStore } = React.useContext(Context);

  let contextNow = booksStore.getBookById(id) || booksStore.book;

  React.useEffect(() => {
    if (booksStore.query === "") {
      (async () => {
        booksStore.setStatusLoading();
        await booksStore.getBookByIdAsyncAwait(id);
      })();
    }
  }, [booksStore, id]);

  return (
    <React.Fragment>
      {booksStore.status === status.LOADING ? (
        <Skeleton />
      ) : (
        booksStore.status === status.SUCCESS && (
          <BookCard classes={bookStyles.normal} {...contextNow} />
        )
      )}
    </React.Fragment>
  );
});

export default ContentDetails;
