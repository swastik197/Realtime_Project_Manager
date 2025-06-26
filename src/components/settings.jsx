import AddIcon from '@mui/icons-material/Add';
import VerticalSplitOutlinedIcon from '@mui/icons-material/VerticalSplitOutlined';
import TextRotationNoneOutlinedIcon from '@mui/icons-material/TextRotationNoneOutlined';

function settings() {
    return (
        <>

            <div className="flex flex-col flex-1 ">
                <nav className="w-full flex gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-400 p-2 shadow-md mb-6 items-center">
                    <VerticalSplitOutlinedIcon className="text-white" />
                    <p className="text-lg font-bold text-white tracking-wide">Settings</p>
                </nav>
                <section className="flex flex-col gap-6 max-w-2xl w-full mx-auto">
                <div className="flex items-center gap-3 bg-white rounded-2xl shadow-lg p-6">
                    <TextRotationNoneOutlinedIcon style={{ fontSize: 40, color: "#fff", background: "#22223b", borderRadius: 8, padding: 6 }} />
                    <div>
                        <h1 className="text-xl font-bold text-indigo-700">Engineering Core</h1>
                        <p className="text-gray-500">Free</p>
                    </div>
                </div>
                <form className="bg-white rounded-2xl shadow-lg p-6 space-y-8">
                    <h2 className="text-xl font-bold text-indigo-700 mb-2">Workspace Settings</h2>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <label className="text-lg font-medium text-gray-700">Notifications</label>
                        <div className="flex items-center">
                            <label className="relative inline-block w-14 h-8 cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <span className="absolute left-1 top-1 w-6 h-6 bg-gray-300 rounded-full transition peer-checked:translate-x-6 peer-checked:bg-indigo-500"></span>
                                <span className="block w-full h-full bg-gray-200 rounded-full peer-checked:bg-indigo-600 transition"></span>
                            </label>
                            <span className="ml-3 text-gray-500 text-sm">Enable notifications</span>
                        </div>
                    </div>
                    <div>
                        <label className="block text-md font-medium text-gray-700 mb-1">Workspace Name</label>
                        <input
                            type="text"
                            placeholder="Engineering Core"
                            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                        />
                    </div>
                    <div>
                        <label className="block text-md font-medium text-gray-700 mb-1">Workspace Description</label>
                        <textarea
                            placeholder="Description about the workspace..."
                            className="w-full h-28 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                        />
                    </div>
                    <div className="flex flex-row-reverse">
                        <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg font-semibold shadow hover:from-indigo-600 hover:to-blue-600 transition">Update Workspace</button>
                    </div>
                </form>
            </section>

            </div>




        </>
    )
}
export default settings