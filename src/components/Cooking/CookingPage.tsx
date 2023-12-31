import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom"
import { formatTime } from '../../utils';
import ReactAudioPlayer from 'react-audio-player';
import IconButton from '@mui/material/IconButton'
import Pot from 'assets/RadPot.svg';
import Mushrooms from 'assets/Mushrooms.svg'
import Tomato from 'assets/Tomato.svg'
import Star from 'assets/Star.svg';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import './Cooking.css';
const sounds = require("../../assets/sounds/pot.mp3");
// const initTime = 5; // HINT: initTime (sec)

const CookingPage = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const initTime: number = (location.state.initTime || 0);
    const foodID: number = (location.state.foodID || 0);
    const { roomId } = useParams()
    const [musicPlayer, setMusicPlayer] = useState(false);
    const [targetTime, setTargetTime] = useState(initTime);
    const [contentIndex, setContentIndex] = useState(0);
    const [isFinish, setIsFinish] = useState(false);
    const [isOvertime, setIsOvertime] = useState(false);
    const [totalTime, setTotalTime] = useState(0);
    const [beta, setBeta] = useState(90)
    const [isCounting, setIsCounting] = useState(true);
    const [countdown, setCountdown] = useState(10);

    const audioPlayerRef = useRef(null);
    const handlePause = () => {
        const audioElement = (audioPlayerRef.current as any)?.audioEl.current;
        if (audioElement && audioElement.play) {
            audioElement.pause();
        }
    };

    const handlePlay = () => {
        const audioElement = (audioPlayerRef.current as any)?.audioEl.current;
        if (audioElement && audioElement.paused) {
            audioElement.play();
        }
    };
    
    useEffect(() => {
        const audioElement = (audioPlayerRef.current as any)?.audioEl.current;
        if (musicPlayer && audioElement) {
            audioElement.play();

        } else {
            audioElement.pause();
        }
    },[musicPlayer])

    const IngredientList = [["Mushrooms", Mushrooms], ["Tomato", Tomato]]
    const ingredient = IngredientList[foodID][0];
    const ingredientSvg = IngredientList[foodID][1];
    const contentList = [
        `You add a ${ingredient} to the pot!`,
        'The timer has been paused.',
        'The ingredients are too raw...',
        `Good Job!\nYour ${ingredient} is cooked!`
    ];
    const sendParams = () => {
        navigate(`/room/${roomId}/CameraCapture`, { state: { totalTime: totalTime, foodID: foodID }})
    }
    useEffect(() => {
        const requestPermission = (DeviceOrientationEvent as any).requestPermission;
        
        const handleOrientationChange = (event: DeviceOrientationEvent) => {
            if (!isFinish) {
                setBeta(Math.round(event.beta || 0));

                if ((beta >= 165 && beta <= 180) || (beta <= -165 && beta >= -180)) {
                    if (musicPlayer) {
                        handlePlay()
                    }
                    setIsCounting(true);
                    if (contentIndex === 0) {
                        setContentIndex(1)
                    }
                } else {
                    if (musicPlayer) {
                        handlePause()
                    }
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
                setTotalTime(initTime + Math.abs(targetTime))
            } else {
                setTotalTime(initTime - Math.abs(targetTime))
            }
            console.log("target time", isOvertime, formatTime(Math.abs(targetTime)))
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
                <object type="image/svg+xml" data={ingredientSvg} aria-label={ingredient} className="cooking-ingredient">
                    <img src={ingredientSvg} alt="" />
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
                <object type="image/svg+xml" data={ingredientSvg} aria-label={ingredient}  className="cooking-big-ingredient">
                    <img src={ingredientSvg} alt="" />
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
                onClick={() => { setIsFinish(true); setIsCounting(false); setContentIndex(3); setMusicPlayer(false)}}>
                    DONE
            </div>}
            {isFinish && <div onClick={() => {sendParams()}} className="done-btn">CAMERA</div>}
            <ReactAudioPlayer
                ref={audioPlayerRef}
                src={sounds}
                autoPlay
                controls
                loop
                style={{ display: 'none' }}
            />
            {!isFinish && <IconButton aria-label="setting" onClick={()=>{setMusicPlayer((prev) => !prev)}}>
            {musicPlayer ? (
                <VolumeUpIcon
                fontSize="large"
                sx={{
                    color: '#969696',
                    stroke: '#969696',
                    strokeWidth: 1,
                }}
                />
            ) : (
                <VolumeOffIcon
                fontSize="large"
                sx={{
                    color: '#969696',
                    stroke: '#969696',
                    strokeWidth: 1,
                }}
                />
            )}
            </IconButton>}
        </div>
    );
};

export default CookingPage;
