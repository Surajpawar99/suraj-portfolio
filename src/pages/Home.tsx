import { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Lazy load heavy components
const BackgroundCanvas = lazy(() => import('../components/BackgroundCanvas'));
const About = lazy(() => import('../components/About'));
const Skills = lazy(() => import('../components/Skills'));
const Projects = lazy(() => import('../components/Projects'));
const Services = lazy(() => import('../components/Services'));
const Contact = lazy(() => import('../components/Contact'));

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-dark-bg text-neon-blue">
      <div className="w-12 h-12 border-4 border-neon-blue border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-dark-bg text-white selection:bg-neon-blue selection:text-black overflow-x-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <BackgroundCanvas />
      </Suspense>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
