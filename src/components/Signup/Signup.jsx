import styles from "./Signup.module.css";
import flower from "../../assets/blossom-flower.svg";

export default function Signup() {
    return (
        <div className={styles.signup}>
            <section className={styles.left}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Get Started Now</h1>
                </div>
            </section>

            <section className={styles.right}>
                <img src={flower} alt="Blossom flower" className={styles.flower} />
            </section>
        </div>
    );
}
