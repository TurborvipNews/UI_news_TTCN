import { useParams } from "react-router-dom";
import { useEffect,useLayoutEffect, useState } from "react";
import styles from "./NewsDetailContent.module.css";
import clsx from "clsx";
import NewsHistoryViewed from "../NewsHistoryViewed/NewsHistoryViewed";
import { getNewsDetail } from "../../ApiService";

import parse from "html-react-parser";

const moment = require("moment");

function NewsDetail() {
  let { idNews } = useParams();
  const [data, setData] = useState();
  const sliceArr = (newsViewedData, dataCompare) => {
    for (let i = 0; i < newsViewedData.length; i++) {
      if (newsViewedData[i].id === dataCompare[0].id) {
        newsViewedData.splice(i, 1);
      }
    }
    return newsViewedData;
  };
  const pushLocalStorage = (data) => {
    let newsViewedData = JSON.parse(localStorage.getItem("newsViewed"));
    if (newsViewedData) {
      let newsData = sliceArr(newsViewedData, data);
      newsData = [...newsViewedData, ...data];
      localStorage.setItem("newsViewed", JSON.stringify(newsData));
    } else {
      newsViewedData = data;
      localStorage.setItem("newsViewed", JSON.stringify(newsViewedData));
    }
  };
  useEffect(() => {
    getNewsDetail(idNews)
      .then((res) => {
        let data = res.data;
        setData(data);
        pushLocalStorage([data]);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, [idNews]);

  useEffect(() => {
    var imgEl = document.getElementsByTagName("img");

    for (var i = 0; i < imgEl.length; i++) {
      let dataSRC = imgEl[i].getAttribute("data-src")
      let src = imgEl[i].getAttribute("src")

      if (dataSRC) {
        imgEl[i].setAttribute("src", dataSRC);
        imgEl[i].classList.add("imageItem")
        // imgEl[i].removeAttribute("data-src"); //use only if you need to remove data-src attribute after setting src
      }
    }
  }, [data]);
  return (
    <>
      {data && (
        <div>
          <p className={clsx(styles.titleNews)}>{data.caption}</p>
          <div className={clsx(styles.infoNews)}>
            <span className={styles.author}>{data.author}</span>
            <span className={styles.timeCreate}>
              <i className="uil uil-minus"></i>
              {moment(data.publishedAt).format("MMMM Do YYYY, h:mm:ss a")}
            </span>
          </div>
          <div className={clsx(styles.descriptionNews)}>{data.description}</div>
          <hr className={styles.hrNews} />
          <div className={styles.contentNews}>{parse(data.content)}</div>
          <NewsHistoryViewed />
        </div>
      )}
    </>
  );
}

export default NewsDetail;
