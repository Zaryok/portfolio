import React from 'react';
import { Heart } from 'lucide-react';

const ActivitiesPage = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="content-wrapper">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-12 fade-in">
            <Heart className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-4xl font-bold text-white">Leadership & Community</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in">
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-4">Joint Secretary, Abhivyakti - The Drama Society</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Spearheaded theatrical productions and managed event logistics
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Led strategic planning and secured sponsorships
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Collaborated with university officials to expand society's reach
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Enhanced audience engagement for greater outreach
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Mentored junior members in leadership and performance skills
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-4">NSS Volunteer</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Led social welfare initiatives under National Service Scheme
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Organized awareness drives and educational workshops
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Contributed to community service projects for underprivileged children
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Promoted civic responsibility through hands-on engagement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesPage;