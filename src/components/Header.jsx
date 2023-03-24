import React, { useContext } from "react";

import { observer } from "mobx-react-lite";
import { Context } from "../index";
/*custom component */
import Search from "./Search";
import SortType from "./SortType";
/*custom styles */
import "../scss/header.scss";
/*constants data */
import { sortCategory, sortType } from "../constants/data";

const Header = observer(() => {
  const { findBooksStore } = useContext(Context);

  const onChangeSorted = (sortedType) => {
    let sorted = sortedType === "relevance" ? null : sortedType;
    findBooksStore.setUrlSearch(
      findBooksStore.query,
      findBooksStore.searchCategory,
      sorted
    );
  };
  const onChangeFiltered = (filteredType) => {
    let filtered = filteredType === "all" ? "" : filteredType;
    findBooksStore.setUrlSearch(
      findBooksStore.query,
      filtered,
      findBooksStore.searchFiltered
    );
  };

  return (
    <header className="header">
      <h1>Search for books</h1>
      <Search />
      <div className="sort">
        <div className="sort__category">
          <SortType list={sortCategory} onChangeFilter={onChangeFiltered} />
        </div>
        <div className="sort__type">
          <SortType list={sortType} onChangeSort={onChangeSorted} />
        </div>
      </div>
    </header>
  );
});

export default Header;
