import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState, memo } from "react";
import { getNewsFlowCategoriesId } from "../../ApiService";
import styles from "./CategoryContent.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import NewsHistoryViewed from "../NewsHistoryViewed/NewsHistoryViewed";

const moment = require("moment");

function CategoryContent() {
  let { fieldCategory } = useParams();
  const [data, setData] = useState();
  const [category,setCategory] = useState();
  const [page,setPage] = useState();
  const [totalPage,setTotalPage] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    fetch(fieldCategory, page, filter);
  }, [fieldCategory, page, filter]);

  const fetch = (fieldCategory, page, filter) => {
    setPage(page)
    getNewsFlowCategoriesId({fieldCategory, page, filter})
      .then((res) => {
        setData(res?.listNews);
        setCategory(res?.category);
        setTotalPage(res?.totalPage);

      })
  }

  const handleFilter = () => {
    setFilter(document.getElementById("selectForm").value);
  };
  return (
    <>
      {category && (
        <div>
          <div className={clsx(styles.topCategory)}>
            <div className={clsx(styles.nameCategory)}>{category.name}</div>
            <div className={styles.descriptionCategory}>
              {category.description}
            </div>
            <hr className={styles.hrCategory} />
          </div>
          <div className={styles.formSelect}>
            <select
              id="selectForm"
              className={clsx("form-select", styles.select)}
              style={{ width: "130px" }}
              onChange={handleFilter}
            >
              <option value="DESC">Mới nhất</option>
              <option value="ASC">Cũ nhất</option>
            </select>
          </div>
          <div className={clsx(styles.listnews)}>
            {data &&
              data.map((item) => (
                <Link
                  key={item.id}
                  to={"/news/" + item.id}
                  className="text-decoration-none"
                >
                  <div className={clsx(styles.item, "row")}>
                    <div className={clsx(styles.leftItem, "col-4")}>
                      <img
                        className={clsx(styles.imgItem, "image-fluid")}
                        src={item?.thumbnail}
                        alt=""
                      />
                    </div>
                    <div className={clsx(styles.rightItem, "col-8")}>
                      <div className={clsx(styles.captionItem)}>
                        {item.caption}
                      </div>
                      <div className={clsx(styles.createdAtItem)}>
                        {moment(item.createdAt).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </div>
                      <div className={clsx(styles.descriptionItem)}>
                        {item.description}
                      </div>
                      <div className={clsx(styles.view)}>
                        Lượt xem: {item.viewOfHour}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          <div className={styles.paginationCategoryContent}>
            <Pagination
              page={page || 1}
              totalPage={totalPage}
              idCategory={fieldCategory}
              filter={filter || ""}
              fetch={fetch}
            />
          </div>
          <NewsHistoryViewed />
        </div>
      )}
    </>
  );
}
export default memo(CategoryContent);
