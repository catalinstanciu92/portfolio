import { useEffect, useState } from 'react';

const experience = [
  {
    company: "ProfiCircle",
    role: "Full Stack Engineer",
    period: "2021 — Present",
    summary:
      "Leading the evolution of a digital procurement platform with a Ruby on Rails architecture that powers GraphQL APIs, contract automation, and supplier analytics.",
    highlights: [
      "Model procurement domains and partner with design to deliver Rails APIs and cohesive React experiences",
      "Integrate SendGrid, Twilio, DocuSign, Stripe, and AWS S3 with resilient background processing",
      "Raise code quality with contract tests, performance tuning, and observability guardrails",
    ],
  },
  {
    company: "Okapi",
    role: "Full Stack Developer",
    period: "2019 — 2021",
    summary:
      "Built insurance and policy management platforms on Ruby on Rails with rigorous domain modeling and agile delivery.",
    highlights: [
      "Designed normalized schemas and Rails services while tuning dashboards and UX flows to stay responsive under heavy data loads",
      "Owned deployments to Heroku and AWS while maintaining CI/CD hygiene",
      "Partnered with stakeholders to translate compliance-heavy stories into automated Rails workflows",
    ],
  },
  {
    company: "Clarisoft Technologies",
    role: "Software Engineer",
    period: "2018 — 2019",
    summary:
      "Shipped analytics dashboards and admin tooling with a Rails backbone serving complex reporting needs.",
    highlights: [
      "Implemented data visualizations backed by optimized ActiveRecord queries and caching",
      "Introduced Rails Admin workflows that improved onboarding and content governance",
      "Collaborated across design and product to craft accessible Rails-backed UI systems",
    ],
  },
  {
    company: "YouGov & Ipsos",
    role: "Survey Engineering Lead",
    period: "2014 — 2018",
    summary:
      "Engineered research survey platforms for global brands, blending bespoke scripting with data quality automation across high-volume studies.",
    highlights: [
      "Scripted complex questionnaire logic in Python, JavaScript, and proprietary tooling within YouGov's Gryphon platform",
      "Delivered multinational campaigns at Ipsos by extending SPSS Dimensions with custom HTML/CSS and VBA-driven reporting automations",
      "Mentored survey teams, streamlined delivery workflows, and introduced reusable templates that accelerated turnaround for new studies",
    ],
  },
];

const projects = [
  {
    name: "ProfiCircle Platform",
    description:
      "Fit-out procurement platform where a Rails monolith orchestrates GraphQL APIs, contract workflows, and the React dashboards teams rely on daily.",
    url: "https://app.proficircle.com",
    stack: "React, GraphQL, Ruby on Rails, PostgreSQL, AWS",
  },
  {
    name: "PlanHero",
    description:
      "Scheduling suite pairing a Ruby on Rails core for events, billing, and notifications with collaborative calendar experiences.",
    url: "https://app.planhero.com/signup",
    stack: "Ruby on Rails, JavaScript, Heroku, Amazon S3",
  },
  {
    name: "Practice Zebra",
    description:
      "Dental marketing analytics portal driven by Rails services delivering real-time dashboards and automated campaigns through a responsive UI.",
    url: "https://practicezebra.com",
    stack: "Ruby on Rails, PostgreSQL, C3.js, Responsive UI",
  },
];

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/95 backdrop-blur-sm border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-5xl px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-lg font-semibold tracking-tight text-text-primary">
              CS
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="nav-link">About</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
            <a
              href="/catalin-stanciu-cv-032025.pdf"
              className="btn-outline text-sm py-2 px-4"
            >
              Download CV
            </a>
          </div>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="mx-auto max-w-5xl px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="section-label mb-6">Full Stack Engineer</p>
            <h1 className="text-name mb-8">
              STANCIU CATALIN
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-8">
              Designing dependable back ends and polished front ends that ship together. 
              Based in Bucharest, shipping worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="mailto:catalinstanciu@live.com" className="btn-outline">
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mx-auto max-w-5xl px-6">
          <div className="section-divider" />
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-3">
              <h2 className="section-title">About</h2>
            </div>
            <div className="md:col-span-9 space-y-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                I'm a Bucharest-based full stack engineer with a Rails backbone. 
                I blend thoughtful data modeling and API design with interface 
                polish so entire product slices launch together.
              </p>
              <p className="text-text-secondary leading-relaxed">
                With over 10 years of experience shipping production web applications, 
                I've worked across the entire stack — from database schema design and 
                Rails API development to React frontends and DevOps automation. I believe 
                in sustainable code, thorough testing, and close collaboration with design 
                and product teams.
              </p>
              <p className="text-text-secondary leading-relaxed">
                From evolving monoliths to shaping new feature teams, I coach on 
                sustainable Rails practices, bring React and design partners 
                along, and keep delivery measurable end to end.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mx-auto max-w-5xl px-6">
          <div className="section-divider" />
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-3">
              <h2 className="section-title">Experience</h2>
            </div>
            <div className="md:col-span-9">
              <div className="divide-y divide-border">
                {experience.map((job) => (
                  <article key={job.company} className="py-8 first:pt-0">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary">
                          {job.company}
                        </h3>
                        <p className="text-sm text-accent">{job.role}</p>
                      </div>
                      <span className="text-sm text-text-muted">{job.period}</span>
                    </div>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      {job.summary}
                    </p>
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                          <span className="text-text-muted mt-0.5">—</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mx-auto max-w-5xl px-6">
          <div className="section-divider" />
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-3">
              <h2 className="section-title">Skills</h2>
            </div>
            <div className="md:col-span-9">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="skills-category mb-3">Core Stack</h3>
                  <p className="skills-list">
                    Ruby on Rails, React, TypeScript, GraphQL, PostgreSQL, Next.js, Ruby
                  </p>
                </div>
                <div>
                  <h3 className="skills-category mb-3">Integrations & Ops</h3>
                  <p className="skills-list">
                    Sidekiq, RSpec, AWS, Stripe, Twilio, OpenAI, Apollo Client
                  </p>
                </div>
                <div>
                  <h3 className="skills-category mb-3">Frontend</h3>
                  <p className="skills-list">
                    React, TypeScript, Next.js, Tailwind CSS, HTML5, CSS3, responsive design
                  </p>
                </div>
                <div>
                  <h3 className="skills-category mb-3">Backend & Data</h3>
                  <p className="skills-list">
                    Ruby on Rails, PostgreSQL, Redis, GraphQL, REST APIs, background jobs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mx-auto max-w-5xl px-6">
          <div className="section-divider" />
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-3">
              <h2 className="section-title">Projects</h2>
            </div>
            <div className="md:col-span-9">
              <div className="divide-y divide-border">
                {projects.map((project) => (
                  <article key={project.name} className="py-8 first:pt-0">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="link-accent"
                      >
                        {project.name}
                      </a>
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <p className="text-sm text-text-muted">
                      {project.stack}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mx-auto max-w-5xl px-6">
          <div className="section-divider" />
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-3">
              <h2 className="section-title">Contact</h2>
            </div>
            <div className="md:col-span-9">
              <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl">
                Available for collaborations, freelance engagements, or 
                full-time roles where a Rails-leaning full stack partner can 
                accelerate delivery end to end.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                <a 
                  href="mailto:catalinstanciu@live.com" 
                  className="contact-link"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  catalinstanciu@live.com
                </a>
                <a 
                  href="https://github.com/catalinstanciu92" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/catalin-stanciu92/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mx-auto max-w-5xl px-6 py-20">
          <div className="section-divider mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-text-muted">
              © {new Date().getFullYear()} Catalin Stanciu. All rights reserved.
            </p>
            <p className="text-sm text-text-muted">
              Bucharest, Romania
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
