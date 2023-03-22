import React from "react";

/*custom component */
import BooksCard from "../components/BooksCard";
/*custom styles */
import "../scss/content.scss";

function MainContent() {
  return (
    <main className="content">
      <p className="found-book">Found</p>
      <BooksCard />
      <BooksCard />
      <BooksCard />
    </main>
  );
}

export default MainContent;
