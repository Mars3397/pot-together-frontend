import LinearProgress from '@mui/material/LinearProgress';
import { ReactComponent as Mushrooms } from 'assets/Mushrooms.svg'
import './Common.css'


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
                    <div className='progress-content'>
                        <LinearProgress className='progress-bar' variant="determinate" value={progress} />
                        <span className='progress-num'>{`${Math.round(progress)}%`}</span>
                    </div>
                </div>
            </div>
            <div className='progress-ingredient'>
                <span>UNLOCK</span>
                <Mushrooms style={{ width:30 }} />
            </div>
        </div>
    );
}
export default TimeProgress