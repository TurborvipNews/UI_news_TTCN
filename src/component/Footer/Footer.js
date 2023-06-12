import styles from "./Footer.module.css";
import clsx from "clsx";
const logo = "../../../image/logo/logo-noslogan.png";

function Footer() {
  return (
    <div className={styles.footerForm}>
      <img className={styles.logo} src={logo} alt="" />
      <div className={"row"}>
        <div
          className={clsx(
            styles.information,
            "col-md-4 col-lg-4 col-sm-4 col-xs-12",
            styles.column
          )}
        >
          <div>Online electronic magazine</div>
          <div>Managing agency: Turborvip Publishing Association</div>
          <div>
            Press license: No. 75/GP-BTTTT issued by the Ministry of Information
            and Communications on February 26, 2020
          </div>
          <div>Deputy editor in charge: group 15</div>
          <div>©All copyright belongs to Knowledge Online</div>
        </div>
        <div className={clsx("col-md-4 col-lg-4 col-sm-4 col-xs-12")}>
          <div>
            Address: 24,Pham Van Dong stress, Le Duc Tho ward, Cau Giay
            district, Ha Noi city, Viet Nam
          </div>
          <div>Hotline: 19000012004</div>
        </div>
        <div
          className={clsx(
            "col-md-4 col-lg-4 col-sm-4 col-xs-12",
            styles.contact
          )}
        >
          <img
            src="https://img.icons8.com/color/48/000000/twitter--v1.png"
            alt=""
          />
          <img
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
            alt=""
          />
          <img
            src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Footer;
