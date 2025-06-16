
import VerticalSplitOutlinedIcon from '@mui/icons-material/VerticalSplitOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

import 'react-vertical-timeline-component/style.min.css';


import Overview from '../project/overview';
import Task from '../project/task';
import Files from '../project/files';
import Chat from '../project/chat';
import Announcements from '../project/announcement';
import { useState } from 'react';





function Project() {

  const [nav, setnav] = useState("Overview")


  function borderblue() {

  }

  return (
    <>
      <main className="flex flex-col flex-1 ">

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
            <button type="button" className={`md:min-w-20 p-3 text-md border-b-4 transition-all cursor-pointer duration-200 ${
          nav === pnav
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












      </main>



    </>
  )
}
export default Project