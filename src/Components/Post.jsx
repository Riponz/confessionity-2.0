import React, { useContext, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addPostUrl } from './../assets/baseUrl'
import axios from 'axios'
import { userContext } from '../App';

function Post() {

    const { setReload, reload, uid, username } = useContext(userContext);

    const [content, setContent] = useState('')
    const [topic, setTopic] = useState('')
    const notify = (msg) => toast(msg, {
        theme: "light"
    });



    const handleSend = async () => {
        if(!content){
            notify("write content before you post")
        }else{
            const { data } = await axios.post(addPostUrl, {
                username: username,
                uid: uid,
                content: content,
                topic: topic
            })
            setTopic("")
            setContent("")
            // console.log(res, " post")
            setReload(!reload)
            notify(data.message)
        }
        
    }



    return (
        <>
            <section className='w-full rounded-lg my-1 flex flex-col justify-evenly items-center bg-white py-6'>
                <ToastContainer />
                <textarea onChange={(e) => { setContent(e.target.value) }} value={content} name="" id="" className='bg-[#e5e7eb] outline-none rounded-xl w-[80%] p-2 mb-3' placeholder='your content goes here...' rows={5} />
                {/* <input type="text" className='bg-blue-300 w-[80%]' placeholder='type your content...' /> */}
                <div className="tags w-[80%] flex justify-evenly items-center">
                    <input onChange={(e) => { setTopic(e.target.value) }} value={topic} type="text" className='bg-[#e5e7eb] outline-none rounded-xl w-[90%] p-2' placeholder='tags' />
                    <div className='cursor-pointer' onClick={handleSend}>
                        <SendIcon />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Post