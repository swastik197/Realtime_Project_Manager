
import VerticalSplitOutlinedIcon from '@mui/icons-material/VerticalSplitOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AddIcon from '@mui/icons-material/Add';
import 'react-vertical-timeline-component/style.min.css';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import Overview from '../project/overview';
import Task from '../project/task';
import Files from '../project/files';
import Chat from '../project/chat';
import Announcements from '../project/announcement';
import { useState } from 'react';





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

                <nav className="w-full flex gap-1 rounded-xl bg-gray-100 md:p-3">
                    <VerticalSplitOutlinedIcon />
                    <p>Dashboard</p>
                </nav>
                <section>

                    <section className='w-full flex my-2 justify-between items-center'>
                        <div className='mx-4 md:mx-10'>
                            <h1 className='text-xl font-medium'>Tasks</h1>

                        </div>
                        <button className='flex items-center bg-black rounded-lg h-fit p-1 mx-4 md:mx-10 cursor-pointer' >
                            <AddIcon style={{ fontSize: 20, padding: 1, margin: 1, color: "white" }} />
                            <p className='text-white text-sm font-medium'>New Project</p>
                        </button>
                    </section>
                    <div className='flex flex-wrap'>
                        {["Project", "Assign", "Due Date", "Status"].map((short) => (
                            <div >

                                <button className='p-2 m-2 bg-amber-400 ' onClick={() => setIsOpen(short)}><p>{short}</p></button>
                                {short === isOpen && (
                                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                        <div className="py-1">
                                            {optionsMap[isOpen].map((option) => (
                                                <button

                                                    onClick={() => {
                                                        setSelected((prev) => ([
                                                            ...prev,
                                                            option
                                                        ]));

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


                    </div>
                    <div><div className="mt-4 p-4 bg-gray-100 rounded">
                        
                        <ul className="list-none flex gap-2 flex-wrap">
                            {selected.map((value) => (
                                <li className='p-1.5 rounded-3xl bg-blue-500 w-fit text-white font-medium text-sm flex gap-1 items-center' >
                                    <p>{value}</p>
                                    <CancelOutlinedIcon color='error' onClick={()=>{setSelected(selected.filter(item => item !== value))}}/>
                                </li>
                            ))}
                        </ul>
                    </div></div>


                </section>













            </main >



        </>
    )
}
export default Projects