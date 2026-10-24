import styles from "./Signup.module.css";
import flower from "../../assets/blossom-flower.svg";

export default function Signup() {
    return (
        <div className={styles.signup}>
            <section className={styles.left}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Get Started Now</h1>

                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.field}>
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" placeholder="Enter your name" />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="email">Email address</label>
                            <input id="email" type="email" placeholder="Enter your email" />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" placeholder="Enter your password" />
                        </div>

                        <label className={styles.terms}>
                            <input type="checkbox" />
                            <span>
                                I agree to the <a href="#">terms &amp; policy</a>
                            </span>
                        </label>

                        <button type="submit" className={styles.submit}>
                            Signup
                        </button>
                    </form>
                </div>
            </section>

            <section className={styles.right}>
                <img src={flower} alt="Blossom flower" className={styles.flower} />
            </section>
        </div>
    );
}
