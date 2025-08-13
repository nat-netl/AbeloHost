"use client";

import classNames from "classnames";

import { Contacts } from "../Contacts";
import { SideBar } from "../SideBar";
import styles from "./styles.module.scss";

const Introduction = () => {
  return (
    <div className={styles.box}>
      <div className={classNames("container", styles.wrapper)}>
        <div className={styles.contacts}>
          <Contacts />
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default Introduction;
