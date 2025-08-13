import { LinkOverlay } from "@/ui-components/links/Link";
import classNames from "classnames";

import { Introduction } from "../Introduction";
import styles from "./styles.module.scss";

const Header = () => (
  <header className={styles.box}>
    <Introduction />

    <div className={classNames("container", styles.wrapper)}>
      <LinkOverlay href="/" className={styles.logo}>
        <span>AbeloHost Shop</span>
        <span className={styles.dot}>.</span>
      </LinkOverlay>
    </div>
  </header>
);

export default Header;
