import React, { useState } from "react";
import { TableComponent } from "./TableComponent.js";
import styles from "../App.module.css";

const renderData = (currentPage) => {
  return <TableComponent data={currentPage} />;
};

export const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const itemsPerPage = 20;
  const pageNumberLimit = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.data.slice(indexOfFirstItem, indexOfLastItem);

  const pages = [];
  for (let i = 1; i <= Math.ceil(props.data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? styles.active : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div>
      {renderData(currentItems)}
      <div className={styles.pageNumbers}>
          <button
            className={styles.pageBtn}
            onClick={handlePrevPage}
            disabled={currentPage === pages[0] ? true : false}
          >
            &laquo;
          </button>
        {renderPageNumbers}
          <button
            className={styles.pageBtn}
            onClick={handleNextPage}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            &raquo;
          </button>
      </div>
    </div>
  );
}
