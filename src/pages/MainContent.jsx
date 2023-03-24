import React from "react";
/*MobX */
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { status } from "../mobx/FindBooksStore";

/*custom component */
import BooksCardList from "../components/BooksCardList";

import "../scss/content.scss";

const MainContent = observer(() => {
  const { findBooksStore } = React.useContext(Context);

  return (
    <main className="content">
      {findBooksStore.status === status.SUCCESS &&
        findBooksStore.findBooksList.totalBooks && (
          <p className="found-book">{`Found: ${findBooksStore.findBooksList.totalBooks} results`}</p>
        )}
      <BooksCardList />
    </main>
  );
});

export default MainContent;
