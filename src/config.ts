export const config = {
    developer: {
        name: "Qusai",
        fullName: "Qusai Shergardwala",
        title: "AI Engineer & Full-Stack Developer",
        description: "AI Engineer & Full-Stack Developer building LLM pipelines, multi-agent systems, and production mobile/web apps. Currently interning at Rapid7 on vulnerability intelligence tooling."
    },
    social: {
        github: "qusaii21",
        email: "qusher9953@gmail.com",
        location: "Pune, India"
    },
    about: {
        title: "About Me",
        description: "I'm a final-year B.Tech AI & Data Science student at VIT Pune (CGPA 8.74), currently interning at Rapid7 on their Vulnerability Coverage Team — building Airflow pipelines, LLM validation tools, and owning end-to-end Patch Tuesday delivery within a 24-hour SLA. I build across the full stack: LLM agents, RAG pipelines, Flutter apps, and production web platforms. I've won hackathons, published in Springer (Scopus) and IEEE Xplore, chaired MUN committees for 40+ delegates, and shipped apps used by real users. I like building things that actually ship."
    },
    experiences: [
        {
            position: "Software Engineer Intern",
            company: "Rapid7 — Vulnerability Coverage Team",
            period: "January 2026 - Present",
            location: "Pune, India",
            description: "Building LLM-powered tooling and Airflow pipelines for vulnerability intelligence. Own end-to-end Microsoft Patch Tuesday delivery within a 24-hour SLA.",
            responsibilities: [
                "Built Apache Airflow pipeline from scratch, automating Patch Tuesday content from MSRC APIs — parsing 80–100 CVEs/cycle, saving 2+ hours per release",
                "Developed an LLM-based content validation tool ingesting structured CVE metadata, reducing false positives across 20+ Microsoft products",
                "Owned end-to-end vulnerability coverage within a 24-hour SLA with on-the-spot R&D and pipeline debugging"
            ],
            technologies: ["Python", "Apache Airflow", "LLMs", "MSRC APIs", "REST APIs", "CI/CD"]
        },
        {
            position: "Junior Software Developer",
            company: "DesignerNest",
            period: "August 2024 - December 2025",
            location: "Remote",
            description: "Developed and deployed 25+ production web apps for clients across domains. Integrated payment gateways, admin dashboards, and automated CI/CD workflows.",
            responsibilities: [
                "Developed 25+ production web apps using Next.js, React, and Firebase",
                "Integrated payment gateways and admin dashboards for 10+ clients",
                "Automated CI/CD and monitoring workflows, cutting deployment cycle time across all projects"
            ],
            technologies: ["Next.js", "React", "Firebase", "TypeScript", "CI/CD", "Node.js"]
        },
        {
            position: "Project Head",
            company: "IEEE Student Branch VIT Pune",
            period: "May 2024 - May 2025",
            location: "Pune, India",
            description: "Led a 6-member team to build and ship production mobile apps. Ran a 6-day AI Agents workshop for 200+ participants and mentored 30+ junior developers.",
            responsibilities: [
                "Led Sofiya Properties app to production on Google Play Store and Apple App Store",
                "Ran a 6-day AI Agents workshop for 200+ participants",
                "Mentored 30+ executives in mobile app development"
            ],
            technologies: ["Flutter", "Firebase", "AI Agents", "Leadership", "Mentoring"]
        },
        {
            position: "Summer Intern",
            company: "Visionary Services",
            period: "June 2024 - July 2024",
            location: "Pune, India",
            description: "Developed responsive web pages using HTML, CSS, and Bootstrap. Gained hands-on experience in SEO and front-end debugging.",
            responsibilities: [
                "Built responsive web pages with HTML, CSS, Bootstrap",
                "Worked on SEO and front-end troubleshooting"
            ],
            technologies: ["HTML", "CSS", "Bootstrap", "SEO"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Multi-Agent Vulnerability Scanner",
            category: "AI / Agents",
            technologies: "Python, CrewAI, LangChain, LLMs, JSON",
            image: "/images/vuln-scanner.png",
            link: "https://github.com/qusaii21/multi-agent-vulnerability-scanner",
            description: "Fault-tolerant multi-agent orchestration for end-to-end vulnerability discovery, triage, and remediation reporting. 1st Runner-Up at Uptiq AI Hackathon."
        },
        {
            id: 2,
            title: "MediClear",
            category: "AI / Health",
            technologies: "Flask, Supabase, Meta Llama, Groq API, Python",
            image: "/images/mediclear.png",
            link: "https://github.com/qusaii21/MediClear",
            description: "Full-stack patient health platform with LLM-powered medical jargon clarification, prescription breakdowns, and visual dashboards. Won DevClash @ DY Patil College of Engineering."
        },
        {
            id: 3,
            title: "IEEE SB VIT Pune App",
            category: "Mobile / Full Stack",
            technologies: "Flutter, Firebase, Cloud Firestore, Cloud Functions, Dart",
            image: "/images/ieee-app.png",
            link: "https://play.google.com/store/apps/details?id=com.ieeeofficialapp.ieee_official_app&hl=en_IN",
            description: "Production Flutter app with 250+ users. Real-time admin CRUD panel, QR-scanner attendance ingestion via Cloud Functions API writing directly to Firestore."
        },
        {
            id: 4,
            title: "JustQL.AI — Multi-Agent SQL Optimizer",
            category: "AI / Backend",
            technologies: "LangChain, Qwen 2.5, Groq, RAG, Python",
            image: "/images/sql-optimizer.png",
            link: "https://github.com/qusaii21/JustQL.AI",
            description: "Natural language to optimized SQL (Trino & Spark SQL) using a multi-agent RAG system with automated schema design and DDL/DML generation. Top 30/200+ at Inspiron 4.0, COEP."
        },
        {
            id: 5,
            title: "LeetRevise",
            category: "Full Stack / Productivity",
            technologies: "React, Node.js, MongoDB, Express, REST APIs",
            image: "/images/leetrevise.png",
            link: "https://github.com/qusaii21/LeetRevise",
            description: "A spaced-repetition platform for revising LeetCode problems. Tracks solved problems, schedules optimal review intervals, and helps retain DSA patterns long-term."
        },
        {
            id: 6,
            title: "Smart Chaukidar (ANPR System)",
            category: "Computer Vision / IoT",
            technologies: "YOLOv8, EasyOCR, Firebase, Streamlit, Python",
            image: "/images/chaukidar.png",
            link: "https://github.com/qusaii21/ANPR-System-for-Apartments",
            description: "Entry access control system with Automatic Number Plate Recognition and QR Code integration. 90%+ plate recognition accuracy. Published in Dastavej Research Journal."
        },
        {
            id: 7,
            title: "Sofiya Properties",
            category: "Mobile / Full Stack",
            technologies: "Flutter, Firebase, Dart, Cloud Functions",
            image: "/images/sofiya.png",
            link: "https://github.com/qusaii21",
            description: "Real estate mobile app shipped on both Google Play Store and Apple App Store. Built with a 6-member team as Project Head at IEEE SB VIT Pune."
        },
        {
            id: 8,
            title: "Cold Email Generator",
            category: "AI / LLM",
            technologies: "Llama 3.1, LangChain, Streamlit, ChromaDB, RAG",
            image: "/images/cold-email.png",
            link: "https://github.com/qusaii21",
            description: "RAG-based system that extracts job details from URLs, matches skills to tech stacks, and generates personalized cold emails. Dynamic tech stack updates via CSV and ChromaDB."
        }
    ],
    clientWork: {
        webApps: [
            {
                id: 1,
                title: "Edelis",
                category: "Healthcare / D2C",
                url: "https://edelis.in/",
                description: "Conversion-focused D2C site for a tablet supplement brand — built to educate customers on the product and turn visitors into buyers.",
                tags: ["Healthcare", "E-commerce", "D2C"]
            },
            {
                id: 2,
                title: "AEXON Standards",
                category: "SaaS / Certification",
                url: "https://aexonstandards.com/",
                description: "An invite-only operational certification platform — evidence-based DAS framework, audit portal, and a full verification flow from application to badge.",
                tags: ["SaaS", "Certification", "Landing Page"]
            },
            {
                id: 3,
                title: "Tonya Malfi",
                category: "E-commerce",
                url: "https://tonyamalfi.com/",
                description: "A full storefront for a fashion/lifestyle brand — product catalog, cart, and checkout built for a smooth end-to-end shopping experience.",
                tags: ["E-commerce", "Retail"]
            },
            {
                id: 4,
                title: "DesignerNest",
                category: "Agency",
                url: "https://designernest.in/",
                description: "The official agency site — services, portfolio, and client onboarding, built to convert visitors into project inquiries.",
                tags: ["Agency", "Corporate"]
            },
            {
                id: 5,
                title: "Wish For Fish",
                category: "E-commerce / Delivery",
                url: "https://wishforfish.in/",
                description: "A fresh fish & seafood delivery platform pairing a full online store with a delivery API for order tracking and logistics.",
                tags: ["E-commerce", "Delivery API", "Logistics"]
            },
            {
                id: 6,
                title: "Alif Electricals",
                category: "B2B Catalogue",
                url: "https://alifelectricals.com/",
                description: "A product catalogue and company site for a lighting, hardware, and electricals distributor.",
                tags: ["Catalogue", "B2B"]
            },
            {
                id: 7,
                title: "Anand Yoga Therapy",
                category: "Wellness / Booking",
                url: "https://anandyogatherapy.com/index.html",
                description: "A booking-enabled site for a yoga & wellness studio — class schedules, therapy info, and appointment requests.",
                tags: ["Booking", "Wellness"]
            },
            {
                id: 8,
                title: "Giriraj Industries",
                category: "Industrial Catalogue",
                url: "https://girirajind.com/",
                description: "A structured product catalogue for an industrial hardware manufacturer, organizing SKUs and specs for B2B buyers.",
                tags: ["Catalogue", "Industrial", "B2B"]
            },
            {
                id: 9,
                title: "Classic Acrylic House",
                category: "Product Showcase",
                url: "https://classicacrylichouse.com/",
                description: "A visual showcase site for an acrylic products & home décor business, presenting the full product range.",
                tags: ["Product Showcase", "Retail"]
            },
            {
                id: 10,
                title: "Shere Bangla Groningen",
                category: "Restaurant / Hospitality",
                url: "https://sherebanglagroningen.nl/",
                description: "A restaurant website for an Indian restaurant in Groningen, Netherlands — menu, ambience, and reservation info.",
                tags: ["Restaurant", "Hospitality"]
            },
            {
                id: 11,
                title: "Synvaan",
                category: "Corporate",
                url: "https://synvaan.com/",
                description: "A corporate website communicating services and brand positioning for a business consultancy.",
                tags: ["Corporate", "Business"]
            }
        ],
        mobileApps: [
            {
                id: 1,
                title: "IEEE SB VIT Pune",
                category: "Community / Events",
                platform: "Android · Google Play",
                image: "/images/ieee-app.png",
                url: "https://play.google.com/store/apps/details?id=com.ieeeofficialapp.ieee_official_app&hl=en_IN",
                description: "Official app for IEEE Student Branch VIT Pune with 250+ active users — real-time admin CRUD panel and QR-based attendance ingestion via Cloud Functions writing directly to Firestore.",
                tags: ["Flutter", "Firebase", "Cloud Functions"]
            },
            {
                id: 2,
                title: "Sofiya Properties",
                category: "Real Estate",
                platform: "Android & iOS",
                image: "/images/sofiya.png",
                url: "https://play.google.com/store/search?q=Sofiya%20Properties&c=apps",
                description: "A real estate app shipped on both Google Play Store and Apple App Store — property listings, search, and inquiry flow, built with a 6-member team as Project Head.",
                tags: ["Flutter", "Firebase", "Dart"]
            }
        ]
    },
    contact: {
        email: "qusher9953@gmail.com",
        github: "https://github.com/qusaii21",
        linkedin: "https://linkedin.com/in/qusai-shergardwala-8a6404259",
        twitter: "https://x.com/qusaii21",
        facebook: "",
        instagram: ""
    },
    skills: {
        develop: {
            title: "AI ENGINEER",
            description: "Building intelligent systems & agentic pipelines",
            details: "Building LLM pipelines, RAG systems, and multi-agent orchestration using Python, LangChain, CrewAI, and Groq. Specializing in AI agents, NLP, deep learning, and production ML deployment on Airflow.",
            tools: ["Python", "LangChain", "CrewAI", "Apache Airflow", "RAG Pipelines", "Groq", "LLMs", "NLP", "Deep Learning", "MCP", "AI Agents", "Transformers"]
        },
        design: {
            title: "FULL STACK",
            description: "Mobile, web & backend across the stack",
            details: "Building production mobile apps with Flutter, web platforms with React/Next.js, and robust backends with Firebase, Supabase, and REST APIs. 25+ apps shipped for real clients.",
            tools: ["Flutter", "React", "Next.js", "TypeScript", "Firebase", "Supabase", "MongoDB", "MySQL", "Node.js", "Flask", "REST APIs", "CI/CD", "Git"]
        }
    }
};
