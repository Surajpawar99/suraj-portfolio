import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { useState, useEffect, type FormEvent } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formState;

    if (!name || !email || !message) {
      setIsSubmitting(false);
      return;
    }

    const whatsappNumber = "918087529346";
    const text = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(url, '_blank');

    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
    setIsSuccess(true);
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      {/* Floating WhatsApp Button for Mobile */}
      <motion.a
        href="https://wa.me/918087529346"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: showFloatingBtn ? 1 : 0 }}
        className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30"
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={28} />
      </motion.a>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Get in <span className="text-neon-blue">Touch</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
          
          <div className="space-y-6">
            <a href="mailto:surajpawar3258@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon-blue border border-white/10 group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">surajpawar3258@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+918087529346" className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon-blue border border-white/10 group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Mobile</p>
                <p className="font-medium">+91 8087529346</p>
              </div>
            </a>

            <a href="https://wa.me/918087529346" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-colors group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-green-400 border border-white/10 group-hover:border-green-400 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] transition-all duration-300">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">WhatsApp</p>
                <p className="font-medium">Chat on WhatsApp</p>
              </div>
            </a>

            <div className="flex items-center gap-4 text-gray-300 group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon-blue border border-white/10 group-hover:border-neon-blue transition-colors">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">Parbhani, Maharashtra, India</p>
              </div>
            </div>

            <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
              <motion.a 
                href="https://www.instagram.com/surajpawar.__/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#E1306C' }}
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400 border border-white/10 hover:border-[#E1306C] hover:shadow-[0_0_15px_rgba(225,48,108,0.4)] transition-all duration-300"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/suraj-pawar-752a013aa" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#0077B5' }}
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400 border border-white/10 hover:border-[#0077B5] hover:shadow-[0_0_15px_rgba(0,119,181,0.4)] transition-all duration-300"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden"
        >
          {isSuccess ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-bg/90 z-20 text-center p-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mb-4"
              >
                <Send size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors"
              >
                Send another
              </button>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold py-4 rounded-lg hover:opacity-90 hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
