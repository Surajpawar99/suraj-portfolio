import { motion } from 'motion/react';
import { ArrowLeft, Scale, FileText, UserCheck, ShieldAlert, Link as LinkIcon, MessageSquare, AlertTriangle, HelpCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
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
            Terms of <span className="text-neon-blue">Service</span>
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
            
            {/* 1. Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FileText className="text-neon-blue" size={24} />
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </section>

            {/* 2. Website Purpose */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <HelpCircle className="text-neon-purple" size={24} />
                2. Website Purpose
              </h2>
              <p>
                This website serves as a personal portfolio for <strong>Suraj Pawar</strong>. Its primary purpose is to showcase professional projects, technical skills, and development services. The content provided is for informational and demonstration purposes only.
              </p>
            </section>

            {/* 3. Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Scale className="text-green-400" size={24} />
                3. Intellectual Property
              </h2>
              <p>
                All content contained on this website, including but not limited to text, code snippets, graphics, logos, design, and project descriptions, is the intellectual property of Suraj Pawar unless otherwise explicitly stated.
              </p>
              <p className="mt-4 p-4 bg-white/5 border-l-4 border-neon-blue rounded-r-lg">
                <strong>Restriction:</strong> You may not reproduce, distribute, display, or create derivative works of any content on this website without prior written permission.
              </p>
            </section>

            {/* 4. User Conduct */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <UserCheck className="text-yellow-400" size={24} />
                4. User Conduct
              </h2>
              <p className="mb-4">
                By using this website, you agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                <li>Use the website for any unlawful purpose or in violation of any local, state, national, or international law.</li>
                <li>Attempt to hack, exploit, or compromise the security of the website or its servers.</li>
                <li>Misuse the contact forms to send spam, abusive, or malicious content.</li>
                <li>Upload or transmit viruses or any other type of malicious code.</li>
              </ul>
            </section>

            {/* 5. Third-Party Links */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <LinkIcon className="text-blue-400" size={24} />
                5. Third-Party Links
              </h2>
              <p>
                This website contains links to third-party websites such as Instagram, LinkedIn, and GitHub. These links are provided for your convenience only. We have no control over the content or practices of these sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
              </p>
            </section>

            {/* 6. Contact Form & WhatsApp Usage */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <MessageSquare className="text-[#25D366]" size={24} />
                6. Contact Form & WhatsApp Usage
              </h2>
              <p>
                When using the contact form or WhatsApp integration, you agree to provide accurate and truthful information. Messages sent via WhatsApp are subject to WhatsApp's Terms of Service and Privacy Policy. We do not guarantee a specific response time for inquiries but aim to respond as soon as possible.
              </p>
            </section>

            {/* 7. Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <AlertTriangle className="text-orange-400" size={24} />
                7. Disclaimer
              </h2>
              <p>
                The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="mt-2">
                We do not warrant that the website will be constantly available, or available at all, or that the information on this website is complete, true, accurate or non-misleading.
              </p>
            </section>

            {/* 8. Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <ShieldAlert className="text-red-400" size={24} />
                8. Limitation of Liability
              </h2>
              <p>
                In no event shall Suraj Pawar be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if we have been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            {/* 9. Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                9. Changes to Terms
              </h2>
              <p>
                We reserve the right to revise these terms of service for this website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            {/* 10. Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                10. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of <strong>India</strong> and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>

            {/* 11. Contact Information */}
            <section className="pt-8 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                11. Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us at:
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
        
        {/* Footer for Terms Page */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Suraj Pawar. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
