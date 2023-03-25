import React from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
/*custom styles */
import styles from "./Search.module.scss";

const Search = observer(() => {
  const [searchInput, setSearchInput] = React.useState("");
  const { booksStore } = React.useContext(Context);
  const navigate = useNavigate();

  const updateSearchValue = () => {
    navigate("/");
    if (searchInput.length > 1) {
      booksStore.setUrlSearch(
        searchInput.trim().replace(/ +/g, " "),
        booksStore.searchCategory,
        booksStore.searchOrderBy
      );
      booksStore.setStatusWait();
      booksStore.getBooksAsyncAwait();
    }
  };
  const changeSearchValue = (str) => {
    setSearchInput(str);
    booksStore.setUrlSearch(
      str,
      booksStore.searchCategory,
      booksStore.searchFiltered
    );
    booksStore.setStatusWait();
  };
  const onKeyDownEnter = (ev) => {
    if (ev.keyCode === 13) {
      booksStore.setStatusWait();
      updateSearchValue();
    }
  };

  return (
    <div className={styles.search}>
      <div className={styles.search_box}>
        <svg
          className="feather feather-search"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={updateSearchValue}
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" x2="16.65" y1="21" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="find books...."
          className={styles.searchInput}
          value={searchInput}
          onChange={(e) => changeSearchValue(() => e.target.value)}
          onKeyDown={(e) => onKeyDownEnter(e)}
        />
      </div>
    </div>
  );
});

export default Search;
