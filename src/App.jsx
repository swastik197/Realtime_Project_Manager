import { useState } from 'react'
import Topnavigation from './components/Sidenavigation';
import Content from './components/content';
import CreateProject from './components/createProjects';



function App() {
 const [showCreateProject,setShowCreateProject]=useState(false)

  return (
    <div className="h-screen flex">
      <Topnavigation onCreateProjectClick={() => setShowCreateProject(true)} />
      <main className="flex-1 flex flex-col overflow-y-auto p-4 bg-gray-50">
        <Content />

      </main>
      { showCreateProject &&

        <div className="fixed inset-0  bg-[rgba(0,0,0,0.8)] flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl shadow-xl relative">
          <CreateProject />
          <button
            onClick={() => setShowCreateProject(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
            ✖
          </button>
        </div>
      </div>
          }

    </div>
  );
}

export default App
