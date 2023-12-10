import { useState, useEffect, useRef } from 'react';
import Pot from 'assets/pot.svg';
import Mushrooms from 'assets/Mushrooms.svg';
import './Cooking.css';

const initTime = 5;
const ingredient = 'Mushroom';
const contentList = [
    `You add a ${ingredient} to the pot!`,
    'The timer has been paused.',
];

const Cooking = () => {
    const [targetTime, setTargetTime] = useState(initTime * 60);
    const [contentIndex, setContentIndex] = useState(0);
    const [isFaceUp] = useState(false);
    // const [isFaceUp, setIsFaceUp] = useState(false);
    
    const aaRef = useRef(-1);
    const bbRef = useRef(-1);
    const ggRef = useRef(-1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isFaceUp && targetTime > 0) {
                setTargetTime((prevTime) => prevTime - 1);
            }
        }, 1000);

        if (targetTime === 0) {
            setContentIndex(1);
            clearInterval(intervalId);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [targetTime, isFaceUp]);

    const formatTime = (timeInSeconds: number) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    useEffect(() => {
        const handleOrientationChange = (event: DeviceOrientationEvent) => {
            const alpha = event.alpha || 0;
            const beta = event.beta || 0;
            const gamma = event.gamma || 0;

            console.log('Alpha:', alpha);
            console.log('Beta:', beta);
            console.log('Gamma:', gamma);

            aaRef.current = alpha;
            bbRef.current = beta;
            ggRef.current = gamma;
        };

        if (window.DeviceOrientationEvent) {
            if (!aaRef.current || !bbRef.current || !ggRef.current) {
                window.addEventListener('deviceorientation', handleOrientationChange);
            }

            return () => {
                aaRef.current = -10;
                bbRef.current = -10;
                ggRef.current = -10;
                window.removeEventListener('deviceorientation', handleOrientationChange);
            };
        } else {
            console.error('Your browser does not support device orientation.');
            aaRef.current = 10;
            bbRef.current = 10;
            ggRef.current = 10;
        }
    }, []);

    return (
        <div id="cooking">
            <span className="content" style={{ fontSize: '3.5rem', letterSpacing: '.2rem' }}>
                {targetTime >= 0 ? formatTime(targetTime) : '+' + formatTime(-targetTime)}
            </span>
            <span className="content">{contentList[contentIndex]}</span>
            <div className="cooking-img">
                <img className="cooking-ingredient" src={Mushrooms} alt="" />
                <img className="cooking-pot" src={Pot} alt="" />
                <span className="cooking-timer">30</span>
            </div>
            <span className="content" style={{ color: '#D0694B' }}>
                Turn the phone over<br />
                to start cooking
            </span>
            <span>value:{aaRef.current}/{bbRef.current}/{ggRef.current}</span>
            <div style={{ marginBlock: '1rem' }}>
                <a href="/" className="done-btn">
                    Done
                </a>
            </div>
        </div>
    );
};

export default Cooking;
