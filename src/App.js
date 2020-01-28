import React, { useState } from 'react';
import './App.css';
import Board from './pages/Board/Board';
import Header from './components/Header/Header';
import { useStateValue } from './store';
import CustomModal from './components/modal/Modal';

function App() {
  const [visibility, setVisibility] = useState(false);
  const showModal = () => {
    setVisibility(true);
  };

  const hideModal = () => {
    setVisibility(false);
  };

  const [_, dispatch] = useStateValue();

  return (
    <div className='App'>
      <CustomModal show={visibility} handleClose={hideModal}>
        <div className='modal-title-content'>
          <h1 className='modal-title'>
            Hr can Update profile
            <span> under DOING section</span>
          </h1>
        </div>
        <div className='desc-content'>
          <h1 className='modal-title'>Description</h1>
          <p>HR should be able to update their profile. AC: When an HR hits the update Hr endpoint with specific data, the server should be able to update the profile details of a HR personnel.</p>
        </div>

        <div className='activity-content'>
          <h1 className='modal-title'>Activity</h1>
          <div className='comment-input-holder'>
            <div className='user-tag'>DO</div>
            <textarea placeholder='write a comment' cols='90%' rows='2'></textarea>
          </div>
          <button className='btn'>save</button>

          <div className='comment-input-holder'>
            <div className='user-tag'>SO</div>
            <div className='comment-text'>
              <div className='comment-name'>
                Segun Oluwadare <span>5 minutes ago</span>
              </div>
              <p>Can you kindly update the color to red</p>
            </div>
          </div>

          <div className='comment-input-holder'>
            <div className='user-tag'>SO</div>
            <div className='comment-text'>
              <div className='comment-name'>
                Segun Oluwadare <span>5 minutes ago</span>
              </div>
              <p>Can you kindly update the color to red</p>
            </div>
          </div>
        </div>
      </CustomModal>

      <Header />
      <Board showModal={showModal} />
    </div>
  );
}

export default App;
