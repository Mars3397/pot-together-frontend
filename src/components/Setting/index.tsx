import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import ChefCat from 'assets/chef-cat.svg';
import HeaderWithBack from "components/CommonComponents/HeaderWithBack"
import { ReactComponent as Line } from "assets/line.svg"
import QRCode from "react-qr-code";
import "./Setting.css"
import { height } from '@mui/system';

const Setting = () => {
    const { roomId } = useParams()
    const [modalVisible, setModalVisible] = useState(false);
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
                setModalVisible(true);
                setTimeout(() => {
                  setModalVisible(false);
                }, 500);
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
            <object type="image/svg+xml" data={ChefCat} aria-label="ChefCat" id="chef-cat" style={{height: '12rem'}}></object>
            <button className="leave-btn">LEAVE</button>
            {modalVisible && (
              <div>
                <div className="overlay"></div>
                <div className="modal">
                  {/* Modal 內容 */}
                  <p>Copied!</p>
                </div>
              </div>
            )}
        </div>
    )
}

export default Setting