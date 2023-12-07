import React, { useState, useEffect } from 'react';
import Pot from 'assets/pot.svg'
import Mushrooms from 'assets/Mushrooms.svg'
import './Cooking.css'

const initTime = 5
const ingredient = "Mushroom"
const contentList = [`You add a ${ingredient} to the pot!`,
                    "The timer has been paused.",]

const Cooking = () => {
    const [targetTime, setTargetTime] = useState(initTime * 60); // 5 min => 5*60 sec
    const [contentIndex, setContentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTargetTime((prevTime) => prevTime - 1);
        }, 1000);

        if (targetTime === 0) {
            setContentIndex(1);
            // clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [targetTime]);

    const formatTime = (timeInSeconds: number) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div id="cooking">
            <span className='content' style={{ fontSize: '3.5rem', letterSpacing: '.2rem' }}>
                {targetTime >= 0 ? formatTime(targetTime) : '+' + formatTime(-targetTime)}
            </span>
            <span className='content'>{contentList[contentIndex]}</span>
            <div className='cooking-img'>
                <img className="cooking-ingredient" src={Mushrooms} alt="" />
                <img className="cooking-pot" src={Pot} alt="" />
                <span className="cooking-timer">30</span>
            </div>
            <span className='content' style={{ color: '#D0694B' }}>Turn the phone over<br />to start cooking</span>
            <div style={{ marginBlock: '1rem' }}>
                <a href="/" className='done-btn'>Done</a>
            </div>
        </div>
    );
};


export default Cooking
