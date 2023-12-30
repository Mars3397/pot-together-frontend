import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Mushrooms from 'assets/Mushrooms.svg';
import Unlock from 'assets/Unlock.svg'
import './TimeProgress.css'


interface TimeProgressProps {
    title: string,
    duration: number,
    target: number
}

function formatDuration(duration: number) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function TimeProgress(props: TimeProgressProps) {
    const { title, duration, target } = props
    const progress = (duration / target) * 100
    const formatTime= formatDuration(duration)
    return (
        <div className='time-progress'>
            <div className='progress-during'>
                <span className='progress-title'>
                    <span>{title}</span>
                    <span style={{ color: '#EF7754' }}>&nbsp;{formatTime}</span>
                </span>
                <div className='progress-container'>
                    <Box sx={{ width: '100%' }} className='progress-content'>
                        <LinearProgress className='progress-bar' variant="determinate" value={progress} />
                        <span className='progress-num'>{`${Math.round(progress)}%`}</span>
                    </Box>
                </div>
            </div>
            <div className='progress-ingredient'>
                <div className='progress-ingredient-unlock'>
                    <object type="image/svg+xml" data={Unlock} aria-label="Unlock" style={{ height: '.75rem' }}>
                        <img src={Unlock} alt="Unlock" />
                    </object>
                    <span>&nbsp;30:00</span>
                </div>
                <object type="image/svg+xml" data={Mushrooms} aria-label="Ingredient" style={{ width:35, filter: 'grayscale(100%)' }}>
                        <img src={Mushrooms} alt="Ingredient" />
                </object>
            </div>
        </div>
    );
}
export default TimeProgress