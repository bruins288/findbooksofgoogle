import React from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../index";
import { status } from "../mobx/FindBooksStore";
/*custom component */
import BooksCard from "../components/BooksCard";
import ShowButton from "../components/ShowButton";
/*component content-loader */
import Skeleton from "../components/BooksCard/Skeleton";
/*custom styles */

const BooksCardList = observer(() => {
  const { findBooksStore } = React.useContext(Context);

  React.useEffect(() => {
    console.log("effect");
    if (findBooksStore.isAddDataLoading) {
      findBooksStore.incrementStartIndex();
      findBooksStore.setUrlSearch(
        findBooksStore.query,
        findBooksStore.startIndex,
        findBooksStore.searchCategory,
        findBooksStore.searchFiltered
      );
      findBooksStore.setStatusWait();
      findBooksStore.getFindBooksAsync();
    }
  }, [findBooksStore, findBooksStore.isAddDataLoading]);

  const buttonHandlerClick = (isDown) => {
    findBooksStore.setDataLoading(isDown);
  };
  return (
    <React.Fragment>
      {findBooksStore.status === status.LOADING
        ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
        : findBooksStore.status === status.SUCCESS &&
          findBooksStore.findBooksList.totalBooks > 0
        ? findBooksStore.findBooksList.infoBooks.map((infoBook, index) => (
            <BooksCard key={infoBook.id + index} {...infoBook} />
          ))
        : findBooksStore.status === status.SUCCESS && <h3>Book not found!</h3>}
      {findBooksStore.status === status.SUCCESS && (
        <ShowButton handlerClick={buttonHandlerClick} />
      )}
    </React.Fragment>
  );
});

export default BooksCardList;
