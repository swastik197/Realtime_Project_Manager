import AddIcon from '@mui/icons-material/Add';
import VerticalSplitOutlinedIcon from '@mui/icons-material/VerticalSplitOutlined';
import TextRotationNoneOutlinedIcon from '@mui/icons-material/TextRotationNoneOutlined';
import { useState } from 'react';
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
    { name: "Frontend component library", date: "january 07, 2025", imogie: "🐔" },
    { name: "Frontend component library", date: "january 09, 2025", imogie: "🐢" },
    { name: "Frontend component library", date: "january 03, 2025", imogie: "⚒️" },
    { name: "Frontend component library", date: "january 03, 2025", imogie: "😈" },
    { name: "Frontend component library", date: "january 03, 2025", imogie: "🫎" },
    { name: "Frontend component library", date: "january 03, 2025", imogie: "👽" },
    { name: "Frontend component library", date: "january 03, 2025", imogie: "🦀" },
    { name: "Frontend component library", date: "january 03, 2025", imogie: "🪶" },
    { name: "Frontend component library", date: "january 03, 2025", imogie: "🦟" },
    { name: "Frontend component library", date: "january 03, 2025", imogie: "🦷" },
    { name: "Frontend component library", date: "january 03, 2025", imogie: "👮‍♂️" },
]



function content({onCreateProjectClick}) {
    const [recentcolor, setRecentColor] = useState('bg-gray-300');
    const [tasks, showtasks] = useState(true)
    const [projects, showtprojects] = useState(false)
    const [users, showusers] = useState(false)

    function showRecentTasks() {
        showtasks(true)
        showusers(false)
        showtprojects(false)
        setRecentColor((prevColor) => {

            prevColor === 'bg-gray-200' ? 'bg-gray-300' : 'bg-gray-200'
        }
        )
    }
    function showRecentUsers() {
        showtasks(false)
        showusers(true)
        showtprojects(false)
        setRecentColor((prevColor) => {

            prevColor === 'bg-gray-200' ? 'bg-gray-300' : 'bg-gray-200'
        }
        )
    }
    function showRecentprojects() {
        showtasks(false)
        showusers(false)
        showtprojects(true)
        setRecentColor((prevColor) => {

            prevColor === 'bg-gray-200' ? 'bg-gray-300' : 'bg-gray-200'
        }
        )
    }










    return (

        <>
            <main className="flex flex-col flex-1 ">

                <nav className="w-full flex gap-1 bg-gray-100 md:p-3">
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
                <section className=' flex gap-x-4 justify-center flex-wrap w-full my-2'>
                    {overview.map((item) => (
                        <div className="w-1/3 md:w-1/5 rounded-2xl p-3 bg-white border-2 border-gray-200 shadow-sm hover:shadow-md transition">
                            <p>{item.name}</p>
                            <p className='text-3xl font-semibold'>{item.input}</p>
                        </div>
                    ))}
                </section>
                <section className='border-2 border-gray-200 rounded-2xl px-1 mx-0.5 md:mx-8 py-2'>
                    <div className='flex gap-2 rounded-xl md:py-1 bg-gray-100 md:mx-14 md:px-4 w-full md:w-11/12'>

                        <button
                            onClick={showRecentTasks}
                            className={`p-2 ${recentcolor} rounded-xl hover:bg-gray-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-fit cursor-pointer`}
                        >
                            Recent Tasks
                        </button>


                        <button onClick={showRecentUsers}  className={`p-2 ${recentcolor} rounded-xl hover:bg-gray-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-fit cursor-pointer`} > Recent Members</button>
                        <button onClick={showRecentprojects} className={`p-2 ${recentcolor} rounded-xl hover:bg-gray-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-fit cursor-pointer`}> Recent Projects</button>
                    </div>
                    {tasks &&
                        <div className='bg-gray-100 rounded-2xl py-2'>
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
                    {projects && <div className='bg-gray-100 rounded-2xl py-2'>
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
                    {users && <div className='bg-gray-100 rounded-2xl py-2'>

                    </div>}
                </section>


            </main>
        </>
    )
}
export default content