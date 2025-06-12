import EmojiPicker from 'emoji-picker-react';
import React, { useState } from 'react';
export default function CreateProject() {

    const [input, setInput] = useState('👽');
    const [showPicker, setShowPicker] = useState(false);

    const onEmojiClick = (emojiData) => {
        setInput(emojiData.emoji);
        setShowPicker(false);
    };



    return (
        <div className="w-full  ">
            <h2 className="text-xl font-bold">Create New Project</h2>
            <p>Organise and manage Tasks, resource and team collabration</p>
            <div className="w-11/12 h-[2px] bg-gray-200"></div>
            <form className="space-y-4">
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
                        <p className='text-4xl'>{input}</p>
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
                        type="text"
                        placeholder="Website redesign"
                        className="w-full border p-2 rounded"
                    />
                </div>


                <div>
                    <p>Project description</p>
                    <textarea
                        placeholder="Description"
                        className="w-full border p-2 rounded"
                    />
                </div>


                <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 w-fit rounded"
                >
                    Create
                </button>

            </form>
        </div>
    );
}




