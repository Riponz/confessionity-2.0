import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { specGroup } from '../assets/baseUrl';
import GroupPost from './GroupPost';
import { userContext } from '../App';
import Navbar from './Navbar';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

function GroupPage() {

    const [gDetails, setGDetails] = useState()


    const { setReload, reload, uid, setUsername, setUid, setEmail, username } = useContext(userContext);

    useEffect(() => {
        onAuthStateChanged(auth, async (currentUser) => {
            setUid(currentUser.uid)
            setEmail(currentUser.email)
            const res = await axios.get(`${getUsername}?uid=${currentUser.uid}`)
            setUsername(res.data)
        })

    }, [])

    const params = useParams();
    const id = params.gid;

    useEffect(() => {
        axios.get(`${specGroup}${id}`)
            .then(res => {
                setGDetails(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            {/* <Navbar /> */}
            <div className='px-4'>
                <div className='w-full  bg-white mt-[10.5rem] md:mt-20 h-max flex flex-col my-1  rounded-lg py-5 justify-start items-center'>
                    <div className="name font-bold text-xl">{gDetails?.name}</div>
                    <div className='members my-2 text-sm'>{gDetails?.members.length} members</div>
                    <div className="info text-base mt-1 w-[25rem] text-center">{gDetails?.bio}</div>
                </div>
                <GroupPost gid={id} username={username} />

                {
                    gDetails?.posts.map((post) => {
                        return (
                            <Card key={post._id} username={post.username} content={post.content} time={post.date} id={post._id} />
                        )
                    })
                }
            </div>

        </>
    )
}

export default GroupPage