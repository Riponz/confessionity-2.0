import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import GroupTopic from '../Components/GroupTopic'
import TopicCard from '../Components/TopicCard'
import 'react-tagsinput/react-tagsinput.css'
import Post from '../Components/Post'
import { postUrl, userGroup } from './../assets/baseUrl'
import axios from 'axios'
import { userContext } from '../App'
import { getUsername } from './../assets/baseUrl'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { useLocation } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'


function Home() {
    const [posts, setPosts] = useState()
    const [topics, setTopics] = useState([])
    const [search, setSearch] = useState()

    const { uid, reload, toggle, username, email, setGroups, setUsername, setEmail, setUid } = useContext(userContext);

    const location = useLocation()

    onAuthStateChanged(auth, async (currentUser) => {
        setUid(currentUser.uid)
        setEmail(currentUser.email)
        const res = await axios.get(`${getUsername}${currentUser.uid}`)
        setUsername(res.data)
    })

    useEffect(() => {
        const fetchGroups = async () => {
            const res = await axios.get(`${userGroup}${uid}`)
            console.log(res.data, "GET GROUPS HOME")
            setGroups(res.data)
        }
        fetchGroups()
    }, [uid, username, email])



    function filterRecordsByTopics(records, searchTopics) {
        return records?.filter(record => {
            return searchTopics.every(searchTopic => {
                return record.topics.some(topic => topic.includes(searchTopic));
            });
        });
    }

    const filteredPosts = filterRecordsByTopics(posts, toggle);




    useEffect(() => {
        // sleep(100000)
        const getPosts = async () => {
            const res = await axios.get(`${postUrl}`)
            setPosts(res.data)
        }
        getPosts()

    }, [reload])

    useEffect(() => {

        const allTopics = [];
        if (posts) {
            for (const row of posts) {

                if (row.topics) {

                    const rowTopics = row.topics;

                    for (const topic of rowTopics) {
                        allTopics.push(topic);
                    }
                }
            }
            const mySet = new Set(allTopics);

            // Convert Set back to array
            setTopics(Array.from(mySet))
        }
    }, [posts])

    console.log(topics, "  topics")


    return (
        <>
            <div className='flex w-full justify-center mt-[10rem] md:mt-20 items-center h-[88vh]'>

                {/* left side */}
                <div className='hidden md:flex basis-1/3 flex-col overflow-hidden justify-center items-center h-full mx-1 w-full'>
                    <div className='basis-4/6 bg-white rounded-lg w-full my-1 h-[60%] p-3'><GroupTopic /></div>
                    <div className='basis-2/6 bg-white rounded-lg w-full my-1 h-[40%]  p-5' ><TopicCard topics={topics} /></div>
                </div>
                {/* home section */}
                <div className='basis-1/1 md:basis-2/3 w-[98%] sm:w-[85%] md:w-full h-full flex flex-col px-0 sm:px-0 md:px-20 rounded-lg justify-start items-center overflow-scroll no-scrollbar'>
                    {uid ? <Post /> : ""}
                    {/* {
                        filteredPosts?.slice(0).reverse().map((post) => {
                            return (
                                <Card key={post._id} delbtn={false} username={post.username} content={post.content} time={post.date} id={post._id} />
                            )
                        })
                    } */}
                    {
                        posts ? (filteredPosts?.slice(0).reverse().map((post) => {
                            return (
                                <Card key={post._id} delbtn={false} username={post.username} content={post.content} time={post.date} id={post._id} />
                            )
                        })) : (
                            <>
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Home