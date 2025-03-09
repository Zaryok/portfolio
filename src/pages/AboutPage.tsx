import React from 'react';
import { User, GraduationCap, Calendar, MapPin, School } from 'lucide-react';

const AboutPage = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="content-wrapper">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* About Section */}
          <div className="fade-in">
            <div className="flex items-center justify-center mb-12">
              <User className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-4xl font-bold text-white">About Me</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-300 text-center text-xl leading-relaxed">
                Enthusiastic second-year student with intermediate-level website development skills, eager to apply my
                expertise in a dynamic tech environment. Seeking an entry-level role to contribute to innovative projects
                and grow professionally.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="fade-in">
            <div className="flex items-center justify-center mb-12">
              <GraduationCap className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-4xl font-bold text-white">Education</h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {/* BIT Mesra */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <School className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-white">Bachelor of Technology</h3>
                    <div className="space-y-1">
                      <p className="text-purple-400 font-medium">BIT Mesra, Ranchi</p>
                      <p className="text-gray-400">Computer Science and Engineering</p>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>Expected 2027</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intermediate */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <School className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-white">Intermediate (XII)</h3>
                    <div className="space-y-1">
                      <p className="text-purple-400 font-medium">Narayana School, Gurgaon</p>
                      <p className="text-gray-400">Science | CBSE Board</p>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>Gurugram, Haryana</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Matriculation */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <School className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-white">Matriculation (X)</h3>
                    <div className="space-y-1">
                      <p className="text-purple-400 font-medium">Air Force School, Gurgaon</p>
                      <p className="text-gray-400">CBSE Board</p>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>Gurugram, Haryana</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;