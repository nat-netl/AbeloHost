import { LinkOverlay } from "@/ui-components/link";
import classNames from "classnames";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.box}>
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
