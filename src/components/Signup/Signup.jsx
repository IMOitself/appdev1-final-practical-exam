import styles from "./Signup.module.css";
import flower from "../../assets/blossom-flower.svg";

export default function Signup() {
    return (
        <div className={styles.login}>
            <section className={styles.left}>

            </section>

            <section className={styles.right}>
                <img src={flower} alt="blossom flower" className={styles.flower} />
            </section>
        </div>
    );
}