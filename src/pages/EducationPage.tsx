import React from 'react';
import { Award } from 'lucide-react';

const EducationPage = () => {
  return (
    <section className="min-h-screen py-20 bg-slate-900 pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12 reveal">
          <Award className="w-8 h-8 text-purple-400 mr-3" />
          <h2 className="text-3xl font-bold text-white">Education</h2>
        </div>
        <div className="space-y-8 reveal">
          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-purple-400 before:rounded-full after:absolute after:left-[3.5px] after:top-6 after:w-0.5 after:h-full after:bg-purple-400/30">
            <div className="bg-slate-800/50 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white">Bachelor of Technology</h3>
              <p className="text-purple-400">BIT Mesra, off-campus Deoghar</p>
              <p className="text-gray-400">Computer Science and Engineering</p>
              <p className="text-gray-400">Expected 2027</p>
            </div>
          </div>
          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-purple-400 before:rounded-full">
            <div className="bg-slate-800/50 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white">Intermediate (XII)</h3>
              <p className="text-purple-400">Narayana School, Gurgaon</p>
              <p className="text-gray-400">Science | CBSE Board</p>
            </div>
          </div>
          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-purple-400 before:rounded-full">
            <div className="bg-slate-800/50 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white">Matriculation (X)</h3>
              <p className="text-purple-400">Air Force School, Gurgaon</p>
              <p className="text-gray-400">CBSE Board</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
