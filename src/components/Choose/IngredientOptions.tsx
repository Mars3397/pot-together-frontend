import { useParams, useNavigate } from "react-router-dom"
import Mushrooms from 'assets/Mushrooms.svg'

import './Choose.css'

interface IngredientOptionsProps {
    groupId: number,
    initTime: number
}

const IngredientColor = ["#BABEF4", "#FFCDBE", "#D2D000"]
const TextColor = ["#7F84C5", "#D0694B", "#7D7D2D"]
const IngredientTimer = ["30 min", "1 hr", "1 hr 30 min"]

const IngredientOptions = (props: IngredientOptionsProps) => {
    const { roomId } = useParams()
    const { groupId, initTime } = props
    const navigate = useNavigate()
    const sendParams = (initTime: number) => {
        initTime = initTime * 60;
        navigate(`/room/${roomId}/cooking/in-progress`, { state: {initTime}});
    }

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
                <div className="ingredients-item" onClick={() => {sendParams(initTime)}}>
                    <img src={Mushrooms} alt="Mushrooms" className="ingredients-item"/>
                </div>
                <div className="ingredients-item" onClick={() => {sendParams(initTime)}}>
                    <img src={Mushrooms} alt="Mushrooms" className="ingredients-item"/>
                </div>
                <div className="ingredients-item" onClick={() => {sendParams(initTime)}}>
                    <img src={Mushrooms} alt="Mushrooms" className="ingredients-item"/>
                </div>
                <div className="ingredients-item" onClick={() => {sendParams(initTime)}}>
                    <img src={Mushrooms} alt="Mushrooms" className="ingredients-item"/>
                </div>
                <div className="ingredients-item" onClick={() => {sendParams(initTime)}}>
                    <img src={Mushrooms} alt="Mushrooms" className="ingredients-item"/>
                </div>
            </div>
        </div>
    )
}

export default IngredientOptions