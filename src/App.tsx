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

function App() {
  return (
    <div className="min-h-screen bg-background text-text_headings">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-56 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary_accent/20 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-[-10rem] h-80 w-80 -translate-y-1/2 rounded-full bg-secondary_accent/20 blur-3xl" />

        <header className="sticky top-0 z-20 backdrop-blur bg-background/70 border-b border-primary_accent/20">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <a
              href="#hero"
              className="text-2xl font-semibold tracking-wide text-primary_accent"
            >
              Catalin Stanciu
            </a>
            <nav className="hidden space-x-8 text-sm uppercase tracking-[0.2em] md:flex">
              <a href="#about" className="transition hover:text-primary_accent">
                About
              </a>
              <a
                href="#experience"
                className="transition hover:text-primary_accent"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="transition hover:text-primary_accent"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="transition hover:text-primary_accent"
              >
                Contact
              </a>
            </nav>
            <a
              href="/catalin-stanciu-cv-032025.pdf"
              className="rounded-full border border-primary_accent/40 bg-primary_accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-primary_accent/20"
            >
              Download CV
            </a>
          </div>
        </header>

        <main className="relative z-10">
          <section
            id="hero"
            className="mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-24 pt-24 md:flex-row md:items-center"
          >
            <div className="flex-1 space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary_accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary_accent">
                Full Stack Engineer · Rails Leaning
              </span>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Designing dependable back ends and polished front ends that ship
                together.
              </h1>
              <p className="max-w-xl text-lg text-text_headings/80">
                Most days you’ll find me modeling data, tuning Rails services,
                and shipping APIs—then rounding out the experience with React
                interfaces that make those services shine.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-primary_accent px-6 py-3 text-background transition hover:bg-primary_accent/80"
                >
                  Explore Recent Work
                </a>
                <a
                  href="mailto:catalinstanciu@live.com"
                  className="inline-flex items-center gap-2 rounded-full border border-secondary_accent px-6 py-3 text-secondary_accent transition hover:bg-secondary_accent/10"
                >
                  Start a Conversation
                </a>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <div className="rounded-3xl border border-primary_accent/20 bg-panels_cards/80 p-8 shadow-lg backdrop-blur">
                <h2 className="mb-6 text-sm uppercase tracking-[0.3em] text-secondary_accent/80">
                  Snapshot
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-4xl font-semibold text-primary_accent">
                      10+
                    </p>
                    <p className="text-sm uppercase tracking-widest text-text_headings/60">
                      Years shipping production web apps
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl font-semibold text-primary_accent">
                      Backend-leaning
                    </p>
                    <p className="text-sm uppercase tracking-widest text-text_headings/60">
                      Rails, APIs, data modeling, background jobs
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl font-semibold text-primary_accent">
                      Full Stack
                    </p>
                    <p className="text-sm uppercase tracking-widest text-text_headings/60">
                      React, Next.js, design collaboration
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl font-semibold text-primary_accent">
                      Quality
                    </p>
                    <p className="text-sm uppercase tracking-widest text-text_headings/60">
                      RSpec, CI/CD, observability, performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="bg-panels_cards/60 py-20">
            <div className="mx-auto max-w-4xl px-6 text-center md:text-left">
              <h2 className="text-sm uppercase tracking-[0.3em] text-secondary_accent">
                About
              </h2>
              <p className="mt-6 text-3xl font-light leading-relaxed text-text_headings">
                Catalin is a Bucharest-based full stack engineer with a Rails
                backbone. I blend thoughtful data modeling and API design with
                interface polish so entire product slices launch together.
              </p>
              <p className="mt-6 text-lg text-text_headings/80">
                From evolving monoliths to shaping new feature teams, I coach on
                sustainable Rails practices, bring React and design partners
                along, and keep delivery measurable end to end.
              </p>
            </div>
          </section>

          <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
            <div className="flex items-baseline justify-between">
              <h2 className="text-3xl font-semibold text-secondary_accent">
                Experience
              </h2>
              <span className="text-sm uppercase tracking-[0.3em] text-text_headings/60">
                Recent Roles
              </span>
            </div>
            <div className="mt-12 space-y-10 border-l border-primary_accent/20 pl-10">
              {experience.map((job) => (
                <article
                  key={job.company}
                  className="relative rounded-2xl bg-panels_cards/60 p-8 shadow-lg"
                >
                  <span className="absolute -left-11 top-8 h-5 w-2 rounded-2xl border-2 border-primary_accent bg-background" />
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-semibold">{job.company}</h3>
                      <p className="text-sm uppercase tracking-[0.2em] text-primary_accent">
                        {job.role}
                      </p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] text-text_headings/60">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-6 text-text_headings/80">{job.summary}</p>
                  <ul className="mt-6 space-y-3 text-sm text-text_headings/70">
                    {job.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary_accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="bg-panels_cards/40 py-20">
            <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 md:flex-row">
              <div className="flex-1">
                <h2 className="text-3xl font-semibold text-secondary_accent">
                  Toolkit
                </h2>
                <p className="mt-4 text-text_headings/80">
                  Opinionated about clean Rails architecture, efficient SQL, and
                  the React patterns, design systems, and background queues that
                  keep product teams shipping with confidence.
                </p>
              </div>
              <div className="flex flex-1 flex-col gap-6">
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-primary_accent">
                    Core Stack
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {skills.core.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-primary_accent/30 bg-primary_accent/10 px-4 py-2 text-sm text-primary_accent"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-secondary_accent">
                    Integrations & Ops
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {skills.tooling.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-secondary_accent/30 bg-secondary_accent/10 px-4 py-2 text-sm text-secondary_accent"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
            <div className="flex items-baseline justify-between">
              <h2 className="text-3xl font-semibold text-secondary_accent">
                Recent Projects
              </h2>
              <span className="text-sm uppercase tracking-[0.3em] text-text_headings/60">
                Select Work
              </span>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="group relative overflow-hidden rounded-3xl border border-primary_accent/20 bg-panels_cards/70 p-8 shadow-xl transition hover:-translate-y-2 hover:border-primary_accent/40"
                >
                  <div className="absolute -right-12 top-12 h-32 w-32 rounded-full bg-primary_accent/10 blur-2xl transition group-hover:bg-primary_accent/20" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-text_headings">
                      {project.name}
                    </h3>
                    <p className="mt-4 text-text_headings/80">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.stack.map((stackItem) => (
                        <span
                          key={stackItem}
                          className="rounded-full bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.25em] text-primary_accent"
                        >
                          {stackItem}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary_accent transition group-hover:gap-3"
                    >
                      Visit project
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="bg-panels_cards/50 py-24">
            <div className="mx-auto max-w-4xl px-6 text-center">
              <h2 className="text-3xl font-semibold text-secondary_accent">
                Let’s ship the next release together.
              </h2>
              <p className="mt-6 text-lg text-text_headings/80">
                Available for collaborations, freelance engagements, or
                full-time roles where a Rails-leaning full stack partner can
                accelerate delivery end to end.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:catalinstanciu@live.com"
                  className="inline-flex items-center gap-2 rounded-full bg-primary_accent px-8 py-3 text-background transition hover:bg-primary_accent/80"
                >
                  Email catalinstanciu@live.com
                </a>
                <a
                  href="https://github.com/catalinstanciu92"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-secondary_accent px-8 py-3 text-secondary_accent transition hover:bg-secondary_accent/10"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-primary_accent/20 bg-background/80 py-8 text-center text-xs uppercase tracking-[0.3em] text-text_headings/50">
          © {new Date().getFullYear()} Catalin Stanciu · Crafted with care.
        </footer>
      </div>
    </div>
  );
}

export default App;
