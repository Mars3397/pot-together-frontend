import { useParams } from "react-router-dom"
import ChefCat from 'assets/chef-cat.svg';
import HeaderWithBack from "components/CommonComponents/HeaderWithBack"
import { ReactComponent as Line } from "assets/line.svg"
import QRCode from "react-qr-code";
import "./Setting.css"

const Setting = () => {
    // const { roomId } = useParams()
    // set const value url
    const url = "https://pot-together.vercel.app/"

    const copyLink = () => {
        navigator.clipboard.writeText(url)
    }
    const shareLink = () => {
        // todo
    }

    return (
        <div id="setting">
            <HeaderWithBack title="Setting" />
            <Line />
            <div className="invite-title">INVITE</div>
            <div className="QR-code">
                <QRCode
                    xlinkTitle="Join Room"
                    value={url}
                    bgColor="rgba(0, 0, 0, 0)"
                    fgColor="#000"
                    size={200}
                />
            </div>
            <div className="link-container">
                <a className= "link" href={url}>{url}</a>
            </div>
            <div className="button-container">
                <button onClick={copyLink} className="btn">COPY</button>
                <button onClick={shareLink} className="btn">SHARE</button>
            </div>
            <img id="chef-cat" src={ChefCat} alt="chef-cat"/>
            <button className="leave-btn">LEAVE</button>

        </div>
    )
}

export default Setting