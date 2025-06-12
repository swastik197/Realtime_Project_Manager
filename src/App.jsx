import { useState } from 'react'
import Topnavigation from './components/Sidenavigation';
import Content from './components/content';



function App() {


  return (
    <div className="h-screen flex">
      <Topnavigation />
     <main className="flex-1 flex flex-col overflow-y-auto p-4 bg-gray-50">
        <Content />
      </main>
    </div>
  );
}

export default App
