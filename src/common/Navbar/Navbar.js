import React from "react";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { arrayToTree } from "performant-array-to-tree";
import MenuTree from "./FamilyTree/MenuTree";
import { Link } from "react-router-dom";
import { getCategories } from "../../ApiService";

function Navbar() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(false);
  const [tree, setTree] = useState();

  useEffect(() => {
    getCategories()
      .then(async (res) => {
        let arr = res.data;
        let abc = res.data;
        arr = arr.filter((item) => {
          return item?.category_parent?.id == null;
        });
        arr = arr.length > 10 ? arr.slice(0, 9) : arr;
        console.log('arr', arr);
        let newArray = arrayToTree(abc, { id: "id", parentId: "category_parent.id" });
        console.log('tree', newArray);
        setItems(arr);
        setTree(newArray);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleClick = () => {
    setCount(!count);
  };

  return (
    <div className={styles.navForm}>
      <ul className={styles.nav}>
        {items.map(
          (item) =>
            item?.category_parent === null && (
              <li className={styles.navItem} key={item.id}>
                <Link to={"../categories/" + item.field} className={styles.span}>
                  {item.name}
                </Link>
              </li>
            )
        )}
        <li className={styles.navItem} onClick={handleClick}>
          <span>
            <i className="uil uil-bars"></i>
          </span>
        </li>
      </ul>
      <hr />
      {count && <MenuTree data={tree} />}
    </div>
  );
}

export default Navbar;
