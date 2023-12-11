import { useParams } from "react-router-dom"
import HeaderWithBack from "components/CommonComponents/HeaderWithBack"
import { ReactComponent as Line } from "assets/line.svg"
import "./Setting.css"

const Setting = () => {
    const { roomId } = useParams()

    return (
        <div id="setting">
            <HeaderWithBack title="Setting" />
            <Line />
            <span>Invitation for room {roomId}</span>
        </div>
    )
}

export default Setting