import React from "react";
/*MobX */
import { observer } from "mobx-react-lite";
import { Context } from "../index";
/*custom component */
import BooksCard from "../components/BooksCard";
import { status } from "../mobx/FindBooksStore";
/*custom styles */
import "../scss/content.scss";

const MainContent = observer(() => {
  const { findBooksStore } = React.useContext(Context);
  return (
    <main className="content">
      {findBooksStore.status === status.SUCCESS &&
        findBooksStore.findBooksList.totalBooks && (
          <p className="found-book">{`Found: ${findBooksStore.findBooksList.totalBooks}`}</p>
        )}
      {findBooksStore.status === status.LOADING ? (
        <p>"Загрузка"</p>
      ) : findBooksStore.status === status.SUCCESS &&
        findBooksStore.findBooksList.totalBooks > 0 ? (
        findBooksStore.findBooksList.infoBooks.map((infoBook) => (
          <BooksCard key={infoBook.id} {...infoBook} />
        ))
      ) : (
        findBooksStore.status === status.SUCCESS && <h3>Book not found!</h3>
      )}
    </main>
  );
});

export default MainContent;
