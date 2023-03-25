import React, { useContext } from "react";

import { observer } from "mobx-react-lite";
import { Context } from "../index";
/*custom component */
import Search from "./Search";
import SortType from "./SortType";
/*custom styles */
import "../scss/header.scss";
/*constants data */
import { sortCategory, sortType } from "../utils/data";

const Header = observer(() => {
  const { booksStore } = useContext(Context);

  const handlerChangeOrderBy = (orderByType) => {
    let orderBy = orderByType === "relevance" ? null : orderByType;
    booksStore.setUrlSearch(
      booksStore.query,
      booksStore.searchCategory,
      orderBy
    );
  };
  const handlerChangeCategories = (categoriesType) => {
    let categories = categoriesType === "all" ? "" : categoriesType;
    booksStore.setUrlSearch(
      booksStore.query,
      categories,
      booksStore.searchOrderBy
    );
  };

  return (
    <header className="header">
      <h1>Search for books</h1>
      <Search />
      <div className="sort">
        <div className="sort__category">
          <SortType
            list={sortCategory}
            changeCategories={handlerChangeCategories}
          />
        </div>
        <div className="sort__type">
          <SortType list={sortType} changeOrderBy={handlerChangeOrderBy} />
        </div>
      </div>
    </header>
  );
});

export default Header;
