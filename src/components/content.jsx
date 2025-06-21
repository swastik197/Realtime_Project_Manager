import AddIcon from '@mui/icons-material/Add';
import VerticalSplitOutlinedIcon from '@mui/icons-material/VerticalSplitOutlined';
import TextRotationNoneOutlinedIcon from '@mui/icons-material/TextRotationNoneOutlined';
import { useState, useEffect } from 'react';
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';



import Loader from './loader';
const overview = [
    {
        name: "Total Task",
        input: 10
    },
    {
        name: "Overdue Task",
        input: 5
    },
    {
        name: "OnHold Task",
        input: 3
    },
    {
        name: "Completed Task",
        input: 2
    },
]
const recentprojects = [
    { name: "Frontend component library", date: "january 03, 2025", imogie: "🤖" },
    { name: "Website Redesign", date: "january 07, 2025", imogie: "🐔" },
    { name: "Buiness meeting", date: "january 09, 2025", imogie: "🐢" },
    { name: "Frontend component library", date: "january 03, 2025", imogie: "⚒️" },
    { name: "Frontend component library", date: "january 03, 2025", imogie: "😈" },

]



function content({ onCreateProjectClick }) {

    const [recent, setRecent] = useState("Recent Tasks")

    useEffect(() => {
        setTimeout(() => {
            // Simulate API call
            setLoading(false);
        }, 2000);
    }, []);


    function changebg() {

    }







    return (

        <>
            <main className="flex flex-col flex-1 ">

                <nav className="w-full flex gap-1 rounded-xl bg-gray-100 md:p-3">
                    <VerticalSplitOutlinedIcon />
                    <p>Dashboard</p>
                </nav>
                <section className='w-full flex my-2 justify-between items-center'>
                    <div className='mx-4 md:mx-10'>
                        <h1 className='text-xl font-medium'>Workspace Overview</h1>
                        <p>Here's an overview for this workspace</p>
                    </div>
                    <button className='flex items-center bg-black rounded-lg h-fit p-1 mx-4 md:mx-10 cursor-pointer' onClick={onCreateProjectClick}>
                        <AddIcon style={{ fontSize: 20, padding: 1, margin: 1, color: "white" }} />
                        <p className='text-white text-sm font-medium'>New Project</p>
                    </button>
                </section>
                <section className=' grid grid-cols-2 md:grid-cols-4   gap-4  w-full  my-2'>
                    {overview.map((item) =>
                        <div key={item.name} className="  p-3 rounded-2xl bg-white border-2 border-gray-200 shadow-sm hover:shadow-md transition">
                            <p>{item.name}</p>
                            <p className='text-3xl font-semibold'>{item.input}</p>
                        </div>
                    )}
                </section>
                <section className='border-2 items-start flex flex-wrap-reverse md:flex-wrap border-gray-200 rounded-2xl px-1 mx-0.5  py-2'>



                    <div className="m-2 flex flex-col w-full md:w-2/3  ">

                        <div >
                            <div className='w-full '>Recent Tasks</div>
                            <div className='mask-b-from-10'>
                            {recentprojects.map((project) => (
                                <div
                                    key={project.id + '-lineup'}
                                    className="w-full rounded-3xl bg-gray-300 p-2 flex my-2.5 items-center justify-between"
                                >
                                    <div className="flex items-center space-x-2">
                                        <p className="text-4xl">{project.imogie}</p>
                                        <div>
                                            <h3 className="text-md font-medium text-gray-700">{project.name}</h3>
                                            <p className="text-xs text-gray-600">Due Date: {project.date}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex items-center gap-2 mx-6">
                                        <p className="text-sm">Created by</p>
                                        <TextRotationNoneOutlinedIcon />
                                    </div>
                                    <MoreHorizOutlinedIcon />
                                </div>
                            ))}</div>
                            <div className='w-full flex justify-end'>View All</div>
                            </div>

                        <div>
                            <div className='p-2'>
                                lineUps
                            </div>
                            <div>
                                {recentprojects.map((project) => (
                                    <div
                                        key={project.id + '-lineup'}
                                        className="w-full rounded-3xl bg-gray-300 p-2 flex my-2.5 items-center justify-between"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <p className="text-4xl">{project.imogie}</p>
                                            <div>
                                                <h3 className="text-md font-medium text-gray-700">{project.name}</h3>
                                                <p className="text-xs text-gray-600">Due Date: {project.date}</p>
                                            </div>
                                        </div>
                                        <div className="hidden md:flex items-center gap-2 mx-6">
                                            <p className="text-sm">Created by</p>
                                            <TextRotationNoneOutlinedIcon />
                                        </div>
                                        <MoreHorizOutlinedIcon />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='m-2  flex flex-col flex-1'>
                        <div className="bg-amber-300 rounded-2xl p-2">
                            <h2 className="text-white font-semibold mb-2">Recent Activity</h2>
                            <div className="overflow-y-auto max-h-[400px] pr-1">
                                {recentprojects.map((project) => (
                                    <div
                                        key={project.id + '-activity'}
                                        className="w-full rounded-3xl bg-gray-300 p-2 flex my-2.5 items-center justify-between"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <p className="text-4xl">{project.imogie}</p>
                                            <div>
                                                <h3 className="text-md font-medium text-gray-700">{project.name}</h3>
                                                <p className="text-xs text-gray-600">Due Date: {project.date}</p>
                                            </div>
                                        </div>
                                        <MoreHorizOutlinedIcon />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* <div className='flex flex-nowrap gap-2 rounded-lg overflow-x-auto bg-gray-100  md:px-4 w-full '>


                        {["Recent Tasks","Recent Projects" ,"Recent Members" ].map((rec)=>(
                            <button 
                            onClick={()=>{setRecent(rec)}} 
                            className={`px-2 py-4  w-fit cursor-pointer  border-b-4 transition-all  duration-200
                                ${ recent === rec ? 'border-blue-600 text-blue-600 font-semibold'
                                                  :  'border-transparent text-gray-700'
                                }` } 
                            >{rec}</button>))}
                    </div>

   
    {recent === "Recent Tasks" && (<div className='bg-gray-100 rounded-2xl py-2'>
                {
                    recentprojects.map((project) => (
                        <div className='w-full flex my-3.5 justify-between'>

                            <div className='flex md:mx-14  items-center'>

                                <p className='text-4xl'>{project.imogie}</p>
                                <div>
                                    <h2 className='text-md font-medium'>{project.name}</h2>
                                    <p className='tect-xs'>{project.date}</p>


                                </div>
                            </div>
                            <div className='hidden md:flex md:mx-14'>
                                <p>Created by</p>
                                <TextRotationNoneOutlinedIcon />

                            </div>


                        </div>

                    ))
                }
            </div>)}

                    {recent === "Recent Projects" && <div className='bg-gray-100 rounded-2xl py-2'>
                        {
                            recentprojects.map((project) => (
                                <div className='w-full flex my-3.5 justify-between'>

                                    <div className='flex md:mx-14  items-center'>

                                        <p className='text-4xl'>{project.imogie}</p>
                                        <div>
                                            <h2 className='text-md font-medium'>{project.name}</h2>
                                            <p className='tect-xs'>{project.date}</p>


                                        </div>
                                    </div>
                                    <div className='hidden md:flex md:mx-14'>
                                        <p>Created by</p>
                                        <TextRotationNoneOutlinedIcon />

                                    </div>


                                </div>

                            ))
                        }
                    </div>}
                    {recent === "Recent Members" && <div className='bg-gray-100 rounded-2xl py-2'>

                    </div>} */}
                </section>


            </main>
        </>
    )
}
export default content