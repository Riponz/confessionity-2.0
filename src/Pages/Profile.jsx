import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { deletePost, getUserPost, getUsername, postUrl } from './../assets/baseUrl'
import { userContext } from '../App'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebaseConfig'

function Profile() {

  const [posts, setPosts] = useState([])
  const [deleted, setDeleted] = useState(false)

  const { uid, username, setUid, setEmail, setUsername, email } = useContext(userContext);

  const notify = (msg) => toast(msg, {
    theme: "light"
  });

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      setUid(currentUser.uid)
      setEmail(currentUser.email)
      const res = await axios.get(`${getUsername}${currentUser.uid}`)
      setUsername(res.data)
      console.log(res.data)
    })
  }, [])

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.post(getUserPost, {
        uid: uid,
      })
      console.log("test")
      setPosts(res.data)
    }
    getPosts()
  }, [uid, deleted])

  const handleDelete = (id) => {
    axios.delete(`${deletePost}${id}`)
      .then((res) => {
        notify(res.data.message)
        setDeleted(!deleted)
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      {/* <Navbar /> */}
      <ToastContainer />
      <section className='w-full h-[88vh] mt-[10.5rem] md:mt-20 py-1 flex flex-col md:flex-row justify-center items-center'>
        <div className='w-[90%] md:w-full rounded-lg p-4 h-full flex flex-col justify-evenly items-center bg-white m-3 basis-1/3 '>

          {uid ? (<div className='w-full h-full basis-2/3 flex flex-col justify-evenly items-center'>
            <div className="info w-full flex justify-evenly items-center">
              <div className='font-bold text-black text-base sm:font-semibold lg:font-bold sm:text-base lg:text-2xl'>{username}</div>
            </div>

            <div className="email text-base font-bold sm:text-lg sm:font-semibold lg:text-xl lg:font-bold">{email}</div>
          </div>) : ""}

          <div className='text-lg sm:text-lg lg:text-xl font-bold lg:font-bold basis-1/3 flex flex-col sm:flex-row md:flex-col xl:flex-row justify-center items-center'> <div>Your Anonymity,</div><div>Our <span className='text-[#B2A4FF]'>&nbsp;Responsibility</span></div></div>


        </div>
        <div className='userpost w-full h-[87vh] px-8 sm:px-20 basis-2/3'>
          <div className='h-full py-5 px-3 rounded-lg overflow-scroll no-scrollbar'>

            {uid ? (
              posts?.slice(0).reverse().map((post) => {
                return (<div className='w-full bg-white border-2 border-[#cbc3fa] shadow-lg rounded-lg my-2 p-2 flex flex-col sm:flex-row justify-center items-center'>
                  <Card key={post._id} username={post.username} content={post.content} time={post.date} id={post._id} />
                  <button onClick={() => { handleDelete(post._id) }} className='bg-red-500 rounded-lg py-2 px-4'>Delete</button>
                </div>
                )
              })) : (<div className='font-bold text-2xl w-full h-full flex justify-center items-center'>Please login!</div>)
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile