import styles from "./Login.module.css";
import flower from "../../assets/blossom-flower.svg";
import googleIcon from "../../assets/icons-google-logo.svg";
import appleIcon from "../../assets/icons-apple-logo.svg";

export default function Login() {
    return (
        <div className={styles.login}>
            <section className={styles.left}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Welcome back!</h1>
                    <p className={styles.subtitle}>Enter your Credentials to access your account</p>
                </div>
            </section>

            <section className={styles.right}>
                <img src={flower} alt="Blossom flower" className={styles.flower} />
            </section>
        </div>
    );
}