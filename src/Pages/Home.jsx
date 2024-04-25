import React, { useState } from 'react'
import Card from '../Components/Card'
import GroupCard from '../Components/GroupCard'
import TopicCard from '../Components/TopicCard'
import SponsorCard from '../Components/SponsorCard'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

function Home() {

    const [tags, setTags] = useState([]);

    const handleChange = (newTags) => {
        setTags([...{newTags}]);
    };

    return (
        <>
            <div className='flex justify-center items-center h-[88vh]'>

                {/* left side */}
                <div className='basis-1/3 flex flex-col justify-center items-center h-full mx-1 w-full'>
                    <div className='basis-4/6 bg-white rounded-lg w-full my-1'><GroupCard /></div>
                    <div className='basis-2/6 bg-white rounded-lg w-full my-1'><TopicCard /></div>
                </div>
                {/* home section */}
                <div className='basis-2/3 h-full flex flex-col px-20 rounded-lg justify-start items-center w-full overflow-scroll no-scrollbar'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}

export default Home