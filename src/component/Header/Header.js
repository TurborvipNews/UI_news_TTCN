import clsx from "clsx"
import styles from './Header.module.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"


const logo = '../../../image/logo/logo-nosloganblack.png'

function Header() {
    return (
        <div className={clsx(styles.headerForm, 'row')}>
            <div className="col-xs-12  col-sm-5 col-md-7 col-lg-7">
                <Link to={'../'}>
                    <img src={logo} alt="" className={styles.logo} />
                </Link>
            </div >
            <div className={clsx(styles.formSearch, 'col-xs-12 col-md-3 col-lg-3 col-sm-5')}>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary" type="button">Search</button>
                </form>
            </div>
            <div className={clsx(styles.formBtn, 'col-xs-12  col-md-2 col-lg-2 col-sm-2')}>
            </div>
        </div >
    )
}
export default Header
