import Header from 'components/CommonComponents/Header'
import Calendar from './Calender'
import IngredientsList from 'components/CommonComponents/IngredientsList'
import Analysis from './Analysis'
import { useGetOverview } from 'hooks/useUser'
import { useAllUserRooms } from 'hooks/useRoom'
import CircularProgress from '@mui/material/CircularProgress';
import './Overview.css'

const Overview = () => {
    const {
        data: overviewData,
    } = useGetOverview()
    const {
        data: roomData,
    } = useAllUserRooms()

    return (
        <div id="overview">
            {overviewData === undefined || roomData === undefined ? (
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
                        <IngredientsList title="Today I Cooked ..." />
                        <Analysis />
                    </div>
                </>
            )}
        </div>
    )
}

export default Overview
