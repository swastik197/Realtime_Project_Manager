
import VerticalSplitOutlinedIcon from '@mui/icons-material/VerticalSplitOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

import 'react-vertical-timeline-component/style.min.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Overview from '../project/overview';
import Task from '../project/task';
import Files from '../project/files';
import Chat from '../project/chat';
import Announcements from '../project/announcement';






function Project() {

  const [nav, setnav] = useState("Overview")
  const [project, setProject] = useState({});         // 1. store fetched data
  const [loading, setLoading] = useState(true);         // 2. loading indicator
  const [error, setError] = useState(null);             // 3. error (optional)

  const { name } = useParams();

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await axios.get(`http://localhost:5000/api/projectDetails/${name}`);
        setProject(res.data);                          // ✅ store response data
      } catch (err) {
        setError(err);                                   // ❌ capture error
      } finally {
        setLoading(false);                               // ✅ stop loading
      }
    }

    if (name) {
      fetchProjects();
    } else {
      setLoading(false);
    }
  }, [name]); // ← runs when name changes

  // 🖥️ UI rendering
  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error loading projects 😢</p>;









  return (
    <>
      {/* <main className="flex flex-col flex-1 ">

        <nav className="w-full flex gap-1 rounded-xl bg-gray-100 md:p-3">
          <VerticalSplitOutlinedIcon />
          <p>Dashboard</p>
        </nav>


        <div className='w-full flex my-4 justify-between items-center'>
          <div className='md:mx-10'>
            <div className='flex gap-2 '>


              <h1 className='text-xl font-medium'>Website ReDesign project</h1>


              <EditOutlinedIcon />
            </div>
            <p className='text-sm'>complete overhaul of company website with morden design and imoroved user experience</p>
          </div>
          <button className='flex items-center bg-black rounded-lg h-fit p-1 mx-2 md:mx-10 cursor-pointer' onClick={null}>
            <PeopleAltOutlinedIcon style={{ fontSize: 20, padding: 1, margin: 2, color: "white" }} />
            <p className='text-white text-sm font-medium'>Manage Team</p>
          </button>
        </div>


        <section className='p-2 bg-gray-100 rounded-lg'>
          <div className=' px-2 border-b-2 bg-amber-000 border-gray-300  overflow-y-auto gap-3 flex flex-nowrap'>{["Overview", "Tasks", "Files", "Chat", "Announcements"].map((pnav) => (
            <button type="button" className={`md:min-w-20 p-3 text-md border-b-4 transition-all cursor-pointer duration-200 ${nav === pnav
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent text-gray-700'
              }`} onClick={() => { setnav(pnav) }}>{pnav}</button>
          ))}</div>



          {nav === "Overview" && (<Overview />)}
          {nav === "Tasks" && (<Task />)}
          {nav === "Files" && (<Files />)}
          {nav === "Chat" && (<Chat />)}
          {nav === "Announcements" && (<Announcements />)}







        </section>












      </main> */}

 <main className="flex flex-col flex-1 ">
      <nav className="w-full flex gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-400 p-4 shadow-md mb-6 items-center">
        <VerticalSplitOutlinedIcon className="text-white" />
        <p className="text-lg font-bold text-white tracking-wide">Project Details</p>
      </nav>
      <div className='w-full flex my-4 justify-between items-center'>
        <div className='md:mx-10'>
          <div className='flex gap-2 items-center'>
            <h1 className='text-2xl font-bold text-indigo-700'>{project.name || 'Project Name'}</h1>
            <button className="ml-2 p-2 rounded-lg bg-indigo-100 hover:bg-indigo-200 transition" title="Edit Project (coming soon)"><EditOutlinedIcon className="text-indigo-600" /></button>
          </div>
          <p className='text-sm text-gray-600'>{project.description || 'Project description'}</p>
        </div>
        <button className='flex items-center bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl shadow-lg h-fit p-2 px-4 mx-2 md:mx-10 cursor-pointer transition hover:scale-105 hover:from-indigo-600 hover:to-blue-600' title="Manage Team (coming soon)">
          <PeopleAltOutlinedIcon style={{ fontSize: 20, color: "white" }} />
          <p className='text-white text-base font-semibold ml-2'>Manage Team</p>
        </button>
      </div>
      <section className='p-2 bg-white rounded-2xl shadow-lg mb-6'>
        <div className='px-2 border-b-2 border-gray-200 flex gap-3 overflow-x-auto'>
          {["Overview", "Tasks", "Files", "Chat", "Announcements"].map((pnav) => (
            <button
              key={pnav}
              type="button"
              className={`md:min-w-20 p-3 text-md border-b-4 transition-all font-semibold duration-200 focus:outline-none
                ${nav === pnav ? 'border-indigo-600 text-indigo-700 bg-indigo-50' : 'border-transparent text-gray-700 hover:bg-indigo-50'}`}
              onClick={() => { setnav(pnav) }}
            >
              {pnav}
            </button>
          ))}
        </div>
        <div className="py-6 px-2">
          {nav === "Overview" && (<Overview />)}
          {nav === "Tasks" && (<Task />)}
          {nav === "Files" && (<Files />)}
          {nav === "Chat" && (<Chat />)}
          {nav === "Announcements" && (<Announcements />)}
        </div>
      </section>
      {/* Placeholders for future features */}
      {/* <div className="p-4 bg-indigo-50 rounded-xl shadow text-indigo-700 text-center mt-4">More project features coming soon!</div> */}
    </main>

    </>
  )
}
export default Project