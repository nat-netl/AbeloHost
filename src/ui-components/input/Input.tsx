import classNames from "classnames";
import { FC, InputHTMLAttributes } from "react";

import styles from "./styles.module.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error: string;
}

const Input: FC<IInputProps> = ({ className, required = true, type = "text", error, ...props }) => {
  return (
    <div className={styles.box}>
      <input
        className={classNames(className, styles.input)}
        type={type}
        required={required}
        {...props}
      />

      {error && (
        <div className={styles.error}>
          <span className={styles["error-text"]}>{error}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
