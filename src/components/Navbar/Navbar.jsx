import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    /* darken navbar on scroll */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* lock body scroll when menu open */
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const handleLinkClick = (href) => {
        setMenuOpen(false);
        setTimeout(() => {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 320);
    };

    return (
        <>
            <nav
                className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuActive : ''}`}
            >
                {/* LOGO */}
                <div className={styles.logo}>Shrisha Nayak</div>

                {/* DESKTOP LINKS */}
                <ul className={styles.desktopLinks}>
                    {NAV_LINKS.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick(link.href);
                                }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* HAMBURGER BUTTON */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                </button>
            </nav>

            {/* MOBILE MENU OVERLAY */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>

                {/* Close button inside overlay */}
                <button
                    className={styles.closeBtn}
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                >
                    ✕
                </button>

                <ul className={styles.mobileLinks}>
                    {NAV_LINKS.map((link, i) => (
                        <li
                            key={link.label}
                            className={styles.mobileLinkItem}
                            style={{ '--i': i }}
                        >
                            <a
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick(link.href);
                                }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Bottom branding */}
                <div className={styles.menuFooter}>
                    Film Director · Editor · DOP
                </div>
            </div>
        </>
    );
}
