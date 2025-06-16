import AddIcon from '@mui/icons-material/Add';

import PersonIcon from '@mui/icons-material/Person';

import 'react-vertical-timeline-component/style.min.css';

import TaskIcon from '@mui/icons-material/Task';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import UploadIcon from '@mui/icons-material/Upload';


const tasks = [
  { head: "Implement responsive design", person: "Alex Thompson", date: "2024-04-10", status: "in-progress" },
  { head: "Fix login authentication bug", person: "Sarah Lee", date: "2024-04-12", status: "completed" },
  { head: "Update user dashboard UI", person: "Michael Chen", date: "2024-04-15", status: "in-review" },
  { head: "Integrate payment gateway", person: "Priya Patel", date: "2024-04-17", status: "in-progress" },
  { head: "Optimize database queries", person: "James Walker", date: "2024-04-18", status: "pending" },
  { head: "Write unit tests for API", person: "Emily Davis", date: "2024-04-20", status: "in-review" },
  { head: "Setup CI/CD pipeline", person: "David Johnson", date: "2024-04-22", status: "completed" },
  { head: "Conduct user feedback session", person: "Nina Rodriguez", date: "2024-04-24", status: "scheduled" },
  { head: "Migrate legacy code to TypeScript", person: "Oliver King", date: "2024-04-26", status: "in-progress" },
  { head: "Refactor project folder structure", person: "Sophia Kim", date: "2024-04-28", status: "completed" }
]



function Task(){
    return(<>
    <div>
            <div className='flex flex-wrap justify-between items-center my-4'>
              <div className='flex h-fit  gap-2'>
                <button type="button" className='p-2 w-fit bg-blue-600 rounded-lg flex'><AddIcon style={{ color: "white" }} /><p className='text-white'>Add Task</p></button>
                <div className='border-2 flex  rounded-lg border-gray-600 items-center p-1 '>
                  <TaskIcon style={{ color: "gray" }} />
                  <input type="text" placeholder="Search tasks..." name="" id="" className="border-none focus:outline-none focus:ring-0 p-1 w-fit " />
                </div>
              </div>
              <div className='my-2 '>
                <button type="button" className='p-2 border-2 border-gray-600 rounded-lg mx-1'>All</button>
                <button type="button" className='p-2 border-2 border-gray-600 rounded-lg mx-1'>Active</button>
                <button type="button" className='p-2 border-2 border-gray-600 rounded-lg mx-1'>Completed</button>
              </div>
            </div>


            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">

              {tasks.map((task) => (
                <div className='p-3 bg-white rounded-lg '>
                  <div className='flex items-center justify-between my-3'>
                    <h1 className='text-lg'>{task.head}</h1>
                    <MoreVertIcon style={{ color: 'black' }} />
                  </div>
                  <div>
                    <div className='flex my-1 gap-2'><PersonIcon /><p>{task.person}</p></div>
                    <div className='flex my-1 gap-2'><CalendarMonthIcon /><p>{task.date}</p></div>
                  </div>
                  <div className='flex justify-between items-center my-3'>
                    <div className='py-1 px-3 bg-green-300 w-fit rounded-2xl'>{task.status}</div>
                    <button className='flex bg-purple-200 p-1 rounded-2xl'><UploadIcon /><p>Upload Task</p></button>
                  </div>


                </div>
              ))}

            </div>

          </div>
</>)
}
export default Task