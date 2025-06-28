import { useState, useEffect } from 'react'
import Sidenavigation from './components/Sidenavigation';
import Content from './components/content';
import CreateProject from './components/createProjects';
import Loader from './components/mainLoader';
import Setting from './components/settings'
import Project from './components/Project';
import Projects from './components/Projects';
import Calendar from './components/calendar';
import { Route, Routes } from 'react-router-dom';
import Topnavigation from './components/topnavigation';

function App() {
  const [showCreateProject, setShowCreateProject] = useState(false)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate first load time (e.g. auth check, data preload)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // adjust delay as needed

    return () => clearTimeout(timer); // cleanup
  }, []);

  if (loading) {
    return (
      <Loader />);
  }








  return (
    <div className="h-screen flex">
      <Topnavigation className="block sticky md:hidden" />
      <Sidenavigation onCreateProjectClick={() => setShowCreateProject(true)} />
      <main className="flex-1 flex flex-col overflow-y-auto p-4 bg-gray-50 pt-16 md:pt-4">

        <Routes>
          <Route path='/' element={<Content onCreateProjectClick={() => setShowCreateProject(true)} />} />
          <Route path='/Dashboard' element={<Content onCreateProjectClick={() => setShowCreateProject(true)} />} />
          <Route path='/Settings' element={<Setting />} />
          <Route path='/Calendar' element={<Calendar />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/project' element={<Project  />}/>
          <Route path='/project/:name' element={<Project />} />
        </Routes>
        

      </main>
      <CreateProject
        isOpen={showCreateProject}
        onClose={() => setShowCreateProject(false)}
      />

    </div>
  );
}

export default App
