import { useEffect, useRef, useState } from 'react';

const experience = [
  {
    company: "ProfiCircle",
    role: "Full Stack Engineer",
    period: "Mar 2021 – Present",
    summary:
      "Leading the evolution of a digital procurement platform with a Ruby on Rails architecture that powers GraphQL APIs, contract automation, and supplier analytics.",
    highlights: [
      "Model procurement domains and partner with design to deliver Rails APIs and cohesive React experiences.",
      "Integrate SendGrid, Twilio, DocuSign, Stripe, and AWS S3 with resilient background processing.",
      "Raise code quality with contract tests, performance tuning, and observability guardrails.",
    ],
  },
  {
    company: "Okapi",
    role: "Full Stack Developer",
    period: "Jul 2019 – Feb 2021",
    summary:
      "Built insurance and policy management platforms on Ruby on Rails with rigorous domain modeling and agile delivery.",
    highlights: [
      "Designed normalized schemas and Rails services while tuning dashboards and UX flows to stay responsive under heavy data loads.",
      "Owned deployments to Heroku and AWS while maintaining CI/CD hygiene.",
      "Partnered with stakeholders to translate compliance-heavy stories into automated Rails workflows.",
    ],
  },
  {
    company: "Clarisoft Technologies",
    role: "Software Engineer",
    period: "Jul 2018 – May 2019",
    summary:
      "Shipped analytics dashboards and admin tooling with a Rails backbone serving complex reporting needs.",
    highlights: [
      "Implemented data visualizations backed by optimized ActiveRecord queries and caching.",
      "Introduced Rails Admin workflows that improved onboarding and content governance.",
      "Collaborated across design and product to craft accessible Rails-backed UI systems.",
    ],
  },
  {
    company: "Survey Platforms (YouGov & Ipsos)",
    role: "Survey Engineering Lead",
    period: "Oct 2014 – May 2018",
    summary:
      "Engineered research survey platforms for brands like YouGov and Ipsos, blending bespoke scripting with data quality automation across high-volume studies.",
    highlights: [
      "Scripted complex questionnaire logic in Python, JavaScript, and proprietary tooling within YouGov's Gryphon platform.",
      "Delivered multinational campaigns at Ipsos by extending SPSS Dimensions with custom HTML/CSS and VBA-driven reporting automations.",
      "Mentored survey teams, streamlined delivery workflows, and introduced reusable templates that accelerated turnaround for new studies.",
    ],
  },
];

const projects = [
  {
    name: "ProfiCircle Platform",
    description:
      "Fit-out procurement platform where a Rails monolith orchestrates GraphQL APIs, contract workflows, and the React dashboards teams rely on daily.",
    url: "https://app.proficircle.com",
    stack: ["React", "GraphQL", "Ruby on Rails", "PostgreSQL", "AWS"],
  },
  {
    name: "PlanHero",
    description:
      "Scheduling suite pairing a Ruby on Rails core for events, billing, and notifications with collaborative calendar experiences.",
    url: "https://app.planhero.com/signup",
    stack: ["Ruby on Rails", "JavaScript", "Heroku", "Amazon S3"],
  },
  {
    name: "Practice Zebra",
    description:
      "Dental marketing analytics portal driven by Rails services delivering real-time dashboards and automated campaigns through a responsive UI.",
    url: "https://practicezebra.com",
    stack: ["Ruby on Rails", "PostgreSQL", "C3.js", "Responsive UI"],
  },
];

const skills = {
  core: [
    "Ruby on Rails",
    "React",
    "TypeScript",
    "GraphQL",
    "PostgreSQL",
    "Next.js",
    "Ruby",
  ],
  tooling: [
    "Sidekiq",
    "RSpec",
    "AWS",
    "Stripe",
    "Twilio",
    "OpenAI",
    "Apollo Client",
  ],
};

const sectionNav = [
  {
    id: "hero",
    label: "Intro",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M3 11L12 3l9 8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 9v12h5v-6h4v6h5V9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "about",
    label: "About",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle
          cx="12"
          cy="8"
          r="3.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 20a6.5 6.5 0 0 1 13 0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M4 7h16v11H4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 7V5h6v2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12h16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "skills",
    label: "Skills",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M12 3l2.3 4.66 5.15.75-3.72 3.6.88 5.14L12 15.9l-4.61 2.42.88-5.14-3.72-3.6 5.15-.75z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M4 5h16v14H4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 9h16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 13h6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M4 5h16v14H4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 7l8 6 8-6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

// Hook for scroll-triggered animations
function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 ease-out`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

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
    <div className="min-h-screen bg-background text-text_headings">
      <div className="relative overflow-hidden">
        {/* Warm decorative blobs */}
        <div className="pointer-events-none fixed -top-20 -right-20 h-96 w-96 rounded-full bg-secondary_accent/10 blur-3xl animate-float" />
        <div className="pointer-events-none fixed top-1/3 -left-32 h-80 w-80 rounded-full bg-tertiary_accent/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="pointer-events-none fixed bottom-20 right-1/4 h-64 w-64 rounded-full bg-primary_accent/5 blur-3xl animate-float" style={{ animationDelay: '4s' }} />

        <header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled 
              ? 'bg-background/90 backdrop-blur-md shadow-sm py-4' 
              : 'bg-transparent py-6'
          }`}
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
            <a
              href="#hero"
              className="text-xl font-semibold tracking-tight text-text_headings hover:text-primary_accent transition-smooth"
            >
              Catalin Stanciu
            </a>
            <nav className="hidden space-x-8 text-sm font-medium md:flex">
              <a href="#about" className="link-underline transition-smooth hover:text-primary_accent">
                About
              </a>
              <a
                href="#experience"
                className="link-underline transition-smooth hover:text-primary_accent"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="link-underline transition-smooth hover:text-primary_accent"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="link-underline transition-smooth hover:text-primary_accent"
              >
                Contact
              </a>
            </nav>
            <a
              href="/catalin-stanciu-cv-032025.pdf"
              className="rounded-full border-2 border-primary_accent/30 bg-white px-4 py-2 text-sm font-medium text-primary_accent transition-smooth hover:bg-primary_accent hover:text-white hover:border-primary_accent"
            >
              Download CV
            </a>
          </div>
        </header>

        <aside
          className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
          aria-label="Section navigation"
        >
          {sectionNav.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-muted bg-white text-text_body transition-smooth hover:border-primary_accent hover:text-primary_accent hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary_accent/50 shadow-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {section.icon}
              <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-text_headings px-3 py-1 text-xs font-medium text-white opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
                {section.label}
              </span>
            </a>
          ))}
        </aside>

        <main className="relative z-10 pt-20">
          {/* Hero Section */}
          <section
            id="hero"
            className="mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-24 pt-20 md:flex-row md:items-center min-h-[90vh]"
          >
            <div className="flex-1 space-y-8 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary_accent">
                <span className="h-2 w-2 rounded-full bg-tertiary_accent animate-pulse" />
                Full Stack Engineer · Rails Leaning
              </span>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl text-text_headings">
                Designing dependable back ends and{" "}
                <span className="text-primary_accent">polished front ends</span>{" "}
                that ship together.
              </h1>
              <p className="max-w-xl text-lg text-text_body leading-relaxed">
                Most days you'll find me modeling data, tuning Rails services,
                and shipping APIs—then rounding out the experience with React
                interfaces that make those services shine.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#projects"
                  className="btn-primary inline-flex items-center gap-2 rounded-full bg-primary_accent px-6 py-3 font-medium text-white shadow-lg shadow-primary_accent/25"
                >
                  Explore Recent Work
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a
                  href="mailto:catalinstanciu@live.com"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-muted bg-white px-6 py-3 font-medium text-text_headings transition-smooth hover:border-secondary_accent hover:text-secondary_accent"
                >
                  Start a Conversation
                </a>
              </div>
            </div>
            <div className="flex-1 space-y-6 animate-fade-in-up delay-200">
              <div className="rounded-3xl bg-white p-8 shadow-xl shadow-black/5 border border-muted hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-secondary_accent/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-secondary_accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-sm font-semibold tracking-wider text-text_body">
                    At a Glance
                  </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="group">
                    <p className="text-3xl font-bold text-primary_accent transition-smooth group-hover:scale-105 origin-left">
                      10+
                    </p>
                    <p className="text-sm text-text_body mt-1">
                      Years shipping production web apps
                    </p>
                  </div>
                  <div className="group">
                    <p className="text-3xl font-bold text-tertiary_accent transition-smooth group-hover:scale-105 origin-left">
                      Rails-first
                    </p>
                    <p className="text-sm text-text_body mt-1">
                      APIs, data modeling, background jobs
                    </p>
                  </div>
                  <div className="group">
                    <p className="text-3xl font-bold text-secondary_accent transition-smooth group-hover:scale-105 origin-left">
                      Full Stack
                    </p>
                    <p className="text-sm text-text_body mt-1">
                      React, Next.js, design collaboration
                    </p>
                  </div>
                  <div className="group">
                    <p className="text-3xl font-bold text-text_headings transition-smooth group-hover:scale-105 origin-left">
                      Quality
                    </p>
                    <p className="text-sm text-text_body mt-1">
                      RSpec, CI/CD, observability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="bg-white py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-muted to-transparent" />
            <div className="mx-auto max-w-4xl px-6">
              <AnimatedSection>
                <span className="text-sm font-semibold tracking-wider text-primary_accent">
                  About Me
                </span>
                <p className="mt-6 text-2xl md:text-3xl font-light leading-relaxed text-text_headings">
                  I'm a Bucharest-based full stack engineer with a Rails
                  backbone. I blend thoughtful data modeling and API design with
                  interface polish so entire product slices launch together.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={150}>
                <p className="mt-6 text-lg text-text_body leading-relaxed">
                  From evolving monoliths to shaping new feature teams, I coach on
                  sustainable Rails practices, bring React and design partners
                  along, and keep delivery measurable end to end.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
            <AnimatedSection>
              <div className="flex items-baseline justify-between mb-12">
                <h2 className="text-3xl font-semibold text-text_headings">
                  Experience
                </h2>
                <span className="text-sm font-medium text-text_body">
                  Recent Roles
                </span>
              </div>
            </AnimatedSection>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary_accent via-secondary_accent to-tertiary_accent md:left-8" />
              
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <AnimatedSection key={job.company} delay={index * 100}>
                    <article className="relative pl-8 md:pl-20 group">
                      {/* Timeline dot */}
                      <div className="absolute left-[-5px] top-6 h-3 w-3 rounded-full bg-primary_accent timeline-dot md:left-[27px]" />
                      
                      <div className="rounded-2xl bg-white p-6 md:p-8 shadow-lg shadow-black/5 border border-muted hover-lift transition-smooth">
                        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
                          <div>
                            <h3 className="text-xl md:text-2xl font-semibold text-text_headings group-hover:text-primary_accent transition-smooth">
                              {job.company}
                            </h3>
                            <p className="text-sm font-medium text-primary_accent mt-1">
                              {job.role}
                            </p>
                          </div>
                          <span className="text-xs font-medium text-text_body">
                            {job.period}
                          </span>
                        </div>
                        <p className="text-text_body leading-relaxed">{job.summary}</p>
                        <ul className="mt-5 space-y-2">
                          {job.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-3 text-sm text-text_body">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-tertiary_accent" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="bg-white py-24 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-muted to-transparent" />
            <div className="mx-auto max-w-5xl px-6">
              <div className="flex flex-col gap-12 md:flex-row">
                <AnimatedSection className="flex-1">
                  <h2 className="text-3xl font-semibold text-text_headings">
                    Toolkit
                  </h2>
                  <p className="mt-4 text-text_body leading-relaxed">
                    Opinionated about clean Rails architecture, efficient SQL, and
                    the React patterns, design systems, and background queues that
                    keep product teams shipping with confidence.
                  </p>
                </AnimatedSection>
                <div className="flex flex-1 flex-col gap-8">
                  <AnimatedSection delay={100}>
                    <div>
                      <h3 className="text-sm font-semibold tracking-wider text-primary_accent flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary_accent" />
                        Core Stack
                      </h3>
                      <p className="mt-4 text-text_body leading-relaxed">
                        {skills.core.join(" · ")}
                      </p>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={200}>
                    <div>
                      <h3 className="text-sm font-semibold tracking-wider text-tertiary_accent flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-tertiary_accent" />
                        Integrations & Ops
                      </h3>
                      <p className="mt-4 text-text_body leading-relaxed">
                        {skills.tooling.join(" · ")}
                      </p>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
            <AnimatedSection>
              <div className="flex items-baseline justify-between mb-12">
                <h2 className="text-3xl font-semibold text-text_headings">
                  Recent Projects
                </h2>
                <span className="text-sm font-medium text-text_body">
                  Select Work
                </span>
              </div>
            </AnimatedSection>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <AnimatedSection key={project.name} delay={index * 100}>
                  <article className="group h-full rounded-2xl bg-white p-6 shadow-lg shadow-black/5 border border-muted hover-lift flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary_accent/20 to-secondary_accent/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-primary_accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text_body hover:text-primary_accent transition-smooth"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                    <h3 className="text-xl font-semibold text-text_headings mb-3 group-hover:text-primary_accent transition-smooth">
                      {project.name}
                    </h3>
                    <p className="text-text_body text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>
                    <p className="mt-4 text-text_body text-sm">
                      {project.stack.join(" · ")}
                    </p>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-text_headings text-white py-24 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary_accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary_accent/10 rounded-full blur-3xl" />
            
            <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-semibold">
                  Let's ship the next release together.
                </h2>
                <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
                  Available for collaborations, freelance engagements, or
                  full-time roles where a Rails-leaning full stack partner can
                  accelerate delivery end to end.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={150}>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:catalinstanciu@live.com"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-text_headings transition-smooth hover:bg-secondary_accent hover:text-white"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    catalinstanciu@live.com
                  </a>
                  <a
                    href="https://github.com/catalinstanciu92"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 font-medium text-white transition-smooth hover:bg-white/10 hover:border-white"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/catalin-stanciu92/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 font-medium text-white transition-smooth hover:bg-white/10 hover:border-white"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </main>

        <footer className="bg-background py-8 text-center text-sm text-text_body">
          <p>© {new Date().getFullYear()} Catalin Stanciu · Crafted with care.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
