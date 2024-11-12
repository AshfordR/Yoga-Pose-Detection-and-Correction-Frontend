import Link from "next/link";
import styles from './NotFound.module.css'; // Import your CSS module

export default function NotFound(){
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Page not found</h2>
            <p className={styles.message}>Oops! Looks like the page you're looking for doesn't exist.</p>
            <img src="Images/notfound.gif" alt="Page not found" className={styles.gif} />
            <Link href="/Home">
                <span className={styles.link}>Return Home</span>
            </Link>
        </div>
    );
}
