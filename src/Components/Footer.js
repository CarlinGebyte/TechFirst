import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import styles from "../Styles/Navbar/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <nav className={styles.footer}>
        <li className={styles.footer_logo}>
          <Link to="/TechFirst-PT/">
            <img
              className={styles.footer_logo__img}
              src={logo}
              alt="Logo"
            />
          </Link>
        </li>

        <ul className={styles.footer_nav}>
          <li className={styles.footer_nav__menu}>
            <h3>Contact me</h3>
            <a
              href="https://www.linkedin.com/in/carlos-alberto-garcia-cifuentes-b90410210/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/CarlinGebyte/"
              target={"_blank"}
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li></li>
        </ul>
      </nav>
      <div className={styles.developer}>
        <p>
          Developed by{" "}
          <a
            href="https://github.com/CarlinGebyte/"
            target={"_blank"}
            rel="noreferrer"
          >
            @CarlinGebyte
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
