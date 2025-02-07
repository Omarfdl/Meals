import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-BfNap0Pe.png";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerN}>
        <div >
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <span>Recipe</span>
        </div>
        <div className={styles.route}>
          <span>Route</span>
        </div>
      </div>

      <div className={styles.rights}>
        <span>© 2025 Nagy Osama™. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
