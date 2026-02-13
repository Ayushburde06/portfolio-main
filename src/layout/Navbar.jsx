import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
        }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Left: Logo + Time (Desktop) */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-xl font-bold tracking-tight hover:text-primary"
          >
            AB<span className="text-primary">.</span>
          </a>

          {/* Desktop Time Display */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full glass hover:bg-surface/50 transition-colors duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium font-mono text-muted-foreground min-w-[80px]">
              {formattedTime} IST
            </span>
          </div>
        </div>

        {/* Center: Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Center: Time (Mobile) */}
        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full glass">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium font-mono text-muted-foreground">
            {formattedTime}
          </span>
        </div>

        {/* Right Section: CTA + Module Menu */}
        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact">
              <Button size="sm">Contact Me</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button>
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
