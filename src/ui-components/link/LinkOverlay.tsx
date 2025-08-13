import classNames from "classnames";
import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

interface ILinkProps extends LinkProps {
  className: string;
  children: ReactNode;
}

const LinkOverlay: FC<ILinkProps> = ({ className, ...props }) => {
  return <Link className={classNames(styles.link, className)} {...props}></Link>;
};

export default LinkOverlay;
