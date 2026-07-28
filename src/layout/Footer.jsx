import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Ayushburde06", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ayushkumar6", label: "LinkedIn" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground mt-2">
            © {currentYear} Ayushkumar Burde. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

