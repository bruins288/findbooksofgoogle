import React from "react";

/*custom styles */
import styles from "./Search.module.scss";
function index() {
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
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" x2="16.65" y1="21" y2="16.65" />
        </svg>
        <input type="text" className={styles.searchInput} />
      </div>
    </div>
  );
}

export default index;
