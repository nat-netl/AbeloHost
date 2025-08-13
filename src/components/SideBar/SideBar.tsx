"use client";

import { DeffaultButton } from "@/ui-components/buttons/DeffaultButton";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

import close from "../../../assets/icons/close.svg";
import menu from "../../../assets/icons/menu.svg";
import { Contacts } from "../Contacts";
import styles from "./styles.module.scss";

const SideBar = () => {
  const [isShowSideBar, setIsShowSideBar] = useState(false);

  const toggleMenu = () => setIsShowSideBar(!isShowSideBar);

  return (
    <>
      <DeffaultButton className={styles.btn} onClick={toggleMenu}>
        <Image src={isShowSideBar ? close : menu} alt="Menu" width={20} height={20} />
      </DeffaultButton>
      <div className={classNames(styles.menu, isShowSideBar && styles["menu-active"])}>
        <div className={styles.wrapper}>
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default SideBar;
