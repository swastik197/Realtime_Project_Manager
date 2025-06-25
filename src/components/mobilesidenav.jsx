import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import TextRotationNoneOutlinedIcon from '@mui/icons-material/TextRotationNoneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { Link, useLocation } from "react-router-dom";

const projects = [
    { id: 1, name: 'Website Redesign', imogie: "⚒️" },
    { id: 2, name: 'Mobile App Launch', imogie: "🙌" },
    { id: 3, name: 'Marketing Campaign', imogie: "🪲" },
    { id: 3, name: 'sponcership Campaign', imogie: "🐢" },
    { id: 3, name: 'Buiness mangement', imogie: "🐔" },
    { id: 3, name: 'Hackthon participation', imogie: "🤖" },

];

const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Projects", path: "/projects" },
    { name: "Messages", path: "/messages" },
    { name: "Calendar", path: "/calendar" },
    { name: "Settings", path: "/settings" }
];
function Topnavigation({ onCreateProjectClick }) {
    const [openSection, setOpenSection] = useState(null);

    const location = useLocation();

    return (
        <>
            <nav className="w-68 absolute  top-0 z-0 left-0 md:hidden h-full bg-gradient-to-b from-indigo-600 to-blue-500 rounded-r-3xl shadow-xl p-6 transition-all duration-300">
{/* 
                <div className="flex items-center">
                    <img src="https://t4.ftcdn.net/jpg/04/51/26/93/360_F_451269306_U5VVjfXzU2OZLyaLOKmkI73SCwBcjgvF.jpg" className="h-10 w-12" alt="" />
                    <p className="text-xl text-white">Team Aplha</p>
                </div> */}
                <div className="flex justify-between ">
                    <p className="p-1 mx-2 text-white">Workspaces</p>

                    <AddIcon style={{ fontSize: 22, cursor: "pointer", color: "#fff" }} />

                </div>
                <div className="flex justify-between">
                    {/* <img src="" alt="" /> */}
                    <div className="flex">

                        <TextRotationNoneOutlinedIcon style={{ fontSize: 35, padding: 1, margin: 8, color: "white", background: "black", borderRadius: 5 }} />
                        <div className="flex flex-col ">
                            <h1 className="text-md">Engineering Core</h1>
                            <p className="text-sm">free</p>
                        </div>
                    </div>
                    < KeyboardArrowDownOutlinedIcon style={{ fontSize: 20, padding: 1, margin: 8 }} />

                </div>


                <ul className="flex flex-col space-y-2 my-3">
                    {
                        menuItems.map((item) => (
                            <li className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer group ${location.pathname.toLowerCase().includes(item.name.toLowerCase()) ? 'bg-white/20 shadow text-white font-bold' : 'hover:bg-white/10 text-blue-100'}`} >
                                {item.name === "Dashboard" && <DashboardOutlinedIcon />}
                                {item.name === "Projects" && <TaskOutlinedIcon />}
                                {item.name === "Messages" && <ChatOutlinedIcon />}
                                {item.name === "Calendar" && <CalendarMonthOutlinedIcon />}
                                {item.name === "Settings" && <SettingsOutlinedIcon />}
                                {/* <a href="">{item.name}</a> */}
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="mx-2 w-11/12 h-[2px] bg-gray-300"></div>
                <div className="flex justify-between my-2 ">
                    <p className="text-white font-semibold">Projects</p>

                    <AddIcon onClick={onCreateProjectClick} style={{ fontSize: 22, cursor: "pointer", color: "#fff" }}  />

                </div>
                <ul className="overflow-y-auto" >
                    {
                        projects.map((project) => (
                            <li className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/10 text-blue-100 cursor-pointer transition-all" >
                                <p>{project.imogie}</p>
                                <a className="text-sm" href="">{project.name}</a>
                            </li>
                        ))
                    }
                </ul>

                <div className="flex absolute bottom-0 justify-between">
                    {/* <img src="" alt="" /> */}
                    <div className="flex">

                        <TextRotationNoneOutlinedIcon style={{ fontSize: 35, padding: 1, margin: 8, color: "white", background: "black", borderRadius: 5 }} />
                        <div className="flex flex-col ">
                            <h1 className="text-md text-white font-semibold">Swastik sahu</h1>
                            <p className="text-xs text-blue-200">sahuswastik@gmail.com</p>
                        </div>
                    </div>
                    < KeyboardArrowDownOutlinedIcon style={{ fontSize: 20, color: "#fff" }} />

                </div>



            </nav>









        </>

    )
}
export default Topnavigation