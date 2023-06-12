import React from "react";
import axios from "axios";
import { useState, useEffect, memo } from "react";
import styles from "./InfiniteList.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";
import { getNewsInfinitive } from "../../../ApiService";

const override = css`
  text-align: center;
  display: block;
  border-color: 1ECFA9;
`;

function InfiniteList({ state, setState, page, setPage }) {
  const [loadMore, setLoadMore] = useState(false);

  const getData = () => {
    getNewsInfinitive(page)
      .then(async (res) => {
        let arr = res.data;
        await setPage(++page);
        await setState((prev) => [...prev, ...arr]);
        await setLoadMore(false);

        console.log("state", state);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    // console.log('height', window.innerHeight + document.documentElement.scrollTop - 250)
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 250
    ) {
      setLoadMore(true);
    }
  }

  useEffect(() => {
    if (loadMore) {
      getData();
    }
    // eslint-disable-next-line
  }, [loadMore]);

  return (
    <div className={clsx(styles.normalContent, "row")}>
      <div
        id="list"
        className={clsx(
          "col-md-9 col-lg-9 col-xl-9 col-12",
          styles.itemsNormalContent
        )}
      >
        {state.map((item) => (
          <Link
            to={"/news/" + item.id}
            key={item.id}
            className="text-decoration-none"
          >
            <div className={clsx("row", styles.itemNormalContent)}>
              <div className={clsx("col-5", styles.imgNormalContent)}>
                <img
                  className={clsx("img-fluid img-thumbnail ", styles.imageItem)}
                  src={item.thumbnail}
                  alt=""
                />
              </div>
              <div className={clsx("col-7", styles.contentNormalContent)}>
                <div className={clsx(styles.titleNormalContent)}>
                  <div>{item.caption}</div>
                </div>
                <div className={clsx(styles.descriptionNormalContent)}>
                  {item.description}
                </div>
              </div>
            </div>
          </Link>
        ))}
        <div className={styles.loadingSpin}>
          {loadMore && (
            <div>
              <BeatLoader
                color={"#1ECFA9"}
                css={override}
                loading={loadMore}
                size={20}
              />{" "}
            </div>
          )}
        </div>
      </div>
      <div className={clsx("col-md-3 col-lg-3 col-xl-3 col-0", styles.allAds)}>
        <div className={styles.imgAds}>
          <img
            className={clsx("img-fluid img-thumbnail")}
            loading="lazy"
            src="https://znews-photo.zingcdn.me/w660/Uploaded/tpuoayp/2022_06_01/Solo_thumbthumb_master.jpg"
            alt=""
          />
        </div>
        <div className={styles.titleAds}>
          Johnny Depp có thể trở lại 'Cướp biển vùng Caribbean'
        </div>
      </div>
    </div>
  );
}

export default memo(InfiniteList);
