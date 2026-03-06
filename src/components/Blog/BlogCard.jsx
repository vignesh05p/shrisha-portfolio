import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

export default function BlogCard({ post }) {
    return (
        <Link to={`/blog/${post.slug}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={post.coverImage} alt={post.title} className={styles.coverImage} loading="lazy" />
                <span className={styles.categoryBadge}>{post.category}</span>
            </div>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.meta}>
                    <span className={styles.date}>{post.date}</span>
                    <span className={styles.dot}>·</span>
                    <span className={styles.readTime}>{post.readTime} read</span>
                </div>
            </div>
        </Link>
    );
}
