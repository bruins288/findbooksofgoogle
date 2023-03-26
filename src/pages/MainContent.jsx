import React from "react";
/*MobX */
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { status } from "../utils/data";

/*custom component */
import BooksCardList from "../components/BooksCardList";

import "../scss/content.scss";

const MainContent = observer(() => {
  const { booksStore } = React.useContext(Context);

  return (
    <main className="content">
      {booksStore.status === status.SUCCESS && booksStore.booksList.total && (
        <p className="found-book">{`Found: ${booksStore.booksList.total} results`}</p>
      )}
      <BooksCardList />
    </main>
  );
});

export default MainContent;
