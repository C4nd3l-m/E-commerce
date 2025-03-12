import styles from '@/components/Footer/footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2024 NextByte. All rights reserved.</p>
            <div className={styles.socialIcons}>
                <a
                    href="https://www.linkedin.com/in/candela-villaverde%F0%9F%91%BE-0a9027318/"
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
