import React from 'react'
import styles from './Loading.module.css'
import SquareLoader from "react-spinners/SquareLoader";
import { css } from "@emotion/react";

const override = css`
  text-align: center;
  display: block;
  border-color: 1ECFA9;
`;

function Loading() {
    return (
        <div className={styles.loading}>
            <SquareLoader color={"#1ECFA9"} css={override} loading={true} size={50} className={styles.loadItem} />
        </div>

    )
}

export default Loading