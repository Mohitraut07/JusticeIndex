import React from "react";
import styles from "./footer.module.css";


const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <h3>
          All {String.fromCodePoint(0x00a9)} copyrights of website reserved by
          JusticeIndex.inc
        </h3>
      </div>
    </>
  );
};

export default Footer;
