import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './Home.css'
const Home = () => {
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const joinRoom = () => {
    if (roomId && username) {
      navigate(`/docs/${roomId}?username=${username}`);
    } else {

    }
  };

  const createNewRoom = () => {
    const newRoomId = uuid();
    navigate(`/docs/${newRoomId}`);
  };

  return (
    <div className='homeWrapper'>
      <div className='formWrapper'>
        <h1>Welcome to CollabEdit</h1>
        <h4 className='mainLabel'>Paste Invite RoomId</h4>
        <div className='inputGroup'>
          <input
            type="text"
            className='inputBox'
            placeholder='Room Id'
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <input
            type="text"
            className='inputBox'
            placeholder='UserName'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button className='btn joinBtn' onClick={joinRoom}>
            Join
          </button>
          <span className='createInfo'>
            If you don't have an invite, then create&nbsp;
            <button className='createBtn' onClick={createNewRoom}>
              new room
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;