import React from "react";

/*custom styles */
import styles from "./SortType.module.scss";

const SortType = ({ list }) => {
  return (
    <div className={styles.sortedChoose}>
      <b>{list.labelName}</b>
      <select
        name="SelectChoose"
        required="required"
        className={styles.sortSelect}
      >
        {list.items.map((item, index) => (
          <option key={item.name} value={index}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortType;
