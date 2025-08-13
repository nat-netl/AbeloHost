import classNames from "classnames";
import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

interface ILinkProps extends LinkProps {
  className: string;
  children: ReactNode;
}

const LinkOverlay: FC<ILinkProps> = ({ className, children, ...props }) => {
  return (
    <Link className={classNames(styles.link, className)} {...props}>
      {children}
    </Link>
  );
};

export default LinkOverlay;
