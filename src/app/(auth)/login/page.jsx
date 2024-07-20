import { handleGithubLogin } from "@/lib/actions";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/loginForm";

const LoginPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm/>
      </div>
    </div>
  );
};

export default LoginPage;