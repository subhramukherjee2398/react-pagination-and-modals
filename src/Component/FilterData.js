import React, { useState } from "react";
import ProductTable from "./DevTable";
import styles from "./DataTable.module.scss";

const FilterData = (props) => {
  const [filteredData, setFilteredData] = useState("");

  function filteration(data) {
    if (data) {
      let new_item = data.filter((item) => {
        if (
          item.title.toLowerCase().includes(filteredData.toLowerCase()) ||
          item.brand.toLowerCase().includes(filteredData.toLowerCase()) ||
          item.category.toLowerCase().includes(filteredData.toLowerCase())
        ) {
          return item;
        }
      });
      return new_item;
    } else {
      return data;
    }
  }

  return (
    <>
      <div className={styles.search}>
        <span className={styles.searchLabel}>Search: </span>
        <input
          className={styles.inputlabel}
          type="text"
          value={filteredData}
          onChange={(e) => setFilteredData(e.target.value)}
        />
      </div>
      <ProductTable data={filteration(props.data)} />
    </>
  );
};

export default FilterData;
