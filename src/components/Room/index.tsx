import { useParams } from 'react-router-dom'
import Header from 'components/CommonComponents/Header'
import IngredientsList from 'components/CommonComponents/IngredientsList'
import TimeProgress from '../CommonComponents/TimeProgress/TimeProgress'
import Members from './Members'
import GroupAnalysis from './GroupAnalysis'
import BottomMenu from './BottomMenu'
import { useAllUserRooms } from 'hooks/useRoom'
import { CircularProgress } from '@mui/material'
import './Room.css'
// import { Link } from 'react-router-dom';

const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();

const Room = () => {
    const { roomId } = useParams()
    const {
        data: roomData,
    } = useAllUserRooms()

    var targetRoom;
    if (roomData && roomData.data) {
        targetRoom = roomData.data.find(room => room.roomID === Number(roomId));
    } 

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
                    <Header title={String(targetRoom?.name)} roomData={roomData.data} />
                    <div className='content'>
                        <Members roomID={targetRoom?.roomID ?? 0} />
                        <GroupAnalysis duration={100} targetYear={2023} targetMonth={month} targetDay={day} />
                        <TimeProgress
                            title="Total Cooking Duration "
                            duration={92}
                            target={200}
                        />
                        <IngredientsList title="Now Cooking..." />
                        <IngredientsList title="Done!" />
                        {/* <div id='dish-up-btn' onClick={}>
                            DISH UP
                        </div> */}
                    </div>
                    <BottomMenu />
                </>
            )}
        </div>
    )
}

export default Room