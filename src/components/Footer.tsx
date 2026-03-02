import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-black/40 relative z-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Suraj Pawar. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-400">
          <Link to="/privacy-policy" className="hover:text-neon-blue transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-neon-blue transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
