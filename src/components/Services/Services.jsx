import { useInView } from 'react-intersection-observer';
import services from '../../data/services';
import styles from './Services.module.css';

export default function Services() {
    const { ref: headerRef, inView: headerVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: gridRef, inView: gridVisible } = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="services" className={styles.services}>
            <div className="container">

                {/* ── Section header ── */}
                <div
                    ref={headerRef}
                    className={`${styles.header} ${headerVisible ? styles.visible : ''}`}
                >
                    <p className={styles.eyebrow}>Services</p>
                    <h2 className={styles.title}>What I Bring to Your Vision</h2>
                    <p className={styles.subtitle}>
                        Every project — big or small — gets the same attention, the same
                        care, and the same drive to make something worth watching.
                    </p>
                </div>

                {/* ── Cards grid ── */}
                <div
                    ref={gridRef}
                    className={`${styles.grid} ${gridVisible ? styles.visible : ''}`}
                >
                    {services.map((service) => (
                        <div
                            key={service.num}
                            className={`
                ${styles.serviceCard}
                ${service.featured ? styles.featuredCard : ''}
                ${service.aiBadge ? styles.aiCard : ''}
              `}
                        >
                            {/* Top-right badge */}
                            {service.badge && (
                                <span
                                    className={`
                    ${styles.cardBadge}
                    ${service.aiBadge ? styles.aiBadgeStyle : styles.featuredBadgeStyle}
                  `}
                                >
                                    {service.badge}
                                </span>
                            )}

                            {/* Large faded number */}
                            <div className={styles.serviceNum}>{service.num}</div>

                            {/* Icon */}
                            <div className={styles.serviceIcon}>{service.icon}</div>

                            {/* Name */}
                            <h3 className={styles.serviceName}>{service.name}</h3>

                            {/* Description */}
                            <p className={styles.serviceDesc}>{service.desc}</p>

                            {/* Tools */}
                            <div className={styles.serviceTools}>{service.tools}</div>

                            {/* Mac Mini extra badge — card 01 only */}
                            {service.extraBadge && (
                                <div className={styles.macBadge}>{service.extraBadge}</div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
