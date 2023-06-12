import React from 'react'
import styles from './MenuTree.module.css'
import clsx from 'clsx';
import MenuChildren from './MenuChildren/MenuChildren';
import { Link } from "react-router-dom";

function MenuTree({ data }) {
  return (
    <div className={clsx(styles.MenuTree)}>
      {
        data.map(item => (
          <div key={item.data.id}>
            <div>
              <Link to={'../categories/' + item.data?.field} className={styles.nameCategory}>
                {item.data.name}
              </Link>
              <MenuChildren data={item.children} />
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default MenuTree
