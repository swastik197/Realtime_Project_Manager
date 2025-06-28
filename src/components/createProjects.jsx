import EmojiPicker from 'emoji-picker-react';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





export default function CreateProject({ isOpen, onClose }) {

    const [imogie, setImogie] = useState('👽');
    const [showPicker, setShowPicker] = useState(false);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onEmojiClick = (emojiData) => {
        setImogie(emojiData.emoji);
        setShowPicker(false);
    };

    //submit create projectform
    async function submitCreateProject(e) {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/api/createproject', {
                name: title,
                description,
                imogie
            });

            const createdProject = res.data.project;
            navigate(`/project/${createdProject.name}`);

            
        } catch (err) {
            console.log(err)
        }
        onClose()
    }

    //handle close of form

    function handleClose() {
        setTitle('');
        setDescription('');
        setImogie('👽');
        onClose()
    }


    const navigate = useNavigate();

    if (!isOpen) return null;
    return (
        <div className="w-full  ">
            <div className="fixed inset-0  bg-[rgba(0,0,0,0.8)] flex items-center justify-center z-50">
                <div className="bg-white mx-2 p-6 rounded-xl shadow-xl relative">
                    <CreateProject />
                    <h2 className="text-xl font-bold">Create New Project</h2>
                    <p>Organise and manage Tasks, resource and team collabration</p>
                    <div className="w-11/12 h-[2px] bg-gray-200"></div>
                    <form className="space-y-4" onSubmit={submitCreateProject}>
                        <div className='bg-gray-300 w-fit my-3 p-2 rounded-2xl'>


                            {/* <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message"
                            className="border p-2 w-full rounded"
                        /> */}
                            <button onClick={(e) => {
                                e.preventDefault();
                                setShowPicker(!showPicker)
                            }} className=' p-4 cursor-pointer space-y-2 bg-gray-300'>
                                <p className='text-4xl'>{imogie}</p>
                                <p>Select imogie</p>
                            </button>

                            {showPicker && (
                                <div className="absolute  z-50">
                                    <EmojiPicker onEmojiClick={onEmojiClick} />
                                </div>
                            )}
                        </div>



                        <div>

                            <p>Project title</p>
                            <input
                                onChange={() => { setTitle(e.target.value) }}
                                type="text"
                                value={title}
                                placeholder="Website redesign"
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>


                        <div>
                            <p>Project description</p>
                            <textarea
                                onChange={() => { setDescription(e.target.value) }}
                                value={description}
                                placeholder="Description"
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>


                        <button
                            type="submit"
                            className="bg-black text-white px-4 py-2 w-fit rounded"
                        >
                            Create
                        </button>

                    </form>
                    <button
                        onClick={handleClose}
                        className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer "
                    >
                        ✖
                    </button>
                </div>
            </div>
        </div>
    );
}




