import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import styles from "./AppLayout.module.css"


export const AppLayout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Navbar />

            <main className={styles.layoutMain}>
                {children}
            </main>

            <Footer />
        </div>
    );
};