import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {ERROR_ROUTE, HOME_ROUTE} from "../../utils/PATHS";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <Fragment>
            <header className={styles.header}>
                <div className={styles.header__content}>
                    <div className={styles.header__content_logo}>Travling!</div>
                    <nav className={styles.header__content_navigation}>
                        <Link to={HOME_ROUTE} className={styles.header__content_navigation_item}>Product</Link>
                        <Link to={HOME_ROUTE} className={styles.header__content_navigation_item}>Contact Us</Link>
                        <Link to={ERROR_ROUTE} className={styles.header__content_navigation_item}>About Us</Link>
                    </nav>
                    <div className={styles.header__content_buttonBlock}>
                        <button className={styles.header__content_buttonBlock_button}>Sign Up</button>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;