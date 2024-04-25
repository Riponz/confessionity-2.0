import './App.css'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Groups from './Pages/Groups'
import Profile from './Pages/Profile'

function App() {
  return (
    <>
      <div className='w-full flex justify-center bg-[#e5e7eb] mt-20 items-center'>
        <Navbar />
        <div className="main overflow-hidden border-2 sm:w-[640px] md:w-[768px] lg:w-[1024px] min-[1440px]:w-[1440px]">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='groups' element={<Groups />} />
            <Route path='profile' element={<Profile />} />
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App
