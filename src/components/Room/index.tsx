import { useParams } from 'react-router-dom'
import Header from 'components/CommonComponents/Header'
import IngredientsList from 'components/CommonComponents/IngredientsList'
import TimeProgress from '../CommonComponents/TimeProgress/TimeProgress'
import Members from './Members'
import GroupAnalysis from './GroupAnalysis'
import BottomMenu from './BottomMenu'
import { useAllUserRooms } from 'hooks/useRoom'
import CircularProgress from '@mui/material/CircularProgress';
import './Room.css'

const Room = () => {
    const { roomId } = useParams()
    const {
        data: roomData,
    } = useAllUserRooms()

    return (
        <div id="room">
            {roomData === undefined ? (
                <CircularProgress sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '45%',
                    transform: 'translate(-50%, -50%)'
                }} />
            ) : (
                <>
                    <Header title={String(roomId)} roomData={roomData.data} />
                    <div className='content'>
                        <Members />
                        <GroupAnalysis duration={100} targetYear={2023} targetMonth={1} targetDay={2} />
                        <TimeProgress
                            title="Total Cooking Duration "
                            duration={92}
                            target={200}
                        />
                        <IngredientsList title="Now Cooking..." />
                        <IngredientsList title="Done!" />
                        <div id='dish-up-btn'>
                            DISH UP
                        </div>
                    </div>
                    <BottomMenu />
                </>
            )}
        </div>
    )
}

export default Room