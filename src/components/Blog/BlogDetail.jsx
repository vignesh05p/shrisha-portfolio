import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { blogPosts } from '../../data/blogPosts';
import styles from './Blog.module.css';

export default function BlogDetail() {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [slug]);

    if (!post) {
        return (
            <div className={styles.notFound}>
                <p>Post not found.</p>
                <Link to="/" className={styles.backLink}>
                    ← Back to Portfolio
                </Link>
            </div>
        );
    }

    return (
        <article className={styles.detailPage}>
            {/* Hero Image */}
            <div className={styles.detailHero}>
                <img src={post.coverImage} alt={post.title} className={styles.detailHeroImg} />
                <div className={styles.detailHeroOverlay} />
                <div className={styles.detailHeroContent}>
                    <span className={styles.detailCategory}>{post.category}</span>
                    <h1 className={styles.detailTitle}>{post.title}</h1>
                </div>
            </div>

            {/* Article Body */}
            <div className={styles.detailContainer}>
                <Link to="/" className={styles.backLink}>
                    ← Back to Portfolio
                </Link>

                <div className={styles.detailMeta}>
                    <span>{post.date}</span>
                    <span className={styles.dot}>·</span>
                    <span>{post.readTime} read</span>
                </div>

                <div className={styles.content}>
                    {post.content.map((paragraph, i) => (
                        <p key={i} className={styles.paragraph}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </article>
    );
}
