import { LinkOverlay } from "@/ui-components/links/Link";
import classNames from "classnames";

import { Contacts } from "../Contacts";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.box}>
      <Contacts className={styles.contacts} />

      <div className={classNames("container", styles.wrapper)}>
        <LinkOverlay href="/" className={styles.logo}>
          <span>AbeloHost Shop</span>
          <span className={styles.dot}>.</span>
        </LinkOverlay>
      </div>
    </header>
  );
};

export default Header;
