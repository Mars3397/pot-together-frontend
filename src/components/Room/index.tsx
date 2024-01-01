import { useParams } from 'react-router-dom'
import Header from 'components/CommonComponents/Header'
import IngredientsList from 'components/CommonComponents/IngredientsList'
import TimeProgress from '../CommonComponents/TimeProgress/TimeProgress'
import Members from './Members'
import GroupAnalysis from './GroupAnalysis'
import BottomMenu from './BottomMenu'
import { useAllUserRooms, useGetRoomInfo } from 'hooks/useRoom'
import { CircularProgress } from '@mui/material'
import { useAllRoomRecords } from 'hooks/useRecord'
import { Ingredient } from 'api'
import './Room.css'

const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();

const Room = () => {
    const { roomId } = useParams()
    const {
        data: roomData,
    } = useAllUserRooms()

    const {
        data: roomInfo,
    } = useGetRoomInfo(Number(roomId))

    var targetRoom;
    if (roomData && roomData.data) {
        targetRoom = roomData.data.find(room => room.roomID === Number(roomId));
    } 

    const {
        data: recordData,
    } = useAllRoomRecords(Number(roomId))

    const filterNowCookingRecord = (records: Ingredient[]) => {
        if (records === undefined || records === null) return []
        return records.filter(record =>
            record.status === 0
        )
    }

    const filterDoneCookingRecord = (records: Ingredient[]) => {
        if (records === undefined || records === null) return []
        return records.filter(record =>
            record.status === 1
        )
    }
    
    return (
        <div id="room">
            {roomData === undefined || recordData === undefined || roomInfo === undefined ? (
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
                        <Members memberInfo={roomInfo.data.members} />
                        <GroupAnalysis duration={100} targetYear={2023} targetMonth={month} targetDay={day} />
                        <TimeProgress
                            title="Total Cooking Duration "
                            duration={92}
                            target={200}
                        />
                        <IngredientsList
                            title="Now Cooking..."
                            ingredients={filterNowCookingRecord(recordData.data)}
                        />
                        <IngredientsList
                            title="Done!"
                            ingredients={filterDoneCookingRecord(recordData.data)}
                        />
                    </div>
                    <BottomMenu />
                </>
            )}
        </div>
    )
}

export default Room