
import VerticalSplitOutlinedIcon from '@mui/icons-material/VerticalSplitOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AddIcon from '@mui/icons-material/Add';
import 'react-vertical-timeline-component/style.min.css';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import TextRotationNoneOutlinedIcon from '@mui/icons-material/TextRotationNoneOutlined';
import { CheckCircleIcon, ClockIcon, XCircleIcon } from '@heroicons/react/24/solid';



import Overview from '../project/overview';
import Task from '../project/task';
import Files from '../project/files';
import Chat from '../project/chat';
import Announcements from '../project/announcement';
import { useState } from 'react';




// ]
const recentprojects = [
    {
        id: 'P101',
        imogie: '🚀',
        name: 'Launch Website',
        task: 'Frontend Integration',
        date: '2025-06-30',
        status: 'Completed',
    },
    {
        id: 'P102',
        imogie: '🛠️',
        name: 'Bug Fixes',
        task: 'API Debugging',
        date: '2025-07-05',
        status: 'Pending',
    },
    {
        id: 'P103',
        imogie: '📦',
        name: 'Deploy Backend',
        task: 'Server Setup',
        date: '2025-06-15',
        status: 'Overdue',
    },
];

// 
function Projects() {

    const [nav, setnav] = useState("Overview")

    const [isOpen, setIsOpen] = useState("");
    const [selected, setSelected] = useState([]);
    // const options = ['Option 1', 'Option 2', 'Option 3'];
    const optionsMap = {
        "Project": ["CRM", "ERP", "SaaS"],
        "Assign": ["Alice", "Bob", "Charlie"],
        "Due Date": ["Today", "Tomorrow", "Next Week"],
        "Status": ["Pending", "In Progress", "Completed"],
    };


    return (
        <>
            <main className="flex flex-col flex-1 ">

              <nav className="w-full flex gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-400 p-2 shadow-md mb-6 items-center">
                    <VerticalSplitOutlinedIcon className="text-white" />
                    <p className="text-lg font-bold text-white tracking-wide">Projects</p>
                </nav>
                <section>

                    <section className='w-full flex my-2 justify-between items-center'>
                       
                        <h1 className='text-2xl font-bold mx-4 md:mx-10 text-indigo-700 mb-1'>All Projects</h1>
                    
                        <button className='flex items-center bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl shadow-lg h-fit p-2 px-4 mx-4 md:mx-10 cursor-pointer transition hover:scale-105 hover:from-indigo-600 hover:to-blue-600' >
                        <AddIcon style={{ fontSize: 22, color: "white" }}  />
                        <p className='text-white text-base font-semibold ml-2  truncate'>New Project</p>
                    </button>
                    </section>
                    {/* <div className='flex flex-wrap'>
                        {["Project", "Assign", "Due Date", "Status"].map((short) => (
                            <div >

                                <button className='p-2 m-2 bg-amber-400 ' onClick={() => setIsOpen(short)}><p>{short}</p></button>
                                {short === isOpen && (
                                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                        <div className="py-1">
                                            {optionsMap[isOpen].map((option) => (
                                                <button

                                                    onClick={() => {
                                                        setSelected((prev) => [...new Set([...prev, option])]);

                                                        setIsOpen("");
                                                    }}
                                                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                        ))}


                    </div> */}
                    <div className='flex flex-wrap gap-3 p-4'>
                        {["Project", "Assign", "Due Date", "Status"].map((filter) => (
                            <div key={filter} className="relative">
                               <button
                                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 shadow-md
                                    ${isOpen === filter
                                        ? 'bg-indigo-600 text-white scale-105 shadow-lg'
                                        : 'bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 hover:from-indigo-200 hover:to-blue-200 hover:shadow-lg'}
                                    focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2`}
                                onClick={() => setIsOpen(isOpen === filter ? "" : filter)}
                            >
                                    <span>{filter}</span>
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-200 ${isOpen === filter ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {filter === isOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-56 rounded-xl shadow-xl bg-white ring-1 ring-gray-200 z-20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                        <div className="py-2">
                                            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                                                Select {filter}
                                            </div>
                                            {optionsMap[isOpen]?.map((option, index) => (
                                                <button
                                                    key={`${option}-${index}`}
                                                    onClick={() => {
                                                        setSelected((prev) => [...new Set([...prev, option])]);
                                                        setIsOpen("");
                                                    }}
                                                    className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-150 flex items-center justify-between group"
                                                >
                                                    <span className="group-hover:text-blue-700 transition-colors duration-150">
                                                        {option}
                                                    </span>
                                                    <svg
                                                        className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="mt-3 rounded">

                            <ul className="list-none flex gap-2 flex-wrap">
                                {selected.map((value) => (
                                    // <li className='p-1.5 rounded-3xl bg-blue-500 w-fit text-white font-medium text-sm flex gap-1 items-center' >
                                    //     <p>{value}</p>
                                    //     <CancelOutlinedIcon color='error' onClick={()=>{setSelected(selected.filter(item => item !== value))}}/>
                                    // </li>
                                    <li className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-medium w-fit">
                                        <p>{value}</p>
                                        <CancelOutlinedIcon
                                            onClick={() =>
                                                setSelected((prev) => prev.filter((item) => item !== value))
                                            }
                                            className="text-white hover:text-red-400 cursor-pointer transition duration-200"
                                            fontSize="small"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>







                    <div className='my-6 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden'>
                        {/* Header */}
                        <div className='grid grid-cols-3 md:grid-cols-5 gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200'>
                            <p className='text-sm font-semibold text-gray-800 uppercase tracking-wide'>Project</p>
                            <p className='text-sm font-semibold text-gray-800 uppercase tracking-wide'>Task</p>
                            <p className='hidden md:block text-sm font-semibold text-gray-800 uppercase tracking-wide'>Assignee</p>
                            <p className='hidden md:block text-sm font-semibold text-gray-800 uppercase tracking-wide'>Due Date</p>
                            <p className='text-sm font-semibold text-gray-800 uppercase tracking-wide'>Status</p>
                        </div>

                        {/* Rows */}
                        {recentprojects.map((project, index) => (
                            <div
                                key={project.id || index}
                                className="grid grid-cols-3 md:grid-cols-5 gap-4 p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
                            >
                                {/* Project Column */}
                                <div className="flex items-center space-x-3">
                                    <span className="text-2xl hidden md:block" role="img" aria-label="Project icon">
                                        {project.imogie}
                                    </span>
                                    <h3 className="text-sm font-medium text-gray-900 truncate">
                                        {project.name}
                                    </h3>
                                </div>

                                {/* Task Column */}
                                <div className="flex items-center">
                                    <p className="text-sm text-gray-700 truncate">
                                        {project.task}
                                    </p>
                                </div>

                                {/* Assignee Column (hidden on mobile) */}
                                <div className="hidden md:flex items-center space-x-2">
                                    <span className="text-xs text-gray-500">Created by</span>
                                    <TextRotationNoneOutlinedIcon className="w-4 h-4 text-gray-400" />
                                </div>

                                {/* Due Date Column (hidden on mobile) */}
                                <div className="hidden md:flex items-center">
                                    <p className="text-sm text-gray-600">
                                        {project.date}
                                    </p>
                                </div>

                                {/* Status Column */}
                                <div className="flex items-center">
                                    <span className={`
                    inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                    ${project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                            project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                                project.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-gray-100 text-gray-800'}
                `}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>













            </main >



        </>
    )
}
export default Projects