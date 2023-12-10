import { Link, useParams } from "react-router-dom"
// import { useParams } from 'react-router-dom'
import Mushrooms from 'assets/Mushrooms.svg'

import './Choose.css'

interface IngredientOptionsProps {
    groupId: number
}

const IngredientColor = ["#BABEF4", "#FFCDBE", "#D2D000"]
const TextColor = ["#7F84C5", "#D0694B", "#7D7D2D"]
const IngredientTimer = ["30 min", "1 hr", "1 hr 30 min"]

const IngredientOptions = (props: IngredientOptionsProps) => {
    const { roomId } = useParams()
    const { groupId } = props

    const containerStyle = {
        borderColor: IngredientColor[groupId],
    };

    const textStyle = {
        color: TextColor[groupId],
    };

    return (
        <div id="ingredients" style={containerStyle}>
            <span className="ingredients-text" style={textStyle}>
                    {IngredientTimer[groupId]}
            </span>
            <div className="ingredients-content">
                <Link className="ingredients-item" to={`/room/${roomId}/cooking`}>
                    <img src={Mushrooms} alt="Mushrooms" className="ingredients-item"/>
                </Link>
                <Link className="ingredients-item" to={`/room/${roomId}/cooking`}>
                    <img src={Mushrooms} alt="Mushrooms" className="ingredients-item"/>
                </Link>
                <Link className="ingredients-item" to={`/room/${roomId}/cooking`}>
                    <img src={Mushrooms} alt="Mushrooms" className="ingredients-item"/>
                </Link>
                <Link className="ingredients-item" to={`/room/${roomId}/cooking`}>
                    <img src={Mushrooms} alt="Mushrooms" className="ingredients-item"/>
                </Link>
                <Link className="ingredients-item" to={`/room/${roomId}/cooking`}>
                    <img src={Mushrooms} alt="Mushrooms" className="ingredients-item"/>
                </Link>
            </div>
        </div>
    )
}

export default IngredientOptions