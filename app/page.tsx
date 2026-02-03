import Image from "next/image";
import VisitTracker from "./VisitTracker";
import HeaderNav from "./HeaderNav";
import NewsletterPopup from "./NewsletterPopup";
import ScrollProgress from "./ScrollProgress";
import FunFacts from "./FunFacts";
import CursorGlow from "./CursorGlow";
import RevealOnScroll from "./RevealOnScroll";

type Experience = {
  company: string;
  location: string;
  title: string;
  period: string;
  highlights: string[];
};

export default function Home() {
  const profile = {
    name: "Agus Mathew",
    role: "Senior Full Stack Engineer",
    location: "Manchester, UK",
    email: "agusmathew@gmail.com",
    phone: "+44 7867 214748",
    linkedin: "https://www.linkedin.com/in/agus-mathew",
    github: "https://github.com/agusmathew",
    stackoverflow: "https://stackoverflow.com/users/9814608/agus-mathew",
    hackerrank: "https://www.hackerrank.com/profile/agus-mathew",
  };

  const overview =
    "I build fast, reliable platforms that scale—end‑to‑end from architecture and data to product polish and delivery. Ten years in, my focus is simple: make systems people trust.";

  const achievements = [
    {
      title: "Finbogo Platform",
      description:
        "Built a healthcare booking platform from zero to launch on a fully serverless AWS stack—helping secure investment and accelerate product-market entry.",
    },
    {
      title: "Government of Bahamas — COVID Platform",
      description:
        "Delivered a national vaccination and testing system used at scale—high availability, security, and real‑world impact.",
    },
    {
      title: "Academic",
      description: "Top 21% in GATE 2017 (All India Rank 5349 of 108,495).",
    },
  ];

  const gallery = [
    {
      src: "/gallery/IMG_8684.png",
      alt: "Gallery image 1",
    },
    {
      src: "/gallery/IMG_8710.png",
      alt: "Gallery image 2",
    },
    {
      src: "/gallery/IMG_8715.png",
      alt: "Gallery image 3",
    },
    {
      src: "/gallery/IMG_8843.png",
      alt: "Gallery image 4",
    },
  ];

  const experience: Experience[] = [
    {
      company: "Finbogo Limited",
      location: "Altrincham, Manchester, UK",
      title: "Senior Full Stack Engineer",
      period: "Mar 2024 — Present",
      highlights: [
        "Owned a multi‑tenant serverless booking platform (Lambda, API Gateway, CloudFormation) end‑to‑end.",
        "Designed a queue‑based slot scheduler that prevents double‑booking under peak traffic.",
        "Shipped geo‑relevance discovery with Atlas Search and real‑time sync via MongoDB Triggers.",
        "Built Cognito + RBAC security and integrated payments and finance workflows (Mollie, Sage Intacct).",
        "Scaled performance with provisioned concurrency and search tuning while keeping low latency.",
        "Improved SEO with JSON‑LD, dynamic sitemaps, SSR/SSG for stronger discoverability.",
        "Set up CI/CD (GitHub Actions, Jest, Playwright) and production monitoring/alerts.",
        "Partnered closely with product and design to ship complex customer workflows.",
      ],
    },
    {
      company: "ISPG Private Limited",
      location: "India",
      title: "Full Stack Engineer",
      period: "Jan 2021 — Mar 2024",
      highlights: [
        "Delivered government and B2B/B2C platforms, including a nationwide COVID system serving 500K+ users.",
        "Led teams as Tech Lead/PM—mentoring engineers and shipping on time in regulated environments.",
        "Architected secure AWS infrastructure with least‑privilege IAM, WAF, VPC isolation, and DR.",
        "Built automated CI/CD with CodePipeline, GitHub Actions, CloudFormation, and SAM.",
        "Modernized systems with Node.js, NestJS, Go, React, and event‑driven serverless patterns.",
      ],
    },
    {
      company: "Buddiz AI",
      location: "India",
      title: "Freelance Software Consultant",
      period: "Oct 2021 — Present",
      highlights: [
        "Led a team of four and partnered with leadership to deliver systems that drove +30% profitability.",
        "Built e‑commerce and AI platforms with NestJS, React, MongoDB, and AWS (CloudFormation/CDK).",
        "Shipped AI‑powered education features: personalization, insights, automated grading, and engagement.",
      ],
    },
    {
      company: "Tentwentyfour S.a.r.l",
      location: "Luxembourg",
      title: "Software Engineer",
      period: "Jul 2020 — Jan 2021",
      highlights: [
        "Built a payroll platform with Vue.js + TypeScript and automated critical workflows.",
        "Enhanced WordPress and Django systems, plus mobile apps, CI/CD, and deployments.",
      ],
    },
    {
      company: "Cyspan Systems",
      location: "India",
      title: "Software Engineer",
      period: "Sep 2018 — Jun 2020",
      highlights: [
        "Built a custom CMS for pages, press releases, and rich media.",
        "Solved cross‑stack issues for US/EU clients and delivered enhancements.",
      ],
    },
    {
      company: "Turbolab Technologies",
      location: "India",
      title: "Software Engineer",
      period: "Aug 2016 — Aug 2018",
      highlights: [
        "Delivered 100+ production scrapers with Python for data mining at scale.",
        "Partnered with international clients to scope, ship, and maintain reliable deployments.",
      ],
    },
  ];

  const education = [
    {
      school: "Edge Hill University",
      location: "Ormskirk, UK",
      program: "Master of Computer Science (Merit)",
      period: "Sep 2022 — Sep 2023",
    },
    {
      school: "Government Engineering College Palakkad",
      location: "Kerala, India",
      program: "Bachelor of Computer Science and Engineering (First Class)",
      period: "Jun 2012 — Aug 2016",
    },
  ];

  const skills = {
    Languages: ["TypeScript", "JavaScript", "Python", "Java", "Go", "C++"],
    Frameworks: [
      "Node.js",
      "NestJS",
      "Next.js",
      "React",
      "Django",
      "Flask",
      "FastAPI",
      "Vue.js",
      "AngularJS",
      "Express",
    ],
    Databases: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "DynamoDB",
      "BigQuery",
      "Atlas Search",
      "Redis",
      "Cassandra",
    ],
    "DevOps & Platform": [
      "AWS (IAM, Lambda, API Gateway, S3, Route53, Cognito, ECS, EC2)",
      "CloudFormation",
      "SAM",
      "CDK",
      "Amplify",
      "Docker",
      "CI/CD",
      "Platform Engineering",
    ],
    "Messaging, Security & Observability": [
      "SQS",
      "SNS",
      "SES",
      "WAF",
      "GuardDuty",
      "X-Ray",
      "CloudWatch",
    ],
  } as const;

  const cardBase =
    "card-hover rounded-3xl border border-white/10 bg-[#0f172a]/80 p-6 shadow-[0_20px_60px_rgba(3,7,18,0.45)] backdrop-blur";
  const cardSoft =
    "rounded-2xl border border-white/10 bg-[#0b1324]/80 p-5 shadow-[0_12px_35px_rgba(3,7,18,0.35)] backdrop-blur";
  const pill =
    "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-slate-200";

  return (
    <div className="min-h-screen bg-[#0b1020] text-slate-100 animated-grid">
      <VisitTracker />
      <NewsletterPopup />
      <ScrollProgress />
      <FunFacts />
      <CursorGlow />
      <RevealOnScroll />
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-44 right-[-160px] h-[460px] w-[460px] rounded-full bg-[#0ea5e9] opacity-25 blur-3xl" />
          <div className="absolute top-28 left-[-160px] h-[380px] w-[380px] rounded-full bg-[#22d3ee] opacity-20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),rgba(15,23,42,0))]" />
        </div>

        <HeaderNav name={profile.name} role={profile.role} />

        <main
          id="top"
          className="mx-auto w-full max-w-6xl px-6 py-16 pb-28 sm:pb-16"
        >
          {/* Hero */}
          <section className="reveal grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="fade-up inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-slate-300 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#22d3ee]" />
                Open to opportunities
              </div>
              <h1 className="fade-up delay-1 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="fade-up delay-2 max-w-2xl text-lg leading-8 text-slate-300">
                {overview}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="cta-shimmer inline-flex h-12 items-center justify-center rounded-full bg-[#22d3ee] px-7 text-sm font-semibold text-[#0b1020] shadow-[0_12px_30px_rgba(34,211,238,0.35)] transition hover:-translate-y-0.5 hover:opacity-90"
                >
                  Contact
                </a>
                <a
                  href="https://calendar.app.google/oD2XbxUEPfGrycF46"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <span className="inline-flex items-center gap-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v3H3V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Zm14 9v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7h18Zm-9 2h-2v2H8v2h2v-2h2v-2Zm5 0h-3v2h3v-2Z" />
                    </svg>
                    Book a call
                  </span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <span className="inline-flex items-center gap-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5ZM3 8.98h4v12H3v-12Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.09v6.32h-4v-5.6c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-4v-12Z" />
                    </svg>
                    LinkedIn
                  </span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <span className="inline-flex items-center gap-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.52 1.06 1.52 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                    </svg>
                    GitHub
                  </span>
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                <span className={pill}>{profile.location}</span>
                <span className={pill}>10+ years experience</span>
                <span className={pill}>Serverless, SaaS, Security</span>
              </div>
            </div>

            <div className={`${cardBase} float-slow`}>
              <div className="flex items-center gap-5">
                <div className="relative h-32 w-32 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  {/* Optional: add /public/avatar.jpg and swap src */}
                  <Image
                    src="/agus-portfolio.png"
                    alt="Avatar"
                    fill
                    className="object-cover object-[center_30%]"
                    priority
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {profile.role}
                  </div>
                  <div className="text-xs text-slate-400">
                    Platform & product engineering
                  </div>
                </div>
              </div>
              <div className="mt-6 grid gap-3 text-sm">
                <div
                  className={`${cardSoft} flex items-center justify-between gap-3`}
                >
                  <span className="text-slate-400">Email</span>
                  <a
                    className="font-medium hover:underline"
                    href={`mailto:${profile.email}`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.6-.25 6.4 4.2 6.4-4.2H5.6Zm12.9 2.2-6 3.94a1.5 1.5 0 0 1-1.6 0l-6-3.94v8.55c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V8.7Z" />
                      </svg>
                      {profile.email}
                    </span>
                  </a>
                </div>
                <div
                  className={`${cardSoft} flex items-center justify-between gap-3`}
                >
                  <span className="text-slate-400">Phone</span>
                  <a
                    className="font-medium hover:underline"
                    href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M6.62 10.79a15.5 15.5 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" />
                      </svg>
                      {profile.phone}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* About */}
        <section id="about" className="reveal mt-20 scroll-mt-28">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              About
            </h2>
            <div className={`${cardBase} mt-6 text-slate-300`}>
              <p className="leading-8 text-[15px]">
                I turn complex requirements into systems that feel effortless
                for users and dependable for teams. My work spans architecture,
                APIs, data modeling, frontend delivery, CI/CD, and operations,
                with a strong bias for security, performance, and clarity.
              </p>
              <p className="mt-4 leading-8 text-[15px]">
                Recent focus: serverless AWS platforms, multi‑tenant SaaS,
                search and discovery with Atlas Search, secure auth with Cognito
                + RBAC, and measurable growth via SEO, SSR, and SSG.
              </p>
              <div className="mt-6">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Read more about me
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </section>

          <div className="mt-16 section-divider" />

          {/* Achievements */}
        <section id="achievements" className="reveal mt-20 scroll-mt-28">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Key achievements
            </h2>
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {achievements.map((a) => (
                <div key={a.title} className={cardBase}>
                  <div className="text-base font-semibold">{a.title}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-16 section-divider" />

          {/* Experience */}
        <section id="experience" className="reveal mt-20 scroll-mt-28">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Experience
            </h2>
            <div className="mt-6 space-y-6">
              {experience.map((job) => (
                <article
                  key={`${job.company}-${job.period}`}
                  className={cardBase}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{job.company}</h3>
                      <p className="text-sm text-slate-300">
                        {job.title} • {job.location}
                      </p>
                    </div>
                    <p className="text-sm text-slate-300">{job.period}</p>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-300">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-16 section-divider" />

          {/* Education */}
        <section id="education" className="reveal mt-20 scroll-mt-28">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Education
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {education.map((e) => (
                <div key={`${e.school}-${e.period}`} className={cardBase}>
                  <div className="text-base font-semibold">{e.school}</div>
                  <div className="mt-1 text-sm text-slate-300">{e.program}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    {e.location} • {e.period}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-16 section-divider" />

          {/* Skills */}
        <section id="skills" className="reveal mt-20 scroll-mt-28">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Skills
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className={cardBase}>
                  <div className="text-base font-semibold">{group}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 transition hover:-translate-y-0.5 hover:border-[#22d3ee]/40 hover:bg-white/10 hover:text-white"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </section>

          <div className="mt-16 section-divider" />

          {/* Contact */}
        <section id="contact" className="reveal mt-20 scroll-mt-28">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Contact
            </h2>
            <div className={`${cardBase} mt-6`}>
              <p className="text-sm leading-7 text-slate-300">
                Want to collaborate or chat about a role? Email me and I’ll get
                back to you.
                <span className="block mt-2 text-xs">
                  References available on request.
                </span>
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#22d3ee] px-7 text-sm font-semibold text-[#0b1020] shadow-[0_12px_30px_rgba(34,211,238,0.35)] transition hover:-translate-y-0.5 hover:opacity-90"
                >
                  <span className="inline-flex items-center gap-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.6-.25 6.4 4.2 6.4-4.2H5.6Zm12.9 2.2-6 3.94a1.5 1.5 0 0 1-1.6 0l-6-3.94v8.55c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V8.7Z" />
                    </svg>
                    Email me
                  </span>
                </a>
                <a
                  href="https://calendar.app.google/oD2XbxUEPfGrycF46"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <span className="inline-flex items-center gap-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v3H3V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Zm14 9v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7h18Zm-9 2h-2v2H8v2h2v-2h2v-2Zm5 0h-3v2h3v-2Z" />
                    </svg>
                    Book a call
                  </span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <span className="inline-flex items-center gap-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5ZM3 8.98h4v12H3v-12Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.09v6.32h-4v-5.6c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-4v-12Z" />
                    </svg>
                    LinkedIn
                  </span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <span className="inline-flex items-center gap-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.52 1.06 1.52 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                    </svg>
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </section>

          <div className="mt-16 section-divider" />

          {/* Gallery */}
          <section id="gallery" className="reveal mt-20 scroll-mt-28">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white">
                  Gallery
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  A quick snapshot of the work and the person behind it.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((item) => (
                <div key={item.src} className={cardBase}>
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className={
                        item.src.endsWith(".svg")
                          ? "object-contain p-6"
                          : "object-cover"
                      }
                    />
                  </div>
                  <div className="mt-4 text-sm font-semibold text-slate-200">
                    {item.alt}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-slate-400">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} {profile.name}
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <a
                  className="inline-flex items-center gap-2 hover:underline"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5ZM3 8.98h4v12H3v-12Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.09v6.32h-4v-5.6c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-4v-12Z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  className="inline-flex items-center gap-2 hover:underline"
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.52 1.06 1.52 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                  </svg>
                  GitHub
                </a>
                <a
                  className="inline-flex items-center gap-2 hover:underline"
                  href={profile.stackoverflow}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M17.2 20.5V14h2v8.5H4.8V14h2v6.5h10.4ZM7.6 17h8.8v2H7.6v-2Zm.4-3 8.8 1.8-.4 2-8.8-1.8.4-2Zm1.4-3.5 8.2 3-.7 1.9-8.2-3 .7-1.9ZM11.5 3l7.1 5.2-1.2 1.6-7.1-5.2L11.5 3Zm-1 4.4 7.5 4.2-1 1.8-7.5-4.2 1-1.8Z" />
                  </svg>
                  StackOverflow
                </a>
                <a
                  className="inline-flex items-center gap-2 hover:underline"
                  href={profile.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M12 2 3.2 7v10L12 22l8.8-5V7L12 2Zm4.6 12.1-2.2 1.3v-2.1H9.6v2.1l-2.2-1.3v-4.2l2.2-1.3v2.1h4.8V8.6l2.2 1.3v4.2Z" />
                  </svg>
                  HackerRank
                </a>
                <a
                  className="hover:underline"
                  href="/docs/AgusMathew.pdf"
                  download
                >
                  <span className="inline-flex items-center gap-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M10 12.5 6.5 9h2.25V3h2.5v6H13.5L10 12.5Zm-5.5 4.5A1.5 1.5 0 0 1 3 15.5v-2h2v1.5h10V13.5h2v2A1.5 1.5 0 0 1 15.5 17h-11Z" />
                    </svg>
                    Download CV
                  </span>
                </a>
              </div>
            </div>
          </footer>
        </main>
        <div className="fixed inset-x-0 bottom-0 z-20 border-t border-white/10 bg-[#0b1020]/95 px-6 py-3 backdrop-blur sm:hidden">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 text-sm">
            <span className="text-slate-300">Let’s work together</span>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#22d3ee] px-4 py-2 text-xs font-semibold text-[#0b1020] shadow-[0_10px_24px_rgba(34,211,238,0.3)] transition hover:opacity-90"
            >
              Contact
            </a>
          </div>
        </div>
        <a
          href="#top"
          className="group fixed bottom-6 right-6 z-20 hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 shadow-[0_12px_24px_rgba(3,7,18,0.4)] transition hover:-translate-y-0.5 hover:bg-white/10 sm:inline-flex"
          aria-label="Back to top"
        >
          <span className="text-lg transition group-hover:-translate-y-0.5">
            ↑
          </span>
        </a>
      </div>
    </div>
  );
}
