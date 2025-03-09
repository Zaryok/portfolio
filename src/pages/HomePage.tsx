import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

const HomePage = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          }
        },
        retina_detect: true
      });
    }
  }, []);

  const handleDownloadCV = () => {
    // Create a blob URL for the PDF file
    fetch('/Zaryab_CV.pdf')
      .then(response => response.blob())
      .then(blob => {
        // Create a blob URL
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Zaryab_Ahmar_CV.pdf');
        document.body.appendChild(link);
        link.click();
        // Clean up
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error downloading CV:', error);
        alert('Sorry, there was an error downloading the CV. Please try again later.');
      });
  };

  return (
    <section className="flex items-center justify-center">
      <div id="particles-js" />
      <div className="content-wrapper text-center space-y-8 fade-in">
        <div className="space-y-4 animate-float">
          <h1 className="text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Zaryab Ahmar
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <MapPin className="w-5 h-5 text-purple-400" />
            <span className="text-lg">Gurugram, Haryana</span>
          </div>
        </div>

        <p className="text-xl sm:text-3xl text-gray-300">
          Computer Science Student at BIT Mesra
        </p>

        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/Zaryok" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-white/10 rounded-full transition-all duration-300 active:bg-white/20 hover:bg-white/20 touch-manipulation"
          >
            <Github className="w-6 h-6 text-gray-300" />
          </a>
          <a 
            href="https://www.linkedin.com/in/zaryab-ahmar-36110b2b9" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-white/10 rounded-full transition-all duration-300 active:bg-white/20 hover:bg-white/20 touch-manipulation"
          >
            <Linkedin className="w-6 h-6 text-gray-300" />
          </a>
          <a 
            href="mailto:zaryab.bitd@gmail.com" 
            className="p-3 bg-white/10 rounded-full transition-all duration-300 active:bg-white/20 hover:bg-white/20 touch-manipulation"
          >
            <Mail className="w-6 h-6 text-gray-300" />
          </a>
        </div>

        <button
          onClick={handleDownloadCV}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg inline-flex items-center gap-2 transition-all duration-300 active:bg-purple-500 hover:bg-purple-500 touch-manipulation"
        >
          <Download className="w-5 h-5" />
          Download CV
        </button>
      </div>
    </section>
  );
};

export default HomePage;