import { useState,useEffect } from 'react'
import Sidenavigation from './components/Sidenavigation';
import Content from './components/content';
import CreateProject from './components/createProjects';
import Loader from './components/mainLoader';
import Setting from './components/settings'
import Project from './components/Project';



function App() {
 const [showCreateProject,setShowCreateProject]=useState(false)

const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate first load time (e.g. auth check, data preload)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // adjust delay as needed

    return () => clearTimeout(timer); // cleanup
  }, []);

  if (loading) {
    return( 
    <Loader/> );
  }








  return (
    <div className="h-screen flex">
      <Sidenavigation onCreateProjectClick={() => setShowCreateProject(true)} />
      <main className="flex-1 flex flex-col overflow-y-auto p-4 bg-gray-50">
        {/* <Content onCreateProjectClick={() => setShowCreateProject(true)} /> */}
       {/* <Setting/> */}
       <Project/>
      </main>
      { showCreateProject &&

        <div className="fixed inset-0  bg-[rgba(0,0,0,0.8)] flex items-center justify-center z-50">
        <div className="bg-white mx-2 p-6 rounded-xl shadow-xl relative">
          <CreateProject />
          <button
            onClick={() => setShowCreateProject(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer "
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
