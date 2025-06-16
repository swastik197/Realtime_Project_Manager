import AddIcon from '@mui/icons-material/Add';
import VerticalSplitOutlinedIcon from '@mui/icons-material/VerticalSplitOutlined';
import TextRotationNoneOutlinedIcon from '@mui/icons-material/TextRotationNoneOutlined';

function settings() {
    return (
        <>

            <div className="flex flex-col flex-1 ">
                <nav className="w-full flex gap-1 rounded-xl bg-gray-100 md:p-3">
                    <VerticalSplitOutlinedIcon />
                    <p>Settings</p>
                </nav>
                <section className='flex gap-4 flex-col my-2 w-auto md:mx-40 '>

                    <div className='mx-2 flex gap-2 items-center '>
                        <TextRotationNoneOutlinedIcon style={{ fontSize: 40, padding: 1, margin: 0, color: "white", background: "black", borderRadius: 5 }} />
                        <div>

                            <h1 className='text-xl font-medium'>Engieneering Core</h1>
                            <p>Free</p>
                        </div>
                    </div>
                    <form action="" className='w-full space-y-6 my-1 '>
                        <h1 className='text-xl font-medium my-2'>Workspace settings</h1>
                        <div className='w-full flex justify-between items-center'>
                            <p className='text-xl font-medium my-2 '>Notifications</p>
                            <div className='md:mx-20'>


                               
                                <label
                                    class="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-gray-900"
                                >
                                    <input class="peer sr-only" id="AcceptConditions" type="checkbox" />
                                    <span
                                        class="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
                                    ></span>
                                </label>
                            </div>
                        </div>

                        <div>

                            <p className='text-lg font-medium'>Edit workspace</p>
                            <div className='w-full h-[2px] bg-gray-200'></div>
                        </div>
                        <div>
                            <p className='text-md font-medium my-2'>Workspace name</p>
                            <input
                                type="text"
                                placeholder="Engieneering Core"
                                className="w-1/2 border p-2 rounded"
                            />
                        </div>
                        <div>
                            <p className='text-md font-medium my-2'>Workspace description</p>
                            <textarea
                                placeholder="Description about the workspace bla bla bla.."
                                className="w-full h-28 border p-2 rounded"
                            />   </div>
                        <div className='w-full flex flex-row-reverse'><button className='p-2 bg-black text-white rounded-lg'>Update Workspace</button></div>
                    </form>

                </section>

            </div>




        </>
    )
}
export default settings