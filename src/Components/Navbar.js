import React from "react";
import { Link } from "react-router-dom";

import styles from "../Styles/Navbar/Nav.module.scss";

function Navbar() {
  return (
    <div>
      <nav className={styles.navContainer}>
        <ul className={styles.navbar}>
          <li className={styles.navbar_logo}>
            <Link to="/TechFirst-PT/">
              <img
                className={styles.navbar_logo__img}
                src="https://flyclipart.com/thumb2/blog-blogger-blogspot-circle-gradient-media-social-media-icon-560984.png"
                alt="Logo"
              />
            </Link>
          </li>
          <li className={styles.navbar_menu}>
            <ul className={styles.navbar_menu__links}>
              <li>
                <Link to="/TechFirst-PT/">Home</Link>
              </li>
              <li>
                <Link to="/TechFirst-PT/Add">Add Entry</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
