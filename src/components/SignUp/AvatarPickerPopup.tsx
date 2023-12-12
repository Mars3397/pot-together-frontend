import CloseIcon from '@mui/icons-material/Close';
import './SignUp.css';

interface AvatarPickerPopupProps {
    setShowPopup: (value: boolean) => void;
    chooseAvatar: (value: number) => void;
    images: string[];
}

const AvatarPickerPopup = (props: AvatarPickerPopupProps) => {
    const { setShowPopup, chooseAvatar, images } = props;
    return (
        <div className="avatar-picker-popup">
            <CloseIcon className="close-button" onClick={() => { setShowPopup(false) }} />
            <div className="popup-title-box">
                <div className="popup-title-text">Choose Your Avatar!</div>
            </div>
            <div className="icon-container">
                {images.map((image, index) => (
                    <img key={index} src={image} onClick={() => chooseAvatar(index)} className="avatar-icon" alt="" />
                ))}
            </div>
        </div>
    )
}

export default AvatarPickerPopup;
