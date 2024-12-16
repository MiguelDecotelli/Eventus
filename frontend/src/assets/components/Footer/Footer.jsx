import React from "react";
import styles from "./Footer.module.css"

export const Footer = () => {
    return (
        <footer className={styles.pages}>
            <a href="/" target="_blank" rel="noopener noreferrer">
                <img className={styles.image}
                    src="/logo.png"
                    alt="Eventus" />
            </a>
            <br />
            <a className={styles.email} href="mailto:eventusmaisprati@gmail.com">
                eventusmaisprati@gmail.com
            </a>
            <br />
            <div className={styles.socials}>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-square-x-twitter"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </footer>
    );
};