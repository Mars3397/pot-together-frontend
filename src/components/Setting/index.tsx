import { useParams } from "react-router-dom"
import ChefCat from 'assets/chef-cat.svg';
import HeaderWithBack from "components/CommonComponents/HeaderWithBack"
import { ReactComponent as Line } from "assets/line.svg"
import QRCode from "react-qr-code";
import "./Setting.css"

const Setting = () => {
    const { roomId } = useParams()
    let url:string
    // check if roomId is valid
    if (roomId == "undefined") {
        console.log("roomId is undefined")
        url = "https://pot-together.vercel.app/"
    } else {
        url = "https://pot-together.vercel.app/room/" + roomId
    }
    const copyLink = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url)
              .then(() => {
                alert('Text successfully copied to clipboard');
              })
              .catch((error) => {
                alert('Error copying text to clipboard: ' + error.message);
              });
          } else {
            console.error('Clipboard API is not supported in this browser.');
          }        
    }
    const shareLink = () => {
        if (navigator.share) {
            navigator
              .share({
                title: "Join Our Room!",
                url: url,
              })
              .then(() => alert("Successful share"))
              .catch((error) => alert("Error sharing"));
          } else {
            alert("Web Share API not supported in your browser");
          }
    }

    return (
        <div id="setting">
            <HeaderWithBack title="Setting" />
            <Line />
            <div className="invite-title">INVITE</div>
            <div className="QR-code">
                <QRCode
                    xlinkTitle="Join Our Room!"
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