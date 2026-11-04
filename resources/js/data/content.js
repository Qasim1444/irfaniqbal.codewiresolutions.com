export const projects = [
  {
    slug: "digital-dealership-system",
    category: "FULL-STACK DEVELOPMENT",
    title: "Digital Dealership System",
    description:
      "Lead Developer for a USA-based automotive dealership management platform. Built DMS and third-party API integrations, real-time data processing, AI-powered features, dashboards, KPIs and inventory management.",
    image: "https://codewiresolutions.com/images/brokerconvalor.jpeg",
    link: "https://www.brokerconvalor.it/",
    overview:
      "A dealership management platform built to bring day-to-day automotive operations into one connected system. The work covered the core DMS experience as well as integrations that keep dealership data moving between services.",
    challenge:
      "Dealership teams need reliable access to inventory, operational metrics and third-party data without switching between disconnected tools. Keeping those systems in sync while supporting timely decisions was central to the project.",
    approach:
      "As Lead Developer, I built and connected the DMS workflows, integrated third-party APIs, and implemented real-time data processing. AI-powered features and focused dashboards helped make the platform's data easier to use.",
    highlights: [
      "Dealership management workflows and inventory management",
      "Third-party API integrations and real-time data processing",
      "AI-powered features, dashboards and KPI reporting",
    ],
    technologies: ["DMS", "API integrations", "Real-time processing", "AI"],
  },
  {
    slug: "coolbuffs-ai-recruitment-platform",
    category: "AI / RAG CHATBOT",
    title: "CoolBuffs — AI Recruitment Platform",
    description:
      "Developed a custom RAG-powered AI chatbot microservice in Python (FastAPI) with vector search over platform content, giving accurate context-aware answers to candidates and employers. Laravel + Vue.js with Redis caching.",
    image: "https://codewiresolutions.com/images/coolbuffs.jpeg",
    link: "https://coolbuffs.com/",
    overview:
      "CoolBuffs is a recruitment platform that helps candidates and employers find relevant information through a context-aware AI assistant grounded in the platform's own content.",
    challenge:
      "A general-purpose chatbot can return answers that are vague or disconnected from a platform's actual information. The assistant needed to retrieve relevant content first and use it to provide more useful, context-aware responses.",
    approach:
      "I developed a Python and FastAPI microservice using retrieval-augmented generation and vector search over platform content. It works alongside the Laravel and Vue.js application, with Redis caching supporting repeated requests.",
    highlights: [
      "RAG-powered chatbot microservice built with Python and FastAPI",
      "Vector search over platform content for grounded answers",
      "Laravel and Vue.js integration with Redis caching",
    ],
    technologies: ["Python", "FastAPI", "RAG", "Vector search", "Laravel", "Vue.js", "Redis"],
  },
  {
    slug: "chefshub-chef-supplier-marketplace",
    category: "LARAVEL API / MOBILE",
    title: "ChefsHub — Chef & Supplier Marketplace",
    description:
      "Built a single Laravel 11 + Sanctum API backend powering a public website, admin panels, a Nuxt.js dashboard and a native Flutter mobile app — with token auth, role-based access and shared REST endpoints.",
    image: "https://codewiresolutions.com/images/chefshub.jpeg",
    link: "https://chefshub.site/Api_z/public/en",
    overview:
      "ChefsHub connects chefs and suppliers through a marketplace available across web, administration and mobile experiences. A shared API provides a consistent foundation for all of them.",
    challenge:
      "Supporting several clients independently can lead to duplicated business logic and inconsistent behavior. The platform needed one backend that could serve its public website, admin panels, dashboard and mobile app securely.",
    approach:
      "I built a Laravel 11 API secured with Sanctum. Token authentication, role-based access and shared REST endpoints allow the Nuxt.js dashboard, Flutter app, public website and admin panels to work with the same backend.",
    highlights: [
      "One Laravel 11 API serving web, admin and mobile clients",
      "Sanctum token authentication and role-based access",
      "Shared REST endpoints for the Nuxt.js dashboard and Flutter app",
    ],
    technologies: ["Laravel 11", "Sanctum", "REST API", "Nuxt.js", "Flutter"],
  },
  {
    slug: "project360-enterprise-pm-tool",
    category: "SAAS PLATFORM",
    title: "Project360 — Enterprise PM Tool",
    description:
      "Enterprise platform combining project management, time tracking and financial analytics. Features Gantt charts, calendar-based time entry, expense management, profitability dashboards and multi-organization roles.",
    image: "https://codewiresolutions.com/images/project360.jpeg",
    link: "https://project360ai.com/",
    overview:
      "Project360 brings project planning, time tracking and financial visibility together in an enterprise platform designed for multiple organizations.",
    challenge:
      "Project teams need to understand both delivery progress and financial performance. When project plans, timesheets, expenses and reporting are separated, it becomes harder to see how the work is progressing as a whole.",
    approach:
      "I worked on a platform that connects project schedules with calendar-based time entry and expense management. Gantt charts support planning, while profitability dashboards and multi-organization roles help teams review work in their respective contexts.",
    highlights: [
      "Project planning with Gantt charts",
      "Calendar-based time entry and expense management",
      "Profitability dashboards and multi-organization roles",
    ],
    technologies: ["Project management", "Time tracking", "Financial analytics", "Multi-organization access"],
  },
  {
    slug: "xstream-gym-fitness-platform",
    category: "LARAVEL / INERTIA.JS",
    title: "XStream Gym — Fitness Platform",
    description:
      "Full-stack fitness platform connecting trainers with members via live-streamed and on-demand workout classes. Role-based dashboards, class scheduling, secure auth, subscription access control and a responsive SPA.",
    image: "https://codewiresolutions.com/images/XStream%20Gym.png",
    overview:
      "XStream Gym connects trainers and members through live-streamed and on-demand workout classes, with scheduling and subscription access built into the experience.",
    challenge:
      "A fitness platform has to serve trainers and members with different needs while making classes easy to discover and access. Live and on-demand content also needs to respect each member's subscription.",
    approach:
      "I built a responsive single-page experience with role-based dashboards, class scheduling and secure authentication. Subscription access control ties class availability to member entitlements.",
    highlights: [
      "Live-streamed and on-demand workout classes",
      "Role-based dashboards and class scheduling",
      "Secure authentication and subscription access control",
    ],
    technologies: ["Laravel", "Inertia.js", "Vue.js", "Authentication", "Subscriptions"],
  },
  {
    slug: "careox-warehouse-order-erp",
    category: "ERP / MULTI-TENANT",
    title: "CareOX v2 — Warehouse & Order ERP",
    description:
      "Multi-tenant warehouse and order-fulfillment ERP bringing inventory, orders, CRM and a full finance suite into one platform. Integrated external marketplaces for auto order syncing, built with Laravel, Inertia.js and Vue.js.",
    image: "https://codewiresolutions.com/images/careox.png",
    overview:
      "CareOX v2 is a multi-tenant ERP for warehouse and order fulfillment that connects inventory, orders, customer management and finance operations.",
    challenge:
      "Managing stock and fulfillment across external marketplaces can create fragmented records and manual work. Teams also need to keep operational and financial information connected without crossing organization boundaries.",
    approach:
      "I built platform workflows with Laravel, Inertia.js and Vue.js, bringing inventory, orders, CRM and finance into one system. External marketplace integrations automatically sync orders into the fulfillment workflow.",
    highlights: [
      "Multi-tenant inventory, order fulfillment and CRM",
      "Full finance suite alongside operational workflows",
      "External marketplace integrations with automatic order syncing",
    ],
    technologies: ["Laravel", "Inertia.js", "Vue.js", "ERP", "Marketplace integrations"],
  },
];

export const posts = [
  {
    slug: "building-rag-pipelines-fastapi-pinecone",
    date: "18 Sep, 2026",
    comments: 32,
    title: "Building RAG Pipelines: AI Chatbots with FastAPI and Pinecone",
    image: "/blog/rag-chatbots.jpg",
    readingTime: "6 min read",
    intro:
      "A practical look at grounding AI chatbot answers in your product's own knowledge using retrieval-augmented generation, FastAPI and vector search.",
    sections: [
      {
        heading: "Why retrieval belongs in the chatbot",
        paragraphs: [
          "A language model can write fluent responses, but fluency alone does not make an answer accurate for a particular product. A RAG pipeline gives the model relevant source material at question time instead of asking it to rely only on broad training data.",
          "This is especially useful when answers depend on platform-specific information that changes over time. The content can be updated in the retrieval index without rebuilding the whole application around a new model.",
        ],
      },
      {
        heading: "The request flow",
        paragraphs: [
          "A useful pipeline starts by preparing trusted content: split it into searchable passages, attach metadata, and create vector embeddings. When a user asks a question, embed that query and retrieve the passages that are most relevant to it.",
          "The application then sends the question and retrieved context to the model with clear instructions to answer from that context. If the search does not return useful evidence, the assistant should say what it cannot confirm rather than inventing details.",
        ],
      },
      {
        heading: "Keep the service reliable",
        paragraphs: [
          "FastAPI provides a focused boundary for the retrieval and generation workflow. Validate incoming requests, keep provider-specific work behind service interfaces, and handle timeouts explicitly so an upstream model or vector store cannot stall the whole experience.",
          "Measure retrieval quality as well as response time. A fast answer based on irrelevant passages is still a poor answer. Log operational metadata carefully, protect user data, and test the pipeline with real questions and known-good source passages.",
        ],
      },
    ],
  },
  {
    slug: "laravel-sanctum-one-api-web-admin-flutter",
    date: "02 Aug, 2026",
    comments: 47,
    title: "Laravel 11 + Sanctum: One API Powering Web, Admin and Flutter Apps",
    image: "/blog/laravel-api.jpg",
    readingTime: "5 min read",
    intro:
      "How to design a shared Laravel API that supports multiple client applications without duplicating core business rules.",
    sections: [
      {
        heading: "Start with shared domain behavior",
        paragraphs: [
          "A public website, an administration panel and a mobile application may present the same workflows in very different ways. The rules behind those workflows should still have one home in the backend rather than being reimplemented separately for every client.",
          "A clear REST API gives each client a stable contract. Keep the response shapes intentional, document validation failures, and version breaking changes instead of relying on frontend-specific assumptions.",
        ],
      },
      {
        heading: "Authentication and access",
        paragraphs: [
          "Laravel Sanctum can support token-based access for clients that need API authentication. Authentication answers who is making a request; authorization must still determine which actions that user can perform and which records they can access.",
          "Use policies and role-aware checks at the server boundary. Hiding a button in a mobile or web interface improves the experience, but it is not a substitute for enforcing permissions in the API.",
        ],
      },
      {
        heading: "Make change safe for every client",
        paragraphs: [
          "Shared endpoints mean a change can affect several consumers at once. Automated tests for permissions, validation and important business workflows help keep those clients consistent as the application evolves.",
          "Keep client-specific presentation in the client and shared business decisions in the API. This lets a Nuxt dashboard, a Flutter app and an administration panel progress at their own pace while relying on the same source of truth.",
        ],
      },
    ],
  },
  {
    slug: "why-vue-inertia-over-traditional-spas",
    date: "14 Jun, 2026",
    comments: 28,
    title: "Why I Choose Vue.js and Inertia.js Over Traditional SPAs",
    image: "/blog/vue-inertia.jpg",
    readingTime: "4 min read",
    intro:
      "A look at how Vue.js and Inertia.js can deliver a responsive application while keeping a Laravel backend at the center of the product.",
    sections: [
      {
        heading: "A middle ground for full-stack apps",
        paragraphs: [
          "A traditional single-page application often introduces a separate frontend deployment and a large API surface, even when the product is primarily a server-backed application. Inertia.js offers another option: build a modern Vue interface while keeping routing and much of the application flow in Laravel.",
          "Instead of designing a separate API for every page transition, the server returns the page component and the data it needs. Vue still provides the interactive interface, but navigation can follow the familiar server-side route structure.",
        ],
      },
      {
        heading: "Where this approach helps",
        paragraphs: [
          "For dashboards, internal tools and product experiences closely tied to a Laravel domain, the shared application boundary can reduce duplicated routing and validation work. Teams can use Vue components where interaction matters without splitting every concern across separate services.",
          "The approach is not automatically the right fit for every product. Independent mobile clients, multiple frontend teams or a public API with its own consumers may benefit from a deliberately separate API architecture.",
        ],
      },
      {
        heading: "Choose for the shape of the product",
        paragraphs: [
          "The useful question is not whether a SPA or a server-rendered application is universally better. Consider deployment needs, client diversity, team boundaries and the complexity of the domain before choosing.",
          "Vue and Inertia.js work well when a product needs a reactive interface and the simplicity of a cohesive Laravel application. Keeping that trade-off explicit makes it easier to revisit as the product grows.",
        ],
      },
    ],
  },
  {
    slug: "scaling-laravel-redis-queues-docker",
    date: "27 Apr, 2026",
    comments: 56,
    title: "Scaling Laravel with Redis, Queues and Docker in Production",
    image: "/blog/laravel-scale.jpg",
    readingTime: "6 min read",
    intro:
      "Practical production patterns for moving slow work off web requests and running Laravel services consistently with Redis and Docker.",
    sections: [
      {
        heading: "Keep web requests focused",
        paragraphs: [
          "A user-facing request should do only the work needed to return a useful response. Sending email, importing a large dataset or processing media can take longer than a browser request should reasonably wait.",
          "Laravel queues move that work to background workers. The application can acknowledge the request promptly while workers process jobs independently and retry temporary failures according to a deliberate policy.",
        ],
      },
      {
        heading: "Use Redis with clear boundaries",
        paragraphs: [
          "Redis can provide a fast queue backend and support caching, but those uses should have intentional keys, expiration policies and operational monitoring. A cache is temporary by design; important business records should remain in a durable store.",
          "Queue jobs should be safe to retry. Make operations idempotent where possible, set sensible timeouts, and route repeated failures to a place where they can be inspected rather than silently losing work.",
        ],
      },
      {
        heading: "Make the runtime repeatable",
        paragraphs: [
          "Docker helps define the runtime environment for the web process and queue workers. Keep configuration external to the image, use health checks, and make sure deployments update workers as well as the web service.",
          "Scaling is more than adding containers. Watch queue depth, processing time, error rates and resource use. Those signals help reveal whether the bottleneck is the workers, the database, an external service or the job design itself.",
        ],
      },
    ],
  },
];
