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

var count = 0

const Cooking = () => {
    const [targetTime, setTargetTime] = useState(initTime * 60);
    const [contentIndex, setContentIndex] = useState(0);
    const [isFaceUp] = useState(false);
    // const [isFaceUp, setIsFaceUp] = useState(false);
    
    // const alphaRef = useRef(90);
    // const betaRef = useRef(90);
    // const gammaRef = useRef(90);

    const [alpha, setAlpha] = useState(90);
    const [beta, setBeta] = useState(90)
    const [gamma, setGamma] = useState(90)



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
            count += 1
            const alphaBuf = event.alpha || 0;
            const betaBuf = event.beta || 0;
            const gammaBuf = event.gamma || 0;
            // const alpha = event.alpha !== null && event.alpha !== undefined ? event.alpha : 0;
            // const beta = event.beta !== null && event.beta !== undefined ? event.beta : 0;
            // const gamma = event.gamma !== null && event.gamma !== undefined ? event.gamma : 0;
            
            setAlpha(alphaBuf);
            setBeta(betaBuf);
            setGamma(gammaBuf);
        };

        if (window.DeviceOrientationEvent !== undefined) {
            window.addEventListener('deviceorientation', handleOrientationChange);

            return () => {
                setAlpha(-10);
                setBeta(-10);
                setGamma(-10);

                window.removeEventListener('deviceorientation', handleOrientationChange);
            };
        } else {
            console.log('Your browser does not support device orientation.');
        }
    }, [alpha, beta, gamma]);
    // useEffect(() => {
    //     const testFunc = (event: MouseEvent) => {
    //         count += 1
            
    //     };

    //     window.addEventListener('click', testFunc);

    //     return () => {
    //         alphaRef.current = -10;
    //         betaRef.current = -10;
    //         gammaRef.current = -10;

    //         window.removeEventListener('click', testFunc);
    //     };

    // });

    return (
        <div id="cooking">
            {/* <span className="content" style={{ fontSize: '3.5rem', letterSpacing: '.2rem' }}>
                {targetTime >= 0 ? formatTime(targetTime) : '+' + formatTime(-targetTime)}
            </span> */}
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
            <span>value:{count}</span>
            <span>value:{alpha}/{beta}/{gamma}</span>
            <div style={{ marginBlock: '1rem' }}>
                <a href="/" className="done-btn">
                    Done
                </a>
            </div>
        </div>
    );
};

export default Cooking;
