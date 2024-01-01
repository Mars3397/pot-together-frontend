import { Link } from "react-router-dom"
import AnalysisBtn from 'assets/AnalysisBtn.svg'
import TableBtn from 'assets/TableBtn.svg'
import StartBtn from 'assets/StartBtn.svg'
import './Room.css'

function BottomMenu() {
    return (
        <div id='bottom-menu'>
            <Link  to="/analysis">
                <img src={AnalysisBtn} alt="AnalysisBtn" className="bottom-menu-item"/>
            </Link>
            <Link to="./choose">
                <img src={StartBtn} alt="StartBtn" className="bottom-menu-start"/>
            </Link>
            <Link to="/">
                <img src={TableBtn} alt="TableBtn" className="bottom-menu-item"/>
            </Link>
        </div>
    );
}

export default BottomMenu