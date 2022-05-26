import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

import styles from "../Styles/Navbar/Nav.module.scss";

function Navbar() {
  return (
    <div>
      <nav className={styles.navContainer}>
        <ul className={styles.navbar}>
          <li className={styles.navbar_logo}>
            <Link to="/TechFirst/">
              <img
                className={styles.navbar_logo__img}
                src={logo}
                alt="Logo"
              />
            </Link>
          </li>
          <li className={styles.navbar_menu}>
            <ul className={styles.navbar_menu__links}>
              <li>
                <Link to="/TechFirst/">Home</Link>
              </li>
              <li>
                <Link to="/TechFirst/Add">Add Entry</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
