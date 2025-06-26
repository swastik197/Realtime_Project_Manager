import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import VerticalSplitOutlinedIcon from '@mui/icons-material/VerticalSplitOutlined';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
// import '@fullcalendar/daygrid/index.css'; 
// import './calendar.css'
// import '@fullcalendar/daygrid/main.css'
function calendar() {

const [showModal, setShowModal] = useState(false);


    return (<>
       <nav className="w-full flex gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-400 p-2 shadow-md mb-6 items-center">
                    <VerticalSplitOutlinedIcon className="text-white" />
                    <p className="text-lg font-bold text-white tracking-wide">Calendar</p>
                </nav>
            <section className='w-full flex my-2 justify-between items-center'>
                <div className='mx-2 md:mx-10'>
                    <h1 className='text-2xl font-bold text-indigo-700 mb-1'>Schedule Events</h1>
                    <p className="text-gray-500">Here's an overview for this workspace</p>
                </div>
                <button
                    className='flex items-center bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl shadow-lg h-fit p-2 px-4 mx-2 md:mx-10 cursor-pointer transition hover:scale-105 hover:from-indigo-600 hover:to-blue-600'
                    onClick={() => setShowModal(true)}
                >
                    <AddIcon style={{ fontSize: 20, color: "white" }} />
                    <p className='text-white text-base font-semibold ml-2 truncate'>New Event</p>
                </button>
            </section>
            <div className="bg-white rounded-2xl shadow-lg p-4">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={[
                        { title: 'Meeting', date: '2025-06-22' },
                        { title: 'Conference', date: '2025-06-22' },
                    ]}
                    height={600}
                />
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
                        <button
                            className="absolute top-3 right-3 text-gray-400 hover:text-black text-2xl font-bold"
                            onClick={() => setShowModal(false)}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-bold mb-4 text-indigo-700">Create New Event</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Event Title</label>
                                <input type="text" className="w-full border p-2 rounded mt-1" placeholder="Event Title" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Date</label>
                                <input type="date" className="w-full border p-2 rounded mt-1" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea className="w-full border p-2 rounded mt-1" placeholder="Event Description" />
                            </div>
                            <button type="button" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-2 rounded-xl shadow hover:from-indigo-600 hover:to-blue-600 w-full font-semibold" disabled>
                                Create (Coming Soon)
                            </button>
                        </form>
                    </div>
                </div>
            )}
    </>)





}
export default calendar