import React from "react";
import styles from "./Pagination.module.css";
import { Link } from "react-router-dom";
import clsx from "clsx";

function Pagination({ page, totalPage, idCategory, filter, fetch }) {
  const createArr = (page, totalPage) => {
    if (+totalPage === 2) {
      return [1, 2];
    } else if (+totalPage === 1) {
      return [1];
    } else if (+totalPage === 0) {
      return [];
    } else {
      if (+page === 1) {
        return [1, 2, 3];
      } else if (+page === totalPage) {
        return [+page - 2, +page - 1, page];
      } else {
        return [+page - 1, +page, +page + 1];
      }
    }
  };
  const handleDisableNext = (page, totalPage) => {
    if (+page === +totalPage || +totalPage === 0) {
      return "disabled";
    } else {
      return "";
    }
  };

  const handleDisablePrev = (page) => {
    if (+page === 1) {
      return "disabled";
    } else {
      return "";
    }
  };

  // console.log('page', page, totalPage, createArr(page, totalPage));

  return (
    <div className={styles.paginationItem}>
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item ">
            <div
              onClick={() => fetch(idCategory, parseInt(page) - 1, filter)}
              className={clsx("page-link", handleDisablePrev(page, totalPage))}
            >
              Previous
            </div>
          </li>
          <li className="page-item " aria-current="page">
            <div
              onClick={() => fetch(idCategory, 1, filter)}
              className="page-link"
            >
              Frist
            </div>
          </li>
          <li className="page-item">
            <div className={clsx("page-link disabled")}>...</div>
          </li>
          {createArr(page, totalPage).map((item, index) =>
            +item === +page ? (
              <li key={index} className="page-item active" aria-current="page">
                <div
                  onClick={() => fetch(idCategory, page, filter)}
                  className="page-link"
                >
                  {page}
                </div>
              </li>
            ) : (
              <li key={index} className="page-item">
                <div
                  onClick={() => fetch(idCategory, item, filter)}
                  className="page-link"
                >
                  {item}
                </div>
              </li>
            )
          )}
          <li className="page-item">
            <div className={clsx("page-link disabled")}>...</div>
          </li>
          <li className="page-item " aria-current="page">
            <div
              onClick={() => fetch(idCategory, totalPage, filter)}
              className="page-link"
            >
              Last
            </div>
          </li>
          <li className="page-item">
            <div
              onClick={() => fetch(idCategory, parseInt(page) + 1, filter)}
              className={clsx("page-link", handleDisableNext(page, totalPage))}
            >
              Next
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
