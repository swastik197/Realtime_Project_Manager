import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import VerticalSplitOutlinedIcon from '@mui/icons-material/VerticalSplitOutlined';
import AddIcon from '@mui/icons-material/Add';
// import '@fullcalendar/daygrid/index.css'; 
// import './calendar.css'
// import '@fullcalendar/daygrid/main.css'
function calendar() {




    return (<>
        <nav className="w-full flex gap-1 rounded-xl bg-gray-100 md:p-3">
            <VerticalSplitOutlinedIcon />
            <p>Dashboard</p>
        </nav>


        <section className='w-full flex my-2 justify-between items-center'>
            <div className='mx-2 md:mx-10'>
                <h1 className='text-xl font-medium'>Shedule Events</h1>
                <p>Here's an overview for this workspace</p>
            </div>
            <button className='flex items-center bg-black rounded-lg h-fit p-1 mx-2 md:mx-10 cursor-pointer' >
                <AddIcon style={{ fontSize: 20, padding: 1, margin: 0, color: "white" }} />
                <p className='text-white text-sm font-medium truncate'>New Event</p>
            </button>
        </section>



        <FullCalendar
        className='h-fit'
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
             height="auto"
            events={[
                { title: 'Meeting', date: '2025-06-22' },
                { title: 'Conference', date: '2025-06-22' },
            ]}
        />

    </>)





}
export default calendar