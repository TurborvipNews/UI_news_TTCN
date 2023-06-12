import React from 'react'
import styles from './MenuChildren.module.css'
import { Link } from "react-router-dom";

function MenuChildren({ data }) {
    return (
        <div className={styles.menuChildren}>
            {
                data.map(item => (
                    <div key={item.data.id}>
                        <Link to={'../categories/' + item.data?.field} className={styles.nameCategory}>
                            {item.data.name}
                        </Link>
                        {item.children.length === 0 ? '' : <MenuChildren data={item.children} />}
                    </div>
                ))


            }
        </div>
    )
}
export default MenuChildren

