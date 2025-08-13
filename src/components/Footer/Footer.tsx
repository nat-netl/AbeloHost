"use client";

import useAuthStore from "@/store/authStore";
import classNames from "classnames";

import styles from "./styles.module.scss";

const Footer = () => {
  const { user } = useAuthStore();
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.box}>
      <div className={classNames("container", styles.wrapper)}>
        <div className={styles.info}>
          <span>{currentYear}</span>
          {user ? <span> `Logged as ${user.email}` </span> : ""}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
