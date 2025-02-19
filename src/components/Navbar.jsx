import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { SessionContext } from '../contexts/sessionContext/SessionContext'

const Navbar = () => {

    const navigate = useNavigate()
    const { session, logOut } = useContext(SessionContext);

    const handleDownload = () => {
        window.open('https://open.spotify.com/download', '_blank')
    }

    const handlePremium = () => {
        window.open('https://www.spotify.com/us/premium/', '_blank')
    }

    return (
        <>
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img onClick={() => navigate('/')} className='w-6 sm:hidden' src={assets.home_icon} alt='' />
                    <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
                    <img onClick={() => navigate(+1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
                </div>
                <div className='flex items-center gap-4'>
                    <p onClick={handlePremium} className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
                    <p onClick={handleDownload} className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
                    <div onClick={logOut} className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>
                        <img className='rounded-full' src={session.userInfo.picture} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
                <p className='bg-black px-4 py-1 rounded-2xl'>Music</p>
                <p className='bg-black px-4 py-1 rounded-2xl'>Podcasts</p>
            </div>
        </>
    )
}

export default Navbar
