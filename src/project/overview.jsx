
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonIcon from '@mui/icons-material/Person';

import 'react-vertical-timeline-component/style.min.css';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const overview = [
  {
    name: "Total Task",
    input: 0
  },
  {
    name: "Overdue Task",
    input: 0
  },
  {
    name: "OnHold Task",
    input: 0
  },

]

const members = [
  { name: "MIke chen", degisnation: "project Manager" },
  { name: "MIke chen", degisnation: "project Manager" },
  { name: "MIke chen", degisnation: "project Manager" },
  { name: "MIke chen", degisnation: "project Manager" },
  { name: "MIke chen", degisnation: "project Manager" },
]
const timelines = [
  {
    head: "Project Initiation",
    date: "Jan 15, 2024",
    descriptiion: "Initial planning and requirement gathering phase completed"
  },
  {
    head: "Design Phase",
    date: "Feb 2, 2024",
    descriptiion: "UI/UX design mockups and system architecture finalized"
  },
  {
    head: "Development Sprint 1",
    date: "Feb 20, 2024",
    descriptiion: "Core functionality implementation and database setup"
  },
  {
    head: "Testing & QA",
    date: "Mar 10, 2024",
    descriptiion: "Comprehensive testing and bug fixes across all modules"
  },
  {
    head: "Deployment",
    date: "Mar 25, 2024",
    descriptiion: "Production deployment and user acceptance testing"
  }
]
const recentActivity = [
  { name: "Mike Uploded the new design assets", time: "4 hours ago" },
  { name: "Mike Uploded the new design assets", time: "4 hours ago" },
  { name: "Mike Uploded the new design assets", time: "4 hours ago" },
  { name: "Mike Uploded the new design assets", time: "4 hours ago" },
  { name: "Mike Uploded the new design assets", time: "4 hours ago" },

]




function Overview(){
    return(<>
    <div>
            <div className=' my-2 md:m-4 p-3 rounded-lg bg-white'>
              <h1 className='font-medium text-md'>Project Progress</h1>
              <div>
                <p className='text-sm py-2'>overall progress</p>
                <progress className='w-full ' value="60" max="100"> 32% </progress>
              </div>
              <section className=' flex gap-x-4 gap-y-2 justify-center flex-wrap w-full my-2'>
                {overview.map((item) => (
                  <div className="w-full md:w-1/4 rounded-2xl p-3 bg-white border-2 border-gray-200 shadow-sm hover:shadow-md transition">
                    <p>{item.name}</p>
                    <p className='text-3xl font-semibold'>{item.input}</p>
                  </div>
                ))}
              </section>
            </div>
            <div className='flex gap-3 md:m-4 m-1 justify-between flex-wrap'>


              <div className='w-full md:w-auto max-h-96 overflow-y-auto flex-1 rounded-lg p-4 bg-white'>
                <h1>Recent Activity</h1>
                <div>{
                  recentActivity.map((activity) => (
                    <div className='flex gap-1 m-2 items-center'>
                      <AttachFileIcon />
                      <div>
                        <h1>{activity.name}</h1>
                        <p className='text-sm text-gray-700'>{activity.time}</p>
                      </div>
                    </div>
                  ))}</div>

              </div>



              <div className='w-full  max-h-96 overflow-y-auto md:w-1/2 p-4 rounded-lg  bg-white' >
                <div className='flex justify-between'><h1>Team Members</h1>
                  <PeopleAltOutlinedIcon />
                </div>
                {members.map((member) => (
                  <div className='flex my-2 justify-between items-center w-full'>
                    <div className='flex items-center gap-2'>
                      <PersonIcon style={{ borderRadius: 20, backgroundColor: "gray", padding: 4, margin: 1 }} />
                      <div>
                        <h1>{member.name}</h1>
                        <p className='text-sm text-gray-600'>{member.degisnation}</p>
                      </div>
                    </div>
                    <div className='p-1 rounded-xl bg-green-200 w-fit h-fit'>online</div>
                  </div>
                ))}
              </div>

            </div>

            <div className='w-full md:m-4 rounded-lg my-3  md:w-auto p-4  bg-white' >
              <h1>Project timeline</h1>
              {timelines.map((elem) => (
                <div className='flex m-2 h-fit gap-2'>
                  <div className='flex flex-col items-center'>

                    <div className='h-4 w-4 rounded-2xl bg-green-400'></div>
                    
                    <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>
                  </div>
                  <div>
                    <h1>{elem.head}</h1>
                    <p className='text-sm'>{elem.date}</p>
                    <p className='text-xs'>{elem.descriptiion}</p>
                  </div>
                </div>))}
            </div>





          </div>
          </>)
}
export default Overview