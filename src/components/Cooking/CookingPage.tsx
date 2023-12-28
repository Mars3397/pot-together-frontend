import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom"
import { formatTime } from '../../utils';
import Pot from 'assets/RadPot.svg';
import Mushrooms from 'assets/Mushrooms.svg';
import Star from 'assets/Star.svg';
import './Cooking.css';

// const initTime = 5; // HINT: initTime (sec)
const ingredient = 'Mushroom';
const contentList = [
    `You add a ${ingredient} to the pot!`,
    'The timer has been paused.',
    'The ingredients are too raw...',
    `Good Job!\nYour ${ingredient} is cooked!`
];
var totalTime = 0

const CookingPage = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const initTime: number = (location.state.initTime || 0);
    const { roomId } = useParams()
    const [targetTime, setTargetTime] = useState(initTime);
    const [contentIndex, setContentIndex] = useState(0);
    const [isFinish, setIsFinish] = useState(false);
    const [isOvertime, setIsOvertime] = useState(false);
    const [beta, setBeta] = useState(90)
    const [isCounting, setIsCounting] = useState(true);
    const [countdown, setCountdown] = useState(10);

    const sendParams = () => {
        // navigate(`/room/${roomId}/cooking/done`, { state: {totalTime}})
        navigate(`/room/${roomId}/CameraCapture`, { state: {totalTime}})
    }
    useEffect(() => {
        const requestPermission = (DeviceOrientationEvent as any).requestPermission;
        
        const handleOrientationChange = (event: DeviceOrientationEvent) => {
            if (!isFinish) {
                setBeta(Math.round(event.beta || 0));

                if ((beta >= 165 && beta <= 180) || (beta <= -165 && beta >= -180)) {
                    setIsCounting(true);
                    if (contentIndex === 0) {
                        setContentIndex(1)
                    }
                } else {
                    setIsCounting(false);
                }
            }
        };

        if (typeof requestPermission === 'function') {
            requestPermission()
                .then(() => {
                    window.addEventListener('deviceorientation', handleOrientationChange);
                })
                .catch((error: any) => {
                    console.error('Error requesting permission:', error);
                });
        }

        const intervalId = setInterval(() => {
            if (isCounting && targetTime > 0 && !isOvertime && !isFinish) {
                setTargetTime((prevTime) => prevTime - 1);
                setIsOvertime(false)
            } else if (isCounting && isOvertime && !isFinish) {
                setTargetTime((prevTime) => prevTime + 1);
            }
        }, 1000);

        if (targetTime === 0) {
            setContentIndex(1);
            setIsOvertime(true)
        }

        return () => {
            clearInterval(intervalId);
            window.removeEventListener('deviceorientation', handleOrientationChange);
        };
    }, [targetTime, isCounting, beta, isOvertime, contentIndex, isFinish]);

    useEffect(() => {
        let countdownInterval: NodeJS.Timeout;

        if (!isCounting && contentIndex !== 0) {
            countdownInterval = setInterval(() => {
                if (countdown > 0) {
                    setCountdown((prevCountdown) => prevCountdown - 1);
                }
                else {
                    setIsFinish(true);
                    if (isOvertime) {
                        setContentIndex(3); 
                    } else {
                        setContentIndex(2);
                    }
                    
                }
            }, 1000);

            return () => {
                clearInterval(countdownInterval);
            };
        } else {
            setCountdown(10)
        }
    }, [isCounting, countdown, contentIndex, isOvertime]);

    useEffect(() => {
        if (isFinish) {
            if (isOvertime) {
                totalTime = initTime + Math.abs(targetTime)
            } else {
                totalTime = initTime - Math.abs(targetTime)
            }
        }
    }, [initTime, isFinish, isOvertime, targetTime]);

    return (
        <div id="cooking">
            {contentIndex === 3 && <span className="content" style={{marginTop: '3rem'}}>You have been working hard for</span>}
            {!isFinish && <span className="content-big">
                {isOvertime ? '+' : ''}{formatTime(Math.abs(targetTime))}
            </span>}

            {isFinish && <span className="content-big" style={!isOvertime ? { color: '#D0694B' } : {}}>
                {!isOvertime ? 'Give up' : formatTime(totalTime)}
            </span>}

            <span className="content" dangerouslySetInnerHTML={{ __html: contentList[contentIndex].replace(/\n/g, '<br />') }}></span>
            <span className="content-give-up">
            {!isCounting && contentIndex !== 0 && !isFinish
                ? isOvertime
                ? 'Continue?'
                : 'Give up?'
                : <br />}
            </span>
            {contentIndex !== 3 && <div className="cooking-img">
                {contentIndex === 0 && 
                <object type="image/svg+xml" data={Mushrooms} aria-label="Mushrooms" className="cooking-ingredient">
                    <img src={Mushrooms} alt="" />
                </object>}
                <img
                    className="cooking-pot"
                    src={Pot}
                    alt=""
                    style={
                    !isOvertime && contentIndex !== 0
                        ? { filter: 'grayscale(100%)', opacity: '0.5' }
                        : {}
                    }
                />
                {!isCounting && contentIndex !== 0 && !isFinish && <span className="cooking-timer">{countdown}</span>}
            </div>}
            {contentIndex === 3 && <div className='cooking-img'>
                <object type="image/svg+xml" data={Mushrooms} aria-label="Mushrooms"  className="cooking-big-ingredient">
                    <img src={Mushrooms} alt="" />
                </object>
                <img className="cooking-star1" src={Star} alt="" />
                <img className="cooking-star2" src={Star} alt="" />
                <img className="cooking-star3" src={Star} alt="" />
            </div>}
            {!isFinish && <span className="content" style={{ color: '#D0694B' }}>
                Turn the phone over<br />
                to start cooking
            </span>}
            {isFinish && <span className="content">
                Let’s take a photo and<br />
                make a record
            </span>}
            {isOvertime && !isFinish && <div className="done-btn"
                onClick={() => { setIsFinish(true); setIsCounting(false); setContentIndex(3); }}>
                    DONE
            </div>}
            {isFinish && <div onClick={() => {sendParams()}} className="done-btn">CAMERA</div>}
        </div>
    );
};

export default CookingPage;
