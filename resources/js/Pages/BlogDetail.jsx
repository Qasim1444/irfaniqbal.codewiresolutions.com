import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { posts } from '../data/content';

export default function BlogDetail({ slug }) {
    const post = posts.find((item) => item.slug === slug);
    if (!post) return <><Head title="Article not found" /><main className="detail-page"><h1>Article not found</h1><Link href="/">Back home</Link></main></>;
    return <><Head title={`${post.title} — Irfan Iqbal`} /><main className="detail-page blog-detail"><Link href="/" className="detail-back">← Back to portfolio</Link><header><p className="eyebrow">{post.date} · {post.readingTime} · {post.comments} comments</p><h1>{post.title}</h1><p className="detail-intro">{post.intro}</p><img src={post.image} alt={post.title} /></header><article>{post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</article></main></>;
}
