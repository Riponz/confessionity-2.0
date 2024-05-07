import React, { useContext, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addGroupPost } from './../assets/baseUrl'
import axios from 'axios'
import { userContext } from '../App';

function GroupPost({ gid, username }) {

    const { setReload, reload, uid, groups, setGroups, setUid, setEmail, setUsername, email } = useContext(userContext);

    const [content, setContent] = useState('')
    const [topic, setTopic] = useState('')
    const notify = () => toast.success("upload successfull", {
        theme: "light"
    });



    const handleSend = async () => {
        const res = await axios.post(addGroupPost, {
            username: username,
            content: content,
            gid: gid,
        })
        setReload(!reload)
        notify()
    }



    return (
        <>
            <ToastContainer />
            <section className='w-full rounded-lg my-1 flex justify-evenly items-center bg-white py-6'>
                {console.log(username)}
                <textarea onChange={(e) => { setContent(e.target.value) }} name="" id="" className='bg-[#e5e7eb] outline-none rounded-xl w-[80%] p-4 mb-3' placeholder='your content goes here...' rows={5} />
                {/* <input type="text" className='bg-blue-300 w-[80%]' placeholder='type your content...' /> */}
                <div className='cursor-pointer m-4' onClick={handleSend}>
                    <SendIcon />
                </div>
            </section>
        </>
    )
}

export default GroupPost