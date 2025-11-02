import { Code2, Rocket, Heart } from "lucide-react";

const About = () => {
    const highlights = [
        {
            icon: Code2,
            title: "Problem Solver",
            description: "Love tackling complex challenges with elegant code solutions",
        },
        {
            icon: Rocket,
            title: "Fast Learner",
            description: "Constantly exploring new technologies and best practices",
        },
        {
            icon: Heart,
            title: "Passionate",
            description: "Driven by the desire to create meaningful software",
        },
    ];

    return (
        <section id="about" className="section-container">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
                    About <span className="gradient-text">Me</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-secondary mx-auto mb-12" />

                <div className="glass-card p-8 sm:p-12 mb-8 animate-fade-in-up">
                    <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                        I'm a 4th-year Computer Science student with a deep passion for technology
                        and software development. My journey in tech began with curiosity about
                        how things work and evolved into a love for creating solutions that make
                        a difference.
                    </p>
                    <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                        Throughout my academic career, I've developed strong foundations in
                        software engineering, data structures, algorithms, and modern web
                        technologies. I thrive in collaborative environments and enjoy the
                        challenge of turning complex problems into elegant, user-friendly
                        solutions.
                    </p>
                    <p className="text-lg text-foreground/90 leading-relaxed">
                        I'm currently seeking opportunities to apply my skills in a
                        professional setting where I can contribute to innovative projects while
                        continuing to grow as a developer. My goal is to become a well-rounded
                        software engineer who can bridge the gap between cutting-edge technology
                        and real-world needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                                <item.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-foreground/70">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
