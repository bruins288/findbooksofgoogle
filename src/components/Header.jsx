import React from "react";

/*custom component */
import Search from "./Search";
import SortType from "./SortType";
/*custom styles */
import "../scss/header.scss";
/*constants data */
import { sortCategory, sortType } from "../constants/data";

function Header() {
  return (
    <header className="header">
      <h1>Search for books</h1>
      <Search />
      <div className="sort">
        <div className="sort__category">
          <SortType list={sortCategory} />
        </div>
        <div className="sort__type">
          <SortType list={sortType} />
        </div>
      </div>
    </header>
  );
}

export default Header;
