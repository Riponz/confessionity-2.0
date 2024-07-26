import React, { useContext, useEffect, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addPostUrl } from './../assets/baseUrl'
import axios from 'axios'
import { userContext } from '../App';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import MicIcon from '@mui/icons-material/Mic';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import e from 'cors';

function Post() {

    const { setReload, reload, uid, username } = useContext(userContext);

    const [content, setContent] = useState('')
    const [topic, setTopic] = useState('')
    const [audioUrl, setAudioUrl] = useState('')
    const notify = (msg) => toast(msg, {
        theme: "light"
    });
    const [recordState, setrecordState] = useState(null);

    useEffect(() => {

    }, [recordState])


    const [recordBtn, setrecordBtn] = useState('false');
    const [audio, setAudio] = useState();

    const handleStart = () => {
        setrecordBtn('true')
        setrecordState(RecordState.START);
    }

    const handleStop = async () => {
        setrecordBtn('hold')
        setrecordState(RecordState.STOP);
        
        const response = await fetch(audio?.url);
        const blob = await response.blob();
        console.log(response, " response")
        console.log(blob, " blob")

        const objectUrl = await URL.createObjectURL(blob);
        // console.log(objectUrl, " objectUrl")
        // console.log(typepf(objectUrl), " objectUrl")
        setAudioUrl(objectUrl);
    }

    const handleDelete = (e) => {
        e.stopPropagation()
        // notify("testtttt")
        setrecordBtn('false')
        setrecordState(null);
        setAudio();
    }

    const onStop = (audioData) => {
        // console.log('audioData', audioData)
        setAudio(audioData);
    }



    const handleSend = async () => {
        if (!content) {
            notify("write content before you post")
        } else {
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
                <textarea onChange={(e) => { setContent(e.target.value) }} value={content} spellCheck autoCorrect={true} autoComplete={false} className='bg-[#e5e7eb] outline-none rounded-lg w-[80%] p-4 mb-3' placeholder='your content goes here...' rows={5} />
                {/* <input type="text" className='bg-blue-300 w-[80%]' placeholder='type your content...' /> */}

                {/* voice recorder section */}
                <div className="tags w-[80%] flex flex-col lg:flex-row justify-evenly items-center mb-3">
                    <div className="wave bg-[#e5e7eb] flex justify-center items-center outline-none rounded-lg w-full lg:w-[90%] h-[3rem] p-3 overflow-hidden">
                        <div className={recordBtn == 'false' ? "hidden" : ""}>
                            <AudioReactRecorder className='bg-amber-700' state={recordState} onStop={onStop} backgroundColor='rgb(229,231,235)' canvasHeight={24} canvasWidth={800} />
                        </div>
                    </div>
                    <div className='cursor-pointer w-full lg:w-max flex justify-center bg-gradient-to-r from-violet-200 to-indigo-100 rounded-lg m-3 lg:m-0 lg:ml-3 p-3 items-center' onClick={recordState ? (handleStop) : (handleStart)}>
                        {console.log(audio)}
                        {recordBtn == 'false' ? (<MicIcon />) : (
                            recordBtn == 'true' ? (<StopCircleIcon />) : (<div onClick={handleDelete}>
                                <HighlightOffIcon />
                            </div>
                            )
                        )}
                    </div>
                </div>
                <audio className='w-[80%] mb-3' src="blob:http://localhost:5173/a724977c-dcdd-4e41-8d51-2cc935a80d95" controls />
                {console.log(audioUrl)}

                {
                    audio ? (<audio className='w-[80%] mb-3' src={audio?.url} controls />) : (" ")
                }

                <div className="tags w-[80%] flex flex-col lg:flex-row justify-evenly items-center">
                    <input onChange={(e) => { setTopic(e.target.value) }} value={topic} type="text" className='bg-[#e5e7eb] outline-none rounded-lg w-full lg:w-[90%] p-3' placeholder='tags ( max 3 tags separated by spaces)' />
                    <div className='cursor-pointer w-full lg:w-max flex justify-center bg-gradient-to-r from-violet-200 to-indigo-100 rounded-lg m-3 lg:m-0 lg:ml-3 p-3 items-center' onClick={handleSend}>
                        <SendIcon />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Post