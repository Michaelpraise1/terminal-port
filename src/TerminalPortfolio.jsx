import React, { useState, useRef, useEffect } from 'react';
import { Terminal, User, Code, Briefcase, Mail, ChevronRight, Command } from 'lucide-react';
import './TerminalPortfolio.css';

const COMMANDS = {
  help: {
    description: 'List all available commands',
    action: () => (
      <div className="output-section">
        <p className="output-text text-yellow-400 mb-2">Available commands:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {Object.entries(COMMANDS).map(([cmd, config]) => (
            <div key={cmd} className="flex">
              <span className="text-green-400 w-24">{cmd}</span>
              <span className="text-gray-400">- {config.description}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  about: {
    description: 'Display information about me',
    action: () => (
      <div className="output-section">
        <div className="flex items-center gap-2 text-blue-400 mb-2">
          <User size={18} />
          <h3 className="text-lg font-bold">About Me</h3>
        </div>
        <p className="text-gray-300 leading-relaxed max-w-2xl">
          Hello! I'm a passionate Fullstack Engineer focused on building robust and scalable web and Mobile applications.
          With expertise in React, reactNative, Node.js, next.js and modern web technologies, I love creating elegant solutions
          to complex problems. I'm a lifelong learner constantly exploring new tools and frameworks.
        </p>
      </div>
    ),
  },
  skills: {
    description: 'List technical skills and tools',
    action: () => (
      <div className="output-section">
        <div className="flex items-center gap-2 text-purple-400 mb-2">
          <Code size={18} />
          <h3 className="text-lg font-bold">Technical Skills</h3>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <span className="text-yellow-400">Frontend:</span>
            <span className="text-gray-300 ml-2">Html, css, Javascript, React, TypeScript, Redux, Tailwind CSS, Next.js</span>
          </div>
          <div>
            <span className="text-green-400">Backend:</span>
            <span className="text-gray-300 ml-2">Node.js, Express, MongoDB</span>
          </div>
          <div>
            <span className="text-blue-400">Tools:</span>
            <span className="text-gray-300 ml-2">Git, Docker, AWS, CI/CD, cpanel, render</span>
          </div>
        </div>
      </div>
    ),
  },
  projects: {
    description: 'Showcase recent projects',
    action: () => (
      <div className="output-section">
        <div className="flex items-center gap-2 text-pink-400 mb-2">
          <Briefcase size={18} />
          <h3 className="text-lg font-bold">Recent Projects</h3>
        </div>
        <div className="flex flex-col gap-4">
          <div className="border border-gray-700 p-3 rounded bg-gray-900/50">
            <h4 className="text-green-400 font-bold">E-commerce Platform</h4>
            <p className="text-gray-400 text-sm mt-1">A full-stack e-commerce website for Fashion and Clothing built with MERN stack featuring Stripe payment integration.</p>
            <p className="text-blue-400 text-xs mt-2">React • Node.js • MongoDB</p>
            <a href="https://kepashoppe.com/" target='_blank' className="text-yellow-400 text-xs mt-1 inline-block hover:underline">Check it out</a>
          </div>
          <div className="border border-gray-700 p-3 rounded bg-gray-900/50">
            <h4 className="text-green-400 font-bold">Agency Website</h4>
            <p className="text-gray-400 text-sm mt-1">Custom-designed and developed a modern agency website for the team I collaborated with, featuring a clean user experience, responsive design, and a strong brand-focused interface.</p>
            <p className="text-blue-400 text-xs mt-2">Next.js • Firebase • Tailwind</p>
            <a href="https://www.weilders.com/" target='_blank' className="text-yellow-400 text-xs mt-1 inline-block hover:underline">Check it out</a>
          </div>
          <div className="border border-gray-700 p-3 rounded bg-gray-900/50">
            <h4 className="text-green-400 font-bold">ICMA Website</h4>
            <p className="text-gray-400 text-sm mt-1">ICMA is a private foundation (Stichting) under the Dutch Civil Code, i created the custom website for them using Next.js, Firebase, and Tailwind CSS.</p>
            <p className="text-blue-400 text-xs mt-2">Next.js • Firebase • Tailwind</p>
            <a href="https://www.icma.com/" target='_blank' className="text-yellow-400 text-xs mt-1 inline-block hover:underline">Check it out</a>
          </div>
          <div className="border border-gray-700 p-3 rounded bg-gray-900/50">
            <h4 className="text-green-400 font-bold">CQR Vault crypto landing page Website</h4>
            <p className="text-gray-400 text-sm mt-1">Created a crypto landing page for CQR Vault using react.js, and Tailwind CSS.</p>
            <p className="text-blue-400 text-xs mt-2">Next.js • Firebase • Tailwind</p>
            <a href="https://cqrvault.org/" target='_blank' className="text-yellow-400 text-xs mt-1 inline-block hover:underline">Check it out</a>
          </div>


        </div>
      </div>
    ),
  },
  contact: {
    description: 'Show contact information',
    action: () => (
      <div className="output-section">
        <div className="flex items-center gap-2 text-cyan-400 mb-2">
          <Mail size={18} />
          <h3 className="text-lg font-bold">Contact Info</h3>
        </div>
        <div className="flex flex-col gap-2 text-gray-300">
          <p>Whatsapp:   <a href="www.whatsapp.com/+2349018922313" target='_blank' className="text-blue-400 hover:underline">+234-9018922313</a></p>
          <p>Telegram:   <a href="www.telegram.com/michaeldami" target='_blank' className="text-blue-400 hover:underline">michaeldami</a></p>
          <p>Email:   <a href="mailto:michaeloluwatoyin49@gmail.com" target='_blank' className="text-blue-400 hover:underline">michaeloluwatoyin49@gmail.com</a></p>
          <p>GitHub:  <a href="https://github.com/michaelpraise1" target='_blank' className="text-blue-400 hover:underline">github.com/michaelpraise1</a></p>
          <p>LinkedIn:<a href="https://www.linkedin.com/in/michael-oluwatoyin-412716379/" target='_blank' className="text-blue-400 hover:underline">https://www.linkedin.com/in/michael-oluwatoyin-412716379/</a></p>
        </div>
      </div>
    ),
  },
  clear: {
    description: 'Clear the terminal window',
    action: null, // Handled specifically in component
  },
  date: {
    description: 'Show current date and time',
    action: () => (
      <div className="text-gray-300">
        {new Date().toString()}
      </div>
    )
  },
  sudo: {
    description: '???',
    action: () => (
      <div className="text-red-500 font-bold">
        Permission denied: This incident will be reported.
      </div>
    )
  }
};

const TerminalPortfolio = () => {
  const [userName, setUserName] = useState('');
  const [step, setStep] = useState('ask_name'); // 'ask_name' or 'welcome'
  const [history, setHistory] = useState([
    {
      type: 'system',
      content: (
        <div className="mb-4">
          <div className="flex items-center gap-2 text-green-400 mb-2">
            <Terminal />
            <h1 className="text-xl font-bold tracking-wider">PORTFOLIO-OMD v1.0.0</h1>
          </div>
          <p className="text-gray-400">Please enter your name:</p>
        </div>
      )
    }
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom whenever history changes
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    // Focus input on mount and any click on the container
    const handleGlobalClick = () => {
      inputRef.current?.focus();
    };

    document.addEventListener('click', handleGlobalClick);
    inputRef.current?.focus();

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim();

    if (!trimmedCmd) return;

    if (step === 'ask_name') {
      const name = trimmedCmd;
      setUserName(name);
      setStep('welcome');

      const welcomeEntry = {
        type: 'system',
        content: (
          <div className="mb-4 mt-4">
            <p className="text-blue-400 text-lg">Welcome, <span className="font-bold text-white">{name}</span>! I'm Oluwatoyin Michael Damilola.</p>
            <p className="text-gray-400 mt-2">Welcome to my interactive terminal portfolio.</p>
            <p className="text-gray-400 mt-1">Type <span className="text-yellow-400 font-mono">'help'</span> to see a list of available commands.</p>
          </div>
        )
      };

      setHistory(prev => [
        ...prev,
        { type: 'input', content: name, namePrompt: true },
        welcomeEntry
      ]);
      return;
    }

    const lowerCmd = trimmedCmd.toLowerCase();

    // Add command to command history for up/down arrows
    setCommandHistory(prev => [cmd, ...prev]);
    setHistoryIndex(-1);

    // Add user input to output history
    const inputEntry = {
      type: 'input',
      content: lowerCmd
    };

    if (lowerCmd === 'clear') {
      setHistory([]);
      return;
    }

    let outputEntry = {
      type: 'output',
      content: null
    };

    const commandConfig = COMMANDS[lowerCmd];

    if (commandConfig && typeof commandConfig.action === 'function') {
      outputEntry.content = commandConfig.action();
    } else {
      outputEntry.content = (
        <div className="text-red-400">
          Command not found: '{lowerCmd}'. Type 'help' to see available commands.
        </div>
      );
    }

    setHistory(prev => [...prev, inputEntry, outputEntry]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const prevIndex = historyIndex - 1;
        setHistoryIndex(prevIndex);
        setInput(commandHistory[prevIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="terminal-container">
      <div className="terminal-window">
        {/* Mac-like Window Header */}
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-btn close"></div>
            <div className="terminal-btn minimize"></div>
            <div className="terminal-btn maximize"></div>
          </div>
          <div className="terminal-title">
            <Command size={14} className="inline mr-1" />
            {userName}@portfolio ~ /home/guest
          </div>
        </div>

        {/* Terminal Content Box */}
        <div className="terminal-content">
          {history.map((entry, index) => (
            <div key={index} className="mb-2 break-all">
              {entry.type === 'input' && (
                <div className="flex flex-wrap items-center text-green-400 font-mono">
                  {entry.namePrompt ? (
                    <span className="mr-2 text-blue-400">Name:</span>
                  ) : (
                    <span className="mr-2 text-blue-400">{userName || 'guest'}@portfolio:~$</span>
                  )}
                  <span className="text-white break-all">{entry.content}</span>
                </div>
              )}
              {entry.type !== 'input' && (
                <div className="mt-1 font-mono text-sm leading-relaxed whitespace-pre-wrap break-words">
                  {entry.content}
                </div>
              )}
            </div>
          ))}

          {/* Prompt line */}
          <div className="flex flex-wrap sm:flex-nowrap items-center text-green-400 font-mono mt-2 w-full">
            <span className="mr-2 text-blue-400 flex items-center whitespace-nowrap">
              {step === 'ask_name' ? '> ' : `${userName || 'guest'}@portfolio:~$ `}
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input min-w-0 flex-1 bg-transparent text-white outline-none font-mono"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Cool CRT scanline effect overlay */}
      <div className="scanlines"></div>
    </div>
  );
};

export default TerminalPortfolio;
