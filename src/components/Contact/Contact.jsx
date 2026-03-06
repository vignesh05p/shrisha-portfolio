import { useInView } from 'react-intersection-observer';
import styles from './Contact.module.css';

export default function Contact() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section id="contact" className={styles.contact} ref={ref}>
            <div className={`${styles.container} ${inView ? styles.visible : ''}`} ref={ref}>
                <p className={styles.sectionLabel}>Get in Touch</p>
                <h2 className={styles.heading}>
                    Let's Create Something <em>Remarkable</em>
                </h2>
                <p className={styles.body}>
                    Whether you have a script that needs a director's eye, footage that needs to come alive in
                    the edit, or a project that needs a thoughtful visual collaborator — I'd love to hear from
                    you. Every great film begins with a conversation.
                </p>

                <a
                    href="mailto:shrisha@example.com"
                    className={styles.email}
                >
                    shrisha@example.com
                </a>

                <div className={styles.socials}>
                    <a
                        href="https://www.facebook.com/shrish.nayak/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialBtn}
                    >
                        Facebook
                    </a>
                    <a
                        href="https://www.instagram.com/shrish_yellare/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialBtn}
                    >
                        Instagram
                    </a>
                    <a
                        href="https://wa.me/919632519549?text=Hi%20Shrisha!%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20collaborate."
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialBtn} ${styles.whatsappBtn}`}
                    >
                        WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
