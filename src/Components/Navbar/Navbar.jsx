import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/logo-BfNap0Pe.png";
import { NavLink, useMatch, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHomeActive =
    useMatch("/") ||
    location.pathname.startsWith("/category/") ||
    location.pathname.startsWith("/mealdetails/");

  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {/* Menu for Small Screens */}
      <div className={styles.Menu} onClick={toggleNav}>
        <i className="fa-solid fa-bars"></i>
      </div>

      {/* Side Navbar */}
      <nav className={`${styles.sideNav} ${isNavOpen ? styles.open : ""}`}>
        <div className={styles.sideNavContent}>
          <div>
            <img className={styles.logo} src={logo} alt="Logo" />
          </div>
          <div>
            <ul className={styles.navList}>
              <NavLink to="/" className={isHomeActive ? styles.active : ""}>
                <li>
                  <i className="fa-solid fa-utensils"></i>
                  <span>Meals</span>
                </li>
              </NavLink>
              <NavLink
                to="/ingredients"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <li>
                  <i className="fa-solid fa-utensils"></i>
                  <span>Ingredients</span>
                </li>
              </NavLink>
              <NavLink
                to="/area"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <li>
                  <i className="fa-solid fa-utensils"></i>
                  <span>Areas</span>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
