import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './contexts/playerContext/PlayerContext'
import Login from './pages/Login'
import { SessionContext } from './contexts/sessionContext/SessionContext'

const App = () => {

  const { audioRef, track } = useContext(PlayerContext)
  const { session } = useContext(SessionContext);

  return (
    <div className='h-screen bg-black items-center justify-center flex-col'>
      {!session ? (
        <Login />
      ) : (
        <>
          <div className='h-[90%] flex'>
            <Sidebar />
            <Display />
          </div>
          <Player />
          <audio ref={audioRef} src={track.file} preload='auto'></audio>
        </>
      )}
    </div>
  )
}

export default App
