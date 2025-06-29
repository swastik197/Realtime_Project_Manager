import AddIcon from '@mui/icons-material/Add';

import PersonIcon from '@mui/icons-material/Person';

import 'react-vertical-timeline-component/style.min.css';

import TaskIcon from '@mui/icons-material/Task';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import UploadIcon from '@mui/icons-material/Upload';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

const getStatusColor = (status) => {
  const colors = {
    'pending': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'in-progress': 'bg-blue-100 text-blue-800 border-blue-200',
    'in-review': 'bg-purple-100 text-purple-800 border-purple-200',
    'completed': 'bg-green-100 text-green-800 border-green-200',
    'scheduled': 'bg-indigo-100 text-indigo-800 border-indigo-200'
  };
  return colors[status] || colors['pending'];
};
const statusOptions = [
  "pending",
  "in-progress",
  "in-review",
  "completed",
  "scheduled"
];

const teamMembers = [
  "Alex Thompson",
  "Sarah Lee",
  "Michael Chen",
  "Priya Patel",
  "James Walker",
  "Emily Davis",
  "David Johnson",
  "Nina Rodriguez",
  "Oliver King",
  "Sophia Kim"
];


function Task() {
  const [showCreateTask, setShowCreateTask] = useState(false);

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [taskForm, setTaskForm] = useState({
    name: '',
    dueDate: '',
    assignedPerson: '',
    status: 'pending'
  });
  const [searchtask, setsearchtask] = useState('')

  const { name } = useParams()
  useEffect(() => {
    fetchTasks();
  }, [name]);
  useEffect(() => {
    if (searchtask.trim() !== "") {
      findtask();
    } else {
      fetchTasks()
    }
  }, [searchtask])




  async function fetchTasks() {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/api/projectDetails/${name}`)
      setTasks(res.data.tasks || []);
    } catch (err) {
      console.log(err)
      setError('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  }



  function handleInputChange(e) {
    const { name, value } = e.target;
    setTaskForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  async function findtask() {
    try {

      setLoading(true);
      const res = await axios.get(`http://localhost:5000/api/findtask/${name}?title=${searchtask}`)
     
      setTasks(res.data.matchedTasks || []);
      setLoading(false);

    } catch (err) {
      console.log(err)
      setError('Failed to load tasks');
    }
  }



  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/api/createtask/${name}`, {
        title: taskForm.name,
        dueDate: taskForm.dueDate,
        assignedPerson: taskForm.assignedPerson,
        status: taskForm.status
      });
      console.log('Task created successfully:', res.data);
      await
        setShowCreateTask(false);
      setTaskForm({
        name: '',
        dueDate: '',
        assignedPerson: '',
        status: 'pending'
      });

    } catch (err) {
      console.log(err)
    }
  }




  function handleClose() {
    setShowCreateTask(false);
    setTaskForm({
      name: '',
      dueDate: '',
      assignedPerson: '',
      status: 'pending'
    });
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-600 text-2xl">⚠️</span>
          </div>
          <p className="text-red-600 font-medium">{error}</p>
        </div>
      </div>
    );
  }



  return (
    <>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-4">

            {/* Left Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
              {/* Add Task Button */}
              <button
                type="button"
                className="px-4 sm:px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl flex items-center gap-2 hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => setShowCreateTask(true)}
              >
                <AddIcon style={{ color: "white", fontSize: 20 }} />
                <span className="text-white font-semibold truncate">Add New Task</span>
              </button>

              {/* Search Input */}
              <div className="relative w-full sm:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <TaskIcon className="text-gray-400" />
                </div>
                <input
                  type="text"
                  onChange={(e) => {
                    setsearchtask(e.target.value)

                  }}
                  placeholder="Search tasks..."
                  className="pl-10 pr-4 py-3 w-full border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 bg-white shadow-sm"
                />
              </div>
            </div>

            {/* Right Section - Filter Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap gap-2">
              <button
                type="button"
                className="px-4 py-2 bg-white border-2 border-indigo-200 rounded-lg text-indigo-700 font-medium hover:bg-indigo-50 transition-colors"
              >
                All
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-white border-2 border-indigo-200 rounded-lg text-indigo-700 font-medium hover:bg-indigo-50 transition-colors"
              >
                Active
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-white border-2 border-indigo-200 rounded-lg text-indigo-700 font-medium hover:bg-indigo-50 transition-colors"
              >
                Completed
              </button>
            </div>
          </div>
        </div>





        {loading ?


          (<div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
              <p className="text-gray-600 font-medium">Loading tasks...</p>
            </div>
          </div>) :

          tasks.length === 0 ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TaskIcon className="text-indigo-600 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No tasks yet</h3>
                <p className="text-gray-500 mb-4">Get started by creating your first task</p>
                <button
                  onClick={() => setShowCreateTask(true)}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Create First Task
                </button>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
              {tasks.map((task, index) => (
                <div key={task._id || index} className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden'>
                  {/* Task Header */}
                  <div className='p-6 border-b border-gray-100'>
                    <div className='flex items-start justify-between mb-3'>
                      <h3 className='text-lg font-bold text-gray-800 leading-tight group-hover:text-indigo-600 transition-colors'>
                        {task.title || task.name}
                      </h3>
                      <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <MoreVertIcon className="text-gray-400 hover:text-gray-600" />
                      </button>
                    </div>

                    {/* Status Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(task.status)}`}>
                      <div className={`w-2 h-2 rounded-full mr-2 ${task.status === 'completed' ? 'bg-green-500' :
                        task.status === 'in-progress' ? 'bg-blue-500' :
                          task.status === 'in-review' ? 'bg-purple-500' :
                            task.status === 'scheduled' ? 'bg-indigo-500' : 'bg-yellow-500'
                        }`}></div>
                      {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                    </div>
                  </div>

                  {/* Task Details */}
                  <div className='p-6 space-y-4'>
                    <div className='flex items-center gap-3'>
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full flex items-center justify-center">
                        <PersonIcon className="text-indigo-600 text-sm" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Assigned to</p>
                        <p className="text-sm font-semibold text-gray-800">{task.assignedPerson}</p>
                      </div>
                    </div>

                    <div className='flex items-center gap-3'>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
                        <CalendarMonthIcon className="text-green-600 text-sm" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Due date</p>
                        <p className="text-sm font-semibold text-gray-800">{task.dueDate || task.duedate}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className='flex gap-2 pt-2'>
                      <button className='flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg'>
                        <UploadIcon style={{ fontSize: 16 }} />
                        Upload Files
                      </button>
                      <button className='px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors'>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}







        {showCreateTask && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg mx-4 transform transition-all duration-300 scale-100">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">Create New Task</h2>
                  <p className="text-gray-500 text-sm">Add a new task to your project</p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <span className="text-gray-600 text-xl font-bold">×</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Task Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={taskForm.name}
                    onChange={handleInputChange}
                    placeholder="Enter task name"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 text-gray-800 placeholder-gray-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Due Date *
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    value={taskForm.dueDate}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 text-gray-800"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Assigned Person *
                  </label>
                  <select
                    name="assignedPerson"
                    value={taskForm.assignedPerson}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 text-gray-800 bg-white"
                    required
                  >
                    <option value="">Select a team member</option>
                    {teamMembers.map((member, index) => (
                      <option key={index} value={member}>
                        {member}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Status *
                  </label>
                  <select
                    name="status"
                    value={taskForm.status}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 text-gray-800 bg-white"
                    required
                  >
                    {statusOptions.map((status, index) => (
                      <option key={index} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 p-4 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 p-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Create Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div >
    </>)
}
export default Task