import useAuthStore from "@/store/authStore";
import { IErrors } from "@/types/user";
import { DeffaultButton } from "@/ui-components/buttons/DeffaultButton";
import { Input } from "@/ui-components/input";
import { login } from "@/utils/api";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "./styles.module.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<IErrors>({ username: "", password: "", errAuth: "" });
  const { setUser } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = { username: "", password: "", errAuth: "" };
    let hasErrors = false;
    if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters long.";
      hasErrors = true;
    }
    if (password.length < 3) {
      newErrors.password = "Password must be at least 3 characters long.";
      hasErrors = true;
    }

    if (hasErrors) {
      setError(newErrors);
      return;
    }

    try {
      const user = await login(username, password);
      setUser(user);
      router.push("/");
    } catch (err) {
      setError({ errAuth: "There is no such user" });
      console.log(err);
    }
  };

  return (
    <div className={styles.box}>
      <div className={classNames("container", styles.wrapper)}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            name="username"
            className={styles.input}
            placeholder="Username"
            error={error.username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            name="password"
            className={styles.input}
            placeholder="Password"
            type="password"
            error={error.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <DeffaultButton type="submit" className={styles.btn}>
              Login
            </DeffaultButton>
            <div className={styles.error}>{error.errAuth}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
