import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2024 NextByte. All rights reserved.</p>
            <div className={styles.socialIcons}>
                <a
                    href="https://www.linkedin.com/in/candela-villaverde-0a9027318/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                >
                    <FaLinkedin className={styles.icon} />
                </a>
                <a
                    href="https://github.com/C4nd3l-m"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                >
                    <FaGithub className={styles.icon} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
