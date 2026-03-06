import { useInView } from 'react-intersection-observer';
import { works } from '../../data/works';
import styles from './Work.module.css';

function WorkCard({ work, delay }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`${styles.card} ${work.featured ? styles.featured : ''} ${inView ? styles.visible : ''}`}
            style={{ transitionDelay: delay }}
        >
            <div className={styles.embedWrapper}>
                <iframe
                    src={`https://www.youtube.com/embed/${work.youtubeId}?rel=0&modestbranding=1`}
                    title={work.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className={styles.iframe}
                />
            </div>
            <div className={styles.cardBody}>
                <span className={styles.category}>{work.category}</span>
                <h3 className={styles.title}>{work.title}</h3>
                <div className={styles.tags}>
                    {work.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Work() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="work" className={styles.work} ref={ref}>
            <div className={styles.container}>
                <div className={`${styles.header} ${inView ? styles.visible : ''}`}>
                    <p className={styles.sectionLabel}>Portfolio</p>
                    <h2 className={styles.heading}>Selected Work</h2>
                </div>

                <div className={styles.grid}>
                    {works.map((work, i) => (
                        <WorkCard
                            key={work.id}
                            work={work}
                            delay={`${i * 0.06}s`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
