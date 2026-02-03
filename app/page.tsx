import Image from "next/image";
import VisitTracker from "./VisitTracker";

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
    "Full-stack engineer with 10 years of experience, specializing in building scalable, high-quality systems across the full software development lifecycle—from design to production.";

  const achievements = [
    {
      title: "Finbogo Platform",
      description:
        "Designed and implemented a healthcare booking system from scratch using a fully serverless microservices architecture on AWS with Node.js, Next.js, and MongoDB—contributing to securing major investment and successful product launch.",
    },
    {
      title: "Government of Bahamas — COVID Platform",
      description:
        "Built a national COVID vaccination and testing web application to support booking and management workflows for the Government of Bahamas, delivering a highly available and secure system used at scale.",
    },
    {
      title: "Academic",
      description:
        "Top 21% (All India Rank 5349) in GATE 2017 out of 108,495 students.",
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
        "Architected and owned an end-to-end serverless booking & scheduling platform using AWS Lambda, API Gateway, and CloudFormation for a multi-tenant healthcare SaaS.",
        "Designed a queue-based slot scheduling system for concurrency safety, eliminating double-booking under high traffic.",
        "Implemented Atlas Search for geo + relevance discovery and MongoDB Triggers for real-time data synchronization.",
        "Built secure authn/authz with AWS Cognito and RBAC; integrated payments (Mollie) and accounting (Sage Intacct); enforced GDPR-aligned practices.",
        "Improved performance with provisioned concurrency / warmers and scaled search for growing B2C traffic while keeping low latency.",
        "Delivered SEO improvements with JSON-LD, dynamic sitemaps, SSR/SSG to boost discoverability.",
        "Set up CI/CD with GitHub Actions, Jest, Playwright; deployed with AWS Amplify; observability with monitoring/alerts.",
        "Partnered with product, design, and support to implement complex customer workflows.",
      ],
    },
    {
      company: "ISPG Private Limited",
      location: "India",
      title: "Full Stack Engineer",
      period: "Jan 2021 — Mar 2024",
      highlights: [
        "Led delivery of large-scale government and B2B/B2C platforms, including a nationwide COVID vaccination/testing system supporting 500K+ users.",
        "Served as Tech Lead / PM: mentored engineers, coordinated cross-functional teams, and delivered on time in regulated contexts.",
        "Architected secure AWS infra: least-privilege IAM, RBAC, encryption, WAF, GuardDuty, VPC isolation, replication, and DR.",
        "Built automated CI/CD with CodePipeline, GitHub Actions, CloudFormation, SAM; supported containerized workloads.",
        "Built/modernized systems using Node.js, NestJS, Go, React, MongoDB, MySQL, and event-driven serverless architectures.",
      ],
    },
    {
      company: "Buddiz AI",
      location: "India",
      title: "Freelance Software Consultant",
      period: "Oct 2021 — Present",
      highlights: [
        "Led a team of four engineers and partnered with leadership to deliver scalable solutions, contributing to a 30% increase in profitability.",
        "Architected and deployed e-commerce and AI-driven platforms using NestJS, React, MongoDB, and AWS (CloudFormation/CDK).",
        "Supported an AI-powered education platform with personalized learning, insights, automated grading, and engagement features.",
      ],
    },
    {
      company: "Tentwentyfour S.a.r.l",
      location: "Luxembourg",
      title: "Software Engineer",
      period: "Jul 2020 — Jan 2021",
      highlights: [
        "Developed a web-based payroll management system with Vue.js and TypeScript; automated workflows and applied modern frontend patterns.",
        "Contributed to WordPress (PHP) and Django (Python) systems; enhanced reporter.lu mobile apps; handled CI/CD and app deployments.",
      ],
    },
    {
      company: "Cyspan Systems",
      location: "India",
      title: "Software Engineer",
      period: "Sep 2018 — Jun 2020",
      highlights: [
        "Built a custom CMS to manage pages, press releases, and rich media (photos, video, audio).",
        "Worked with US/EU clients to diagnose and resolve frontend/backend issues and deliver enhancements.",
      ],
    },
    {
      company: "Turbolab Technologies",
      location: "India",
      title: "Software Engineer",
      period: "Aug 2016 — Aug 2018",
      highlights: [
        "Delivered 100+ production web scrapers using Python (Scrapy, BeautifulSoup, Selenium, lxml) for data mining and analysis.",
        "Partnered with international clients to gather requirements and deliver reliable deployments using NumPy, pandas, Azure, Git, Jira.",
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
    "rounded-3xl border border-white/10 bg-[#0f172a]/80 p-6 shadow-[0_20px_60px_rgba(3,7,18,0.45)] backdrop-blur";
  const cardSoft =
    "rounded-2xl border border-white/10 bg-[#0b1324]/80 p-5 shadow-[0_12px_35px_rgba(3,7,18,0.35)] backdrop-blur";
  const pill =
    "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-slate-200";

  return (
    <div className="min-h-screen bg-[#0b1020] text-slate-100 animated-grid">
      <VisitTracker />
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-44 right-[-160px] h-[460px] w-[460px] rounded-full bg-[#0ea5e9] opacity-25 blur-3xl" />
          <div className="absolute top-28 left-[-160px] h-[380px] w-[380px] rounded-full bg-[#22d3ee] opacity-20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),rgba(15,23,42,0))]" />
        </div>

        <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0b1020]/80 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
            <a href="#top" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white/10">
                <Image
                  src="/agus-portfolio.png"
                  alt={`${profile.name} profile`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-slate-100">
                  {profile.name}
                </div>
                <div className="text-xs text-slate-400">{profile.role}</div>
              </div>
            </a>
            <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
              <a className="nav-link hover:text-white" href="#about">
                About
              </a>
              <a className="nav-link hover:text-white" href="#achievements">
                Achievements
              </a>
              <a className="nav-link hover:text-white" href="#experience">
                Experience
              </a>
              <a className="nav-link hover:text-white" href="#skills">
                Skills
              </a>
              <a className="nav-link hover:text-white" href="#contact">
                Contact
              </a>
              <a className="nav-link hover:text-white" href="#gallery">
                Gallery
              </a>
              <a className="nav-link hover:text-white" href="/play">
                Play
              </a>
              <a
                className="nav-link hover:text-white"
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
                  CV
                </span>
              </a>
            </nav>
          </div>
        </header>

        <main id="top" className="mx-auto w-full max-w-6xl px-6 py-16">
          {/* Hero */}
          <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
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
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#22d3ee] px-7 text-sm font-semibold text-[#0b1020] shadow-[0_12px_30px_rgba(34,211,238,0.35)] transition hover:-translate-y-0.5 hover:opacity-90"
                >
                  Contact
                </a>
                <a
                  href="/docs/AgusMathew.pdf"
                  download
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
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
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  GitHub
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
                    {profile.email}
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
                    {profile.phone}
                  </a>
                </div>
                <div
                  className={`${cardSoft} flex items-center justify-between gap-3`}
                >
                  <span className="text-slate-400">Links</span>
                  <div className="flex items-center gap-3">
                    <a
                      className="font-medium hover:underline"
                      href={profile.stackoverflow}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      StackOverflow
                    </a>
                    <a
                      className="font-medium hover:underline"
                      href={profile.hackerrank}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HackerRank
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About */}
          <section id="about" className="mt-20 scroll-mt-28">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              About
            </h2>
            <div className={`${cardBase} mt-6 text-slate-300`}>
              <p className="leading-8 text-[15px]">
                I build and ship production systems end-to-end: architecture,
                APIs, data modeling, frontend delivery, CI/CD, and operations.
                I’m most at home working on platform foundations (security,
                reliability, performance) while staying close to product
                outcomes.
              </p>
              <p className="mt-4 leading-8 text-[15px]">
                Recent focus areas: serverless microservices on AWS,
                multi-tenant SaaS, search/recommendation with Atlas Search,
                secure auth with Cognito + RBAC, and improving discoverability
                via SEO + SSR/SSG.
              </p>
            </div>
          </section>

          {/* Achievements */}
        <section id="achievements" className="mt-20 scroll-mt-28">
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

        {/* Experience */}
        <section id="experience" className="mt-20 scroll-mt-28">
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

          {/* Education */}
          <section id="education" className="mt-20 scroll-mt-28">
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

        {/* Skills */}
        <section id="skills" className="mt-20 scroll-mt-28">
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
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="mt-20 scroll-mt-28">
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
                  Email me
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section id="gallery" className="mt-20 scroll-mt-28">
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
                  className="hover:underline"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="hover:underline"
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="hover:underline"
                  href={profile.stackoverflow}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  StackOverflow
                </a>
              <a
                className="hover:underline"
                href={profile.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
              >
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
      </div>
    </div>
  );
}
