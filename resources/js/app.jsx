import '../css/app.css';
import '../css/quote-overrides.css';
import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

createInertiaApp({
    resolve: (name) => import(`./Pages/${name}.jsx`),
    setup({ el, App, props }) {
        document.addEventListener('click', (event) => {
            const link = event.target.closest('a');
            if (!link || !['Read article ↗', 'View case study ↗'].includes(link.textContent.trim())) return;
            const title = link.closest('article')?.querySelector('h3')?.textContent.trim();
            const projectSlugs = {
                'Digital Dealership System': 'digital-dealership-system',
                'CoolBuffs — AI Recruitment Platform': 'coolbuffs-ai-recruitment-platform',
                'ChefsHub — Chef & Supplier Marketplace': 'chefshub-chef-supplier-marketplace',
                'Project360 — Enterprise PM Tool': 'project360-enterprise-pm-tool',
                'XStream Gym — Fitness Platform': 'xstream-gym-fitness-platform',
                'CareOX v2 — Warehouse & Order ERP': 'careox-warehouse-order-erp',
            };
            const blogSlugs = {
                'Building RAG Pipelines: AI Chatbots with FastAPI and Pinecone': 'building-rag-pipelines-fastapi-pinecone',
                'Laravel 11 + Sanctum: One API Powering Web, Admin and Flutter Apps': 'laravel-sanctum-one-api-web-admin-flutter',
                'Why I Choose Vue.js and Inertia.js Over Traditional SPAs': 'why-vue-inertia-over-traditional-spas',
                'Scaling Laravel with Redis, Queues and Docker in Production': 'scaling-laravel-redis-queues-docker',
            };
            const slug = projectSlugs[title];
            const blogSlug = blogSlugs[title];
            if (slug || blogSlug) { event.preventDefault(); window.open(`/${slug ? 'portfolio' : 'blog'}/${slug || blogSlug}`, '_blank', 'noopener,noreferrer'); }
        });
        createRoot(el).render(<App {...props} />);
    },
});
