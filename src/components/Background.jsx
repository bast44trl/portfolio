import React from 'react';
import './background.scss';
import videoBg from '../assets/video-bg-2.mp4'

const Background = () => {
    return (
        <div className='full-screen'>
            <video className='video' autoPlay loop muted>
                <source src={videoBg} type='video/mp4'/>
            </video>
        </div>
    );
};

export default Background;