import React from "react";
/*MobX */
import { observer } from "mobx-react-lite";
import { Context } from "../index";
/*custom component */
import BooksCard from "../components/BooksCard";
/*custom styles */
import "../scss/content.scss";

const MainContent = observer(() => {
  const { findBooksStore } = React.useContext(Context);
  React.useEffect(() => {
    (async () => {
      findBooksStore.setUrlSearch("php");
      await findBooksStore.getFindBooksAsync();
      console.log(findBooksStore.findBooksList.infoBooks);
    })();
  }, [findBooksStore]);

  console.log(findBooksStore.totalBooks);
  return (
    <main className="content">
      <p className="found-book">Found</p>
      <BooksCard />
      <BooksCard />
      <BooksCard />
      {/* <p>{findBooksStore.totalBooks ? findBooksStore.totalBooks : "load"}</p> */}
    </main>
  );
});

export default MainContent;
