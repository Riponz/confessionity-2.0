import React, { useState } from 'react'
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'






function Test() {
    const [recordState, setrecordState] = useState(null);
    const [audio, setAudio] = useState();

    const handleStart = () => {
        setrecordState(RecordState.START);
    }

    const handleStop = () => {
        setrecordState(RecordState.STOP);
    }

    const onStop = (audioData) => {
        // console.log('audioData', audioData)
        setAudio(audioData);
    }


    return (
        <div>
            <AudioReactRecorder state={recordState} onStop={onStop} />

            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            {console.log(audio)}
            <audio src={audio?.url} controls />

        </div>
    )
}

export default Test