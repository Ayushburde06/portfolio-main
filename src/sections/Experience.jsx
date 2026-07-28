const experiences = [
  {
    period: "April 2025 – Present",
    role: "Software Engineer Intern",
    company: "CrystalTech Services Pvt. Ltd.",
    description: `• Developed and maintained web applications using Python, Django, DRF, and FastAPI for internal business operations and client-facing platforms.
• Designed and integrated secure REST APIs with JWT Authentication and OAuth2 for authentication and role-based access management.
• Built responsive frontend modules using React.js, HTML5, CSS3, and Bootstrap, integrated with backend APIs.
• Worked with PostgreSQL and MySQL for data storage, query optimization, and application performance improvement.
• Implemented asynchronous task processing using Celery for background jobs, notifications, and scheduled tasks.
• Integrated third-party services including Razorpay and Twilio to support payment processing and SMS notifications.
• Used AWS (EC2, S3), Docker, Linux, and Nginx for application deployment and server environment configuration.
• Collaborated with cross-functional teams in an Agile/Scrum environment, participating in code reviews, bug fixes, and feature development using Git and JIRA.`,
    technologies: ["Python", "Django", "DRF", "FastAPI", "React.js", "PostgreSQL", "AWS", "Docker"],
    current: true,
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Work Experience
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Professional Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl">
          <div className="timeline-glow absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative animate-fade-in pl-8 md:pl-12"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-6 w-3 h-3 bg-primary rounded-full -translate-x-[5px] ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`glass p-6 md:p-8 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                >
                  <span className="text-sm text-primary font-medium">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-4 whitespace-pre-line leading-relaxed">
                    {exp.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 mt-6`}>
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
