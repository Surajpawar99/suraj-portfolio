import { motion } from 'motion/react';
import { ArrowLeft, Shield, Lock, Eye, Server, Globe, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-neon-blue selection:text-black font-sans relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-neon-blue/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-96 bg-neon-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Privacy <span className="text-neon-blue">Policy</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Last Updated: {currentDate}
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <div className="space-y-12 text-gray-300 leading-relaxed">
            
            {/* 1. Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Shield className="text-neon-blue" size={24} />
                1. Introduction
              </h2>
              <p>
                Welcome to the portfolio website of <strong>Suraj Pawar</strong>. We are committed to protecting your personal information and your right to privacy. 
                This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data when you visit our website.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Eye className="text-neon-purple" size={24} />
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">a) Information You Provide</h3>
                <p>
                  We collect personal information that you voluntarily provide to us when you use our contact form. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                  <li>Name</li>
                  <li>Email Address</li>
                  <li>Message Content</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6">b) Automatically Collected Information</h3>
                <p>
                  When you visit our website, we may automatically collect certain technical information that does not reveal your specific identity. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                  <li>Browser and device characteristics</li>
                  <li>Operating system</li>
                  <li>IP address (anonymized where possible)</li>
                  <li>Referring URLs and pages visited</li>
                </ul>
              </div>
            </section>

            {/* 3. How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Server className="text-green-400" size={24} />
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the information we collect or receive for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                <li>To respond to your inquiries and offer support.</li>
                <li>To improve the user experience and performance of our website.</li>
                <li>To maintain the security and integrity of our site.</li>
                <li>To communicate with you regarding updates or changes to our policies.</li>
              </ul>
              <p className="mt-4 p-4 bg-white/5 border-l-4 border-neon-blue rounded-r-lg">
                <strong>Note:</strong> We do not sell, trade, or rent your personal identification information to others.
              </p>
            </section>

            {/* 4. WhatsApp Integration */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <MessageCircleIcon className="text-[#25D366]" size={24} />
                4. WhatsApp Integration
              </h2>
              <p>
                Our website includes a direct integration with WhatsApp for quick communication. When you use this feature:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                <li>Your message is sent directly through the WhatsApp application.</li>
                <li>We do not store your message content on our servers before it is sent.</li>
                <li>Your interaction is subject to WhatsApp's own Privacy Policy and Terms of Service.</li>
              </ul>
            </section>

            {/* 5. Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Globe className="text-blue-400" size={24} />
                5. Third-Party Services
              </h2>
              <p>
                We may use third-party services to host our website and analyze traffic. These services may collect information sent by your browser as part of a web page request, such as cookies or your IP address.
              </p>
              <p className="mt-2">
                External links to platforms like <strong>Instagram, LinkedIn, and GitHub</strong> are present on our site. We are not responsible for the privacy practices or content of these third-party sites.
              </p>
            </section>

            {/* 6. Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Lock className="text-red-400" size={24} />
                6. Data Security
              </h2>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please remember that no method of transmission over the internet or method of electronic storage is 100% secure.
              </p>
            </section>

            {/* 7. User Rights */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Your User Rights
              </h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete the data we hold about you.
              </p>
              <p className="mt-2">
                To request the deletion of any information you have submitted via our contact forms, please contact us at: <a href="mailto:surajpawar3258@gmail.com" className="text-neon-blue hover:underline">surajpawar3258@gmail.com</a>.
              </p>
            </section>

            {/* 8. Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.
              </p>
            </section>

            {/* 9. Contact Information */}
            <section className="pt-8 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                9. Contact Us
              </h2>
              <p className="mb-4">
                If you have questions or comments about this policy, you may email us at:
              </p>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 inline-block">
                <div className="w-10 h-10 bg-neon-blue/20 rounded-full flex items-center justify-center text-neon-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:surajpawar3258@gmail.com" className="text-white font-medium hover:text-neon-blue transition-colors">
                    surajpawar3258@gmail.com
                  </a>
                </div>
              </div>
            </section>

          </div>
        </motion.div>
        
        {/* Footer for Policy Page */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Suraj Pawar. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

// Helper Icon Component
function MessageCircleIcon({ className, size }: { className?: string, size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}
