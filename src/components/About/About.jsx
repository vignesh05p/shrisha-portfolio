import { useInView } from 'react-intersection-observer';
import styles from './About.module.css';

const stats = [
    { number: '12+', label: 'Projects' },
    { number: '3', label: 'Disciplines' },
    { number: '1', label: 'Tulu Feature' },
    { number: '∞', label: 'Stories' },
];

const skills = [
    {
        name: 'Video Editing',
        subtitle: 'Premiere · DaVinci · Final Cut',
        percent: 97,
    },
    {
        name: 'Film Direction',
        subtitle: 'Short Films · Narratives',
        percent: 95,
    },
    {
        name: 'DOP / Cinematography',
        subtitle: 'Framing · Lighting · Shot Design',
        percent: 85,
    },
    {
        name: 'Photoshop & Design',
        subtitle: 'Compositing · Retouching',
        percent: 88,
    },
    {
        name: 'Storytelling',
        subtitle: 'Story · Direction · Vision',
        percent: 90,
    },
];

export default function About() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="about" className={styles.about} ref={ref}>
            <div className={styles.container}>
                {/* Bio + Stats */}
                <div className={`${styles.bioColumn} ${inView ? styles.visible : ''}`}>
                    <p className={styles.sectionLabel}>About</p>
                    <h2 className={styles.heading}>
                        Where Vision Meets <em>Craft</em>
                    </h2>
                    <p className={styles.bio}>
                        I am Shrisha Nayak — a filmmaker, editor, and visual artist who believes that every
                        frame is an opportunity to say something true. My work lives at the intersection of
                        raw storytelling and precise technical craft: from orchestrating a scene on set to
                        sculpting it in an edit suite, I approach every project as a singular act of
                        creative focus.
                    </p>
                    <p className={styles.bio}>
                        With a background spanning short films, feature-length productions, corporate
                        narratives, and visual design, I've developed a philosophy rooted in intention.
                        The lens choice, the cut point, the color palette — each is a decision that either
                        serves the story or doesn't. I believe only in the former.
                    </p>

                    <div className={styles.stats}>
                        {stats.map((stat, i) => (
                            <div
                                key={stat.label}
                                className={styles.statItem}
                                style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
                            >
                                <span className={styles.statNumber}>{stat.number}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <div className={`${styles.skillsColumn} ${inView ? styles.visible : ''}`}>
                    <p className={styles.sectionLabel}>Expertise</p>
                    <h3 className={styles.skillsHeading}>Skill Set</h3>
                    <div className={styles.skillsList}>
                        {skills.map((skill, i) => (
                            <div
                                key={skill.name}
                                className={styles.skillItem}
                                style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
                            >
                                <div className={styles.skillHeader}>
                                    <span className={styles.skillName}>{skill.name}</span>
                                    <span className={styles.skillPercent}>{skill.percent}%</span>
                                </div>
                                <p className={styles.skillSubtitle}>{skill.subtitle}</p>
                                <div className={styles.barTrack}>
                                    <div
                                        className={styles.barFill}
                                        style={{ width: inView ? `${skill.percent}%` : '0%' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
