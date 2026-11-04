import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { projects } from '../data/content';

export default function ProjectDetail({ slug }) {
    const project = projects.find((item) => item.slug === slug);
    if (!project) return <><Head title="Project not found" /><main className="detail-page"><h1>Project not found</h1><Link href="/">Back home</Link></main></>;
    return <><Head title={`${project.title} — Irfan Iqbal`} /><main className="detail-page"><Link href="/" className="detail-back">← Back to portfolio</Link><div className="detail-hero"><div><p className="eyebrow">{project.category}</p><h1>{project.title}</h1><p className="detail-intro">{project.description}</p>{project.link && <a className="button" href={project.link} target="_blank" rel="noreferrer">Visit live project ↗</a>}</div><img src={project.image} alt={project.title} /></div><div className="detail-content"><article><h2>Overview</h2><p>{project.overview}</p><h2>The challenge</h2><p>{project.challenge}</p><h2>The approach</h2><p>{project.approach}</p></article><aside><h3>Highlights</h3><ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul><h3>Technologies</h3><div className="tag-list">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div></aside></div></main></>;
}
