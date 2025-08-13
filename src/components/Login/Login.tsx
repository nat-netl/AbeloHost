import { DeffaultButton } from "@/ui-components/buttons/DeffaultButton";
import { Input } from "@/ui-components/input";
import classNames from "classnames";

import styles from "./styles.module.scss";

const Login = () => {
  return (
    <div className={styles.box}>
      <div className={classNames("container", styles.wrapper)}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form}>
          <Input className={styles.input} placeholder="Username" error="" />
          <Input className={styles.input} placeholder="Password" type="password" error="" />
          <DeffaultButton className={styles.btn}>Login</DeffaultButton>
        </form>
      </div>
    </div>
  );
};

export default Login;
