import { LinkOverlay } from "@/ui-components/links/Link";
import classNames from "classnames";

import { Contacts } from "../Contacts";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.box}>
      <Contacts />

      <div className={classNames("container", styles.wrapper)}>
        <LinkOverlay href="/" className={styles.logo}>
          <span>AbeloHost Shop</span>
          <span className={styles.dot}>.</span>
        </LinkOverlay>
      </div>
    </footer>
  );
};

export default Footer;
