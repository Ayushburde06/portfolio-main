import { ArrowUpRight, Github, ChevronRight, ChevronLeft } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useState } from "react";

const projects = [
  {
    title: "Notes App",
    subtitle: "MERN Stack Note Application",
    description: `A full-stack note-taking application built with the MERN stack featuring real-time operations, user authentication, and advanced note management capabilities.

🎯 Key Features:
• CRUD Operations – Create, edit, delete, and manage notes seamlessly
• Pin Important Notes – Keep priority notes at the top for quick access
• Search & Filter – Instantly find specific notes with smart search functionality
• JWT Authentication – Secure user login and session management
• Redux State Management – Efficient and predictable application state handling
• Real-time Updates – Smooth UI updates without page refresh
• Fully Responsive – Optimized for desktop, tablet, and mobile devices`,
    image: "/projects/notes-1.png",
    images: ["/projects/notes-1.png", "/projects/notes-2.png", "/projects/notes-3.png", "/projects/notes-4.png"],
    tags: ["React.js", "Redux", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    link: "#",
    github: "https://github.com/Ayushburde06/Notes-App-main",
    demo: "https://notes-app-main-aqv5.onrender.com/"
  },
  {
    title: "CV Generator",
    subtitle: "Web Application",
    description: `A full-stack web application built with Django that enables users to create and download professional resumes in PDF format with multiple template options and secure user authentication.

🎯 Key Features:
• User Authentication – Secure signup and login system for personalized resume management
• Comprehensive Input Forms – Structured forms for education, skills, work experience, projects, and certifications
• 7 Professional Templates – Multiple resume layouts to suit different industries and styles
• PDF Generation – Instant PDF export for easy downloading and sharing
• Data Persistence – SQLite database stores user information for future edits and updates
• Responsive Design – Clean, user-friendly interface optimized for all devices`,
    image: "/projects/cv-1.png",
    images: ["/projects/cv-1.png", "/projects/cv-2.png", "/projects/cv-3.png"],
    tags: ["Python", "Django", "HTML5", "CSS3", "SQLite", "ReportLab"],
    link: "#",
    github: "https://github.com/Ayushburde06/CV__Generator",
    demo: "Live coming soon"
  },
  {
    title: "Blogging Platform",
    subtitle: "MERN Stack Blog Application",
    description: `A full-stack blogging platform inspired by Medium, featuring blog creation, user authentication, and a clean reading experience built with modern web technologies.

🎯 Key Features:
• Blog Management – Create, edit, and publish posts with rich text formatting
• User Authentication – Secure signup/login with session management
• Blog Discovery – Browse and search published articles
• User Profiles – Personalized author pages
• Fully Responsive – Optimized for all devices`,
    image: "/projects/blog-1.png",
    images: ["/projects/blog-1.png", "/projects/blog-2.png"],
    tags: ["React", "Vite", "Tailwind CSS", "TypeScript", "Hono.js", "Prisma ORM"],
    link: "#",
    github: "https://github.com/Ayushburde06/Blog-App",
    demo: "Live coming soon"
  },
];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);

  /* Manual Navigation Logic */
  const nextImage = (e, project) => {
    e.stopPropagation();
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = (e, project) => {
    e.stopPropagation();
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  const handleComingSoonClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleProjectClick = (idx) => {
    setActiveProject(idx);
    setCurrentImageIndex(0);
  };


  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects List with Pop-out Image */}
        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Project List */}
          <div className="lg:col-span-5 space-y-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`group cursor-pointer transition-all duration-300 ${activeProject === idx ? "opacity-100" : "opacity-60 hover:opacity-100"
                  }`}
                onClick={() => handleProjectClick(idx)}
                onMouseEnter={() => handleProjectClick(idx)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${activeProject === idx
                      ? "text-primary animate-highlight-text px-1"
                      : "text-foreground group-hover:text-primary/80"
                      }`}
                  >
                    {project.title}
                  </h3>
                  <ChevronRight
                    className={`w-6 h-6 transition-transform duration-300 ${activeProject === idx ? "rotate-90 text-primary" : "text-muted-foreground"
                      }`}
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeProject === idx ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="lg:hidden mb-4 rounded-xl overflow-hidden relative group">
                    <img
                      src={
                        activeProject === idx && project.images && project.images.length > 0
                          ? project.images[currentImageIndex % project.images.length]
                          : project.image
                      }
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500"
                    />

                    {/* Mobile Navigation Overlays */}
                    {activeProject === idx && project.images && project.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => prevImage(e, project)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition-all active:scale-90 z-20"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={(e) => nextImage(e, project)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition-all active:scale-90 z-20"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Image Counter Badge */}
                        <div className="absolute bottom-2 right-2 px-2 py-1 rounded-full bg-black/60 text-white text-[10px] font-medium backdrop-blur-sm">
                          {(currentImageIndex % project.images.length) + 1} / {project.images.length}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    {project.demo === "Live coming soon" ? (
                      <button
                        onClick={handleComingSoonClick}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 text-sm font-medium transition-colors cursor-pointer"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                        Live Demo
                      </button>
                    ) : (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 text-sm font-medium transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>

                  <p className="text-lg text-white/90 mb-4 font-medium">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 whitespace-pre-wrap">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>


                </div>
              </div>
            ))}
          </div>

          {/* Image Pop-out Preview */}
          <div className="hidden lg:block lg:col-span-7 sticky top-32">
            <div className="relative rounded-2xl overflow-hidden glass border border-primary/20 shadow-2xl aspect-video group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 pointer-events-none" />

              {/* Default Empty State - Show First Project Image */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${activeProject === null ? "opacity-100" : "opacity-0"
                  }`}
              >
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover"
                />

              </div>
              {projects.map((project, idx) => (
                <img
                  key={idx}
                  src={
                    activeProject === idx && project.images && project.images.length > 0
                      ? project.images[currentImageIndex % project.images.length]
                      : project.image
                  }
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform ${activeProject === idx
                    ? "opacity-100 scale-100 translate-x-0 group-hover:scale-110"
                    : "opacity-0 scale-110 translate-x-12"
                    }`}
                />
              ))}

              {/* Overlay Details */}
              {activeProject !== null && (
                <>
                  {/* Navigation Buttons (Only if multiple images) */}
                  {projects[activeProject].images && projects[activeProject].images.length > 1 && (
                    <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-between px-4">
                      <button
                        onClick={(e) => prevImage(e, projects[activeProject])}
                        className="pointer-events-auto p-2 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={(e) => nextImage(e, projects[activeProject])}
                        className="pointer-events-auto p-2 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background/90 to-transparent z-20 translate-y-full hover:translate-y-0 transition-transform duration-300 flex justify-end gap-4">
                    <a
                      href={projects[activeProject].link}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </>
              )}
            </div>
            {/* Decorative elements behind image */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full opacity-40 animate-pulse" />
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-24 animate-fade-in animation-delay-500">
          <a href="#projects">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>


        {/* Custom Toast Notification */}
        {showToast && (
          <div className="fixed bottom-10 right-10 z-50 animate-fade-in">
            <div className="glass-strong border border-yellow-500/20 rounded-xl p-5 shadow-2xl flex items-start gap-4 max-w-sm backdrop-blur-xl">
              <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🚧</span>
              </div>
              <div>
                <h4 className="text-yellow-400 font-bold mb-1">Coming Soon!</h4>
                <p className="text-muted-foreground text-sm leading-snug">This project isn't live yet. Stay tuned for updates!</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
