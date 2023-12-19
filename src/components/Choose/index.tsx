// import { useParams } from 'react-router-dom'
// import { Link } from "react-router-dom"
import HeaderWithBack from 'components/CommonComponents/HeaderWithBack'
import TimeProgress from 'components/CommonComponents/TimeProgress/TimeProgress'
import IngredientOptions from './IngredientOptions'
import './Choose.css'

const Choose = () => {
    return (
        <div id="choose">
            {/* Room name should be retrived from API data (handle later) */}
            <HeaderWithBack title="Select Ingredients" /> 
            <div className='content'>
                <TimeProgress 
                    title="Total Cooking Duration " 
                    duration={92}
                    target={200}
                />
                <IngredientOptions groupId={0} initTime={30}/>
                <IngredientOptions groupId={1} initTime={60}/>
                <IngredientOptions groupId={2} initTime={90}/>

            </div>
        </div>
    )
}

export default Choose