import Header from 'components/CommonComponents/Header'
import Calendar from './Calender'
import IngredientsList from 'components/CommonComponents/IngredientsList'
import Analysis from './Analysis'
import { useGetOverview } from 'hooks/useUser'
import { useAllUserRooms } from 'hooks/useRoom'
import { useAllRecords } from 'hooks/useRecord'
import { Ingredient } from 'api'
import CircularProgress from '@mui/material/CircularProgress';
import './Overview.css'

const Overview = () => {
    const {
        data: overviewData,
    } = useGetOverview()
    const {
        data: roomData,
    } = useAllUserRooms()
    const {
        data: recordData,
    } = useAllRecords()

    const filterTodayCookedRecord = (records: Ingredient[]) => {
        if (records === undefined || records === null) return []
        const today = new Date().toLocaleDateString()
        return records.filter(record =>
            new Date(record.finishTime * 1000).toLocaleDateString() === today &&
            record.status === 1
        )
    }

    return (
        <div id="overview">
            {overviewData === undefined || roomData === undefined || recordData === undefined ? (
                <CircularProgress sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '45%',
                    transform: 'translate(-50%, -50%)'
                }} />
            ) : (
                <>
                    <Header isOverview title='Overview' roomData={roomData.data} />
                    <div className='content'>
                        <Calendar />
                        <IngredientsList
                            title="Today I Cooked ..."
                            ingredients={filterTodayCookedRecord(recordData.data)}
                        />
                        <Analysis />
                    </div>
                </>
            )}
        </div>
    )
}

export default Overview
