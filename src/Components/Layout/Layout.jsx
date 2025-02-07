import React from "react";
import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className={styles.mainContent}>
        <Outlet />
      </div>
      {/* <div className={styles.footer}>
        <Footer />
      </div> */}
    </>
  );
}
