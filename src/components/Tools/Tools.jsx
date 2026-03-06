import { useInView } from 'react-intersection-observer';
import { tools } from '../../data/tools';
import styles from './Tools.module.css';

export default function Tools() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section id="tools" className={styles.tools} ref={ref}>
            <div className={styles.container}>
                <div className={`${styles.header} ${inView ? styles.visible : ''}`}>
                    <p className={styles.sectionLabel}>Tech Stack</p>
                    <h2 className={styles.heading}>Industry Standard Workflows</h2>
                </div>

                <div className={`${styles.toolList} ${inView ? styles.visible : ''}`}>
                    {tools.map((tool, i) => (
                        <div
                            key={tool}
                            className={styles.toolItem}
                            style={{ transitionDelay: `${0.1 + i * 0.07}s` }}
                        >
                            <span className={styles.dot} aria-hidden="true">✦</span>
                            <span className={styles.toolName}>{tool}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
