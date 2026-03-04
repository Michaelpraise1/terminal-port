import React, { useState, useEffect } from 'react'
import TerminalPortfolio from './TerminalPortfolio'
import IDCard from './IDCard'

function App() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true); // Default to true, will update on mount

  useEffect(() => {
    // Check if the screen is at least 1024px wide (Tailwind 'lg' breakpoint)
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Call once to set initial state correctly
    handleResize();

    // Listen for window resizes
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-8 px-4 lg:px-8 py-8">

      {/* 
        ID Card Section
        Visible if: 
        1. We are on Desktop (`isDesktop` is true)
        2. OR we are on Mobile (`isDesktop` is false) AND terminal is NOT toggled on
      */}
      {(isDesktop || !showTerminal) && (
        <div className="w-full max-w-[320px] flex-shrink-0 flex flex-col items-center justify-center">
          <div className="flex flex-col w-full items-center">
            <IDCard />

            {/* Show "Open Terminal" button ONLY on Mobile */}
            {!isDesktop && (
              <div className="w-full mt-6">
                <button
                  onClick={() => setShowTerminal(true)}
                  className="px-4 py-3 bg-gray-900 text-green-400 border border-green-500/30 rounded-md font-mono font-bold w-full hover:bg-gray-800 shadow-lg text-center transition-colors flex justify-center items-center gap-2"
                >
                  Open Terminal <span>_</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 
        Terminal Section
        Visible if: 
        1. We are on Desktop (`isDesktop` is true)
        2. OR we are on Mobile (`isDesktop` is false) AND terminal IS toggled on
      */}
      {(isDesktop || showTerminal) && (
        <div className="w-full max-w-[900px] p-4 flex flex-col">

          {/* Show "Back to Profile" button ONLY on Mobile */}
          {!isDesktop && (
            <div className="mb-4">
              <button
                onClick={() => setShowTerminal(false)}
                className="px-4 py-2 bg-gray-900 text-green-400 rounded-md border border-gray-700 hover:bg-gray-800 w-full text-center font-mono flex items-center justify-center gap-2 transition-colors"
              >
                <span>←</span> Back to Profile
              </button>
            </div>
          )}

          <TerminalPortfolio />
        </div>
      )}

    </div>
  )
}

export default App;
