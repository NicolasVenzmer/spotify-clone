import React, { useContext } from 'react';
import { SessionContext } from '../contexts/sessionContext/SessionContext';
import SpotifyWhiteIcon from '../../public/spotify-white-icon.png';
import GoogleIcon from "../../public/google-icon.png";
import AppleIcon from "../../public/apple-icon.png";
import FacebookIcon from "../../public/facebook-icon.png";

const Login = () => {
    const { saveSession } = useContext(SessionContext);

    return (
        <div className="h-full flex items-center justify-center">
            <div className='h-[95%] w-[90%] sm:w-[50%] m-auto bg-[#121212] flex flex-col justify-evenly items-center'>
                <div className='flex flex-col gap-4 sm:gap-1 items-center sm:w-[40%]'>
                    <img className='w-10 sm:w-16' src={SpotifyWhiteIcon} alt="Spotify Logo" />
                    <p className='text-white text-xl sm:text-2xl font-bold text-center'>Sign in to Spotify</p>
                    <div className='w-full flex flex-col gap-4'>
                        <button onClick={saveSession} className='w-full flex items-center justify-center gap-2 px-6 sm:px-10 py-2 border-2 border-white rounded-full text-white'>
                            <img className='w-5 sm:w-6' src={GoogleIcon} alt="Google logo" />
                            <span>Continue with Google</span>
                        </button>
                        <button disabled className='w-full flex items-center justify-center gap-2 px-6 sm:px-10 py-2 border-2 border-white rounded-full text-white'>
                            <img className='w-5 sm:w-6' src={FacebookIcon} alt="Facebook logo" />
                            <span>Continue with Facebook</span>
                        </button>

                        <button disabled className='w-full flex items-center justify-center gap-2 px-6 sm:px-10 py-2 border-2 border-white rounded-full text-white'>
                            <img className='w-5 sm:w-6' src={AppleIcon} alt="Apple logo" />
                            <span>Continue with Apple</span>
                        </button>

                        <button disabled className='w-full flex items-center justify-center gap-2 px-6 sm:px-10 py-2 border-2 border-white rounded-full text-white'>
                            <span>Continue with phone number</span>
                        </button>
                    </div>
                </div>
                <hr className='w-[60%] sm:w-[60%]' />
                <div className='flex flex-col gap-4 sm:gap-2 items-center w-full sm:w-[40%]'>
                    <div className='w-[70%] sm:w-full flex flex-col gap-1'>
                        <p className='text-white text-sm'>Email or username</p>
                        <input className="appearance-none bg-none border-0 block transition-all duration-100 ease-in-out inline-block w-full box-border tap-highlight-transparent mb-0 rounded-md px-3 py-3 h-[38px] bg-white shadow-inner text-black" placeholder='Email or username' type="text" />
                    </div>
                    <div className='w-[70%] sm:w-full flex flex-col gap-1'>
                        <p className='text-white text-sm'>Password</p>
                        <input className="appearance-none bg-none border-0 block transition-all duration-100 ease-in-out inline-block w-full box-border tap-highlight-transparent mb-0 rounded-md px-3 py-3 h-[38px] bg-white shadow-inner text-black" placeholder='Password' type="password" />
                    </div>
                    <button disabled className='w-[70%] sm:w-full bg-[#1db954] h-[45px] rounded-full items-center justify-center font-bold text-white'>Login</button>
                    <p className='text-white underline text-sm sm:text-base'>Have you forgotten your password?</p>
                    <div className='flex gap-2'>
                        <p className='text-slate-400 text-sm sm:text-base'>Don't have an account?</p><p className='text-white underline text-sm sm:text-base'>Sign up for Spotify</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
