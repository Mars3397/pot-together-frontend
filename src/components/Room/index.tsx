import { useParams } from 'react-router-dom'
import Header from 'components/CommonComponents/Header'
import IngredientsList from 'components/CommonComponents/IngredientsList'
import TimeProgress from '../CommonComponents/TimeProgress'
import Members from './Members'
import GroupAnalysis from './GroupAnalysis'
import './Room.css'

const Room = () => {
    const { roomId } = useParams()

    return (
        <div id="room">
            {/* Room name should be retrived from API data (handle later) */}
            <Header title={String(roomId)} /> 
            <div className='content'>
                <Members />
                <GroupAnalysis duration={100} targetYear={2023} targetMonth={1} targetDay={2}/>
                <TimeProgress 
                    title="Total Cooking Duration " 
                    duration={92}
                    target={200}
                />
                <IngredientsList title="Now Cooking..." />
                <IngredientsList title="Done!" />
            </div>
        </div>
    )
}

export default Room