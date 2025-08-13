import classNames from "classnames";
import { ButtonHTMLAttributes, FC } from "react";

import styles from "./styles.module.scss";

interface IDeffaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

const DeffaultButton: FC<IDeffaultButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={classNames(styles.btn, className)} {...props}>
      {children}
    </button>
  );
};

export default DeffaultButton;
