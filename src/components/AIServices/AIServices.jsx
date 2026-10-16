import { useInView } from 'react-intersection-observer';
import styles from './AIServices.module.css';
import flowLogo from '../../assets/brands/google-flow-logo.svg';
import elevenLabsLogo from '../../assets/brands/elevenlabs-logo.svg';

const highlights = [
    'AI-generated cinematic films and short videos',
    'AI-powered product advertisements and promotional videos',
    'Creative YouTube and Instagram video content',
    'AI-generated voiceovers, narration, and sound design',
    'AI-assisted storytelling, visual development, and scene creation',
];

const tools = [
    {
        logo: flowLogo,
        name: 'Google Flow',
        desc: 'AI-powered video generation and cinematic scene creation',
    },
    {
        logo: elevenLabsLogo,
        name: 'ElevenLabs',
        desc: 'AI voice generation, narration, and voiceovers',
    },
];

export default function AIServices() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="ai-filmmaking" className={styles.aiServices}>
            <div
                ref={ref}
                className={`${styles.container} ${inView ? styles.visible : ''}`}
            >
                <p className={styles.eyebrow}>New — AI Services</p>
                <h2 className={styles.title}>
                    AI Filmmaking &amp; <em>Video Ad Creation</em>
                </h2>
                <p className={styles.description}>
                    Transform ideas into cinematic visual experiences with AI-powered
                    filmmaking. From realistic product advertisements and cinematic
                    storytelling to creative social media videos, Shrish combines AI tools
                    with professional video editing to create engaging, high-quality
                    visual content.
                </p>

                <div className={styles.columns}>
                    <ul className={styles.highlights}>
                        {highlights.map((item) => (
                            <li key={item} className={styles.highlight}>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className={styles.toolsCard}>
                        <p className={styles.toolsLabel}>Featured AI Tools</p>
                        {tools.map((tool) => (
                            <div key={tool.name} className={styles.tool}>
                                <div className={styles.toolLogoWrap}>
                                    <img
                                        src={tool.logo}
                                        alt={`${tool.name} logo`}
                                        className={`${styles.toolLogo} ${
                                            tool.name === 'Google Flow' ? styles.flowLogo : ''
                                        }`}
                                    />
                                </div>
                                <div>
                                    <p className={styles.toolName}>{tool.name}</p>
                                    <p className={styles.toolDesc}>{tool.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <a href="#contact" className={styles.cta}>
                    Discuss Your Project
                </a>
            </div>
        </section>
    );
}
