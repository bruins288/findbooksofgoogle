import React from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../index";
import { status } from "../utils/data";
/*custom component */
import BookCard from "../components/BookCard";
import ShowButton from "../components/ShowButton";
/*component content-loader */
import Skeleton from "../components/BookCard/Skeleton";
/*custom styles */
import { bookStyles } from "../utils/data";

const BooksCardList = observer(() => {
  const { booksStore } = React.useContext(Context);

  React.useEffect(() => {
    if (booksStore.isMoreLoading) {
      booksStore.incrementStartIndex();
      booksStore.setUrlSearch(
        booksStore.query,
        booksStore.searchCategory,
        booksStore.searchOrderBy,
        booksStore.startIndex
      );
      booksStore.setStatusWait();
      booksStore.getBooksAsyncAwait();
    }
  }, [booksStore, booksStore.isMoreLoading]);

  const handlerButtonClick = (isDown) => {
    booksStore.setMoreLoading(isDown);
  };
  return (
    <React.Fragment>
      {booksStore.status === status.LOADING
        ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
        : booksStore.status === status.SUCCESS && booksStore.booksList.total > 0
        ? booksStore.booksList.info.map((infoBook, index) => (
            <BookCard
              key={infoBook.id + index}
              classes={bookStyles.small}
              {...infoBook}
            />
          ))
        : booksStore.status === status.SUCCESS && <h3>Book not found!</h3>}
      {booksStore.status === status.SUCCESS && (
        <ShowButton clickButton={handlerButtonClick} />
      )}
    </React.Fragment>
  );
});

export default BooksCardList;
