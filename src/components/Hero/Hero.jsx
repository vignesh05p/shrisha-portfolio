import bgLow from '../../assets/img/bg-low.webp';
import portrait from '../../assets/img/shrisha.webp';
import premierePro from '../../assets/img/premier pro.webp';
import lightroom from '../../assets/img/lighroom.webp';
import capcut from '../../assets/img/capcut.webp';
import capcut1 from '../../assets/img/capcut1.webp';
import styles from './Hero.module.css';

const pills = ['Film Direction', 'Video Editing'];

export default function Hero() {
    const handleScrollToWork = () => {
        const target = document.querySelector('#work');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={styles.stage}>

            {/* Layer 1 — Background */}
            <img src={bgLow} alt="" aria-hidden="true" className={styles.bgImage} />

            {/* Layer 2 — Gradient overlay */}
            <div className={styles.gradientOverlay} aria-hidden="true" />

            {/* Layer 3 — Portrait back-glow */}
            <div className={styles.portraitGlow} aria-hidden="true" />

            {/* Layer 4 — Portrait */}
            <div className={styles.portrait}>
                <img src={portrait} alt="Shrisha Nayak" />
            </div>

            {/* Layer 5 — Floating logos (3D depth) */}
            <img src={premierePro} alt="Adobe Premiere Pro" className={`${styles.logo} ${styles.logoA}`} />
            <img src={capcut1} alt="CapCut" className={`${styles.logo} ${styles.logoB}`} />
            <img src={lightroom} alt="Adobe Lightroom" className={`${styles.logo} ${styles.logoC}`} />
            <img src={capcut} alt="CapCut" className={`${styles.logo} ${styles.logoD}`} />
            <img src={premierePro} alt="" aria-hidden="true" className={`${styles.logo} ${styles.logoE}`} />
            <img src={lightroom} alt="" aria-hidden="true" className={`${styles.logo} ${styles.logoF}`} />
            <img src={capcut1} alt="" aria-hidden="true" className={`${styles.logo} ${styles.logoG}`} />

            {/* Layer 6 — Film grain */}
            <div className={styles.grain} aria-hidden="true" />

            {/* Layer 7 — Text block */}
            <div className={styles.textBlock}>

                <div className={styles.eyebrow}>
                    Director · Editor · Visual Storyteller
                </div>

                <h1 className={styles.name}>
                    <span className={styles.line1}>SHRISHA</span>
                    <span className={styles.line2}>NAYAK</span>
                </h1>

                <div className={styles.pills}>
                    {pills.map((p) => (
                        <span key={p} className={styles.pill}>{p}</span>
                    ))}
                </div>

                <button className={styles.cta} onClick={handleScrollToWork}>
                    View Work &nbsp;↓
                </button>
            </div>

            {/* Layer 8 — Scroll indicator */}
            <div className={styles.scrollHint} aria-hidden="true">
                <span className={styles.scrollLabel}>SCROLL</span>
                <div className={styles.scrollLine} />
            </div>

        </section>
    );
}
