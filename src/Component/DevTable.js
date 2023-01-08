import React, { useState } from "react";
import { useSortableData } from "./hooks";
import ReactPaginate from "react-paginate";
import styles from "./DataTable.module.scss";
import Modal from "@netojose/react-modal";
import "./datastyle.css";

const ProductTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0); //Pagination
  const [isOpen, setIsOpen] = useState(false);

  const items = data;

  // Pagination
  const PER_PAGE = 4;
  const pageCount = Math.ceil(items?.length / PER_PAGE);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;

  const ProductDetails = (data) => {
    console.log(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <table className={styles.datatable}>
        <thead className={styles.datatablethead}>
          <tr>
            <th className={styles.thformname}>
              <button
                type="button"
                //onClick={() => requestSort("formname")}
                //className={`${styles.theadbtn} ${getClassNamesFor("formname")}`}
              >
                Product
              </button>
            </th>
            <th className={styles.thformname}>
              <button
                type="button"
                //onClick={() => requestSort("formname")}
                //className={`${styles.theadbtn} ${getClassNamesFor("formname")}`}
              >
                Brand
              </button>
            </th>
            <th className={styles.thformname}>
              <button
                type="button"
                // onClick={() => requestSort("category")}
                // className={`${styles.theadbtn} ${getClassNamesFor("category")}`}
              >
                Category
              </button>
            </th>
            <th className={styles.thformname}>
              <button
                type="button"
                //  onClick={() => requestSort("category")}
                // className={`${styles.theadbtn} ${getClassNamesFor("category")}`}
              >
                Action
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items && items.length === 0 ? (
            <tr className={styles.tablerow}>
              <td colspan="2" className={styles.tabledata}>
                No matching records found
              </td>
            </tr>
          ) : (
            items &&
            items.slice(offset, offset + PER_PAGE).map((item, index) => (
              <tr key={index} className={styles.tablerow}>
                <td className={styles.tabledata}>{item.title}</td>
                <td className={styles.tabledata}>{item.brand}</td>
                <td className={styles.tabledata}>{item.category}</td>
                <td
                  className={styles.tabledata}
                  onClick={() => ProductDetails(item)}
                >
                  <button>Edit</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className={styles.datatablefooter}>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          previousLinkClassName={styles.paginationLink}
          nextLinkClassName={styles.paginationLink}
          disabledClassName={styles.paginationDisabled}
          activeClassName={styles.paginationActive}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
        />
        <div>
          <span>
            Showing {offset + 1} to {offset + PER_PAGE} of {items?.length}{" "}
            entries
          </span>
        </div>
        <Modal isOpen={isOpen} onRequestClose={closeModal}>
          <ProductDetails />
        </Modal>
      </div>
    </>
  );
};

export default ProductTable;
