import { motion, useMotionValue, useTransform } from 'motion/react';
import React from 'react';

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 200);
    y.set(yPct * 200);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl overflow-hidden cursor-pointer group"
    >
      <div
        style={{
          transform: "translateZ(50px)",
        }}
        className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-display mb-6">
            About <span className="text-neon-blue">Me</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-300 text-lg leading-relaxed mb-6">
            Hi, I'm <span className="text-white font-semibold">Suraj Pawar</span>. 👋
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-300 text-lg leading-relaxed mb-6">
            I am a final-year Computer Engineering diploma student and a Full-Stack Developer who loves building scalable, real-world applications. From crafting production-ready UIs with React and Flutter to writing robust backend logic in Python, I enjoy turning complex problems into elegant digital solutions.
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-300 text-lg leading-relaxed mb-8">
            I am passionate about system automation, generative AI, and constantly learning new ways to optimize code.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: 30 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="flex justify-center perspective-1000"
        >
          <TiltCard>
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-neon-blue shadow-[0_0_20px_rgba(0,243,255,0.3)] mb-6 group-hover:scale-105 transition-transform duration-500 mx-auto relative z-10 bg-black">
              <img
                src="/profile.jpg"
                onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/suraj-pawar/400/400"; }}
                alt="Suraj Pawar"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Suraj Pawar</h3>
            <p className="text-neon-purple font-mono text-sm mb-4">Developer & Creator</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Passionate about building seamless digital experiences. Specializing in Android automation and modern web technologies.
            </p>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
