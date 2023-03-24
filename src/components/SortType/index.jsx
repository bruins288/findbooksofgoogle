import React from "react";

/*custom styles */
import styles from "./SortType.module.scss";

const SortType = ({ list, onChangeFilter, onChangeSort }) => {
  const onChangeHandler = (str) => {
    if (onChangeFilter) onChangeFilter(str);
    else onChangeSort(str);
  };
  return (
    <div className={styles.sortedChoose}>
      <b>{list.labelName}</b>
      <select
        name="SelectChoose"
        required="required"
        className={styles.sortSelect}
        onChange={(e) => onChangeHandler(e.target.value)}
      >
        {list.items.map((item) => (
          <option key={item.name}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SortType;
