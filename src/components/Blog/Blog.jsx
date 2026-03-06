import { useInView } from 'react-intersection-observer';
import { blogPosts } from '../../data/blogPosts';
import BlogCard from './BlogCard';
import styles from './Blog.module.css';

export default function Blog() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="blog" className={styles.blog} ref={ref}>
            <div className={styles.container}>
                <div className={`${styles.header} ${inView ? styles.visible : ''}`}>
                    <p className={styles.sectionLabel}>Journal</p>
                    <h2 className={styles.heading}>
                        Behind the{' '}
                        <em className={styles.goldItalic}>Frame</em>
                    </h2>
                    <p className={styles.subtitle}>
                        Thoughts on filmmaking, editing craft, and visual storytelling.
                    </p>
                </div>

                <div className={styles.grid}>
                    {blogPosts.map((post, i) => (
                        <div
                            key={post.id}
                            className={`${styles.cardWrapper} ${inView ? styles.cardVisible : ''}`}
                            style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
                        >
                            <BlogCard post={post} />
                        </div>
                    ))}
                </div>

                <div className={`${styles.readAll} ${inView ? styles.visible : ''}`}>
                    <a href="/blog" className={styles.readAllLink}>
                        Read All Posts →
                    </a>
                </div>
            </div>
        </section>
    );
}
