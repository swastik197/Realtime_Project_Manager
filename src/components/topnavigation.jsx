import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link, useLocation } from "react-router-dom";
import Sidenavigation from './mobilesidenav';
import { useState } from "react";


function topnavigation() {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);



    return (
        <>
            <nav className="md:hidden w-full flex items-center justify-between bg-gradient-to-r from-indigo-600 to-blue-500 p-3 shadow-lg z-30 fixed top-0 left-0 right-0">
                <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className="text-white focus:outline-none">
                    {mobileNavOpen ? <CloseOutlinedIcon style={{ fontSize: 28 }} /> : < MenuOutlinedIcon style={{ fontSize: 28 }} />}
                </button>
                <div className="flex items-center gap-2">
                    <img src="https://t4.ftcdn.net/jpg/04/51/26/93/360_F_451269306_U5VVjfXzU2OZLyaLOKmkI73SCwBcjgvF.jpg" className="h-8 w-8 rounded-lg" alt="" />
                    <span className="text-lg font-bold text-white tracking-wide">Team Alpha</span>
                </div>
                <div className="flex gap-2">
                    <Link to="/messages" className="text-white"><ChatOutlinedIcon /></Link>
                    <Link to="/calendar" className="text-white"><CalendarMonthOutlinedIcon /></Link>
                    <Link to="/settings" className="text-white"><SettingsOutlinedIcon /></Link>
                </div>
            </nav>
            {/* {mobileNavOpen && (<div
                className="fixed inset-0 top-16 bg-black/30 z-40"
                onClick={() => setMobileNavOpen(false)} // Click outside = close
            >
                <div
                     className="bg-white w-64 h-full shadow-lg transform transition-transform duration-300 translate-x-0"
                    onClick={(e) => e.stopPropagation()} // Click inside = don't close
                >
                    <Sidenavigation onClose={() => setMobileNavOpen(false)} />
                </div>
            </div>)} */}


            <div
                className={`fixed inset-0 top-[56px] bg-black/30 z-40 transition-opacity duration-300
    ${mobileNavOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
  `}
                onClick={() => setMobileNavOpen(false)} // Click outside = close
            >
                <div
                    className={`bg-white w-64 h-full shadow-lg transform transition-transform duration-300
      ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full'}
    `}
                    onClick={(e) => e.stopPropagation()} // Click inside = don't close
                >
                    <Sidenavigation onClose={() => setMobileNavOpen(false)} />
                </div>
            </div>

        </>
    )
}
export default topnavigation