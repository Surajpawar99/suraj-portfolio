import { motion } from 'motion/react';
import { ExternalLink, Github, Layers, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Vatika Pure Veg',
    subtitle: 'Restaurant Website',
    description: 'A modern full-stack restaurant website built to enhance the hotel’s digital presence. Designed with performance, scalability, and clean UI architecture.',
    image: '/vatika.jpg',
    tags: ['React', 'TypeScript', 'Tailwind', 'Express.js', 'SQLite3'],
    features: ['Responsive modern UI', 'Menu showcase system', 'Backend server integration', 'Local database support', 'Smooth page navigation', 'Animated transitions'],
    link: '#',
    github: '#',
    highlight: 'Full-Stack Project',
    techStack: [
      { name: 'Frontend', value: 'React + TS, Tailwind' },
      { name: 'Backend', value: 'Express.js, SQLite3' },
      { name: 'Tools', value: 'Vite, Motion' }
    ]
  },
  {
    title: 'FastShare',
    subtitle: 'Offline File Transfer System',
    description: 'A high-performance offline file sharing mobile system focused on speed and privacy. Includes landing page and mobile app architecture.',
    image: '/fastshare.jpg',
    tags: ['React 19', 'TypeScript', 'Flutter', 'Python', 'GSAP'],
    features: ['Local network file transfer', 'Secure & private', 'QR-based connection', 'High-speed streaming', 'Performance optimized'],
    link: 'https://fastsharev1.netlify.app/',
    github: 'https://github.com/Surajpawar99/fastshare-landing',
    highlight: 'Mobile & Web System',
    techStack: [
      { name: 'Web', value: 'React 19, Vite, GSAP' },
      { name: 'Mobile', value: 'Flutter (Dart)' },
      { name: 'Core', value: 'Python (Streaming)' }
    ]
  },
  {
    title: 'NOVA',
    subtitle: 'AI System Assistant',
    description: 'A smart AI-powered system assistant designed for productivity. Built to automate tasks, respond to voice commands, and streamline daily workflows.',
    image: '/nova.jpg',
    tags: ['Python', 'NLP', 'Automation', 'AI'],
    features: ['Voice Recognition', 'Task Automation', 'System Control', 'Smart Responses'],
    link: '#',
    github: '#',
    highlight: 'AI & Automation',
    techStack: [
      { name: 'Core', value: 'Python' },
      { name: 'AI', value: 'NLP, Speech Recognition' },
      { name: 'System', value: 'OS Automation' }
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Featured <span className="text-neon-blue">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world case studies demonstrating scalability, performance, and modern architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-neon-blue/20 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden shrink-0">
                <img
                  src={project.image}
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/seed/${project.title.toLowerCase().replace(/\s/g, '-')}/800/600`;
                  }}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-neon-blue/30 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-neon-blue uppercase tracking-wider">{project.highlight}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-medium">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-neon-blue hover:text-black transition-colors"
                      title="View Live"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-neon-purple hover:text-white transition-colors"
                      title="View Code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6 space-y-3">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                    <Zap size={12} className="text-neon-blue" /> Key Features
                  </h4>
                  <ul className="grid grid-cols-1 gap-1">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-neon-purple"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-white/10">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Layers size={12} className="text-neon-purple" /> Tech Stack
                  </h4>
                  <div className="space-y-2">
                    {project.techStack.map((tech, i) => (
                      <div key={i} className="flex items-start text-xs">
                        <span className="text-gray-400 w-16 shrink-0">{tech.name}:</span>
                        <span className="text-white font-medium">{tech.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
