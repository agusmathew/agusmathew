import Image from "next/image";

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

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <header className="sticky top-0 z-10 border-b border-black/5 bg-zinc-50/80 backdrop-blur dark:border-white/10 dark:bg-black/70">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900">
              AM
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold">{profile.name}</div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400">
                {profile.role}
              </div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400 sm:flex">
            <a
              className="hover:text-zinc-900 dark:hover:text-zinc-50"
              href="#about"
            >
              About
            </a>
            <a
              className="hover:text-zinc-900 dark:hover:text-zinc-50"
              href="#achievements"
            >
              Achievements
            </a>
            <a
              className="hover:text-zinc-900 dark:hover:text-zinc-50"
              href="#experience"
            >
              Experience
            </a>
            <a
              className="hover:text-zinc-900 dark:hover:text-zinc-50"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="hover:text-zinc-900 dark:hover:text-zinc-50"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto w-full max-w-5xl px-6 py-14">
        {/* Hero */}
        <section className="grid gap-8 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Open to opportunities
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {overview}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-zinc-50 transition hover:opacity-90 dark:bg-zinc-50 dark:text-zinc-900"
              >
                Contact
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-white/10"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span>{profile.location}</span>
              <span aria-hidden="true">•</span>
              <span>10+ years experience</span>
              <span aria-hidden="true">•</span>
              <span>Serverless, SaaS, Search, Security</span>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-black/10 dark:border-white/10">
                {/* Optional: add /public/avatar.jpg and swap src */}
                <Image
                  src="/next.svg"
                  alt="Avatar"
                  fill
                  className="object-contain p-3 dark:invert"
                  priority
                />
              </div>
              <div>
                <div className="text-sm font-semibold">{profile.role}</div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  Platform & product engineering
                </div>
              </div>
            </div>
            <div className="mt-6 grid gap-3 text-sm">
              <div className="flex items-center justify-between gap-3 rounded-xl border border-black/5 bg-zinc-50 px-4 py-3 dark:border-white/10 dark:bg-black">
                <span className="text-zinc-600 dark:text-zinc-400">Email</span>
                <a
                  className="font-medium hover:underline"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-xl border border-black/5 bg-zinc-50 px-4 py-3 dark:border-white/10 dark:bg-black">
                <span className="text-zinc-600 dark:text-zinc-400">Phone</span>
                <a
                  className="font-medium hover:underline"
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                >
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-xl border border-black/5 bg-zinc-50 px-4 py-3 dark:border-white/10 dark:bg-black">
                <span className="text-zinc-600 dark:text-zinc-400">Links</span>
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
        <section id="about" className="mt-16 scroll-mt-28">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <div className="mt-4 rounded-2xl border border-black/10 bg-white p-6 text-zinc-700 shadow-sm dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-300">
            <p className="leading-8">
              I build and ship production systems end-to-end: architecture,
              APIs, data modeling, frontend delivery, CI/CD, and operations. I’m
              most at home working on platform foundations (security,
              reliability, performance) while staying close to product outcomes.
            </p>
            <p className="mt-4 leading-8">
              Recent focus areas: serverless microservices on AWS, multi-tenant
              SaaS, search/recommendation with Atlas Search, secure auth with
              Cognito + RBAC, and improving discoverability via SEO + SSR/SSG.
            </p>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="mt-16 scroll-mt-28">
          <h2 className="text-2xl font-semibold tracking-tight">
            Key achievements
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {achievements.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950"
              >
                <div className="text-sm font-semibold">{a.title}</div>
                <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-16 scroll-mt-28">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <div className="mt-6 space-y-6">
            {experience.map((job) => (
              <article
                key={`${job.company}-${job.period}`}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{job.company}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {job.title} • {job.location}
                    </p>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {job.period}
                  </p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mt-16 scroll-mt-28">
          <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {education.map((e) => (
              <div
                key={`${e.school}-${e.period}`}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950"
              >
                <div className="text-sm font-semibold">{e.school}</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {e.program}
                </div>
                <div className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                  {e.location} • {e.period}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-16 scroll-mt-28">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div
                key={group}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950"
              >
                <div className="text-sm font-semibold">{group}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-black/10 bg-zinc-50 px-3 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-black dark:text-zinc-300"
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
        <section id="contact" className="mt-16 scroll-mt-28">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <div className="mt-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
            <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Want to collaborate or chat about a role? Email me and I’ll get
              back to you.
              <span className="block mt-2 text-xs">
                References available on request.
              </span>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-zinc-50 transition hover:opacity-90 dark:bg-zinc-50 dark:text-zinc-900"
              >
                Email me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-white/10"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t border-black/5 pt-8 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400">
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
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
