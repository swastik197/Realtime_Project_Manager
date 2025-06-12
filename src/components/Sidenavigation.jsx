import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import TextRotationNoneOutlinedIcon from '@mui/icons-material/TextRotationNoneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const projects = [
    { id: 1, name: 'Website Redesign', imogie: "⚒️"  },
    { id: 2, name: 'Mobile App Launch', imogie: "🙌"},
    { id: 3, name: 'Marketing Campaign', imogie: "🪲" },
    { id: 3, name: 'sponcership Campaign', imogie: "🐢" },
    { id: 3, name: 'Buiness mangement', imogie: "🐔" },
    { id: 3, name: 'Hackthon participation', imogie: "🤖" },
   
];

const menuItems = [
    {name: 'Dashboard',},
    {name: 'Task',},
    {name: 'Members',},
    {name: 'Settings',},
    {name: 'Calendar',},
];

function Topnavigation({onCreateProjectClick}) {
    const [openSection, setOpenSection] = useState(null);



    return (
        <>
            <nav className="w-60 hidden md:block h-full bg-gray-100">

                <div className="flex items-center">
                    <img src="https://t4.ftcdn.net/jpg/04/51/26/93/360_F_451269306_U5VVjfXzU2OZLyaLOKmkI73SCwBcjgvF.jpg" className="h-10 w-12" alt="" />
                    <p className="text-xl">Team Aplha</p>
                </div>
                <div className="flex justify-between ">
                    <p className="p-1 mx-2">Workspaces</p>

                    <AddIcon style={{ fontSize: 20, padding: 1, margin: 8, cursor:"pointer"}}   />

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
                            <li  className="flex items-center w-auto hover:bg-gray-200 p-1 rounded-lg mx-2 gap-1 ">
                                {item.name === "Dashboard" && <DashboardOutlinedIcon/>}
                                {item.name === "Task" && <TaskOutlinedIcon />}
                                {item.name === "Members" && <PeopleAltOutlinedIcon />}
                                {item.name === "Settings" && <SettingsOutlinedIcon />}
                                {item.name === "Calendar" && <CalendarMonthOutlinedIcon />}
                                <a href="">{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className="mx-2 w-11/12 h-[2px] bg-gray-300"></div>
                 <div className="flex justify-between ">
                    <p className="p-1 mx-2">Projects</p>

                    <AddIcon  onClick={onCreateProjectClick} style={{ fontSize: 20, padding: 1, margin: 8,cursor:"pointer",  }}  />

                </div>
                <ul className="mask-b-from-10%">
                   {
                    projects.map((project)=>(
                        <li className="flex items-center w-auto hover:bg-gray-200 p-1 rounded-lg mx-2 gap-1">
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
                            <h1 className="text-md">Swastik sahu</h1>
                            <p className="text-sm">sahuswastik@gmail.com</p>
                        </div>
                    </div>
                    < KeyboardArrowDownOutlinedIcon style={{ fontSize: 20, padding: 1, margin: 8 }} />

                </div>
                
             

            </nav>









        </>

    )
}
export default Topnavigation