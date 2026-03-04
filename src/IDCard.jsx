import React, { useEffect, useState } from 'react';
import { User, MapPin, Briefcase, Github, Linkedin, Mail, Cpu, Contact } from 'lucide-react';
import './TerminalPortfolio.css';
import profileImg from './assets/profile.jpg';

const IDCard = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="id-card-container relative overflow-hidden flex flex-col items-center justify-between p-6">
      {/* Background visual elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="w-full relative z-10 flex justify-between items-start mb-6">
        <div className="flex items-center gap-2">
          <Cpu className="text-green-400" size={20} />
          <span className="text-xs font-mono text-gray-400 tracking-widest">OMD_ID_094X</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs font-mono text-green-500">ONLINE</span>
        </div>
      </div>

      <div className="relative z-10 mb-6 group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
        <div className="relative w-25% h-25% rounded-full border-2 border-gray-800 bg-[#0f111a] flex items-center justify-center overflow-hidden">
          <img src={profileImg} alt="Profile" className="object-cover w-[40vh] h-[40vh]" />
        </div>
      </div>

      <div className="text-center relative z-10 mb-6 w-full">
        <h2 className="text-2xl font-bold text-white mb-1 tracking-wide">Oluwatoyin Michael Damilola</h2>
        <p className="text-blue-400 font-mono text-sm mb-4">Full-Stack Engineer</p>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-4"></div>

        <div className="flex flex-col gap-3 text-sm text-left px-2">
          <div className="flex items-center gap-3">
            <Briefcase size={16} className="text-gray-400" />
            <span className="text-gray-300">Full Stack Web Development</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-gray-400" />
            <span className="text-gray-300">Localhost : 127.0.0.1</span>
          </div>
          <div className="flex items-center gap-3">
         <Contact size={18} className="text-gray-500 hover:text-blue-400 transition-colors cursor-pointer" />
          <span className="text-gray-300">Whatsapp: +234-9018922313</span>
          </div>
        </div>
      </div>

      <div className="w-full relative z-10 mt-auto pt-4 border-t border-gray-800/50 flex justify-between items-end">
        <div className="flex gap-4 m-x-4">
          <a href="https://github.com/michaelpraise1" className="text-gray-500 hover:text-white transition-colors"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/michael-oluwatoyin-412716379/" className="text-gray-500 hover:text-blue-400 transition-colors"><Linkedin size={18} /></a>
          <a href="mailto:michaeloluwatoyin49@gmail.com" className="text-gray-500 hover:text-red-400 transition-colors"><Mail size={18} /></a>
        </div>
        <div className="text-xs font-mono text-gray-500">
          {time}
        </div>
      </div>
    </div>
  );
};

export default IDCard;
