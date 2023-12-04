import { useParams } from 'react-router-dom'
import Header from 'components/CommonComponents/Header'
import IngredientsList from 'components/CommonComponents/IngredientsList'
import TimeProgress from '../CommonComponents/TimeProgress'
import Members from './Members'
import './Room.css'

const Room = () => {
    const { roomId } = useParams()

    return (
        <div id="room">
            {/* Room name should be retrived from API data (handle later) */}
            <Header title={String(roomId)} /> 
            <div className='content'>
                <Members />
                <TimeProgress 
                    title="Total Cooking Duration " 
                    duration={170}
                    target={200}
                />
                <IngredientsList title="Now Cooking..." />
                <IngredientsList title="Done!" />

                {/* <p>content</p> */}
            </div>
        </div>
    )
}

export default Room