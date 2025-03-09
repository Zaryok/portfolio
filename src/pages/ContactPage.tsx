import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = {
    email: "zaryab.bitd@gmail.com",
    phone: "+91 7982706922",
    location: "Gurugram, Haryana",
    linkedin: "https://www.linkedin.com/in/zaryab-ahmar-36110b2b9"
  };

  return (
    <section className="flex items-center justify-center">
      <div className="content-wrapper">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out through any of the following channels:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href={`mailto:${contactInfo.email}`}
              className="card group hover:border-purple-400/30 border border-transparent"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                    {contactInfo.email}
                  </p>
                </div>
              </div>
            </a>

            <a
              href={`tel:${contactInfo.phone}`}
              className="card group hover:border-purple-400/30 border border-transparent"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <p className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                    {contactInfo.phone}
                  </p>
                </div>
              </div>
            </a>

            <div className="card">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-purple-500/10">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-400">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card group hover:border-purple-400/30 border border-transparent"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                  <Linkedin className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">LinkedIn</h3>
                  <p className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                    Connect with me
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;