import { Code2, Database, Cloud, Wrench, GraduationCap, Award } from "lucide-react";

const skillCategories = [
    {
        icon: Code2,
        title: "Programming Languages",
        skills: ["Python", "TypeScript", "JavaScript", "MySQL"],
    },
    {
        icon: Database,
        title: "Databases",
        skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
        icon: Cloud,
        title: "Full Stack & Cloud",
        skills: ["React.js", "Node.js", "Express.js", "Django", "AWS (EC2, S3)", "Git"],
    },
    {
        icon: Wrench,
        title: "Tools & Technologies",
        skills: ["RESTful APIs", "Postman", "Agile Methodologies"],
    },
];

const education = [
    {
        degree: "Master of Computer Applications",
        institution: "Tulsiramji Gaikwad Patil College of Engineering and Technology",
        period: "July 2023 — July 2025",
        cgpa: "6.76",
        location: "Nagpur, Maharashtra",
        current: true,
        achievements: [
            "Participated in UI/UX design competitions",
            "Published research as a co-author"
        ]
    },
    {
        degree: "Bachelor of Computer Applications",
        institution: "City Premier College (RTM Nagpur University)",
        period: "July 2019 — July 2022",
        cgpa: "8.45",
        description: "Strong foundation in software development principles, data structures, and programming languages like C++.",
        location: "Nagpur, Maharashtra",
        current: false,


        achievements: [
            "Placement Cell Coordinator",
            "Participated in Programming Competitions",
            "Student Body Treasurer"
        ]
    },
];

const certifications = [
    "Complete 2025 Python Bootcamp From Scratch | Udemy",
    "Django Masterclass | Udemy",
];

export const Skills = () => {
    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            <div
                className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span
                        className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
                    >
                        Skills & Education
                    </span>
                    <h2
                        className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
                    >
                        Technical{" "}
                        <span
                            className="font-serif italic 
            font-normal text-white"
                        >
                            expertise.
                        </span>
                    </h2>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="glass p-6 rounded-2xl animate-fade-in hover:border-primary/30 transition-all duration-300"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                <category.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIdx) => (
                                    <span
                                        key={skillIdx}
                                        className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 border border-border/50 transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education Section */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Education Cards */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                            <GraduationCap className="w-6 h-6 text-primary" />
                            <h3 className="text-2xl font-semibold">Education</h3>
                        </div>
                        {education.map((edu, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h4 className="text-lg font-semibold">{edu.degree}</h4>
                                        <p className="text-muted-foreground text-sm mt-1">
                                            {edu.institution}
                                        </p>
                                        {edu.location && (
                                            <p className="text-muted-foreground text-xs mt-0.5">
                                                {edu.location}
                                            </p>
                                        )}
                                    </div>
                                    {edu.current && (
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full whitespace-nowrap ml-2">
                                            Current
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                                    <span>{edu.period}</span>
                                    <span className="text-primary font-medium">
                                        CGPA: {edu.cgpa}
                                    </span>
                                </div>

                                {edu.description && (
                                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                                        {edu.description}
                                    </p>
                                )}

                                {edu.keyCourses && (
                                    <div className="mt-4">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Key Courses</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {edu.keyCourses.map((course, i) => (
                                                <span key={i} className="px-2 py-0.5 bg-surface rounded text-xs text-muted-foreground/80 border border-border/30">
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {edu.achievements && (
                                    <div className="mt-4 pt-4 border-t border-border/30">
                                        <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                                            <Award className="w-4 h-4 text-primary" />
                                            Achievements
                                        </p>
                                        <ul className="space-y-1.5">
                                            {edu.achievements.map((achievement, i) => (
                                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-1.5 flex-shrink-0" />
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Award className="w-6 h-6 text-primary" />
                            <h3 className="text-2xl font-semibold">Certifications</h3>
                        </div>
                        <div className="glass p-6 rounded-2xl animate-fade-in animation-delay-300">
                            <div className="space-y-4">
                                {certifications.map((cert, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface transition-colors"
                                    >
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                        <span className="text-sm">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Concepts */}
                        <div className="glass p-6 rounded-2xl animate-fade-in animation-delay-400">
                            <h4 className="font-semibold mb-4">Core Concepts</h4>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Full-Stack Development",
                                    "Serverless Architecture",
                                    "Machine Learning",
                                    "Natural Language Processing",
                                ].map((concept, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-surface text-sm rounded-full text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-all"
                                    >
                                        {concept}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
