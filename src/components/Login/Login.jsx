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

                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.field}>
                            <label htmlFor="email">Email address</label>
                            <input id="email" type="email" placeholder="Enter your email" />
                        </div>

                        <div className={styles.field}>
                            <div className={styles.labelRow}>
                                <label htmlFor="password">Password</label>
                                <a href="#" className={styles.forgot}>forgot password</a>
                            </div>
                            <input id="password" type="password" placeholder="Enter your password" />
                        </div>

                        <label className={styles.terms}>
                            <input type="checkbox" />
                            <span>Remember for 30 days</span>
                        </label>

                        <button type="submit" className={styles.submit}>
                            Login
                        </button>
                    </form>
                    <div className={styles.divider}>
                        <span>Or</span>
                    </div>

                    <div className={styles.socials}>
                        <button type="button" className={styles.social}>
                            <img src={googleIcon} alt="" />
                            Sign in with Google
                        </button>
                        <button type="button" className={styles.social}>
                            <img src={appleIcon} alt="" />
                            Sign in with Apple
                        </button>
                    </div>

                    <p className={styles.signin}>
                        Don’t have an account? <a href="#">Sign Up</a>
                    </p>
                </div>
            </section>

            <section className={styles.right}>
                <img src={flower} alt="Blossom flower" className={styles.flower} />
            </section>
        </div>
    );
}