import React from 'react'
import TerminalPortfolio from './TerminalPortfolio'
import IDCard from './IDCard'

function App() {
  return (
    <div className="flex sm-plus:flex-row items-center justify-center w-full min-h-screen gap-8 px-4 sm-plus:p-8">
      <div className="w-full max-w-[900px] p-4">
        <TerminalPortfolio />
      </div>
      <div className="sm:hidden flex sm-plus:flex mx-10 w-full max-w-[320px] flex-shrink-0 justify-center">
        <IDCard />
      </div>
    </div>
  )
}

export default App;
