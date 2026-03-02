import { motion } from 'motion/react';
import { Atom, Box, Server, FileCode, Palette, Code2, Terminal, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: 'HTML', level: 95, color: '#E34F26', icon: Globe },
      { name: 'CSS', level: 90, color: '#1572B6', icon: Palette },
      { name: 'JavaScript', level: 85, color: '#F7DF1E', icon: FileCode },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: 'Git', level: 80, color: '#F05032', icon: Code2 },
      { name: 'VS Code', level: 95, color: '#007ACC', icon: Terminal },
      { name: 'Netlify', level: 85, color: '#00C7B7', icon: Server },
    ]
  },
  {
    title: "Learning",
    skills: [
      { name: 'React', level: 75, color: '#61DAFB', icon: Atom },
      { name: 'Node.js', level: 60, color: '#68A063', icon: Server },
      { name: 'Three.js', level: 50, color: '#FFFFFF', icon: Box },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black/20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            My <span className="text-neon-purple">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical proficiency and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center gap-4 mb-2">
                      <motion.div 
                        className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400"
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: `${skill.color}20`,
                          borderColor: skill.color,
                          color: skill.color,
                          boxShadow: `0 0 15px ${skill.color}40`
                        }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <skill.icon size={20} />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-white font-medium text-sm group-hover:text-neon-blue transition-colors">{skill.name}</span>
                          <span className="text-gray-400 text-xs">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            className="h-full rounded-full relative"
                            style={{ backgroundColor: skill.color }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
