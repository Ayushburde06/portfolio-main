
import { Terminal, Code2, Database, Globe, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

export const DeveloperProfileCard = () => {
    const [text, setText] = useState("");
    const fullText = "> git commit -m \"Hello World!\"";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                // Reset animation loop
                setTimeout(() => {
                    index = 0;
                    setText("");
                }, 2000)
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full max-w-md mx-auto perspective-1000 group/card">
            {/* Main Glass Card */}
            <div className="relative glass-strong rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/20">

                {/* Terminal Header */}
                <div className="bg-background/90 p-4 flex items-center gap-3 border-b border-white/5 backdrop-blur-md">
                    <div className="flex gap-2 group-hover/card:gap-3 transition-all duration-300">
                        <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-md shadow-red-500/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-md shadow-yellow-500/20" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-md shadow-green-500/20" />
                    </div>
                    <div className="flex-1 text-center text-xs text-muted-foreground font-mono opacity-70">
                        ayush@portfolio:~/projects
                    </div>
                </div>

                {/* Terminal Body / Animation Area */}
                <div className="bg-black/40 p-6 min-h-[140px] font-mono text-sm backdrop-blur-sm">
                    <div className="text-primary font-bold">
                        <span className="mr-2 text-pink-500">$</span>
                        {text}
                        <span className="animate-pulse text-primary">_</span>
                    </div>
                    <div className="mt-4 text-muted-foreground/80">
                        {text.length === fullText.length && (
                            <div className="animate-fade-in space-y-1">
                                <p className="flex items-center gap-2">
                                    <span className="text-green-500">✔</span>
                                    <span className="text-blue-400">master</span>
                                    <span className="opacity-50">(root-commit)</span>
                                    <span className="text-yellow-500">1a2b3c</span>
                                </p>
                                <p>Hello World!</p>
                                <p className="text-xs opacity-50 mt-2">1 file changed, 14 insertions(+)</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="p-6 grid grid-cols-2 gap-4 bg-background/20 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="glass p-4 rounded-2xl hover:bg-primary/10 transition-colors group border border-white/5 hover:border-primary/20">
                        <div className="mb-2 p-2 w-fit rounded-lg bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                            <Code2 size={20} />
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-1 glow-text">6+</div>
                        <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
                            Months Exp.
                        </div>
                    </div>

                    <div className="glass p-4 rounded-2xl hover:bg-primary/10 transition-colors group border border-white/5 hover:border-primary/20">
                        <div className="mb-2 p-2 w-fit rounded-lg bg-pink-500/20 text-pink-500 group-hover:scale-110 transition-transform duration-300">
                            <Database size={20} />
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-1 glow-text">4+</div>
                        <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
                            Projects
                        </div>
                    </div>
                </div>

                {/* Tech Stack Footer */}
                <div className="px-6 pb-6 pt-2 bg-background/20">
                    <p className="text-[10px] text-center text-muted-foreground mb-4 uppercase tracking-widest opacity-70">Tech Stack</p>
                    <div className="flex justify-center gap-6">
                        <div className="p-2.5 glass rounded-xl hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 cursor-default">
                            <Globe size={20} />
                        </div>
                        <div className="p-2.5 glass rounded-xl hover:text-green-400 hover:bg-green-500/10 hover:border-green-500/30 transition-all duration-300 transform hover:-translate-y-1 cursor-default">
                            <Terminal size={20} />
                        </div>
                        <div className="p-2.5 glass rounded-xl hover:text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300 transform hover:-translate-y-1 cursor-default">
                            <Cpu size={20} />
                        </div>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="bg-primary/5 p-3 flex justify-center items-center gap-2 text-xs font-medium text-primary border-t border-primary/10 group-hover/card:bg-primary/10 transition-colors">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_10px_var(--color-primary)]"></span>
                    </span>
                    Available for Work
                </div>
            </div>

            {/* Background Glows */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[80px] -z-10 animate-pulse delay-700" />
        </div>
    );
};
