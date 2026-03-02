import { motion } from 'motion/react';
import { Layout, Globe, Code, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Globe size={32} />,
    title: 'Website Creation',
    description: 'Building responsive, modern websites tailored to your specific needs using the latest web technologies.',
    features: ['Responsive Design', 'SEO Optimization', 'Modern UI/UX'],
    techStack: ['React', 'Tailwind CSS', 'Node.js'],
  },
  {
    icon: <Layout size={32} />,
    title: 'Landing Page Design',
    description: 'Designing high-converting landing pages with engaging visuals and smooth user experiences.',
    features: ['High Conversion', 'A/B Testing Ready', 'Fast Loading'],
    techStack: ['Framer Motion', 'React', 'Analytics'],
  },
  {
    icon: <Code size={32} />,
    title: 'Portfolio Development',
    description: 'Creating professional portfolio sites to showcase your work and skills with style and impact.',
    features: ['Personal Branding', 'Project Showcase', 'Contact Integration'],
    techStack: ['Next.js', 'Three.js', 'Vercel'],
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile Application Development',
    description: 'Building high-performance mobile applications using Flutter with clean UI, optimized performance, and cross-device compatibility.',
    features: ['Cross-platform support', 'Responsive UI', 'Clean architecture', 'Performance optimized', 'Real-world usability'],
    techStack: ['Flutter (Dart)', 'API Integration', 'Local Storage'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black/20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            My <span className="text-neon-purple">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I provide specialized web and mobile development services to help you establish a strong digital presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(188, 19, 254, 0.3)" }}
              className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-neon-purple/50 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-neon-purple/20 rounded-xl flex items-center justify-center text-neon-purple mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(188,19,254,0.2)]">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-purple transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              {service.features && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-purple mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.techStack && (
                <div>
                   <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Tech Stack</h4>
                   <div className="flex flex-wrap gap-2">
                     {service.techStack.map((tech, i) => (
                       <span key={i} className="px-3 py-1 text-xs font-medium text-neon-purple bg-neon-purple/10 rounded-full border border-neon-purple/20">
                         {tech}
                       </span>
                     ))}
                   </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
