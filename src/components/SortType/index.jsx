import React from "react";

/*custom styles */
import styles from "./SortType.module.scss";

function SortType({ list, changeCategories, changeOrderBy }) {
  const onChange = (str) => {
    if (changeCategories) changeCategories(str);
    else changeOrderBy(str);
  };
  return (
    <div className={styles.sortedChoose}>
      <b>{list.labelName}</b>
      <select
        name="SelectChoose"
        required="required"
        className={styles.sortSelect}
        onChange={(e) => onChange(e.target.value)}
      >
        {list.items.map((item) => (
          <option key={item.name}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}

export default SortType;
